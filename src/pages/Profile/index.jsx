import { Container, Form, Header, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
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
        <Input placeholder="Caue dos Santos Bueno" icon={FiUser} type="text" />
        <Input placeholder="caue-bueno@live.com" icon={FiMail} type="text" />
        <Input placeholder="Senha atual" icon={FiLock} type="password" />
        <Input placeholder="Nova senha" icon={FiLock} type="password" />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
