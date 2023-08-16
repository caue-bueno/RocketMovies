import { useState } from "react";
import { Container, Form, Header, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

export function Profile() {

  const { user } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleUpdate() {

  }

  return (
    <Container>
      <Header>
        <ButtonText title={"Voltar"} icon={FiArrowLeft} url="/" />
      </Header>
      <Form>
        <Avatar>
          <img src="https://github.com/caue-bueno.png" alt="Foto do usúario" />
          <label htmlFor="avatar">
            <FiCamera />
          <input id="avatar" type={"file"} />
          </label>
        </Avatar>
        <Input 
        placeholder={name}
        icon={FiUser} 
        type="text" 
        onChange={(e) => setName(e.target.value)}
        />
        <Input 
        placeholder={email} 
        icon={FiMail} 
        type="text" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
        placeholder="Senha atual" 
        icon={FiLock} 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
        placeholder="Nova senha" 
        icon={FiLock} 
        type="password" 
        onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
