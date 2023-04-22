import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, url }) {
  return (
      <Container to={url}>
        {Icon && <Icon size={20} />}
        {title}
      </Container>
  );
}
