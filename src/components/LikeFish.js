import React, { PureComponent } from 'react'
import './LikeFish.sass'

class LikeFish extends PureComponent {
  constructor() {
    super()

    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    this.setState({
      liked: !this.state.liked
    })
    console.log('Like button clicked!')
  }

  render() {
    const { liked } = this.state
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          { liked ? '❤️' : '♡' }
          <span className="copy">{ liked ? '❤️' : '♡' }</span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }
        </span>
      </p>
    )
  }
}

export default LikeFish
