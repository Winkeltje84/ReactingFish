import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'
import FishContainer from './fish/FishContainer'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('contains a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains a Title', () => {
    expect(app).to.have.descendants(Title)
  })

  it('contains the FishContainer', () => {
    expect(app).to.have.descendants(FishContainer)
  })

  it('expects the Title to include "Hellow fishies"', () => {
    expect(app).to.contain(<Title content="Hello fishies" />)
  })
})
