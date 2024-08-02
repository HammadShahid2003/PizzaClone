import React from 'react';
import { Provider } from 'react-redux';
import cartStore from '../src/Store/Store.js'; // Adjust the path as necessary

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={cartStore}>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
