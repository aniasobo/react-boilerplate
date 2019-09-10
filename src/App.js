import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Sup, World - this is yo dev server</h1>
        <h2>Count: {this.state.count} </h2>
        <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+
        </button>
        <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-
        </button>
      </div>
    )
  }
  state = {
    count: 0
  }
}

export default App;