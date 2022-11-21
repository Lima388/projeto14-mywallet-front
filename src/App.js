import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { createGlobalStyle } from "styled-components";
import { colors } from "./constants/colors";

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState(0);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage set={setUserData} />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage index={0} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    background-color: ${colors.background};
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    color: ${colors.font};
  }
`;
