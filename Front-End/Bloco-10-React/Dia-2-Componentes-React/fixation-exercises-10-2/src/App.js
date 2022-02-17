import catPhoto from './cat.jpg'
import Image from './Image';

function App() {
  return (
    <div className="App">
      <Image source={catPhoto} alternativeText= 'Cute cat staring'/>
    </div>
  );
}

export default App;
