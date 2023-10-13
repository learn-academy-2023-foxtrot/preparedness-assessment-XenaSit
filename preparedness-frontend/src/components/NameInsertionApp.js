import React, { useState } from 'react';
import { Button, Input, Label } from "reactstrap"

function NameInsertionApp() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
    setText(`${enteredName}!`);
  };

  function showAlert() {
    alert(`Hello ${name} Swab scuttle grog blossom main sheet pirate lass yardarm broadside doubloon avast pink ho wench chandler warp. League yard cackle fruit code of conduct quarter loaded to the gunwalls American Main lass Buccaneer Barbary Coast stern gangplank Sail ho hempen halter brigantine. Cutlass yardarm jack weigh anchor keel code of conduct splice the main brace ye schooner prow belay gally long clothes brig port.`);
  }

  return (
    <div>
      <p>Hello {text}</p>
      <Label for="name">Enter your name</Label>
      <Input type="text"
      placeholder="Enter your name"
      onChange={handleInputChange}/>
      
      <Button color="primary" onClick={showAlert}>
        Click Me
      </Button>
      
      <Button>Reset</Button>
    </div>
  );
}

export default NameInsertionApp;