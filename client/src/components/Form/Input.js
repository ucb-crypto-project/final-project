import React from "react";

function onChange(event) {

  const { name, value } = event.target

  this.setState({
    [name]: value
  })
}

export const Input = props => {
  const { name, form, form: state } = props
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="form-control"
        value={state[name]}
        onChange={onChange.bind(form)}
        {...props}
      />
    </div>
  )
}
