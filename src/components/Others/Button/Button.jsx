import React from "react";
import { NavLink } from "react-router-dom";
import { arrow } from "../../../assets/icons";

export default function Button({
  children,
  semanticType = "button",
  iconPosition = "right",
  small,
  icon,
  to = "/",
}) {
  const svgSrc = icon || arrow;
  const buttonContentProps = { svgSrc, iconPosition };

  return (
    <>
      {semanticType === "button" && (
        <button
          className={`button_default${small ? ` small` : ``}`}
          data-icon-position={iconPosition}
        >
          <ButtonContent {...buttonContentProps}>{children}</ButtonContent>
        </button>
      )}
      {semanticType === "anchor" && (
        <a
          href={to}
          className="button_default"
          data-icon-position={iconPosition}
        >
          <ButtonContent {...buttonContentProps}>{children}</ButtonContent>
        </a>
      )}
      {semanticType === "navLink" && (
        <NavLink
          to={to}
          className="button_default"
          data-icon-position={iconPosition}
        >
          <ButtonContent {...buttonContentProps}>{children}</ButtonContent>
        </NavLink>
      )}
    </>
  );
}

function ButtonContent({ children, svgSrc }) {
  return (
    <>
      {children}
      <ButtonIcon svgSrc={svgSrc} />
    </>
  );
}

function ButtonIcon({ svgSrc }) {
  return <img src={svgSrc} alt="" srcSet="" className="icon _right_icon" />;
}
