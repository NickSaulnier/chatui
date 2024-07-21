# chatui

This is a minimal ChatUI project. Its intended purpose is to facilitate the process of building AI chatbots, providing components that are easily customizable and simple to use.

Example UI:

<img src="/public/chatui-example.png" alt="drawing" width="200"/>

## TODO

- Add code to use OpenAI API to fetch chat completions, test with OLlama
- Create loading components/styling for waiting on response
- Consider any refactors that will make the project/components/styling more general. This might involve moving some code to an examples folder, adding the package to npm, and testing with an npm install.
- Add githooks, lock down main branch

Longer Term:

- Create tabbed layout with navigation bar
- Add page for managing (viewing, continuing, naming, etc.) multiple conversations
- Create more compelling TopBar component
- Add support for specifying model/endpoint?
- Customize and add features to text input/text display?
- Look into creating a parallel React Native project

## Available Scripts

In the project directory, you can run:

### `yarn start` or `yarn dev`

Runs the app in the development mode.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
