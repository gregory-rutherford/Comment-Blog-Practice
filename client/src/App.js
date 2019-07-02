import React from "react";
import Header from "./Header";
import PostBox from "./PostBox";
import Wrapper from "./Wrapper";

class App extends React.Component {



  render () {
    return (
      <Wrapper>
        <Header />
        <PostBox />
      
        </Wrapper>
    )
  }
}

export default App;
