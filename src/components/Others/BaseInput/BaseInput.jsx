import React, { useState } from "react";

export default function BaseInput({ placeholder, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <label className="_base_input">
      <p
        className={`label
         ${props.value ? `position-top` : ``}
         ${isFocused ? `position-top` : ""}`}
      >
        {placeholder}
      </p>

      <input
        type="text"
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </label>
  );
}
