import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Profile, Search } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'
import { api } from "../../service/api";
import { useState } from "react";


export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Search placeholder="Pesquisar pelo título" type="text" />
      <Profile to="/profile">
        <div>
          <p>{user.name}</p>
        </div>

        <img src={avatarUrl} alt="Foto do Usuário" />
      </Profile>
          <button onClick={handleSignOut}>sair</button>
    </Container>
  );
}
