import { useEffect, useState } from "react";
import Box from "../Box";
import { Container } from "./styles";

import moveit from "../../assets/Projects/moveit.jpg";
import quiz from "../../assets/Projects/quiz.jpg";
import youflix from "../../assets/Projects/youflix.jpg";
import podcastr from "../../assets/Projects/podcastr.jpg";
import alurakut from "../../assets/Projects/alurakut.jpg";
import aluracord from "../../assets/Projects/aluracord.jpg";
import letmeask from "../../assets/Projects/letmeask.jpg";
import hipsta from "../../assets/Projects/hipsta.jpg";

const dados = [
  {
    id: 1,
    name: "moveIt",
    url: "https://moveit.wmarques.net.br/",
    image: moveit,
  },
  {
    id: 2,
    name: "Quiz",
    url: "https://alura-quiz.wmarques.net.br/",
    image: quiz,
  },
  {
    id: 3,
    name: "YouFlix",
    url: "https://willflix.wmarques.net.br/",
    image: youflix,
  },
  {
    id: 4,
    name: "Podcastr",
    url: "https://podcastr.wmarques.net.br/",
    image: podcastr,
  },
  {
    id: 5,
    name: "Alurakut",
    url: "https://alurakut.wmarques.net.br/",
    image: alurakut,
  },
  {
    id: 6,
    name: "Aluracord",
    url: "https://aluracord.wmarques.net.br/",
    image: aluracord,
  },
  {
    id: 7,
    name: "Letmeask",
    url: "https://letmeask.wmarques.net.br/",
    image: letmeask,
  },
  {
    id: 8,
    name: "Aevnturas de Hipsta",
    url: "https://editor.p5js.org/williane.tads/full/opl4wXMv9",
    image: hipsta,
  },
];

function Projects() {
  const [pageActual, setPageActual] = useState([]);
  const [currentLength, setCurrentLength] = useState(3);

  useEffect(() => {
    const current = dados.slice(0, 3);
    if (current.length > 0) {
      setPageActual(current);
    }
  }, []);

  useEffect(() => {
    const current = dados.slice(currentLength - 3, currentLength);
    if (current.length > 0) {
      console.log(currentLength);
      setPageActual(current);
    }
  }, [currentLength]);

  function handlePaginationNext() {
    if (currentLength + 3 > dados.length) {
      const rest = dados.length % 3;
      const value = 3 - rest;

      setCurrentLength(dados.length + value);
    } else {
      setCurrentLength(currentLength + 3);
    }
  }

  function handlePaginationBack() {
    if (currentLength - 3 < 0) {
      setCurrentLength(3);
    } else {
      setCurrentLength(currentLength - 3);
    }
  }

  return (
    <Box title="Projetos" height="18rem">
      <Container>
        <button
          onClick={handlePaginationBack}
          disabled={currentLength === 3 ? true : false}
        >
          {"<"}
        </button>
        <div className="carrossel">
          {pageActual.map((item) => (
            <div key={item.id}>
              <figure>
                <img src={item.image} alt={item.name} />
                <figcaption>{item.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
        <button
          onClick={handlePaginationNext}
          disabled={currentLength >= dados.length ? true : false}
        >
          {">"}
        </button>
      </Container>
    </Box>
  );
}

export default Projects;
