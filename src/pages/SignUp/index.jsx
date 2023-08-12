import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Form, Background } from "./styles"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../service/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h3>Crie sua conta</h3>

        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <ButtonText
          title="Voltar para o login"
          icon={FiArrowLeft}
          url="/"
        />

      </Form>
      <Background />
    </Container>

  )
}