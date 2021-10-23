import React from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={()=>(<div>Home</div>)}/>
        <Route exact path="/services" component={()=>(<div>Services</div>)}/>
        <Route exact path="/revolution" component={()=>(<div>The Revoluation</div>)}/>
        <Route exact path="/about" component={()=>(<div>About</div>)}/>
        <Route exact path="/contact" component={()=>(<div>Contact</div>)}/>
        <Route exact path="/" component={(<div>Home</div>)}/>
        <Route exact path="/" component={(<div>Home</div>)}/>
        <Route exact path="/" component={(<div>Home</div>)}/>
        <Route exact path="/" component={(<div>Home</div>)}/>
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
