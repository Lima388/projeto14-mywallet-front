import styled from "styled-components";
import { colors } from "../constants/colors";
import {
  RemoveCircleOutline,
  AddCircleOutline,
  LogOutOutline,
} from "react-ionicons";

export default function HomePage(props) {
  return (
    <Container>
      <LogOut>
        <LogOutOutline
          color={"#ffffff"}
          title={""}
          height="35px"
          width="35px"
        />
      </LogOut>
      <Greeting>Olá, Fulano</Greeting>
      <Content></Content>
      <Buttons>
        <Button>
          <AddCircleOutline
            color={"#ffffff"}
            title={""}
            height="25px"
            width="25px"
          />
          <span>Nova entrada</span>
        </Button>
        <Button>
          <RemoveCircleOutline
            background-color={colors.buttons}
            color={"#ffffff"}
            title={""}
            height="25px"
            width="25px"
          />
          <span>Nova saída</span>
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  padding: 20px;

  display: flex;
  flex-direction: column;
`;
const Greeting = styled.p`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
`;
const Content = styled.div`
  background-color: ${colors.fields};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 20px 0 20px 0;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  width: 100%;
`;
const Button = styled.div`
  height: 100%;
  width: 45%;
  background-color: ${colors.buttons};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  border-radius: 5px;
  span {
    font-weight: 700;
    width: 45px;
  }
`;
const LogOut = styled.div`
  right: 15px;
  top: 15px;
  position: absolute;
`;
