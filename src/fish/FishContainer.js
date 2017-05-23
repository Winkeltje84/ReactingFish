import React, { PureComponent } from 'react'
import Title from '../components/Title'

class FishContainer extends PureComponent {
  renderFish(fish, index) {
    return (
      <article className="fish">
        <h3>{ fish.name }</h3>
        <img src={ fish.image }/>
        <p>{ fish.summary }</p>
        <ul>
          { fish.bony_fish && <li>Type: Bony Fish </li> }
          { fish.cartilaginous_fish && <li>Type: Cartilaginous Fish </li> }
        </ul>
      </article>
    )
  }

  render() {
    return(
      <div className="fish wrapper">
        <header>
          <Title content="Largest fish of the world" />
        </header>

        <main>
          { this.props.fish.map(this.renderFish) }
        </main>
      </div>
    )
  }
}

export default FishContainer
