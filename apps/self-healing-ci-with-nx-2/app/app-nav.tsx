import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
    </nav>
  );
}


xport function NewNav() {
  return (
    <nav>
      <NavLink to="/home" end>
        Home
      </NavLink>
    </nav>
  )
}
