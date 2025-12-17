import { FAVE_USER, LOAD_USERS, SELECT_USER, SHOW_FAVE_USER } from './UsersComponentActions';

const initialState = {
  users: undefined,
  userSelected: undefined,
};

const usersComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload.usersData,
      };
    case SELECT_USER:
      return {
        ...state,
        userSelected: action.payload.userData,
      };
      case FAVE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.userData.id
              ? ({ ...user, favorite: !user.favorite })
              : ({...user, favorite: user.favorite})
          ),
        };
      case SHOW_FAVE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.favorite === true
              ? ({ ...user})
              : ("")
          ),
        };
    default:
      return state;
  }
};

export default usersComponentReducer;
