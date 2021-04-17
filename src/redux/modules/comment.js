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
const addComment = createAction(ADD_COMMENT, (list) => ({ list }));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

// Initial State
const InitialState = {
  list: [],
};

// Mock-API : https://607541d80baf7c0017fa5966.mockapi.io/post

const addCommentDB = (user_name, comment, post_id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `http://15.164.164.65/comment/${post_id}`,
      data: {
        user: user_name,
        content: comment,
        craetedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
    })
      .then((res) => {
        console.log(res);
        let comment_list = {
          _id: res.data.comment.id,
          user: res.data.comment.user,
          content: res.data.comment.content,
          craetedAt: moment(new Date(res.data.comment.craetedAt)).fromNow(),
        };
        dispatch(addComment(comment_list));
      })
      .catch((err) => {
        console.log("댓글 추가 에러", err);
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

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let new_comment_list = action.payload.list;
        draft.list.unshift(new_comment_list);
      }),

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
