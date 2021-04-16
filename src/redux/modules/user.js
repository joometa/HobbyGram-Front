import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";

import axios from "axios";

// 액션 타입
const LOG_OUT = "LOG_OUT"; // 로그아웃
const GET_USER = "GET_USER"; //회원정보 조회
const SET_USER = "SET_USER"; // 로그인

// 액션 생성함수
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//  초기값
// is_login : 로그인 상태인지 아닌지 여부 확인
const initialState = {
  user: null,
  is_login: false,
};

const signUpDB = (email, nickname, pwd, pwdcheck) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `${config.api}/join`,
      data: {
        email: email,
        name: nickname,
        password: pwd,
        password2: pwdcheck,
      },
    })
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        console.log("회원가입 에러", err);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  signUpDB,
};

export { actionCreators };
