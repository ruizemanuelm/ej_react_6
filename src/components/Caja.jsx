import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Caja = ({color}) => {
    const caja = {
		height: "100px",
    width: "100px",
    backgroundColor:color
}
return (
        <article className=' d-flex'>
    <Card className='col-12 justify-content-between mx-2 text-center'>
        <Card.Body>
          <Card.Title>{color}</Card.Title>
                <div className="d-flex justify-content-center">
                <div style={caja}></div>
            </div>
          <Button variant="primary" className="my-2">Borrar</Button>
        </Card.Body>
    </Card>
        </article>
    );
};

export default Caja;