import './contacts.json'
import './App.css';
import { useState } from 'react'
import contacts from './contacts.json'

function App() {

  const [myContacts, setMyContacts] = useState([{
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Monica Bellucci",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    "popularity": 16.096436,
    "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Gal Gadot",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    "popularity": 10.049256,
    "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ian McKellen",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    "popularity": 10.070132,
    "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
    "wonOscar": false,
    "wonEmmy": false
  }])

  return (
    <div className="App">
    <button onClick={() => {
                 console.log('working')
                 const newArr = [...myContacts, {
                  "name": "Ansel Elgort",
                  "pictureUrl": "https://image.tmdb.org/t/p/w500/uQYUfGvOZkB5x25Z19UeyLABHmr.jpg",
                  "popularity": 9.429994,
                  "id": "09178713-ca9d-4657-a570-51d6f6459f57",
                  "wonOscar": false,
                  "wonEmmy": false
                  }]
                 setMyContacts(newArr)
             }}>Add New</button>

    <button onClick={() => {
                 console.log('working')
                 const newArr = [...myContacts.sort()]
                 setMyContacts(newArr)
             }}>Sort by Name</button>

    <button onClick={() => {
                 console.log('working')
                 const newArr = [...myContacts.sort() ]
                 setMyContacts(newArr)
             }}>Sort by Popularity</button>

    <div>
      {myContacts.map(element => {
        return (
          
          <table>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>

        <tr>
          <td><img className="img-size" src={element.pictureUrl} alt="img" /></td>
          <td>{element.name}</td>
          <td>{element.popularity}</td>
          <td>{element.wonOscar}</td>
          <td>{element.wonEmmy}</td>
        </tr>
        
      </table>
        )
      })}
    
    </div>
      
    </div>
  );
}

export default App;
