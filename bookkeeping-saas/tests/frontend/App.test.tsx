import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Bookkeeping SaaS/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the dashboard component', () => {
    render(<App />);
    const dashboardElement = screen.getByText(/Dashboard/i);
    expect(dashboardElement).toBeInTheDocument();
  });
});