import { Container } from "./styles";
import flavors from "../../assets/Flavors.png";

export function Banner() {
  return (

    <Container>        
      <div className="backgroundFlavors">
        <img 
          src={flavors} 
          alt="Imagem de macarrons com frutas vermelhas" 
        />
        <div className="description">
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
        </div>
      </div>
      
     </Container>
  )
};