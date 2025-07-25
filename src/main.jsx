import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import BooksDetails from './components/BooksDetails/BooksDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ReadChart from './components/ReadChart/ReadChart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:  '/book/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch(`books.json`)
      },
      {
        path: '/listed',
        loader: () => fetch('/books.json'),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/read-pages',
        element: <ReadChart></ReadChart>,
        loader: () => fetch('/books.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
