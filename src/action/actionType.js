export const Users = data => ({
  type: "FETCH_USERS_ACCOUNT",
  payload: data
});

export const Posts = data => ({
  type: "FETCH_POST",
  payload: data
});

export const TogglePopup = data => ({
  type: "TOGGLE_POPUP",
  payload: data
});

export const DetailPost = data => ({
  type: "DETAIL_POST_INFO",
  payload: data
});

export const Message = data => ({
  type: "MESSAGE",
  payload: data
});
