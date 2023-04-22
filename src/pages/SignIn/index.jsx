import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h3>Faça seu login</h3>

        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />
        <Button title="Entrar" />

        <ButtonText title="Criar conta" url="signup" />

      </Form>
      <Background />
    </Container>
   
  )
}