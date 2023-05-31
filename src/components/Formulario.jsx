import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Formulario = () => {
    return (
        <div>
            <Form>
            <Form.Group className="mb-3 d-flex" controlId="formulario">
            <div className="caja-azul me-2"></div>
            <Form.Control className='me-2' type="text" placeholder="Ingrese un color. Ej: azul" />
            <Button type='submit'  variant='info'>agregar</Button>
      </Form.Group>
            </Form>
        </div>
    );
};

export default Formulario;