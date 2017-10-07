import React from 'react'

export const Input = ({ field, label, type, placeholder, footer, handleChange, value, pattern, title }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <input
      id={`input-${field}`}
      type={type}
      className="form-control"
      placeholder={placeholder}
      onChange={e => handleChange(field, e.target.value)}
      value={value}
      pattern={pattern}
      title={title}
      required
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
      rows={4}
      required
    />
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)

export const Select = ({ field, label, footer, handleChange, value, dropdown }) => (
  <div className="form-group">
    <label htmlFor={`input-${field}`}>{ label }:</label>
    <select
      id={`input-${field}`}
      className="form-control"
      value={value}
      onChange={e => handleChange(field, e.target.value)}
      onBlur={e => handleChange(field, e.target.value)}
      required
    >
      <option value="" disabled>โปรดเลือก</option>
      { dropdown.map(item => {
        if (item.label && item.value) {
          return <option key={item.value} value={item.value}>{item.label}</option>
        }
        return (<option key={item} value={item} >{item}</option>)
      })}
    </select>
    { footer && <small className="form-text text-muted">{footer}</small>}
  </div>
)
