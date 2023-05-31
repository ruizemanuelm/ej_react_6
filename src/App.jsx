import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="my-2  main">
        <Formulario></Formulario>
      </Container>
        
      <footer className="bg-dark p-3 text-danger text-center">
        <p>Todos los derechos reservados </p>
      </footer>
    </>
  );
}

export default App;
