import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import QuizDetail from "../components/QuizDetail/QuizDetail";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
        },
        {
            path: 'statistics',
            element: <Statistics></Statistics>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
          path:'/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizDetail></QuizDetail>
        }
      ]
    },
  ]);

  export default router