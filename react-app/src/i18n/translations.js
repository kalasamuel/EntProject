import { Children, cloneElement, isValidElement } from "react";
import { phraseBook } from "./phraseBook.js";

const phraseBookLower = Object.fromEntries(
  Object.entries(phraseBook).map(([key, value]) => [key.toLowerCase(), value]),
);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const phrasePattern = new RegExp(
  Object.keys(phraseBook)
    .sort((left, right) => right.length - left.length)
    .map((key) => {
      const expression = escapeRegExp(key);
      return /^[A-Za-z]+$/.test(key) ? `\\b${expression}\\b` : expression;
    })
    .join("|"),
  "gi",
);
const contentProps = new Set([
  "backLabel",
  "caption",
  "description",
  "eyebrow",
  "heading",
  "label",
  "meta",
  "text",
  "title",
  "visual",
]);
const contentRecordKeys = new Set([
  "description",
  "eyebrow",
  "label",
  "meta",
  "tag",
  "tags",
  "text",
  "title",
]);

export function translateText(value) {
  return value.replace(
    phrasePattern,
    (match) => phraseBook[match] ?? phraseBookLower[match.toLowerCase()] ?? match,
  );
}

function isPreserved(element, insideCourseCard) {
  if (typeof element.type !== "string") {
    return false;
  }

  const { type, props } = element;
  const classNames = (props.className ?? "").split(/\s+/);

  return (
    ["script", "style", "noscript", "svg"].includes(type) ||
    props["aria-hidden"] === true ||
    props["aria-hidden"] === "true" ||
    classNames.includes("logo") ||
    classNames.includes("course-title") ||
    props["data-course-title"] !== undefined ||
    props["data-preserve-language"] !== undefined ||
    (insideCourseCard && ["h2", "h3"].includes(type))
  );
}

function translateChildren(children, insideCourseCard) {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return translateText(child);
    }

    if (!isValidElement(child)) {
      return child;
    }

    if (isPreserved(child, insideCourseCard)) {
      return child;
    }

    const childInsideCourseCard =
      insideCourseCard || child.props["data-course-card"] !== undefined;
    const props = {};
    const isComponent = typeof child.type !== "string";

    for (const attribute of ["placeholder", "aria-label", "title", "alt"]) {
      if (typeof child.props[attribute] === "string") {
        props[attribute] = translateText(child.props[attribute]);
      }
    }

    if (isComponent) {
      for (const [name, value] of Object.entries(child.props)) {
        if (contentProps.has(name)) {
          props[name] =
            typeof value === "string"
              ? translateText(value)
              : translateChildren(value, childInsideCourseCard);
        } else if (name === "item" && value && typeof value === "object") {
          props[name] = translateContentRecord(value);
        }
      }
    }

    props.children = translateChildren(child.props.children, childInsideCourseCard);
    return cloneElement(child, props);
  });
}

function translateContentRecord(value, key) {
  if (typeof value === "string") {
    return contentRecordKeys.has(key) ? translateText(value) : value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateContentRecord(item, key));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([name, item]) => [
        name,
        translateContentRecord(item, name),
      ]),
    );
  }

  return value;
}

export function translateTree(children, language) {
  return language === "Luganda" ? translateChildren(children, false) : children;
}
