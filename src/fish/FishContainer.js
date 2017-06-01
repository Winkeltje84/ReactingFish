import React, { PureComponent } from 'react'
import Title from '../components/Title'
import FishItem from './FishItem'

class FishContainer extends PureComponent {
  renderFish(fish, index) {
    return <FishItem key={index} { ...fish } onChange={this.props.onChange } />
  }

  render() {
    return(
      <div className="fish wrapper">
        <header>
          <Title content="Largtst fish of the world" />
        </header>

        <main>
          { this.props.fish.map(this.renderFish.bind(this)) }
        </main>
      </div>
    )
  }
}

export default FishContainer
