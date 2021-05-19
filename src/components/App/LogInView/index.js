import { useState } from "react";
import StyledLogIn from "./StyledLogIn";
import Title from "./Title";
import Label from "./Label";
import Input from "./Input";
import Row from "./Row";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import InputGroup from "./InputGroup";
import Logo from "../../shared/Logo";

const LogInView = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const changeHandler = (event) => {
    const input = event.target;
    const value = input.checked;
    setRememberMe(value);
  };



  return (
    <StyledLogIn>
      <Logo />
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
  );
};
export default LogInView;
