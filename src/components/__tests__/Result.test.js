import React from 'react';
import { render, getByTestId, fireEvent, waitForElement} from '@testing-library/react';
import Result from '../Result';

// import the library to be mocked
import axios from 'axios';

// tell jest to mock the library}
jest.mock('axios');

const fakeData = [
  {
    "id": 1,
    "name": "Ana",
    "points": 10
  },
  {
    "id": 2,
    "name": "Bob",
    "points": 7
  },
  {
    "id": 3,
    "name": "Charlie",
    "points": 3
  }
];

describe(' <Result />', () => {
  it('should dispaly results from api Call', async () => {
    const response = {data: fakeData};
    axios.get.mockResolvedValue(response);

    const { getByTestId, getByText} = render(<Result status='waiting' />);

    const highScore = getByTestId('high-scores');

   await waitForElement( () => fireEvent.click(highScore));

    expect(getByText('Ana: 10')).toBeInTheDocument();
  });
});