import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Routes from "@/router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "@/redux/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "@/utils/provider/authProvider";
import "./global.css";
import axios from "axios";
const queryClient = new QueryClient();

// Retrieve the token from local storage
const token = localStorage.getItem("token");

// If the token exists, set it in the Axios headers
if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
