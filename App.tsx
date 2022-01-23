import { getStorybookUI, configure } from '@storybook/react-native';

import { loadStories } from './storybook/storyLoader';

// Import stories
configure(() => {
  loadStories();
}, module);

export default getStorybookUI({});
