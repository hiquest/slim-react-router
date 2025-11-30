<div align="center">
  The <b>slim-react-router</b> is a tiny (<b>~1.8KiB</b>) minimalistic react-router alternative with familiar API and no dependencies.
</div>

<br />

<div align="center">
  <a href="https://github.com/odosui/slim-react-router/actions/workflows/test.yml"><img alt="CI" src="https://github.com/odosui/slim-react-router/actions/workflows/test.yml/badge.svg" /></a>
  <a href="https://bundlephobia.com/package/slim-react-router"><img alt="npm" src="https://img.shields.io/bundlephobia/minzip/slim-react-router" /></a>
</div>

## Features

- Super small (~1.8KiB minzipped)
- Zero dependencies
- Familiar API if you've used React Router (though not a 1:1 match)
- TypeScript support
- Browser-based and hash-based routing
- All the essentials: routes, links, navigation, hooks, etc.

## Installation

```bash
npm install slim-react-router
```

## Usage

```jsx
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
} from 'slim-react-router'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Switch>
    </BrowserRouter>
  )
}

function User() {
  const { id } = useParams()
  return <div>User {id}</div>
}
```

## Components

- **`<BrowserRouter>`** - Router using HTML5 history API
- **`<HashRouter>`** - Router using URL hash
- **`<Route>`** - Renders component when path matches. Supports `path`, `exact`, `element`, `component`, or `render` props
- **`<Switch>` / `<Routes>`** (alias) - Renders first matching route
- **`<Link>`** - Navigation link
- **`<NavLink>`** - Link with active state styling. Supports `activeClassName` and `activeStyle`

## Hooks

- **`useRouter()`** - Access router context (history + location)
- **`useHistory()`** - Access history object (push, replace, go, etc.)
- **`useLocation()`** - Get current location (pathname, search, hash, state)
- **`useNavigate()`** - Navigate programmatically
- **`useParams()`** - Get URL parameters from dynamic routes
- **`useRouteMatch(path?, exact?)`** - Check if path matches current route
- **`useSearchParams()`** - Get and set query string parameters
