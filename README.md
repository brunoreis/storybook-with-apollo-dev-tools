# storybook-with-apollo-dev-tools

Example on how to use [StoryBook](https://github.com/storybooks/storybook) [React](https://storybook.js.org/basics/guide-react/) with [Apollo Dev Tools](https://github.com/apollographql/apollo-client-devtools)

  1. You need to create a global decorator to wrap your stories [.storybook/config.js](https://github.com/brunoreis/storybook-with-apollo-dev-tools/blob/master/.storybook/config.js)
  2. The stories run into an iFrame, so you need to hoist the __APOLLO_CLIENT__ to the outer window. [.storybook/preview-head.html](https://github.com/brunoreis/storybook-with-apollo-dev-tools/blob/master/.storybook/preview-head.html)
  3. You don't need to use any Apollo addons to make this work
  4. Sometimes you will need to reboot the browser. (I'm not yet sure why)
  5. Works for @storybook/react@4.0.0-alpha.16 (and maybe other versions too)
