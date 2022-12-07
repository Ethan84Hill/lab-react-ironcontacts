import './contacts.json'
import './App.css';
import { useState } from 'react'
import contacts from './contacts.json'

function App() {

  const [myContacts, setMyContacts] = useState(contacts.slice(0, 5))

  return (
    <div className="App">
    <button onClick={() => {
              let contactsLeft = contacts.filter(element => !myContacts.includes(element))

              if (contactsLeft.length > 0) {
              setMyContacts(myContacts.concat(contactsLeft[Math.floor(Math.random() * contactsLeft.length)]))
              }
              }}>Add New</button>

    <button onClick={() => {
              const sortedData = [...myContacts].sort((a, b) => {
                return a.name > b.name ? 1 : -1
              })
              setMyContacts(sortedData)
             }}>Sort by Name</button>

    <button onClick={() => {
                const sortedData = [...myContacts].sort((a, b) => {
                  return a.popularity < b.popularity ? 1 : -1
              })
              setMyContacts(sortedData)
             }}>Sort by Popularity</button>

    <div>

    <table>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      {myContacts.map(element => {
        return (
        <tr>
          <td><img className="img-size" src={element.pictureUrl} alt="img" /></td>
          <td>{element.name}</td>
          <td>{element.popularity}</td>
          <td>{element.wonOscar && <p>🏆</p>}</td>
          <td>{element.wonEmmy && <p>🏆</p>}</td>
          <td><button onClick={() => {
                const newArr = myContacts.filter(el => {
                return el !== element
                })
                setMyContacts(newArr)
          }}>Delete</button></td>
        </tr>
        )
      })}
      </table>
    </div>
      
  </div>
  );
}

export default App;
