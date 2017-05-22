import React from 'react'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      // <h1>Hello World!</h1>
      <div>
        <Title content="Hello fishies" />
        <Title content="Oh how beautifull you are!" />
      </div>
    )
  }
}

export default App
