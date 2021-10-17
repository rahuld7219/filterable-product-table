import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FilterableProductTable />
        </header>
      </div>
    );
  }
}

export default App;
