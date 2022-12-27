import React from "react";
import { Footer } from "./Components/footer";
import { Header1 } from "./Components/Header1";
// import { Hrader } from "./Components/Header";
// import { Counter } from "./Components/IncrDec";
// import { Form } from "./Components/Form";
import { Box } from "./Components/props";
import { Section1 } from "./Components/section1";
import { Section2 } from "./Components/section2";
import { Section3 } from "./Components/section3";


function App() {
  return (
    <div className="App">
           {/* <Header /> */}
            {/* <Counter />  */}
           {/* <Form /> */}
           {/* <Box title="text"/> */}
           <Header1 />
           <Section1 />
           <Section2 />
           <Section3 />
           <Footer />
          
    </div>
  );
}

export default App;
