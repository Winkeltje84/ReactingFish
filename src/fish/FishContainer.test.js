import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import FishContainer from './FishContainer'
import FishItem from './FishItem'
import { fish } from '../App'

chai.use(chaiEnzyme())

// const fish = [
//   {
//     name: 'Sturgeons',
//     latin: 'Acipenseriformes',
//     summary: 'The largest species is the beluga sturgeon (Huso huso) of the Caspian and Black seas, the only extant bony fish to rival the massiveness of the ocean sunfish. The largest specimen considered reliable (based on remains) was caught in Volga estuary in 1827 and measured 7.3 m (24 ft) and weighed 1,474 kg (3,250 lb).[5] The slightly smaller kaluga (Huso dauricus) or great Siberian sturgeon has been weighed reliably up to 1,140 kg (2,510 lb) (Berg, 1932) and a length of 5.6 m (18 ft).[5][7] The North American white sturgeon (Acipenser transmontanus), unverified to 907 kg (2,000 lb) and 6.1 m (20 ft), Chinese, European Oceanic, and the Russian sturgeon (A. gueldenstaedtii), at as much as 1,000 kg (2,200 lb) and 5.5 m (18 ft) for a 75-year-old female, also can attain great sizes.[5] Atlantics and Baikal sturgeons are following as well. These fish are sometimes called the largest freshwater fish but sturgeons spend a great deal of time in brackish water and switch back and forth between saltwater and freshwater environments in their life cycle. Also included in this order are the paddlefish and the Chinese Paddlefish (Psephurus gladius), which may now be extinct and is at least critically endangered, is also a very large fish. Reportedly, fisherman as recently as the 1950s have caught paddlefish measuring up to 6.7 m (22 ft) in total length, although no specimen greater than 3.1 m (10 ft) has been scientifically measured. The weight of the Chinese Paddlefish is reportedly 300 to 500 kg (660 to 1,100 lb).',
//     bony_fish: true,
//     cartilaginous_fish: false,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Beluga.JPG/1920px-Beluga.JPG',
//     liked: true,
//   },
//   {
//     name: 'Mackerel sharkes',
//     latin: 'Lamniformes',
//     summary: 'Most species in this order grow quite large. The largest living species is the basking shark (Cetorhinus maximus) of the worlds northern temperate oceans, also the second largest fish. The largest specimen, which was examined in 1851, measured 12.3 m (40 ft) long and weighed 16 tonnes.[5] Perhaps the most famous "big fish," is the great white shark (Carcharodon carcharias). Specimens have been measured up to 6.4 m (21 ft) and weighing 3,312 kg (7,302 lb), with great whites of at least 7 m (23 ft) long generally accepted.[5][90] The common thresher (Alopias vulpinus), can grow to 7.6 m (25 ft) and weigh over 510 kg (1,120 lb), but much of its length is comprised by its extreme tail.[91][92] Odd and recently discovered giants also live in this order: the slender, sword-snouted goblin shark (Mitsukurina owstoni), with unweighed specimens of up to approximately 6.17 m (20.2 ft), and the massive megamouth shark (Megachasma pelagios), up to 5.6 m (18 ft) long and a weight of 1,215 kg (2,679 lb).',
//     bony_fish: false,
//     cartilaginous_fish: true,
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cetorhinus_maximus_by_greg_skomal.JPG/1280px-Cetorhinus_maximus_by_greg_skomal.JPG',
//     liked: false,
//   },
// ]

describe('<FishContainer />', () => {
  const container = shallow(<FishContainer fish={ fish } />)

  it('is wrapped in a div with class name "fish" & "wrapper"', () => {
    expect(container).to.have.className('fish')
    expect(container).to.have.className('wrapper')
  })

  it('renders all fishes as a FishItem', () => {
    expect(container).to.have.exactly(6).descendants(FishItem)
  })
})
