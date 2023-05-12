import { Container } from "./styles";

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

export function CardOrder({data}) {
  const { handleRemoveMealFromCart, cart } = useCart()

  return (

    <Container>   
        <div className="order">

          <div className="orderData">            
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="comida/bebida" />
            <p>{data.quantity} x </p> 
            <h2> {data.title}</h2> 
            <span>R$ {data.price}</span> 
          </div>
          
          <button
            type="button"
            onClick={() => handleRemoveMealFromCart(data.id)}
          >Excluir</button>
        </div>  
    
    </Container>
  )
};