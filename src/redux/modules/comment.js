import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import moment from "moment";

// 액션
const SET_COMMENT = "SET_COMMENT"; // 댓글 불러오기
const ADD_COMMENT = "ADD_COMMENT"; // 댓글 추가
const DELETE_COMMENT = "DELETE_COMMENT"; // 댓글 삭제

// 액션 생성함수
const setComment = createAction(SET_COMMENT, (list) => ({ list }));
const addComment = createAction(ADD_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

// Initial State
const InitialState = {
  list: [],
};

// Mock-API : https://607541d80baf7c0017fa5966.mockapi.io/post

const addCommentDB = (user_name, comment, post_id) => {
  return function (dispatch, getState, { history }) {
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const comment_post = {
      user: user_name,
      comment: comment,
      craetedAt: createdAt,
    };
    axios({
      method: "post",
      url: `http://15.164.164.65/post/detail/${post_id}`,
      // data: comment_post,
    }).then((res) => {
      console.log(res);
    });
  };
};

const getCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    let list = [];
    axios({
      method: "get",
      url: `http://15.164.164.65/post/detail/${post_id}`,
    }).then((docs) => {
      if (!docs.data.comment) {
        return;
      }

      // const post_idx = docs.data.findIndex((p) => p.id === post_id);
      list = docs.data.comment;
      console.log(docs);

      // const post_idx = docs.data.findIndex((p) => p.id === post_id);
      // console.log(docs.data[post_idx].comment);
      // list = docs.data[post_idx].comment;

      dispatch(setComment(list));
      console.log(docs.data);
    });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.list = action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),

    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {}),
  },
  InitialState
);

const actionCreators = {
  setComment,
  getCommentDB,
  addCommentDB,
};

export { actionCreators };
