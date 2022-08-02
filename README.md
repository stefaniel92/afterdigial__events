# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### Stefanie's Notes
I made this in React because I have some experience with it, but no experience with Vue.

# Problems I encountered:
I got a CORS error when trying to access the data from the API. I did some googling and tried to set up a proxy server to avoid the issue. Because I don't have any experience with Node I couldn't get it to work, and as I had alreasy spent a lot of time on it I decided to move on and build the rest of the app. So as a development solution I installed this Chrome extension: https://mybrowseraddon.com/access-control-allow-origin.html

Unfortunately this means I wasn't able to see the application in any other browser and you will probably have to also install the extenstion to see the app, so my apologies for that.

# Time spent
I didn't track it exactly but I probably spent about 4 hours working on this not including the time spent trying to fix the CORS error.

# What I would do differently
I would split out the components more neatly in the Search component to have one component for the search wrapper/input and another for the grid instead of having it all together.

I also would add more thorough checks when fetching the data from the API

As mentioned above I would need to find a permanent solution for the CORS error. I also would need to make sure it's cross-browser compatible. 

I would also like to add an autocomplete to the search and make it more thorough.

Styling wise, I would like to spend more time on making sure the Book Now button is always aligned to the bottom of the card.

# Maintainability of code
I haven't installed many extra dependencies and everything is split out into separate components (although it could be more thorough). I think the naming conventions make sense and that the code is easy to read.


