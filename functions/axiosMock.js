const axios = require("axios");

class Users {
  static all() {
    return axios.get("http://127.0.0.1:3000/users").then((resp) => resp.data);
  }
}

module.exports = Users;
