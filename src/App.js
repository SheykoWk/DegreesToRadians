import ContainerConverter from './components/ContainerConverter';
import './App.css';
import trigonometria from './img/trigonometria.svg';
import wave from './img/wave.png';
function App() {
  return (
    <div className="App">
      <img className='img-wave' src={wave} alt=''/>
      <div className='container'>
        <div className='img'>
          <img src={trigonometria}  alt=''/>  
        </div>
        <ContainerConverter/>
      </div>
    </div>
  );
}

export default App;
