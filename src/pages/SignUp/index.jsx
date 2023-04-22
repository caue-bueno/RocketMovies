import { Container, Form, Background } from "./styles"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h3>Crie sua conta</h3>

        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />
        <Button title="Cadastrar" />
        <ButtonText title="Voltar para o login" icon={FiArrowLeft} url="/" />
      </Form>
      <Background />
    </Container>
   
  )
}