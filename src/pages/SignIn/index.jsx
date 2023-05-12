import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

import { Container, Content, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import brand from "../../assets/brand.png";

export function SignIn() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  };

  return(
    
    <Container>

      <Content>
       <img 
        src={brand} 
        alt="Logo"        
       />
        
        <main>

          <Form>
            <h1>Faça login</h1>

            <div className="input-wrapper">
              <label>Email</label>
              <Input
                type="email"
                placeholder="Exemplo: exemplo@email.com"
                onChange={e => setEmail(e.target.value)}
                required
              ></Input>
            </div>

            <div className="input-wrapper">
             <label>Senha</label>
              <Input
                type="password"
                className="password"
                placeholder="No mínimo 6 caracteres"
                minLength="6"
                securetextentry="true"
                onChange={e => setPassword(e.target.value)}
                required
              ></Input>
            </div>

            <Button 
              type="button"
              title="Entrar" 
              onClick={handleSignIn} 
              onkeypress={handleSignIn}            
            />

            <Link to="/register"> Criar uma conta </Link>  
                  
          </Form>

        </main>

      </Content>

    </Container>
  )
};