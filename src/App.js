import React, { Component } from 'react';
import Toggle from './Toggle'
import withToggle from './withToggle'
import useToggle from './useToggle'

const App = (props)  => {
  const [isXzcToggle, toggleXzc] = useToggle()
  const {isAsdToggle, toggleAsd} = props
  const {isDasToggle, toggleDas} = props

  return ( 
      <>
        {isXzcToggle && (<span>Xzc</span>)}
        <button onClick={toggleXzc}>toggle Xzc</button>

        {isDasToggle && (<span>Das</span>)}
        <button onClick={toggleDas}>toggle Das</button>

        {isAsdToggle && (<span>Asd</span>)}
        <button onClick={toggleAsd}>toggle Asd</button>

        <Toggle>
          {({isToggle, toggle})=>(
            <>
              {isToggle && (<span>ABC</span>)}
              <button onClick={toggle}>toggle Abc</button>
            </>
          )}
        </Toggle>
        <Toggle>
          {({isToggle, toggle})=>(
            // Only here has access to render props's scope
            <>
              {isToggle && (<span>XYZ</span>)}
              <button onClick={toggle}>toggle Xyz</button>
            </>
          )}
        </Toggle>
      </>
 )
}

export default withToggle(withToggle( App, 'Asd' ), 'Das');
