import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../controllers/initFirebase'

export default function Ratings() {

  const [rankedPlayers, setRanking] = useState([]);

  useEffect( () => {
    getRatedPlayers()
  }, [])

  function getRatedPlayers() {
    const playerCollectionRef = collection(db, 'algorithmDemo')
    getDocs(playerCollectionRef).then(response => {
      const player = response.docs.map(doc => ({
        data: doc.data(),
        id:   doc.id
      }))
      setRanking(player)
    })
    .catch(error => console.log(error))
  }


  return (
    <div className="view" id="ratingsView">
      <div className="view-header">
        <h2>Current Ranking</h2>
      </div>
      <table className="card ranking-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Country</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {rankedPlayers.map((player, index) => <tr key="player.id">
            <td>{index}</td>
            <td>{player.data.name}</td>
            <td>{player.data.country}</td>
            <td></td>
            <td></td>
            <td>{player.data.rating}</td>
          </tr>)}

        </tbody>
      </table>
    </div>
  )
}
