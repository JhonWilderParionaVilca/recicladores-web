import { Link } from 'react-router-dom';

export const Header = () => {
  const isLoged = false;
  return (
    <header className="header shadow-lg">
      <div className="m-auto flex h-full max-w-screen-lg flex-col items-center justify-center md:flex-row md:justify-between">
        <Link to="/">
          <h1 className=" text-xl font-bold text-primary-100">Recolectores</h1>
        </Link>
        <nav className="flex flex-row gap-3">
          {isLoged ? (
            <>
              <Link className="btn btn--tertiary" to="/create">
                Registrar un Punto
              </Link>
              <button type="button" className="btn btn--red">
                Salir
              </button>
            </>
          ) : (
            <Link className="btn btn--tertiary" to="/login">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
