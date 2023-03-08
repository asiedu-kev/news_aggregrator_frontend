import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import axiosService from "../services/axios";
import { message } from "antd";

export { useUserActions };

function useUserActions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return {
    login,
    logout,
    register,
    updateUser,
    addToPreferences,
  };

  function login(email: string, password: string) {
    return axiosService
      .post(`auth/login`, {
        email,
        password,
      })
      .then((res) => {
        message.success("Action succeeded");
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access_token,
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
        message.success("Action succeeded");
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

  function updateUser(id, first_name, last_name, email, country) {
    return axiosService
      .put(`v1/accounts/${id}`, {
        country: country,
      })
      .then((res) => {
        message.success("Action succeeded");
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access_token,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.account));
        navigate("/home");
      });
  }

  function addToPreferences(article) {
    console.log(article);
    return axiosService
      .post(`v1/articles`, {
        author: article.author,
        source: article.source,
        title: article.title,
        description: article.description,
        content: article.content,
        published_at: article.published_at,
        url_to_image: article.url_to_image,
        url_to_article: article.url_to_article,
        image_url: article.image_url,
      })
      .then((res) => message.success("Action succeeded"));
  }

  function logout() {
    // remove user from local storage, set auth store to null and redirect to login page
    localStorage.removeItem("user");
    dispatch(authSlice.actions.setLogout());
    navigate("/login");
  }
}
