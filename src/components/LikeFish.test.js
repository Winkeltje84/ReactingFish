import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeFish from './LikeFish'

chai.use(chaiEnzyme())

describe('<LikeFish />', () => {
  const button = shallow(<LikeFish />)

  it('is wrapped in a <div> with class "like"', () => {
    expect(button).to.have.tagName('div')
    expect(button).to.have.className('like')
  })

  it('has an initial state for "liked", that is false', () => {
    expect(button.state('liked')).to.eq(false)
  })
})
