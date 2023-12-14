import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import MyReview from './pages/MyReview/MyReviewPage';
import MakeReview from './pages/MakeReview/MakeReviewPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/myreview",
    element: <MyReview />,
  },
  {
    path: "/makereview",
    element: <MakeReview />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
