import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          SUA LOGO
        </Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Produtos</Link>
          <Link to="/login">Entrar</Link>
        </nav>
      </header>
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
          Esqueceu sua senha ? <Link to="/trocarSenha" className="link">Clique aqui !</Link>
        </div>
      </div>
      <footer className="">TODOS OS DIREITOS RESERVADOS</footer>
    </>
  );
}
