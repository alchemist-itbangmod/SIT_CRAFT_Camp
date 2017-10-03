import React from 'react'

const Input = ({ field, label, type, placeholder, footer }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <input type={type} className="form-control" id={`input-${field}`} placeholder={placeholder} />
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)

export default Input
