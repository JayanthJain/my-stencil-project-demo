import React from 'react';
import { defineCustomElements } from 'stencil-demo/loader';
// import { MyCard } from './components/stencil-generated';

defineCustomElements();

function App() {
  return (
    <div>
      <my-card title="Hello World" content="This is a card component" />
    </div>
  );
}

export default App;