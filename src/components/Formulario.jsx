import React from 'react';
import { Form,Button, Card, Container } from 'react-bootstrap';
import Cards from './Cards';

const Formulario = () => {
    return (
        <div>
                <Card className="text-center my-3">
      <Card.Header>Administrar colores</Card.Header>
      <Card.Body>

      <Form>
            <Form.Group className="mb-3 d-flex" controlId="formulario">
            <div className="caja-principal  me-2"></div>
            <Form.Control className='me-2' type="text" placeholder="Ingrese un color. Ej: rojo" />
      </Form.Group>
            <Button type='submit'  variant='info'>agregar</Button>
            </Form>
      </Card.Body>
    </Card>
    <Container className="my-5 row justify-content-between">
    <Cards></Cards>
    <Cards></Cards>
    <Cards></Cards>
    </Container>
        </div>
    );
};

export default Formulario;