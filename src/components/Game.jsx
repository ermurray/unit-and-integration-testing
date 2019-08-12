import React, { useState } from 'react'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game(props) {
  const [state, setState] = useState({cheating:true})
  return (
    <div>
    <main className="game">
      <Computer cheating={state.cheating} setState={setState}/>
      <Player />
    </main>
      <Result />
    </div>
  )
}