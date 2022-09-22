# WELCOME TO THE FRONT LINES!
This project is designed using React JS with Redux-Toolkit as the state management solution, and Axios as the HTTP Client for API services.

Let us first discuss the branch layout of the repository.

### `master`: 
is the main release branch from where we will deploy our web-app front end to any particular hosting server.

### `development`: 
is the branch where all subset development features are merged together before merging with the release branch (master).

### `development-FEATURE`: 
where `FEATURE` is variable, is a branch that is taken out from the development branch to add a new feature, page, UI update etc. These branches are where developers will be able to commit and push there work for testing and merging to the development branch by the team leads. It is completely allowed to make any new branches from `development` or another `development-FEATURE` branch.

## Setting Up The Project On Your Local Machine
### Prerequisites:
- VSCode
- Git CLI
- Node JS (NPM)
- Git extension for VSCode
- Live Server extension on VSCode (Recommended)

### Step 1
Clone the `development` branch by clicking on the GREEN  `Code` button. Copy the HTTPS URL.

### Step 2
Open a New Window on VS Code, and select on the Start Page, the option of Clone Git Repository. Click on it and input the URL at the input field shown. 

### Step 3
Now it might ask for authentication, so follow the steps as provided. Create the project folder anywhere in your disk.

### Step 4
Now your project folder will be set up and opened. Run `npm install` and then `npm run`. The project will be launched on `localhost:3000/`.

## Committing and Pushing

### Step 1
Once the assigned branch is ready for submission, you can easily run the command `git add .` for staging all changes. Then you can commit those changes locally using the command `git commit -m "any message or comments"`

### Step 2
Next you push the branch to the repository using the command `git push`. If the branch has not been set in the upstream then simply use the command: `git push --set-upstream origin <branch-name>`.

### Step 3
Now to place a merge request, open the branch you are assigned, and click on the option of Contribute. And then select \
[Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). On the right, a panel is shown where you can select an Assignee. Assign your project lead, write some comments and press `Create Pull Request`.

## Project Structure

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
