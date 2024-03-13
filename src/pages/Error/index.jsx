import { NavLink } from "react-router-dom";



function Error() {
  return (
    <main className="error_page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </main>
  );
}

export default Error;
