import { getDataAction, handleError } from "./helpers";
import { store } from "Store";
import axios from "axios";
// Actions Name
export const authAction = getDataAction("AUTH");

// Actions
export const fetchAuthData = async () => {
  try {
    store.dispatch(authAction.init());

    // Api Calling Will Be Here
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // };
    // const body = JSON.stringify({ email, password });
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = { authData: res.data };
    store.dispatch(authAction.success(response));
  } catch (err) {
    handleError(err);
    store.dispatch(
      authAction.failed({
        displayMessage: "Unable to load auth data",
        internalMessage: err.meessage
      })
    );
  }
};
