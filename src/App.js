import React, { PureComponent } from 'react'
import Title from './components/Title'
import FishContainer from './fish/FishContainer'

export const fish = [
  {
    _id: '1',
    name: 'Sturgeons',
    latin: 'Acipenseriformes',
    summary: 'The largest species is the beluga sturgeon (Huso huso) of the Caspian and Black seas, the only extant bony fish to rival the massiveness of the ocean sunfish. The largest specimen considered reliable (based on remains) was caught in Volga estuary in 1827 and measured 7.3 m (24 ft) and weighed 1,474 kg (3,250 lb).[5] The slightly smaller kaluga (Huso dauricus) or great Siberian sturgeon has been weighed reliably up to 1,140 kg (2,510 lb) (Berg, 1932) and a length of 5.6 m (18 ft).[5][7] The North American white sturgeon (Acipenser transmontanus), unverified to 907 kg (2,000 lb) and 6.1 m (20 ft), Chinese, European Oceanic, and the Russian sturgeon (A. gueldenstaedtii), at as much as 1,000 kg (2,200 lb) and 5.5 m (18 ft) for a 75-year-old female, also can attain great sizes.[5] Atlantics and Baikal sturgeons are following as well. These fish are sometimes called the largest freshwater fish but sturgeons spend a great deal of time in brackish water and switch back and forth between saltwater and freshwater environments in their life cycle. Also included in this order are the paddlefish and the Chinese Paddlefish (Psephurus gladius), which may now be extinct and is at least critically endangered, is also a very large fish. Reportedly, fisherman as recently as the 1950s have caught paddlefish measuring up to 6.7 m (22 ft) in total length, although no specimen greater than 3.1 m (10 ft) has been scientifically measured. The weight of the Chinese Paddlefish is reportedly 300 to 500 kg (660 to 1,100 lb).',
    bony_fish: true,
    cartilaginous_fish: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Beluga.JPG/1920px-Beluga.JPG',
    liked: false,
  },
  {
    _id: '2',
    name:'Sunfish',
    latin:'Mola mola',
    summary:'The largest living bony fish (superclass Osteichthyes, which includes both ray-finned and lobe-finned fish) is the widely distributed ocean sunfish (Mola mola), a member of the order Tetraodontiformes. The record size sunfish crashed into a boat off Bird Island, Australia in 1910 and measured 4.3 m (14 ft) from fin-to-fin, 3.1 m (10 ft) in length and weighed about 2,300 kg (5,100 lb).',
    bony_fish: true,
    cartilaginous_fish: false,
    image:'https://upload.wikimedia.org/wikipedia/commons/9/98/Mola_mola.jpg',
    liked: false,
  },
  {
    _id: '3',
    name:'Eels',
    latin:'Anguilliformes',
    summary:'The largest species of "true eel," if measured in weight and overall bulk, is the European conger (Conger conger). The maximum size of this species has been reported to 3 m (9.8 ft) and a mass of 110 kg (240 lb).[12] Several moray eels can equal or exceed the previous eel in length but do not weigh as much. The longest fish in the order, at up to 4 m (13 ft), is the slender giant moray (Strophidon sathete) of the Indo-Pacific oceans.',
    bony_fish: true,
    cartilaginous_fish: false,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/European_conger.jpg/1920px-European_conger.jpg',
    liked: false,
  },
  {
    _id: '4',
    name: 'Ground sharks',
    latin: 'Carcharhiniformes',
    summary: 'The largest species of this order is the widely distributed tiger shark (Galeocerdo cuvier). Specimens have been verified to at least 5.5 m (18 ft) but even larger ones have been reported. One specimen, a gravid female caught off Australia and measuring only 5.5 m (18 ft) long, weighed an exceptional 1,524 kg (3,360 lb).[5] A female caught in 1957 reportedly measured 7.4 m (24 ft) and weighing 3,110 kg (6,860 lb), although this very outsized shark is not known to have been confirmed.[82] The largest of the infamous "requiem sharks" (in the Carcharhinus genus) seems to be the dusky shark (C. obscurus), at up to 4.2 m (14 ft) and a weight of 350 kg (770 lb).[83] However, the bulkier bull shark (C. leucas) has been estimated to weigh about 575 kg (1,268 lb) in recent specimens that measured over 4 m (13 ft) long.[84] The largest hammerhead shark is the great hammerhead (Sphyrna mokarran), which can reach 6.1 m (20 ft) and weigh 500 kg (1,100 lb).[85] The most species-rich shark family, the catsharks, are fairly small-bodied. The largest, the nursehound (Scyliorhinus stellaris), can grow up to 1.7 m (5.6 ft) and a weight of at least 10.8 kg (24 lb).',
    bony_fish: false,
    cartilaginous_fish: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tiger_shark%2C_Hawaii_Aii.jpg/1024px-Tiger_shark%2C_Hawaii_Aii.jpg',
    liked: true,
  },
  {
    _id: '5',
    name: 'Mackerel sharkes',
    latin: 'Lamniformes',
    summary: 'Most species in this order grow quite large. The largest living species is the basking shark (Cetorhinus maximus) of the worlds northern temperate oceans, also the second largest fish. The largest specimen, which was examined in 1851, measured 12.3 m (40 ft) long and weighed 16 tonnes.[5] Perhaps the most famous "big fish," is the great white shark (Carcharodon carcharias). Specimens have been measured up to 6.4 m (21 ft) and weighing 3,312 kg (7,302 lb), with great whites of at least 7 m (23 ft) long generally accepted.[5][90] The common thresher (Alopias vulpinus), can grow to 7.6 m (25 ft) and weigh over 510 kg (1,120 lb), but much of its length is comprised by its extreme tail.[91][92] Odd and recently discovered giants also live in this order: the slender, sword-snouted goblin shark (Mitsukurina owstoni), with unweighed specimens of up to approximately 6.17 m (20.2 ft), and the massive megamouth shark (Megachasma pelagios), up to 5.6 m (18 ft) long and a weight of 1,215 kg (2,679 lb).',
    bony_fish: false,
    cartilaginous_fish: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cetorhinus_maximus_by_greg_skomal.JPG/1280px-Cetorhinus_maximus_by_greg_skomal.JPG',
    liked: false,
  },
  {
    _id: '6',
    name: 'Skates and allies',
    latin: 'Rajiformes',
    summary: 'The largest and most diverse order of rays largest species is the giant guitarfish (Rhynchobatus djiddensis) of the Red Sea and the eastern Indian ocean. The top size of the species is 227 kg (500 lb) and 3.1 m (10 ft).[111] The largest of the skates is the common skate (Dipturus batis). This species can grow up to 2.85 m (9.4 ft) in length and weigh 97.1 kg (214 lb).',
    bony_fish: false,
    cartilaginous_fish: true,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rhynchobatus_djiddensis_durban.jpg/1920px-Rhynchobatus_djiddensis_durban.jpg',
    liked: false,
  }

]

class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      fish
    }
  }

  updateFish(_id, liked) {
    // debugger
    console.log("updating fish")
    debugger
    // console.log(_id)
  }

  render() {
    const { fish } = this.state

    return (
      <div>
        <Title content="Hello fishies" />
        <FishContainer fish={ fish } onChange={this.updateFish} />
      </div>
    )
  }
}

export default App
