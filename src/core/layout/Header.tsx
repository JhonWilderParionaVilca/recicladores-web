import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header shadow-lg">
    <div className="m-auto flex h-full max-w-screen-lg flex-col items-center justify-center md:flex-row md:justify-between">
      <Link to="/">
        <h1 className=" text-xl font-bold text-primary-100">Recolectores</h1>
      </Link>
      <nav className="flex flex-row gap-3">
        <Link className="btn btn--secondary" to="/create">
          Registrar un Punto
        </Link>
        <Link className="btn btn--primary" to="/login">
          Login
        </Link>
        <button type="button" className="btn btn--tertiary">
          Salir
        </button>
      </nav>
    </div>
  </header>
);
