import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import Footer from "./components/Footer";
import LiveVideos from "./components/LiveVideos";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />

        <Footer />
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "live",
        element: <LiveVideos />,
      },
      {
        path: "results",
        element: <SearchResult />,
      },
    ],
  },
]);

export default App;
