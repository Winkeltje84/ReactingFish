import React, { PureComponent, PropTypes } from 'react'

class FishItem extends PureComponent {
  // constructor(props) {
  //   super()
  //   console.log(props)
  // }

  static propTypes = {
    name: PropTypes.string.isRequired,
    latin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bony_fish: PropTypes.bool,
    cartilaginous_fish: PropTypes.bool,
  }

  render() {
    const { name, latin, image, summary, bony_fish, cartilaginous_fish } = this.props

    return(
      <article className="fish">
        <h3>{ name }</h3>
        <h4>{ latin }</h4>
        <img style={{height: '400px'}} src={ image }/>
        <p>{ summary }</p>
        <ul>
          { bony_fish && <li>Type: Bony Fish</li>}
          { cartilaginous_fish && <li>Type: Cartilaginous Fish</li>}
        </ul>
      </article>
    )
  }

}

export default FishItem
