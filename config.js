const config = {};

// config.uripath = "http://localhost:3000";
// config.uripath = "http://localhost:5001/onde-assistir/us-central1/api";
config.uripath = "https://us-central1-onde-assistir.cloudfunctions.net/api";
config.pathserver = config.uripath + "/api/v1";

module.exports = config;
