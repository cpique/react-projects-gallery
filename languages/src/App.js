import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Languages from './Languages'
import data from './data'

function App() {
  const [loading, setLoading] = useState(true)
  const [languages, setLanguages] = useState([])

  const removeLanguage = (id) => {
    const newLanguages = languages.filter((language) => language.id != id)
    setLanguages(newLanguages)
  }

  const fetchLanguages = async () => {
    setLoading(true)

    // Real example of HTTP call to endpoint
    // url = ''
    // const response = await fetch(url)
    // const languages = await response.json()
    try {
      setTimeout(function () {
        setLanguages(data)
        console.log(data)
        setLoading(false)
      }, 2500);
    }
    catch (err) {
      console.log(err)
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchLanguages()
  }, [])

  if (loading) {
    return (<main>
      <Loading />
    </main>)
  }

  if (languages.length === 0) {
    return (<main>
      <div className='title'>
        <h2>No languages left</h2>
        <button className='btn' onClick={fetchLanguages}>refresh</button>
      </div>
    </main>)
  }

  return <main>
    <Languages languages={languages} removeLanguage={removeLanguage}></Languages>
  </main>
}

export default App
