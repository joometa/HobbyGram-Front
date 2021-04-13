import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const SET_POST = "SET_POST"; // 게시글 목록 불러오기
const ADD_POST = "ADD_POST"; // 게시글 작성
const GET_POST = "GET_POST"; // 게시글 상세 불러오기
const DELETE_POST = "DELETE_POST"; // 게시글 삭제
const UPDATE_POST = "UPDATE_POST"; // 게시글 수정

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (post) => ({ post }));

const initialState = {
  list: [],
  post: [],
};

const initialPost = {
  _id: null,
  title:
    "제목이 들어갈 자리입니다. 그래서 아무도 제목말고는 볼 수 없어요. 진짜에요.",
  user: "작성자",
  commentCnt: 0,
  recommendCnt: 0,
  img:
    "https://cdn.crowdpic.net/list-thumb/thumb_l_1ED169F054035E14E5A306D7947BC544.jpg",
  category: "카테고리",
};

const setPostDB = () => {
  return function (dispatch, getState, { history }) {
    let post_list = [];

    axios({
      method: "get",
      url: "https://607541d80baf7c0017fa5966.mockapi.io/post",
    }).then((docs) => {
      const post_list = docs.data;
      console.log(post_list);
      dispatch(setPost(post_list));
    });
  };
};

const getOnePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `https://607541d80baf7c0017fa5966.mockapi.io/post/${id}`,
    })
      .then((docs) => {
        const onePost = docs.data;
        console.log(docs.data);
        dispatch(getPost(onePost));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
      }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
    [UPDATE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  getPost,
  setPostDB,
  getOnePostDB,
};

export { actionCreators };
