import CurriculumVitae from './components/CurriculumVitae/CurriculumVitae'
import './App.css'

function App() {
  return (
    <div>
      <div className='header'/>
      <div className='layout'>
        <CurriculumVitae/>
        <a href="https://wa.me/5511913317000" class="float" target="_blank" rel='noreferrer'>
        <i class="fa fa-whatsapp my-float"></i>
        </a>
        <div className='footer'>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
