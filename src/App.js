import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense, useCallback, useEffect } from "react";
import "react-datetime/css/react-datetime.css";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.sass";
import { setWidthScreen } from "./features/pageControlSlice";
import { Admin, Login } from "./pages";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => console.error(`Something went wrong: ${error.message}`),
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      staleTime: 4 * (60 * 1000), // 4 minutes
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWidthScreen(window.innerWidth));
    // eslint-disable-next-line
  }, []);

  const handleWindowResize = useCallback((event) => {
    dispatch(setWidthScreen(window.innerWidth));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  return (
    <div id="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
        <BrowserRouter>
          <Suspense fallback={"Loading..."}>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/users/login" element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
