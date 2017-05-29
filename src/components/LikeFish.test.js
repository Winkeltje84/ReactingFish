import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeFish from './LikeFish'
import spies from 'chai-spies'

chai.use(chaiEnzyme())
chai.use(spies)

describe('<LikeFish />', () => {
  const toggleLike = chai.spy()
  const button = shallow(<LikeFish liked={false} onChange={toggleLike} />)

  it('is wrapped in a <div> with class "like"', () => {
    expect(button).to.have.tagName('div')
    expect(button).to.have.className('like')
  })

  describe('clicking it', () => {

    it('will call the "onChange"', () => {
        button.find('button').simulate('click')
        expect(toggleLike).to.have.been.called.exactly.once()
    })
  })
})
