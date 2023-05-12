import { Container, Content, Form } from "./styles";

import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import brand from "../../assets/brand.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para criar a conta!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Conta criada com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar a conta!")
      }
    })
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
              <h1>Crie sua conta</h1>

              <div className="input-wrapper">
                <label>Seu Nome</label>
                <Input
                  required
                  placeholder="Ex.: João da Silva"
                  type="text"
                  onChange={e => setName(e.target.value)}
                  
                />
              </div>

              <div className="input-wrapper">
                <label>Email</label>
                <Input
                  required
                  type="email"
                  placeholder="Ex.: email@email.com.br"
                  onChange={e => setEmail(e.target.value)}
                ></Input>  
              </div>

              <div className="input-wrapper">
              <label>Senha</label>
                <Input
                  className="password"
                  required
                  type="password"
                  minLength="6"
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setPassword(e.target.value)}
                ></Input>
              </div>

              <Button 
                type="button"
                onClick={handleSignUp} 
                title="Criar conta"               
              />                        
              <Link to="/" >Já tenho uma conta</Link>

            </Form>

          </main>

      </Content>
    </Container>
  )
};