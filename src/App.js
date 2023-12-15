import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import Footer from "./components/Footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
