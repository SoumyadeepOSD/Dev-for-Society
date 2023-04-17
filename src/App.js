import './index.css';
import '../src/App.css';
import Brand from './components/Hero/brand';
import Ideas from './components/Hero/ideas';
import Mission from './components/Hero/mission';
import Bonding from './components/Hero/bonding';
import MainTitle from './components/Main/maintitle';
import { CardComponent } from './components/Main/cards';



function App() {
  return (
    <div className='App'>
      <Brand/>
      <Mission/>
      <Ideas/>
      <Bonding/>
      <MainTitle/>
      <CardComponent/>
    </div>
  );
}

export default App;
