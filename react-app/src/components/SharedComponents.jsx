import { useEffect, useId, useRef, useState } from "react";

export function Button({
  href,
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...props
}) {
  const classNames = [
    variant === "icon" ? "icon-btn" : "btn",
    variant !== "icon" && `btn-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classNames} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} {...props}>
      {children}
    </button>
  );
}

export function Card({
  as: Element = "article",
  variant = "",
  className = "",
  children,
  ...props
}) {
  const classNames = ["card", variant && `card-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Element className={classNames} {...props}>
      {children}
    </Element>
  );
}

export function IconContainer({ color = "yellow", children, className = "" }) {
  return (
    <span
      className={[
        "icon-container",
        `icon-container-${color}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

export function SummaryCard({
  color = "purple",
  label,
  value,
  icon,
  className = "",
}) {
  return (
    <article
      className={[
        "summary-card",
        `summary-${color}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && <span className="summary-card__icon">{icon}</span>}
      <p>{label}</p>
      <h2>{value}</h2>
    </article>
  );
}

export function FormField({
  id,
  label,
  className = "form-control",
  ...props
}) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className={className} {...props} />
    </div>
  );
}

export function SelectField({
  id,
  label,
  options,
  className = "select-control",
  ...props
}) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select id={id} className={className} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function SearchControl({ label, className = "", ...props }) {
  return (
    <input
      className={["search-control", className].filter(Boolean).join(" ")}
      type="search"
      aria-label={label}
      placeholder={label}
      {...props}
    />
  );
}

export function Tabs({ items, defaultValue, label = "Content tabs" }) {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue ?? items[0]?.value,
  );
  const tabsId = useId();
  const tabRefs = useRef([]);
  const selectedItem = items.find((item) => item.value === selectedValue);

  if (!selectedItem) {
    throw new Error("Tabs require a valid defaultValue or at least one item.");
  }

  return (
    <div className="tabs-component">
      <div className="tabs" role="tablist" aria-label={label}>
        {items.map((item) => {
          const selected = item.value === selectedValue;
          const tabId = `${tabsId}-tab-${item.value}`;
          const panelId = `${tabsId}-panel-${item.value}`;
          const itemIndex = items.indexOf(item);

          return (
            <button
              key={item.value}
              className="tab"
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              ref={(element) => {
                tabRefs.current[itemIndex] = element;
              }}
              tabIndex={selected ? 0 : -1}
              onClick={() => setSelectedValue(item.value)}
              onKeyDown={(event) => {
                let nextIndex;

                if (event.key === "ArrowRight") {
                  nextIndex = (itemIndex + 1) % items.length;
                } else if (event.key === "ArrowLeft") {
                  nextIndex = (itemIndex - 1 + items.length) % items.length;
                } else if (event.key === "Home") {
                  nextIndex = 0;
                } else if (event.key === "End") {
                  nextIndex = items.length - 1;
                } else {
                  return;
                }

                event.preventDefault();
                setSelectedValue(items[nextIndex].value);
                tabRefs.current[nextIndex]?.focus();
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        id={`${tabsId}-panel-${selectedItem.value}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${selectedItem.value}`}
        className="tabs-component__panel"
      >
        {selectedItem.content}
      </div>
    </div>
  );
}

export function DataTable({ columns, rows, caption }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        {caption && <caption className="visually-hidden">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProgressBar({ value, label }) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedValue}
    >
      <div className="progress-value" style={{ width: `${clampedValue}%` }} />
    </div>
  );
}

export function Badge({ children, color = "purple", className = "" }) {
  return (
    <span
      className={[
        "badge",
        `badge-${color}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

export function Modal({ open, title, onClose, children }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal__heading">
          <h2 id={titleId}>{title}</h2>
          <button
            ref={closeButtonRef}
            className="icon-btn"
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

export function DecorativeGraphics() {
  return (
    <div className="phase2-decorative-graphics" aria-hidden="true">
      <span className="dot-floating dot-purple" />
      <span className="dot-floating dot-yellow" />
      <span className="dot-floating dot-cyan" />
    </div>
  );
}

export function Tag({ children, className = "" }) {
  return (
    <span className={["tag", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
