import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
      <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
      </div>
      {children}
    </Container>
  )
}