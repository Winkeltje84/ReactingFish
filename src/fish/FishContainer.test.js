import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import FishContainer from './FishContainer'

chai.use(chaiEnzyme())

describe('<FishContainer />', () => {
  const container = shallow(<FishContainer fish={[]} />)

  it('is wrapped in a div with class name "fish" & "wrapper"', () => {
    expect(container).to.have.className('fish')
    expect(container).to.have.className('wrapper')
  })
})
