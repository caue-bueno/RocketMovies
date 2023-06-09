import { Container, Profile, Search } from "./styles";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Search placeholder="Pesquisar pelo título" type="text" />
      <Profile to="/profile" >
        <div>
          <p>Caue dos Santos</p>
          <a>sair</a>
        </div>

        <img src="https://github.com/caue-bueno.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
