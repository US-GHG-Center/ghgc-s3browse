# Browseui
A React-based application for displaying BROWSE images stored in an S3 bucket.

---

## Local Setup

To get Browseui up and running on your local machine, follow these steps:

### Prerequisites

You'll need the following tools installed:

* **nvm** (Node Version Manager): For managing Node.js versions. You can find installation instructions on the [nvm GitHub page](https://github.com/nvm-sh/nvm).
* **Yarn**: A fast, reliable, and secure dependency manager. Install it by following the instructions on the [Yarn website](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

### Environment Variables

Create a copy of the `.env.dev` file and name it `.env`. Populate it with your specific environment variables:
```
REACT_APP_BASE_URL='xxxxxxx'
REACT_APP_EXCLUDED_PREFIXES='xxxxxxxx'
REACT_APP_ENDPOINT='xxxxxxxxx'
```

**Note:** The `REACT_APP_ENDPOINT` should point to your S3 bucket URL, ensuring proper access permissions. This can be directly accessible or via a CloudFront distribution with correct configurations.

### Installation and Running

Once your environment variables are set, use the following commands:

1.  **Select Node.js Version**:
    ```bash
    nvm use
    ```
    This command ensures you're using the appropriate Node.js version specified for the project.

2.  **Install Dependencies**:
    ```bash
    yarn
    ```
    This will install all the necessary project dependencies.

3.  **Start Development Server**:
    ```bash
    yarn start
    ```
    This command will launch the development server, and you can access Browseui in your browser.

---

## Bundling as a Library

You can package `browse-ui` as a reusable library for distribution via the [npm registry](https://www.npmjs.com/).

### 1. Build the Library

Use the provided build command to generate the library bundle:

This will create a production-ready build in the `dist` (or equivalent) directory.

```bash
yarn build-lib
```

### 2. Prepare for Publishing

Ensure the `name` and `version` fields in your [`package.json`](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) are correctly set.  
  These two fields together uniquely identify your package in the npm registry.

### 3. Authenticate with npm

If you haven't already, log in to your npm account.  
If you don’t have one, you can [sign up here](https://www.npmjs.com/signup).

```bash
npm login
```

### 4. Publish the Package

Once authenticated, publish your library to npm:

```bash
npm publish
```

**Note:**  
> - Make sure your package name is unique if it's public.  
> - Consider using [scoped packages](https://docs.npmjs.com/cli/v10/using-npm/scope) (e.g., `@your-org/browse-ui`) for organization or private packages.
> - For more details, see the [npm publishing guide](https://docs.npmjs.com/cli/v10/commands/npm-publish).

---

After publishing, your library can be installed in any project via:


## Usage as a Library

Browseui can also be used as a library within other React applications.

### Installation

Install the library via npm or yarn:

```bash
npm install browse-ui
# or
yarn add browse-ui
```

## Usage

### Import CloudBrowse:
```JavaScript
import { CloudBrowse } from 'browse-ui';
```

### Create a Configuration Variable:
```JavaScript

const config = {
  cloudWatchUrlBase: "xxxxx",
  sourceIMGUrl: "xxxxx",
  version: "xxxxx",
  excluded_prefixes: ["xxxxx"]
};
```

### Use the CloudBrowse Component:
```JavaScript
<CloudBrowse config={config}/>
```

#### Note: Configuration settings can also be provided directly in the host React application's .env file. For example:

```
REACT_APP_BASE_URL="xxxxx"
REACT_APP_EXCLUDED_PREFIXES="xxxxx"
REACT_APP_ENDPOINT="xxxxx"
```

## Peer Dependencies
This component has the following peer dependencies that you will need to install in your host application:

```JSON
"peerDependencies": {
    "react": "^18.2.0 || ^19.0.0",
    "react-dom": "^18.2.0 || ^19.0.0",
    "@mui/material": "^5.14.2 || ^6.0.0 || ^7.0.0"
}
```
Make sure these versions (or compatible ones) are installed in your project to avoid issues.
