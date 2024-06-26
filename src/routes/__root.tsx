import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../index.css'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="root-container">
        <Link to="/" className="nav-btn">
          Home
        </Link>{' '}
        <Link to="/about" className="nav-btn">
          About
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className='title'>Your Year Song App</h1>
          </Link>
      </div>
      <Outlet />
    </>
  ),
})
