import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useRequireAuth } from '../../hooks';

export const Header = () => {
  const navigate = useNavigate();
  const isLogged = useRequireAuth();
  const { logout } = useAuth();
  const handdleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="shadow-lg header">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg m-auto md:flex-row md:justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold text-primary-100">Recolectores</h1>
        </Link>
        <nav className="flex flex-row gap-3">
          <Link className="btn btn--tertiary" to="/create">
            Registrar un Punto
          </Link>
          {isLogged && (
            <>
              <button
                onClick={handdleLogout}
                type="button"
                className="btn btn--red"
              >
                Salir
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
