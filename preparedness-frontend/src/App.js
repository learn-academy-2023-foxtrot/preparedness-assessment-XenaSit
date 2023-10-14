import React from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import NameInsertionApp from "./components/NameInsertionApp"
import background from "./assets/background-image.jpeg";
// import { LoremIpsum } from 'react-lorem-ipsum';
import "./App.css"





const App = () => {



  return (
    <div className="entire-content" style={{ backgroundImage: `url(${background})` }}>
      <h1>Preparedness Assessment</h1>

      <br/>
      
      <div className="form">
        <div className="input">
          <NameInsertionApp />
        </div>
        
        {/* <ModalComponent /> */}
      </div>
    </div>
  )
}

export default App