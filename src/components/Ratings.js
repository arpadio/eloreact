import React, { useEffect, useState } from 'react'
// import { dbRef } from '../controllers/initFirebase.js'

export default function Ratings() {

  const [rankedPlayers, setRanking] = useState([]);

  // Calls getPlayers once dbRef is mounted
  // useEffect(() => {
  //
  //   const updateRatingTable = dbRef.on('value', function(snapshot) {
  //
  //     const rankingTable = document.querySelector('#rankingView table tbody');
  //     rankingTable.innerHTML = '';
  //
  //     let data = snapshot.val();
  //
  //     // Push players to array to allow sorting
  //     let rankedPlayers = [];
  //     for (let player in data.players) {
  //      rankedPlayers.push({
  //        id: player,
  //        name: data.players[player].name,
  //        nationality: data.players[player].nationality,
  //        won: data.players[player].won,
  //        lost: data.players[player].lost,
  //        rating: data.players[player].rating,
  //      });
  //     }
  //
  //     // Sort by rank
  //     rankedPlayers.sort((x,y) => {
  //       return y.rating - x.rating}
  //     );
  //
  //     // Add data to UI
  //     rankedPlayers.forEach((player, index) => {
  //
  //       const rank = index + 1;
  //       const rowContent = `
  //         <td> ${rank}</td>
  //         <td> ${player.name}</td>
  //         <td> ${player.nationality}</td>
  //         <td> ${player.won}</td>
  //         <td> ${player.lost}</td>
  //         <td> ${player.rating}</td>`;
  //
  //       let newRow = rankingTable.insertRow(rankingTable.rows.length);
  //       newRow.innerHTML = rowContent;
  //     })
  //   });
  //
  //   return () => {
  //     updateRatingTable()
  //   }
  //
  // }, [])

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
            <th>Nationality</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
