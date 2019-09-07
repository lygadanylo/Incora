export default (state = {}, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "FETCH_USERS_ACCOUNT": {
      return { ...state, users: payload };
    }
    case "FETCH_POST": {
      return {
        ...state,
        posts: payload
      };
    }
    case "TOGGLE_POPUP": {
      return { ...state, togglePopup: payload };
    }
    case "DETAIL_POST_INFO": {
      return { ...state, postInfo: payload };
    }
    case "MESSAGE": {
      return { ...state, message: payload };
    }
    default: {
      return {
        ...state,
        payload
      };
    }
  }
};
