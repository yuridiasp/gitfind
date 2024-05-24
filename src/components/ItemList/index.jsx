import './style.css'

// eslint-disable-next-line react/prop-types
function ItemList({ title, description, href }) {
  return (
    <div className='repository'>
        <a href={href} target="_blank">{title}</a>
        <p>{description}</p>
        <hr />
    </div>
  )
}

export default ItemList