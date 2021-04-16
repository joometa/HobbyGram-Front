import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
import { history } from "../configureStore";

// 액션 타입
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// 액션 생성함수
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//  초기값
// is_login : 로그인 상태인지 아닌지 여부 확인
const initialState = {
  user: null,
  is_login: false,
};

// 로그인
const LoginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `${config.api}/login`,
      data: {
        email: id,
        password: pwd,
      },
    }).then((res) => {
      // const jwtToken = res.data.
      // 서버로 부터 받은 토큰을 쿠키에 저장
      // setCookie('is_login', jwtToken)
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

const actionCreators = {};

export { actionCreators };
