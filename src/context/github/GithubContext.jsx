import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import loading from "daisyui/components/loading";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

//get search results
const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q:text
    })

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items} = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: items
    });
  };

  //get initial users(testing purposes)
  // const fetchUsers = async () => {
  //   setLoading();

  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await res.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data
  //   });
  // };
  
  //set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
