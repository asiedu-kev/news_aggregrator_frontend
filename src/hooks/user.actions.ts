import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import axiosService from "../services/axios";

export { useUserActions };

function useUserActions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return {
    login,
    logout,
    register,
  };

  function login(email: string, password: string) {
    return axiosService
      .post(`auth/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log("hey", res);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.token,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.account));
        navigate("/home");
      });
  }

  function register(
    last_name: string,
    first_name: string,
    email: string,
    password: string
  ) {
    return axiosService
      .post(`auth/register`, {
        first_name,
        last_name,
        email,
        password,
      })
      .then((res) => {
        console.log("hey", res);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.token,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.data.account));
        console.log("to=>home");
        navigate("/home");
      });
  }

  function logout() {
    // remove user from local storage, set auth store to null and redirect to login page
    localStorage.removeItem("user");
    dispatch(authSlice.actions.setLogout());
    navigate("/login");
  }
}
