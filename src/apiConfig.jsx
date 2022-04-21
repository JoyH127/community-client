let apiUrl;
const apiUrls = {
  production: "https://netflix-community-app.herokuapp.com",
  development: "https://netflix-community-app.herokuapp.com",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
