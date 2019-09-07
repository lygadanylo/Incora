import {
  Users,
  Posts,
  TogglePopup,
  DetailPost,
  Message
} from "../action/actionType";
import axios from "axios";

export const featcUsers = () => dispatch => {
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`
  })
    .then(response => {
      dispatch(Users(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};
export const featcPosts = ({ id }) => dispatch => {
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  })
    .then(response => {
      dispatch(Posts(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const createPost = ({ title, body, userId }) => dispatch => {
  const id = userId;
  axios({
    method: "POST",
    url: `https://jsonplaceholder.typicode.com/posts`,
    data: { title, body, userId }
  })
    .then(() => {
      dispatch(featcPosts({ id }));
      dispatch(TogglePopup(false));
    })
    .catch(err => {
      console.log(err);
    });
};

export const detailInfo = postId => dispatch => {
  axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  })
    .then(response => {
      dispatch(DetailPost(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteComment = (id, postId) => dispatch => {
  axios({
    method: "DELETE",
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`
  })
    .then(() => {
      dispatch(detailInfo(id));
      dispatch(Message(true));
    })
    .catch(err => {
      console.log(err);
    });
};

export const editComment = ({ newBody, newTitle, postId }) => dispatch => {
  axios({
    method: "PUT",
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    data: { newBody, newTitle, postId }
  })
    .then(() => {
      dispatch(detailInfo(postId));
      dispatch(TogglePopup(false));
      dispatch(Message(true));
    })
    .catch(err => {
      console.log(err);
    });
};
