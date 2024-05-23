import './style.css'

// eslint-disable-next-line react/prop-types
function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button