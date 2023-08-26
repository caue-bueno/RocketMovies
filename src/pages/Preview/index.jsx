import { Container, Box, ArrowLeft, Star, Clock, StarEmpty, ButtonBack, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import React from "react";
import { format } from "date-fns"


export function Preview() {

  const { user } = useAuth();
  const params = useParams();

  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      const createdAt = new Date(response.data.created_at)
      response.data.created_at = format(createdAt, "dd/MM/yyyy HH:mm");
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data &&
        <main>
          <ButtonBack>
            <ButtonText title="Voltar" icon={ArrowLeft} url="/" />
          </ButtonBack>
          <Content>
            <Box>
              <h1>{data.title}</h1>
              {[...Array(5)].map((star, idx) => {
                idx += 1;
                return (
                  <React.Fragment key={idx}>
                   { idx <= data.rating ? <Star /> : <StarEmpty />}
                  </React.Fragment>

                );
              })}

            </Box>
            <Box>
              <img
                src="https://github.com/caue-bueno.png"
                alt="Foto do Usuário"
              />
              <span>Por {user.name}</span> <Clock />{" "}
              <span>{data.created_at}</span>
            </Box>
            {data.tags &&
              <section>
                {
                  data.tags.map(tag => (
                    <Tag title={tag.name} key={tag.id} />
                  ))
                }
              </section>
            }
            <p>
            {data.description}
            </p>
          </Content>
        </main>
      }
    </Container>
  );
}
