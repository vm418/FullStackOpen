import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import personService from './services/persons'

const Persons = ({search,persons, onDelete}) => {

  if(search === ""){
    return(
      <ul>
        {persons.map(p => <li key={p.id} > {p.name} {p.number}
        <button onClick={() => onDelete(p.id)}> DELETE</button>
        </li>)}
      </ul>
    )
  }else{
    const arr = persons.filter(person =>  person.name.toUpperCase().includes(search.toUpperCase()))
    if(arr.length === 0){
      return <div>No matched</div>
    }else{
      return(
        <ul>
        {arr.map(p => <li key={p.id} > {p.name} {p.number}
        <button onClick={() => onDelete(p.id)}> DELETE</button>
        </li>)}
      </ul>
      )
    }
  }
  
}

const PersonForm = ({onSubmit,onInput1,onInput2,newName,newNumber}) => {
  return(
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={onInput1}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={onInput2}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Filter = ({search,onInput3}) => {
  return <div>filter shown with <input value={search} onChange={onInput3} /></div>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])



  const onInput1  = (event) => {
    setNewName(event.target.value)
  }

  const onInput2 = (event) => {
    setNewNumber(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    
    const person = {name: newName , number:newNumber}
    if (persons.find(existingPerson => existingPerson.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
    personService
    .create(person)
    .then(returnPerson => {
      setPersons(persons.concat(returnPerson))
      setNewName('')
      setNewNumber('')
    })
    
    }
  }

  const onInput3 = (event) => {
    setSearch(event.target.value)
  }

  const onDelete = (id) => {
    console.log("eee")
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onInput3={onInput3} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={onSubmit} onInput1={onInput1} onInput2={onInput2} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} onDelete={onDelete} />
    </div>
  )
}

export default App