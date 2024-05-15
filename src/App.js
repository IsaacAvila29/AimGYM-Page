import "./miCss.css";
import { PrimerComponente } from "./components/PrimerComponente";
import { SegundoComponente } from "./components/SegundoComponente";
import { ContenidoDinamico } from "./components/ContenidoDinamico";

function App() {
  return (
    <div className="fondo">
      <PrimerComponente />
      <ContenidoDinamico />
      <SegundoComponente />
    </div>
  );
}

export default App;
