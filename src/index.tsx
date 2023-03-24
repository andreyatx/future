import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { router } from "./router";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ErrorBoundary>
);
