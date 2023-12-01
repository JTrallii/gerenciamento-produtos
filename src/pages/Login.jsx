import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <div id="gridContainer" className="grid">
        <form action="" className="">
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" name="usuario" required />
          <label htmlFor="senha">Senha:</label>
          <input type="text" id="senha" name="senha" required />
          <button id="buttonLogin" className="">
            Entrar
          </button>
        </form>
        <div id="trocarSenha" className="">
          Esqueceu sua senha ?{" "}
          <Link to="/trocarSenha" className="link">
            Clique aqui !
          </Link>
        </div>
      </div>
      <footer className="">TODOS OS DIREITOS RESERVADOS</footer>
    </>
  );
}
