import React, { PureComponent } from 'react'
import Title from '../components/Title'

class FishContainer extends PureComponent {
  renderFish(fish, index) {
    return (
      <article className="fish">
        <h1>{ fish.name }</h1>
      </article>
    )
  }

  render() {
    return(
      <div className="fish wrapper">
        <header>
          <Title content="fish" />
        </header>

        <main>
          { this.props.fish.map(this.renderFish) }
        </main>
      </div>
    )
  }
}

export default FishContainer
