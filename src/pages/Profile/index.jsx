import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Header, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { useState } from "react";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);  
  const [avatarFile, setAvatarFile] = useState(null);  

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)
    await updateProfile({user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Header>
        <ButtonText title={"Voltar"} icon={FiArrowLeft} url="/" />
      </Header>
      <Form>
        <Avatar>
          <img 
          src={avatar} 
          alt="Foto do usúario" 
          />
          <label htmlFor="avatar">
            <FiCamera />
          <input 
          id="avatar" 
          type={"file"}
          onChange={handleChangeAvatar}
          />
          </label>
        </Avatar>
        <Input 
        value={name}
        icon={FiUser} 
        type="text" 
        onChange={(e) => setName(e.target.value)}
        />
        <Input 
        value={email} 
        icon={FiMail} 
        type="text" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
        placeholder="Senha atual" 
        icon={FiLock} 
        type="password" 
        onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input 
        placeholder="Nova senha" 
        icon={FiLock} 
        type="password" 
        onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}
