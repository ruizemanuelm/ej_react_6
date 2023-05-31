import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
const Cards = () => {
  return (
    <article className="col-md-4 my-1">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Nombre del color</Card.Title>
            <div className="d-flex justify-content-center">
                <div className="caja-azul"></div>
            </div>
          <Button variant="primary" className="my-2">Borrar</Button>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Cards;