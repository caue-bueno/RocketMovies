import { Container, Box, Tag, New, DeleteButton, SaveButton, ButtonBack } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft , FiX, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { NoteItem } from "../../components/NoteItem";





export function Create() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <Header />
      <body>
        <ButtonBack>
          <ButtonText title="Voltar" icon={FiArrowLeft}  url="/" />
        </ButtonBack>
        <main>
          <h1>Novo filme</h1>
          <form>
            <Box>
              <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)} 
              />
              <Input 
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRating(e.target.value)}
              />
            </Box>
            <textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
            />
          </form>
          <h2>Marcadores</h2>
          <section>
           
           <NoteItem
           placeholder="Novo marcador"
           />
          </section>
          <Box>
            <DeleteButton>Excluir filme</DeleteButton>
            <SaveButton>Salvar alterações</SaveButton>
          </Box>
        </main>
      </body>
    </Container>
  );
}
