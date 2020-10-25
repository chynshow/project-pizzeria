import React from "react"

const Button = ({ className, text, onClick, rest, children }) => {
  return (
    <button
      className={className ? `c-btn ${className}` : "c-btn"}
      onClick={onClick}
      {...rest}
    >
      {text}
      {children}
    </button>
  )
}

export default Button
