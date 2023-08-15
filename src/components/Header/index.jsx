import { Container, Profile, Search } from "./styles";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'



export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Search placeholder="Pesquisar pelo título" type="text" />
      <Profile>
        <div>
          <p>Caue dos Santos</p>
          <button onClick={signOut}>sair</button>
        </div>

        <img src="https://github.com/caue-bueno.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
