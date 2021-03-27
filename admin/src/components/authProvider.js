import jwt_decode from "jwt-decode";

const authProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request("http://localhost:5050/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    try {
      const response = await fetch(request);
      const auth = await response.json();
      const token = auth.token;
      const decodeToken = jwt_decode(token);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      if (decodeToken.usertype === "ADMIN") {
        localStorage.setItem("auth", JSON.stringify(auth));
      }
    } catch (e) {
      throw new Error("Network error");
    }
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),

  getIdentity: () => {
    try {
      const { id, user } = JSON.parse(localStorage.getItem("auth"));
      const username = user;
      console.log(user.username);
      return Promise.resolve({ id, username });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authProvider;
