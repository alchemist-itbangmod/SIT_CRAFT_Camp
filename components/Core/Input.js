import React from 'react'

export const Input = ({ field, label, type, placeholder, footer, handleChange, value }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <input
      id={`input-${field}`}
      type={type}
      className="form-control"
      placeholder={placeholder}
      onChange={e => handleChange(field, e.target.value)}
      value={value}
    />
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)

export const Textarea = ({ field, label, placeholder, footer, handleChange, value }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <textarea
      id={`input-${field}`}
      className="form-control"
      placeholder={placeholder}
      onChange={e => handleChange(field, e.target.value)}
      value={value}
    />
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)

export const Select = ({ field, label, placeholder, footer, handleChange, value }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <Textarea className="form-control" id={`input-${field}`} placeholder={placeholder} />
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)
