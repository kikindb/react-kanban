import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import Navigation from './Navigation';
import data from './../../../package.json';

describe('Navigation Test', () => {
  test('Should show App title', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Navigation />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByText(/Kanban App/i)).toBeDefined();
  });
  test('Should show App version', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Navigation />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByText(data.version)).toBeDefined();
  });
});
