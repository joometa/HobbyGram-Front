import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
import { history } from "../configureStore";

// 액션 타입
const LOG_OUT = "LOG_OUT"; // 로그아웃
const GET_USER = "GET_USER"; //회원정보 조회
const SET_USER = "SET_USER"; // 로그인
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

// 회원가입
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

// 로그인
const LoginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `${config.api}/login`,
      data: {
        email: email,
        password: pwd,
      },
    }).then((res) => {
      console.log(res.data);
      const jwtToken = res.data.result.user.token;
      // 서버로 부터 받은 토큰을 쿠키에 저장 (key:value 형태)
      setCookie("is_login", jwtToken);
      // 통신 시 헤더에 default 값으로 저장
      axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
      const user = {
        email: email,
        name: res.data.result.user.name,
      };
      dispatch(setUser(user));
    });
  };
};

// 로그인 후 회원 정보 조회
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    // 로그인 시 쿠키에 이미 is_login으로 토큰이 저장되어 있기 때문에
    const jwtToken = getCookie("is_login");
    // 새로고침하면 헤더 default도 날라가기 때문에 다시 토큰을 달아준다.
    axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
    axios({
      method: "post",
      url: ``, // 유저정보만 넘겨주는 api 따로 하나 있어야 할 것 같음.
      data: {
        token: jwtToken,
      },
    })
      .then((res) => {
        const user = {
          email: res.data.result.user.email,
          name: res.data.result.user.name,
        };
        dispatch(getUser(user));
      })
      .catch((err) => {
        console.log("유저정보 조회 에러", err);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // 로그인시 받은 회원 정보
        console.log(action.payload);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        //쿠키 삭제
        deleteCookie("is_login");
        // 유저정보 삭제 하고 로그인상태 false로 변경
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  setUser,
  LoginDB,
  signUpDB,
  getUserDB,
};

export { actionCreators };
