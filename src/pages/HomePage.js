import styled from "styled-components";
import { colors } from "../constants/colors";
import {
  RemoveCircleOutline,
  AddCircleOutline,
  LogOutOutline,
} from "react-ionicons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { entriesURL } from "../constants/links";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
  const userData = useContext(UserContext);
  const [entries, setEntries] = useState([]);
  const [sum, setSum] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Bearer ${userData.token}`);
    axios
      .get(entriesURL, {
        headers: { Authorization: `Bearer ${userData.token}` },
      })
      .then((data) => {
        setEntries(data.data);
      })
      .catch((data) => {
        console.log(data);
      });
  }, []);
  useEffect(() => {
    let total = 0;
    for (const entry of entries) {
      const num = Number(entry.value);
      total += num;
    }
    setSum(total.toFixed(2));
    console.log(total);
  }, [entries]);
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
      <Greeting>Olá, {userData.user}</Greeting>
      <Content>
        {entries.map((entry, id) => {
          const positive = entry.value > 0;
          return (
            <Entry key={id}>
              <Date>
                {entry.date}
                <Description>{entry.description}</Description>
              </Date>
              <Value add={positive}>{entry.value}</Value>
            </Entry>
          );
        })}
        <Sum sum={sum}>
          <span>SALDO</span>
          <span>{sum}</span>
        </Sum>
      </Content>
      <Buttons>
        <Button
          onClick={() => {
            navigate("/Revenue");
          }}
        >
          <AddCircleOutline
            color={"#ffffff"}
            title={""}
            height="25px"
            width="25px"
          />
          <span>Nova entrada</span>
        </Button>
        <Button
          onClick={() => {
            navigate("/Expense");
          }}
        >
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
  position: relative;
  background-color: ${colors.fields};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 20px 0 20px 0;
`;
const Entry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
  font-size: 16px;
`;
const Date = styled.span`
  color: ${colors.date};
`;
const Description = styled.span`
  margin-left: 10px;
  color: black;
`;
const Value = styled.span`
  color: ${(props) => (props.add ? colors.positive : colors.negative)};
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  width: 100%;
`;
const Sum = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 700;
  span {
    color: black;
  }
  span:nth-child(2) {
    color: ${(props) => (props.sum > 0 ? colors.positive : colors.negative)};
  }
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
