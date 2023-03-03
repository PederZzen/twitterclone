import React from "react";
import './styles/main.css';
import { AppWrapper, MainWrapper } from "./style";
import User from "./components/user";
import Feed from "./components/feed";
import LeftSidebar from "./components/sidebar/left";

function App() {
  return (
    <AppWrapper>
      <div>
        <LeftSidebar />
      </div>
      <MainWrapper>
        <User />
        <Feed />
      </MainWrapper>      
      <div>

      </div>
    </AppWrapper>
  );
}

export default App;
