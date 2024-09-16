// import 'dotenv/config'

const config = {
    cloudWatchUrlBase: process.env.REACT_APP_ENDPOINT,
    sourceIMGUrl: process.env.REACT_APP_ENDPOINT,
    version: 'v2.37.0',
    excluded_prefixes: process.env.REACT_APP_EXCLUDED_PREFIXES.split(',')
}

export default config
