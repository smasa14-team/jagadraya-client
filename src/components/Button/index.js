import React from "react";
import { useHistory } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import "../../assets/styles/components/_button.scss";

export const Button = ({
  id,
  children,
  disabled = false,
  width,
  block,
  bold,
  active,
  to = undefined,
  onClick = undefined,
  theme,
  className,
  icon = false,
  append = false,
  dropdown = false,
  style,
}) => {
  const history = useHistory();

  const themeStyle = (theme) => {
    let classname = "btn ";
    switch (theme) {
      case "danger":
        classname += "btn-danger ";
        break;
      case "primary":
        classname += "btn-primary ";
        break;
      case "secondary":
        classname += "btn-secondary ";
        break;
      case "link":
        classname += "btn-link ";
        break;
      case "pivot-stack":
        classname += "btn-pivot-stack ";
        break;
      default:
        break;
    }
    if (className) {
      classname += `${className} `;
    }
    if (active) {
      classname += "active ";
    }
    return classname;
  };

  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick ? onClick : () => (to ? history.push(to) : null)}
      style={{ width: block ? "100%" : width, margin: block ? 0 : null, ...style }}
      className={themeStyle(theme)}>
      {icon ? <span className="prepend">{icon}</span> : null}
      <span style={{ fontWeight: bold ? 600 : 400 }} className="text">
        {children}
      </span>
      {dropdown ? (
        <span className="dropdown">
          <BsChevronDown strokeWidth={1} />
        </span>
      ) : null}
      {append ? <span className="append">{append}</span> : null}
    </button>
  );
};
