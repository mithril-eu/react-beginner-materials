import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { ErrorPage } from "./routes/ErrorPage";
import { PostsPage } from "./routes/PostsPage";
import { TodosPage } from "./routes/TodosPage";
import { AboutPage } from "./routes/AboutPage";
import { PostPage } from "./routes/PostPage";
import { ThemeProvider } from "./providers/ThemeProvider";

// https://github.com/mithril-eu/react-beginner-materials

// https://www.surveymonkey.com/r/LHG5FSF

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/todos",
        element: <TodosPage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/:id",
        element: <PostPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
