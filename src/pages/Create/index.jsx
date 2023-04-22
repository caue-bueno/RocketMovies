import { Container, Box, Tag, New, DeleteButton, SaveButton, ButtonBack } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { FiArrowLeft , FiX, FiPlus } from "react-icons/fi";

export function Create() {
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
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </Box>
            <textarea placeholder="Observações" />
          </form>
          <h2>Marcadores</h2>
          <section>
           <Tag>React <FiX /></Tag>
           <New>Novo marcador <FiPlus /></New>
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
