import React from "react";

export default function InvertedButton({ children, ...props }) {
  return (
    <button {...props} className="button_inverted">
      {children}
    </button>
  );
}
