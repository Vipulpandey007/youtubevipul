import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { createHashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { Suspense, lazy, useEffect } from "react";
import Shimmer from "./components/Shimmer";

const MainContainer = lazy(() => import("./components/MainContainer"));
const Watch = lazy(() => import("./components/Watch"));
const LiveVideos = lazy(() => import("./components/LiveVideos"));
const SearchResult = lazy(() => import("./components/SearchResult"));
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Body = lazy(() => import("./components/Body"));
  return (
    <Provider store={appStore}>
      <div className="flex flex-col h-full">
        <Head />
        <Suspense fallback={<Shimmer />}>
          <Body />
        </Suspense>
        <Footer />
      </div>
    </Provider>
  );
}

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Watch />
          </Suspense>
        ),
      },
      {
        path: "live",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LiveVideos />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
