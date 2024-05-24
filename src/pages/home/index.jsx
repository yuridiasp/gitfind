import './style.css'

import Header from '../../components/Header'
import GitLogo from '../../components/GitLogo'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import Input from '../../components/Input'
import ItemList from '../../components/ItemList'

import { useState } from 'react'

function App() {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [repositories, setRespositories] = useState([])

  const handleGetUserData = async () => {
    if (user.length) {
      const userData = await fetch(`https://api.github.com/users/${user}`)
      const newUser = await userData.json()
  
      if (newUser.name) {
        const { avatar_url, bio, name } = newUser
        setProfile({ avatar_url, bio, name, user })
  
        await handleGetReposData()
      }
    }
  }

  const handleGetReposData = async () => {
    const respositoriesData = await fetch(`https://api.github.com/users/${user}/repos`)
    const newRepositories = await respositoriesData.json()

    if (newRepositories.length) {
      console.log(newRepositories);
      const repos = newRepositories.map(repo => {
        const { html_url, name, description, id}  = repo
        return { html_url, name, description, id}
      })
      setRespositories(repos)
    }
  }

  return (
      <div className='app'>
        <Header />
        <main className='container'>
          <GitLogo />
          <div className='content'>
            <div className='searcher'>
              <Input name={'usuario'} value={user} onChange={event => setUser(event.target.value)} />
              <Button label="Buscar" onClick={handleGetUserData} />
            </div>
            {profile.name ? (
              <>
                <div className='info'>
                  <Avatar src={profile.avatar_url} />
                  <div className='personal-data'>
                    <div className='user-name'>
                      <h2>{profile.name}</h2>
                      <a href='#' target="_blank">@{profile.user}</a>
                    </div>
                    <p>{profile.bio}</p>
                  </div>
                </div>
                <hr />
                <div className='repositories'>
                  <h1>Repositórios </h1>
                    {repositories.map(({ html_url, name, description, id}) => (
                      <>
                        <ItemList key={id} href={html_url} title={name} description={description} />
                      </>
                    ))}
                </div>
              </>
            ) :null}
          </div>
        </main>
      </div>
  )
}

export default App