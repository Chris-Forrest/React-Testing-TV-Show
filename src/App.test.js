import React from 'react';
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

/**************** mock data  **************************************************/

/*********************************** tests ***********************************/
test("App renders with no errors", () => {
    render(<App />)
});