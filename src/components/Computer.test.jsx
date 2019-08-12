import React from 'react';
import ReactDOM from 'react-dom'; 
import { render, fireEvent, getByTestId } from '@testing-library/react'
import { configure, prettyDOM } from '@testing-library/dom'
import Game from './Game'

import '@testing-library/jest-dom/extend-expect'

test('If the component has a prop cheating to true, should have a specific class', () => {

  const {getByTestId} = render(<Game />)
  const robot = getByTestId('robot-icon')
  
  expect(robot).toHaveClass('cheating')

  fireEvent.click(robot)

  expect(robot).not.toHaveClass('cheating')

})