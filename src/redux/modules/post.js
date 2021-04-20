import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";
import moment from "moment";
import { getCookie } from "../../shared/Cookie";

import axios from "axios";

const SET_POST = "SET_POST"; // 게시글 목록 불러오기
const ADD_POST = "ADD_POST"; // 게시글 작성
const GET_POST = "GET_POST"; // 게시글 상세 불러오기
const DELETE_POST = "DELETE_POST"; // 게시글 삭제
const EDIT_POST = "EDIT_POST"; // 게시글 수정

const TOGGLE_LIKE = "TOGGLE_LIKE"; // 좋아요 토글

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post, is_like) => ({ post, is_like }));
const deletePost = createAction(DELETE_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));

// 좋아요
const toggleLike = createAction(TOGGLE_LIKE, (post, is_like) => ({
  post,
  is_like,
}));

const initialState = {
  list: [],
  post: [],
  is_like: false,
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

const addPostDB = (title, content, imgfile, category, username) => {
  return function (dispatch, getState, { history }) {
    // const jwtToken = getCookie("is_login");
    // console.log(jwtToken);
    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("img", imgfile);
    formdata.append("content", content);
    formdata.append("category", category);
    formdata.append("user", username);

    // // formdata 내부 확인하는 방법
    // for (var key of formdata.keys()) {
    //   console.log(key);
    // }
    // for (var value of formdata.values()) {
    //   console.log(value);
    // }

    axios({
      method: "post",
      url: `${config.api}/post/write`,
      data: formdata,
      header: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res);
      const new_post = {
        title: res.data.newPost.title,
        category: res.data.newPost.category,
        content: res.data.newPost.content,
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        recommendCnt: res.data.newPost.recommendCnt,
        comment: res.data.newPost.comment,
        recommendUser: res.data.newPost.recommendUser,
        img: res.data.newPost.img,
        user: res.data.newPost.user,
      };
      dispatch(addPost(new_post));
    });
  };
};

// API-URL : http://15.164.164.65/post
// Mock-API : "https://607541d80baf7c0017fa5966.mockapi.io/post"
const setPostDB = (text = null, page = 1) => {
  return function (dispatch, getState, { history }) {
    if (text === null) {
      axios({
        method: "get",
        url: `${config.api}/post?page=${page}`,
      }).then((docs) => {
        // console.log(docs.data);
        const post_list = docs.data;
        console.log(post_list);
        dispatch(setPost(post_list));
      });
    } else {
      axios({
        method: "get",
        url: `${config.api}/post/${text}`,
      }).then((docs) => {
        // console.log(docs.data);
        const post_list = docs.data;
        // console.log(post_list);
        dispatch(setPost(post_list));
      });
    }
  };
};

const getOnePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    let is_like = getState().post.is_like;

    let _user = getState().user.user;
    console.log(_user);

    axios({
      method: "get",
      url: `${config.api}/post/detail/${id}`,
    })
      .then((docs) => {
        // console.log(docs.data);
        const onePost = docs.data.post;
        console.log(onePost);

        // success가 true면 추천 유저정보에 로그인유저의 id값 추가, false면 추천유저정보리스트에서
        // 로그인한 유저의 id값을 찾고 그 값을 제거
        // if (res.data.success) {
        //   recommendUser.append(_user.id);
        // } else {
        //   const idx = recommendUser.findIndex((user) => user === _user.id);
        //   console.log(idx);
        //   recommendUser.splice(idx, 1);
        // }

        // 좋아요 버튼 상황별 활성화 위해 is_like로 현재 좋아요 상태 체크 할 것임
        // 좋아요한 유저리스트에 정보가 없으면 is_like는 비활성화상태(false) 있으면 활성화(true)
        console.log(_user.id);
        is_like =
          onePost.recommendUser.findIndex((p) => p === _user.id) === -1
            ? false
            : true;
        console.log(onePost.recommendUser.findIndex((p) => p === _user.id));
        console.log(is_like);
        console.log(onePost.recommendUser);

        dispatch(getPost(onePost, is_like));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

const editPostDB = (content, img, title, id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "patch",
      url: `${config.api}/post/${id}`,
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
          _id: id,
          content: content,
          // img:img,
        };
        console.log(new_post_data);
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
      url: `${config.api}/post/${id}`,
      data: {
        _id: id,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(deletePost(id));
      })
      .catch((err) => {
        console.log("삭제에러", err);
      });
  };
};

const toggleLikeDB = (post_id, is_like) => {
  return function (dispatch, getState, { history }) {
    // 현재 포스트의 정보
    let _post = getState().post.post;

    // 현재 포스트의 좋아요 수
    let recommendCnt = _post.recommendCnt;

    // 현재 포스트를 좋아요한 유저들의 리스트
    let recommendUser = _post.recommendUser;

    // 로그인한 유저의 정보
    let _user = getState().user.user;

    axios({
      method: "POST",
      url: `${config.api}/post/recommend/${post_id}`,
    }).then((res) => {
      console.log(res.data.success);
      // success 가 true이면 좋아요 +1, false면 좋아요 -1
      recommendCnt = res.data.success ? recommendCnt + 1 : recommendCnt - 1;

      is_like = res.data.success ? true : false;

      // 변동된 좋아요 수 반영한 현재 포스트 : 좋아요유저는 데이터상에서 추가하기로함
      const like_post = {
        ..._post,
        recommendCnt: recommendCnt,
      };
      console.log(like_post);

      dispatch(toggleLike(like_post, is_like));
    });
  };
};
// 리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list.post;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.post);
        const new_post = action.payload.post;
        draft.list.unshift(new_post);
      }),

    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.post = action.payload.post;
        draft.is_like = action.payload.is_like;
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        // 받아온 id값과 맞지 않는 id의 데이터들을 새로운 배열에 넣어서 기존 list에 덮어쓰기해준다.
        let new_post_list = draft.list.filter((p) => {
          console.log(p);
          if (p.id !== action.payload.post) {
            return p;
          }
        });
        draft.list = new_post_list;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        // 수정할 포스트의 id로 인덱스를 찾는다.
        let idx = draft.list.findIndex(
          (p) => p._id === action.payload.post._id
        );
        draft.post = action.payload.post;
        draft.list[idx] = draft.post; // 수정된 값이 들어간 post를 list[idx] 값에 넣어준다.
        console.log(idx);
      }),

    [TOGGLE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.post = action.payload.post;
        draft.is_like = action.payload.is_like;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPost,
  setPostDB,
  getOnePostDB,
  editPostDB,
  deletePostDB,
  addPostDB,
  toggleLikeDB,
};

export { actionCreators };
