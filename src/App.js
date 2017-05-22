import React from 'react'
import Title from './components/Title'
import FishContainer from './fish/FishContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title content="Hello fishies" />
        <FishContainer fish={ [] } />
      </div>
    )
  }
}

export default App
