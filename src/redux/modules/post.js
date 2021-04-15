import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const SET_POST = "SET_POST"; // 게시글 목록 불러오기
const ADD_POST = "ADD_POST"; // 게시글 작성
const GET_POST = "GET_POST"; // 게시글 상세 불러오기
const DELETE_POST = "DELETE_POST"; // 게시글 삭제
const EDIT_POST = "EDIT_POST"; // 게시글 수정

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));

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
  content: "하이",
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

const editPostDB = (content, img, title, id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "put",
      url: `https://607541d80baf7c0017fa5966.mockapi.io/post/${id}`,
      data: {
        content: content,
        // img: img,
        title: title,
      },
    })
      .then(() => {
        let new_post_data = {
          // 새로 받은 값들을 바꿔준다.
          title: title,
          id: id,
          content: content,
          // img:img,
        };
        dispatch(editPost(new_post_data));
        window.alert("수정 되었습니다!");
      })
      .catch((err) => {
        console.log("수정에러", err);
      });
  };
};

const deletePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "delete",
      url: `https://607541d80baf7c0017fa5966.mockapi.io/post/${id}`,
      data: {
        id: id,
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(deletePost(id));
      })
      .catch((err) => {
        console.log("삭제에러", err);
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
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        // 받아온 id값과 맞지 않는 id의 데이터들을 새로운 배열에 넣어서 기존 list에 덮어쓰기해준다.
        let new_post_list = draft.list.filter((p) => {
          if (p.id !== action.payload.post) {
            return p;
          }
        });
        draft.list = new_post_list;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        // 수정할 포스트의 id로 인덱스를 찾는다.
        let idx = draft.list.findIndex((p) => p.id === action.payload.post.id);
        draft.post = action.payload.post;
        draft.list[idx] = draft.post; // 수정된 값이 들어간 post를 list[idx] 값에 넣어준다.
        console.log(idx);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  getPost,
  setPostDB,
  getOnePostDB,
  editPostDB,
  deletePostDB,
};

export { actionCreators };
