import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Opa");
  return (
    <div>
      <Heading attr={123} attr2="String">Olá mundo! 1</Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque
        vitae, aspernatur expedita iusto exercitationem qui tempore
        reprehenderit unde amet beatae cumque temporibus non. Reiciendis iste
        doloremque laudantium hic sapiente.
      </p>
    </div>
  );
}
