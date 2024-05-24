import './style.css'

// eslint-disable-next-line react/prop-types
function Input({ name, value, onChange }) {
  return (
    <input type='search' name={name} placeholder='@usuario' value={value} onChange={onChange} />
  )
}

export default Input