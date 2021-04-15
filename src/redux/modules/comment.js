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

const getCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    let list = [];
    axios({
      method: "get",
      url: "https://607541d80baf7c0017fa5966.mockapi.io/post",
    }).then((docs) => {
      if (!docs.data.comment) {
        return;
      }
      const post_idx = docs.data.findIndex((p) => p.id === post_id);
      console.log(docs.data[post_idx].comment);
      list = docs.data[post_idx].comment;
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
};

export { actionCreators };
