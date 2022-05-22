import React, {useState} from 'react';
import {Navbar} from "./Components/Navbar"
import {Footer} from "./Components/Footer"
import {MainScreen} from "./Components/MainScreen"
import {Cart} from "./Components/Cart"
import {About} from "./Components/About"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Cinder',
      author: 'Marissa Meyer',
      imagePath: 'cinder.jpg',
      content: `A forbidden romance.
      A deadly plague.
      Earth's fate hinges on one girl . . .
      CINDER, a gifted mechanic in New Beijing, is also a cyborg. She's reviled by her stepmother and blamed for her stepsister's sudden illness. But when her life becomes entwined with the handsome Prince Kai's, she finds herself at the centre of a violent struggle between the desires of an evil queen - and a dangerous temptation.
      Cinder is caught between duty and freedom, loyalty and betrayal. Now she must uncover secrets about her mysterious past in order to protect Earth's future.
      This is not the fairytale you remember. But it's one you won't forget.`
    }, 
    {
      id: 2,
      name: 'Scarlet',
      author: 'Marissa Meyer',
      imagePath: 'scarlet.jpg',
      content: `The second book in The Lunar Chronicles series by Marissa Meyer.
      This is not the fairytale you remember. But it's one you won't forget.
      SCARLET BENOIT'S grandmother is missing. The police have closed her case. The only person Scarlet can turn to is Wolf, a street fighter she does not trust, but they are drawn to each other.
      Meanwhile, in New Beijing, Cinder will become the Commonwealth's most wanted fugitive - when she breaks out of prison to stay one step ahead of vicious Queen Levana.
      As Scarlet and Wolf expose one mystery, they encounter Cinder and a new one unravels. Together they must challenge the evil queen, who will stop at nothing to make Prince Kai her husband, her king, her prisoner . . .`
    }, 
    {
      id: 3,
      name: 'Cress',
      author: 'Marissa Meyer',
      imagePath: 'cress.jpg',
      content: `Cress is the third book in the bestselling Lunar Chronicles series, following Cinder and Scarlet.
      Incarcerated in a satellite, an expert hacker and out to save the world - Cress isn't your usual damsel in distress.
      CRESS grew-up as a prisoner. With only netscreens for company she's forced to do the bidding of the evil Queen Levana. Now that means tracking down Cinder and her handsome accomplice Emperor Kai. But little does Levana know that those she seeks, and the man she loves, are plotting her downfall . . .
      As paths cross and the price of freedom rises, happily ever after has never seemed further away for Cress, Scarlet and Cinder.`
    },
    {
      id: 4,
      name: 'Winter',
      author: 'Marissa Meyer',
      imagePath: 'winter.jpg',
      content: `Don't miss the thrilling final chapter of Marissa Meyer's Lunar Chronicles series.
      Princess Winter is admired for her grace, kindness and beauty, despite the scars on her face. She's said to be even more breath-taking than her stepmother, Queen Levana...
      When Winter develops feelings for the handsome palace guard, Jacin, she fears the evil Queen will crush their romance before it has a chance to begin.
      But there are stirrings against the Queen across the land. Together with the cyborg mechanic, Cinder, and her allies, Winter might even find the power to launch a revolution and win a war that's been raging for far too long.
      Can Cinder, Scarlet, Cress, and Winter claim their happily ever afters by defeating Levana once and for all?`
    }
  ])

  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainScreen list={list}/>}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
