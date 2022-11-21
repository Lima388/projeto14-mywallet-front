import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactLoading from "react-loading";
import "../constants/font.css";
import { colors } from "../constants/colors";

export default function Revenue(props) {
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (value.length === 0 || description.length === 0) {
      return;
    }
    const loginInfo = {
      email: value,
      password: description,
    };

    setLoading(true);

    /* axios
      .post(
        ,
        loginInfo
      )
      .then(success)
      .catch(fail); */
  }
  function success(received) {
    props.set(received.data);
    navigate("/habits");
  }
  function fail(data) {
    setLoading(false);
    alert("Login falhou!");
  }
  return (
    <Container>
      <Title>Nova entrada</Title>
      <Form onSubmit={handleSubmit}>
        <Field
          placeholder="Valor"
          type="number"
          name="value"
          onChange={(e) => setValue(e.target.value)}
        />
        <Field
          placeholder="Descrição"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        {loading && (
          <Loading>
            <ReactLoading type={"bubbles"} color={colors.font} width={"20%"} />
          </Loading>
        )}
        {!loading && <Submit type="submit" value="Salvar entrada" />}
      </Form>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 26px;
`;
const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Field = styled.input`
  height: 55px;

  border: none;
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  margin-bottom: 10px;
  font-size: 20px;

  padding-left: 10px;
  background-color: ${colors.fields};

  ::placeholder {
    color: black;
  }
`;
const Submit = styled.input`
  height: 45px;
  max-width: 400px;

  margin-bottom: 20px;

  background-color: ${colors.buttons};

  font-size: 20px;
  font-weight: 700;

  border: none;
  border-radius: 5px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 45px;
  width: 300px;

  margin-bottom: 20px;

  font-size: 21px;

  border: none;
  border-radius: 5px;
`;
