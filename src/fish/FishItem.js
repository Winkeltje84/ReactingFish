import React, { PureComponent } from 'react'

class FishItem extends PureComponent {
  // constructor(props) {
  //   super()
  //   console.log(props)
  // }

  render() {
    const { name, latin, image, summary, bony_fish, cartilaginous_fish } = this.props

    return(
      <article className="fish">
        <h3>{ name }</h3>
        <h4>{ latin }</h4>
        <img src={ image }/>
        <p>{ summary }</p>
        <ul>
          { bony_fish && <li>Type: Bony Fish</li> }
          { cartilaginous_fish && <li>Type: Cartilaginous Fish</li> }
        </ul>
      </article>
    )
  }

}

export default FishItem
