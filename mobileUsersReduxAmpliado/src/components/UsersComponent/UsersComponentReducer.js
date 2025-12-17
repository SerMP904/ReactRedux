import { FAVE_USER, LOAD_USERS, SELECT_USER } from './UsersComponentActions';

const initialState = {
  users: undefined,
  userSelected: undefined,
  favorite: false,
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
      if (action.payload.userData.favorite === false) {
        action.payload.userData.favorite = true
        console.log("true")
        return {
          ...state,
          userFavorite: action.payload.userData
        }
      } else if (action.payload.userData.favorite === true) {
        action.payload.userData.favorite = false
        console.log("false")
        return {
          ...state,
          userFavorite: action.payload.userData
        }
      }
    default:
      return state;
  }
};

export default usersComponentReducer;
