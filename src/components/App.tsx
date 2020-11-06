import React from 'react';
import Body from './Body';
import ControlComponent from './ControlComponent';

const App: React.FC = (props: any) => {
  const { todoAddHandler, todoDeleteHandler, currentTextValue } = props

  return (
    <div className="App">
      <ControlComponent addText={todoAddHandler} deleteText={todoDeleteHandler} />
      <Body textValue={currentTextValue} />
    </div>
  );
}

export default App;
