import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import Cards from "./Cards";

const Formulario = () => {
let [color, SetColor] = useState('')
let [colores, SetColores] = useState([])
const handleSubmit = (e)=> {
e.preventDefault()
SetColores([ ... colores, color])
SetColor('')
} 
  return (
    <>
      <Card className="text-center my-3">
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="formulario">
              <div className="caja-principal bg-danger me-2"></div>
              <Form.Control
                onChange={(e) => SetColor(e.target.value)} value={color}
                className="me-2"
                type="text"
                placeholder="Ingrese un color. Ej: rojo"
              />
              <Button type="submit" variant="info">
                agregar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Container className="my-5 row justify-content-between">
        <Cards colores = {colores}></Cards>
      </Container>
    </>
  );
};

export default Formulario;
