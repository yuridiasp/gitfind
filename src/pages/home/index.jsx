import './style.css'

import Header from '../../components/Header'
import GitLogo from '../../components/GitLogo'
import Photo from '../../components/Photo'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useState } from 'react'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [repositories, setRespositories] = useState([
    {
      title: 'fisiotheapp-challenge',
      description: 'Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.'
    },
    {
      title: 'fisiotheapp-challenge',
      description: 'Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.'
    },
    {
      title: 'fisiotheapp-challenge',
      description: 'Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.'
    },
  ])

  const handleBuscar = () => {
    alert("Funcionando")
  }

  return (
      <div className='app'>
        <Header />
        <main className='container'>
          <GitLogo />
          <div className='content'>
            <div className='searcher'>
              <Input />
              <Button label="Buscar" onClick={handleBuscar} />
            </div>
            <div className='info'>
              <Photo />
              <div className='personal-data'>
                <div className='user-name'>
                  <h2>Yuri Dias</h2>
                  <a href='#' target="_blank">@yuridiasp</a>
                </div>
                <p>Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.</p>
              </div>
            </div>
            <hr />
            <div className='repositories'>
              <h1>Repositórios </h1>
                {repositories.map(({ title, description }, index) => (
                  <>
                    <div className='repository'>
                      <a href="fisiotheapp-challenge" target="_blank">{title}</a>
                      <p>{description}</p>
                      {index < repositories.length - 1 && <hr />}
                    </div>
                  </>
                ))}
            </div>
          </div>
        </main>
      </div>
  )
}

export default App