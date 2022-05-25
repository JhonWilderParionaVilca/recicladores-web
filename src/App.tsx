function App() {
  return (
    <div className="layout min-h-screen w-screen justify-center">
      <header className="header m-auto flex max-w-screen-lg flex-row items-center justify-between">
        <h1 className=" text-xl font-bold text-primary-500">Recolectores</h1>
        <nav className="flex flex-row gap-3">
          <a className="btn btn--secondary" href="/register">
            Registrar un Punto
          </a>
          <a className="btn btn--primary" href="/login">
            Login
          </a>
          <button type="button" className="btn btn--tertiary">
            Salir
          </button>
        </nav>
      </header>
      <main className="main">
        <h2 className="text-center text-2xl">Hola Mundo</h2>
      </main>
      <footer className="footer m-auto max-w-screen-lg">
        <p className="text-center text-sm font-bold">
          Realizado con &hearts; por{' '}
          <a href="https://github.com/wilderPariona">wilderPariona</a>. Todos
          los derechos reservados &copy; 2022
        </p>
      </footer>
    </div>
  );
}

export default App;
