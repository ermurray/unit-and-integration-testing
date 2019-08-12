import React from 'react';

export default function Computer(props) {
  const {cheating, setState} = props
  return (
   <section className="computer">
      <span onClick={() => setState(prevState => ({...prevState, cheating:prevState.cheating ? false : true}))} data-testid="robot-icon" className={cheating ? "cheating" : null} role="img" aria-label="robot" >
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button><span role="img" aria-label="moai">❔</span></button>
          <button><span role="img" aria-label="axe">❔</span></button>
          <button><span role="img" aria-label="tree">❔</span></button>
        </div>
      </div>
   </section>
  )
}