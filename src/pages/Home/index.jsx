import { Container, Wrapper, Content } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { useEffect } from "react";
import { Movie } from "../../components/Movie";


export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);


  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovie();
  }, [search]);
  // console.log("home",typeof setSearch)
  return (
    <Container>
      <Header setSearch={setSearch} search={search}/>
      
      <main>
        <Wrapper>
          <h1>Meus filmes</h1>
          <Link to="/create">
            <FiPlus /> Adicionar filme
          </Link>
        </Wrapper>
        <Content>
          {
            movies.map( movie => (
              <Movie data={movie} key={movie.id}/>
            ))
          }
        </Content>
      </main>
    </Container>
  );
}
