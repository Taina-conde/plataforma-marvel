import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import StyledLogIn from "./StyledLogIn";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import Row from "./Row";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import InputGroup from "./InputGroup";
import Logo from "../../shared/Logo";
import { setLogged } from "../../../redux/actions/log";
import Background from "../../shared/Background";

const LogInView = () => {
  const [toHome, setToHome] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    const input = event.target;
    const value = input.checked;
    setRememberMe(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("rememberMe", rememberMe);
    dispatch(setLogged(true));
    setToHome(true);
  };
  if (toHome) {
    <Redirect to="/" />;
  }

  return (
    <Background login>
      <Logo login />
      
      <StyledLogIn onSubmit={submitHandler}>
        <Title>Bem-vindo(a) de volta!</Title>
        <Label>Acesse sua conta:</Label>
        <Input placeholder="Usuário" type="text" />
        <Input placeholder="Senha" type="password" />
        <Row>
          <InputGroup>
            <input
              type="checkbox"
              id="salvar-login"
              name="rememberMe"
              checked={rememberMe}
              onChange={changeHandler}
            />
            <Label htmlFor="salvar-login">Salvar login</Label>
          </InputGroup>
          <SecondaryButton>Esqueci a senha</SecondaryButton>
        </Row>
        <PrimaryButton>Entrar</PrimaryButton>
        <Row>
          <Label>Ainda não tem o login?</Label>
          <SecondaryButton cadastro>Cadastre-se</SecondaryButton>
        </Row>
      </StyledLogIn>
    </Background>
  );
};
export default LogInView;
