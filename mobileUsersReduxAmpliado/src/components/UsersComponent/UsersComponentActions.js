export const LOAD_USERS = 'LOAD_USERS';
export const SELECT_USER = 'SELECT_USER';
export const FAVE_USER = 'FAVE_USER'
export const SHOW_FAVE_USER = 'SHOW_FAVE_USER'

export const loadUsersAction = (usersData) => {
  return {
    type: LOAD_USERS,
    payload: {
      usersData,
    },
  };
};

export const selectUserAction = (userData) => {
  return {
    type: SELECT_USER,
    payload: {
      userData,
    },
  };
};

export const faveUserAction = (userData) => {
  return {
    type: FAVE_USER,
    payload: {
      userData,
    }
  }
}

export const showFavUser = (users) => {
  return {
    type: SHOW_FAVE_USER,
    payload: {
      userData,
    }
  }
}