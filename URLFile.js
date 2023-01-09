// let production = process.env.REACT_APP_PRODUCTION;

let testing = true
const port = "192.168.1.6";

// development url for herokuapp
//example testingURL = "https://app-name.herokuapp.com/";

export const API_HOSTNAME = testing
  ? `http://${port}:5000/api/`
  : "";
export const getApiUrl = (url) => `${API_HOSTNAME}${url}`;