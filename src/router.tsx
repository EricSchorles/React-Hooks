import { FunctionComponent, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import App from './pages/App'
import ListProducts from './pages/Products/ListProducts'

const Router: FunctionComponent = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/list-products',
      element: <ListProducts />,
    },
  ]

  let component = useRoutes(routes)

  return (
    <>
      <AppBar />
      <Suspense fallback={<></>}>{component}</Suspense>
    </>
  )
}

export default Router
