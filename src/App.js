import React, { PureComponent } from 'react'
import Title from './components/Title'
import FishContainer from './fish/FishContainer'

const fish = [
  {
    name: 'Aal of Paling',
    latin: 'Anguilla anguilla',
    summary: 'Herkenning: 1. Het lichaam is slangachtig van vorm. 2. De borstvinnen bevinden zich direct achter de kop. 3. Op het achterste deel van het lichaam is, zowel onder als boven, een lange vinzoom aanwezig die uitloopt in de staartpunt. Buikvinnen ontbreken. Verspreiding: Noordoost Atlantische Oceaan, Noordzee, Oostzee, Middellandse Zee en Zwarte Zee van IJsland en Lapland in het noorden tot West-Afrika in het zuiden. In Nederland (steeds minder!) algemeen. Trekt meestal als doorzichtige glasaal van circa 6 cm lengte vanuit zee de binnenwateren in. Volwassen exemplaren trekken terug naar zee om zich voort te planten. De glasaalintrek is tegenwoordig sterk verminderd. Leefwijze: Trekt in het voorjaar als doorzichtige glasaal van circa 6 cm lengte vanuit zee de binnenwateren in, maar een gedeelte blijft hangen in de estuaria en dicht onder de kust. Wanneer de aal paairijp wordt, krijgen de flanken en buik een zilverglans, de rug wordt donkerder en het oog wordt groter. Deze zogenaamde ‘schieraal’ keert terug naar zee om zich voort te planten (vermoedelijk) in de Sargassozee, waarna ze sterven. Voedsel: Het voorkeursvoedsel bestaat uit wormen en kreeftachtigen, in zoet water ook uit insectenlarven. Grote exemplaren eten ook wel kleine vissen en weekdieren. Schieraal neemt geen voedsel tot zich.',
    image: 'https://www.wnf.nl/upload_mm/f/9/1/3818_fullimage_paling_00040871_1079x694.jpg',
  },
  {
    name:'Amerikaanse hondsvis',
    latin:'Umbra pygmaea',
    summary:'Herkenning: 1. Over de staartwortel loopt een donkere band. 2. De vinnen - zoals aangegeven bij de staartvin - zijn bolrond. 3. De rugvin ligt ver naar achteren.  Verspreiding: Uitheems; zeldzaam. Komt oorspronkelijk uit Noord-Amerika. In Noord-Brabant en Limburg plaatselijk vrij algemeen aanwezig in vennen en beken. Is goed bestand tegen verzuring van het water. Leefwijze: Voedsel: Voornamelijk insectenlarven, wormpjes, kleine kreeftachtigen en visbroed.',
    image:'http://images.naturalis.nl/original/134158.jpg',
  },
  {
    name:'Kesslers grondel',
    latin:'Neogobius kesslerii',
    summary:'Herkenning: 1. Ogen dicht bij elkaar en hoog in de kop geplaatst. Grote, brede kop met gezwollen wangen en lippen en een bovenstandige bek. Nek geschubd. 2. Buikvinnen aaneengegroeid tot een zuignap, waarmee de vis zich kan vastzetten op een harde ondergrond. 3. Lichaam en kop roodbruin gemarmerd. 4. De bases van beide rugvinnen raken elkaar. Rugvinnen met horizontale roodbruine banden op een lichtere ondergrond en zonder zwarte vlek.  Verspreiding: Uitheems, voor het eerst in Nederland waargenomen in 2007. Komt tegenwoordig met name in de grote rivieren algemeen voor. Zowel in zout als zoet water. Komt van oorsprong uit de Kaspische- en de Zwarte Zee en het stroomgebied van de Donau. Waarschijnlijk via het Main-Donaukanaal is Kessler’s grondel nu ook verspreid in het stroomgebied van de Rijn.  Leefwijze: Leeft bij voorkeur op stenige bodems (stortsteen). Kan meerdere keren per jaar paaien. De eieren worden afgezet op de onderzijde van stenen of in schelpen en worden bewaakt door het mannetje. Voedsel: Ongewervelde dieren, vooral kleine kreeftachtigen, maar ook kleine vissen.',
    image:'http://www.ravon.nl/portals/0/Pages%202/kesslers%20grondel.jpg',
  }
]
class App extends PureComponent {
  render() {
    return (
      <div>
        <Title content="Hello fishies" />
        <FishContainer fish={ fish } />
      </div>
    )
  }
}

export default App
