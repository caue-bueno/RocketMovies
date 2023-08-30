import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star, StarEmpty } from "../../pages/Preview/styles"
import React from "react";

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div>
        {[...Array(5)].map((star, idx) => {
          idx += 1;
          return (
            <React.Fragment key={idx}>
              {idx <= data.rating ? <Star /> : <StarEmpty />}
            </React.Fragment>
          );
        })}
      </div>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {
            data.tags.map((tag) => (
              <Tag key={tag.name} title={tag.name} />
            ))
          }
        </footer>
      )}

    </Container>
  );
}