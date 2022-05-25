import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header m-auto flex max-w-screen-lg flex-row items-center justify-between">
    <Link to="/">
      <h1 className=" text-xl font-bold text-primary-500">Recolectores</h1>
    </Link>
    <nav className="flex flex-row gap-3">
      <Link className="btn btn--secondary" to="/register">
        Registrar un Punto
      </Link>
      <Link className="btn btn--primary" to="/login">
        Login
      </Link>
      <button type="button" className="btn btn--tertiary">
        Salir
      </button>
    </nav>
  </header>
);
