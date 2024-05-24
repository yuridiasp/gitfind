import './style.css'

// eslint-disable-next-line react/prop-types
function Avatar({ src }) {
  return (
    <img className='avatar' src={src} alt="Foto de perfil do usuário" />
  )
}

export default Avatar