import React, { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Course, Detail, Home, Product, Admin, Login } from "./pages";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datetime/css/react-datetime.css";
import "./App.sass";
import StandardLayout from "./components/Layout/StandardLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setWidthScreen } from "./features/pageControlSlice";

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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setWidthScreen(window.innerWidth))
    // eslint-disable-next-line
  }, []);


  const handleWindowResize = useCallback(event => {
    dispatch(setWidthScreen(window.innerWidth))
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
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
              <Route path="/" element={<StandardLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/khoa-hoc" element={<Course />} />
                <Route path="/san-pham" element={<Product />} />
                <Route path="/san-pham/:productId" element={<Detail />} />
              </Route>
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
