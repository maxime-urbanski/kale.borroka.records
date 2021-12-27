const authProvider = {
  login: async ({ username, password }) => {
    const url = process.env.REACT_APP_BACK_URL
    const request = new Request(`${url}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    try {
      const response = await fetch(request);
      const auth = await response.json();
      const { token } = auth;
      console.log('admin log token',token);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      localStorage.setItem('auth', token);
    } catch (e) {
      throw new Error('Network error');
    }
  },
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    console.log('je verifie erreur', status);
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => (localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()),
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),

  getIdentity: () => {
    try {
      const { id, user } = JSON.parse(localStorage.getItem('auth'));
      const username = user;
      console.log(user.username);
      return Promise.resolve({ id, username });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authProvider;
