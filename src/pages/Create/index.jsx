import { Container, Box, Tag, New, DeleteButton, SaveButton, ButtonBack } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function Create() {
  
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleSaveMovie() {

    if (!title) {
      return alert("Adicione um título");
    }
    if (!rating) {
      return alert("Dê uma nota");
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      return alert("Digite a nota de 0 a 5");
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Nota criada com sucesso")
    navigate(-1)
    
  }

  return (
    <Container>
      <Header />
      <body>
        <ButtonBack>
          <ButtonText title="Voltar" icon={FiArrowLeft} url="/" />
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
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </section>
          <Box>
            {/* <DeleteButton>Excluir filme</DeleteButton> */}
            <SaveButton onClick={handleSaveMovie}>Salvar alterações</SaveButton>
          </Box>
        </main>
      </body>
    </Container>
  );
}
