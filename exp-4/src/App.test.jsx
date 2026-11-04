import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import App from './App';

describe('App profiler', () => {
  beforeEach(() => {
    vi.spyOn(console, 'table').mockImplementation(() => {});
  });

  afterEach(() => {
    console.table.mockRestore();
  });

  it('reports render timings through React Profiler', () => {
    render(<App />);

    expect(screen.getByText('Plan your publishing rhythm')).toBeInTheDocument();
    expect(console.table).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ id: 'PostSchedulerApp' }),
      ]),
    );
  });
});
