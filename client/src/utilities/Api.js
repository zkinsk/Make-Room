import axios from "axios";
import Auth from "./Auth";

export default {
  createAccount: function(username, password) {
    const data = {
      username: username.trim(),
      password: password.trim(),
    }
    return axios.post("/api/user", data);
  },

  getEvents: function(options) {
    let queryUrl = "/api/event";

    if (options) {
      const searchParams = new URLSearchParams();

      if (options.orderBy) {
        searchParams.append("order_by", options.orderBy);
      }
      if (options.afterTime) {
        searchParams.append("after_time", options.afterTime);
      }

      queryUrl += "?" + searchParams;
    }
    
    return axios.get(queryUrl);
  },

  getSelf: function() {
    const token = Auth.getToken();
    return axios.get(
      "/api/user/self",
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  },

  logIn: function(username, password) {
    const data = {
      username: username,
      password: password,
    };
    return axios.post("/api/auth/token", data);
  },

  // profile routes
  getProfilePortfolioById: function(userId){
    
    return axios.get("/api/portfolio/" + userId)
  },
};