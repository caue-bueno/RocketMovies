import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();
  
  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h3>Faça seu login</h3>

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
        
        <Button title="Entrar" onClick={handleSignIn} />

        <ButtonText title="Criar conta" url="signup" />

      </Form>
      <Background />
    </Container>
   
  )
}