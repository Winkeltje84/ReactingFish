import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import FishItem from './FishItem'

chai.use(chaiEnzyme)

const fish = {
    name: 'Sturgeons',
    latin: 'Acipenseriformes',
    summary: 'The largest species is the beluga sturgeon (Huso huso) of the Caspian and Black seas, the only extant bony fish to rival the massiveness of the ocean sunfish. The largest specimen considered reliable (based on remains) was caught in Volga estuary in 1827 and measured 7.3 m (24 ft) and weighed 1,474 kg (3,250 lb).[5] The slightly smaller kaluga (Huso dauricus) or great Siberian sturgeon has been weighed reliably up to 1,140 kg (2,510 lb) (Berg, 1932) and a length of 5.6 m (18 ft).[5][7] The North American white sturgeon (Acipenser transmontanus), unverified to 907 kg (2,000 lb) and 6.1 m (20 ft), Chinese, European Oceanic, and the Russian sturgeon (A. gueldenstaedtii), at as much as 1,000 kg (2,200 lb) and 5.5 m (18 ft) for a 75-year-old female, also can attain great sizes.[5] Atlantics and Baikal sturgeons are following as well. These fish are sometimes called the largest freshwater fish but sturgeons spend a great deal of time in brackish water and switch back and forth between saltwater and freshwater environments in their life cycle. Also included in this order are the paddlefish and the Chinese Paddlefish (Psephurus gladius), which may now be extinct and is at least critically endangered, is also a very large fish. Reportedly, fisherman as recently as the 1950s have caught paddlefish measuring up to 6.7 m (22 ft) in total length, although no specimen greater than 3.1 m (10 ft) has been scientifically measured. The weight of the Chinese Paddlefish is reportedly 300 to 500 kg (660 to 1,100 lb).',
    bony_fish: true,
    cartilaginous_fish: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Beluga.JPG/1920px-Beluga.JPG',
  }

describe('<FishItem />', () => {
  const container = shallow(<FishItem { ...fish } />)

  it('is wrapped in an article tag with class name name "fish"', () => {
    expect(container).to.have.className('fish')
  })

  it('has a name', () => {
    expect(container.find('h3')).to.have.text(fish.name)
  })

  it('has a latin name', () => {
    expect(container.find('h4')).to.have.text(fish.latin)
  })

  it('renders the image', () => {
    expect(container.find('img')).to.have.length(2)
    TODO

  })

  it('shows the correct type', () => {
    expect(container.find('ul > li')).to.have.text('Type: Bony Fish')
    expect(container.find('ul > li')).not.to.have.text('Type: Cartilaginous Fish')
  })

})
