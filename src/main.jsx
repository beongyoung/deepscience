import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
