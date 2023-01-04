import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

describe('<Game />', () => {
  it('can toggle the cheater mode for computer', () => {
    const { container, debug, getByTestId } = render(<Game />);

    const robotIcon = getByTestId('robot-head');

    fireEvent.click(robotIcon);

    expect(robotIcon).toHaveClass('cheating')

    fireEvent.click(robotIcon);

    expect(robotIcon).not.toHaveClass('cheating')
  });
});
