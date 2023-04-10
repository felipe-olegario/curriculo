import CurriculumVitae from './components/CurriculumVitae/CurriculumVitae'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css'

function App() {
  const particlesInit = async (main) => { 
    await loadFull(main); 
  }; 
  return (
    <div>
      <div className='layout'>
      <div className='header'/>
        <CurriculumVitae/>
        <a href="https://wa.me/5511913317000" class="float" target="_blank" rel='noreferrer'>
        <i class="fa fa-whatsapp my-float"></i>
        </a>
        <div className='footer'>
          <p></p>
        </div>
      </div>
    <Particles 
      id="tsparticles" 
      init={particlesInit}
      options={{ 
        background: { 
          color: "rgb(10,10,25)", 
        }, 
        fpsLimit: 60, 
        particles: { 
          shape: { 
            type: "circle", 
          }, 
          size: { 
            random: { 
              enable: true, 
              minimumValue: 0.5, 
            }, 
            value: 1.4, 
          }, 
          color: { 
            value: "#f1f1f1", 
          }, 
          number: { 
            density: { 
              enable: true, 
              area: 1080, 
            }, 
            limit: 0, 
            value: 800, 
          }, 
          opacity: { 
            animation: { 
              enable: true, 
              minimumValue: 0.5, 
              speed: 1.6, 
              sync: false, 
            }, 
            random: { 
              enable: true, 
              minimumValue: 0.1, 
            }, 
            value: 1, 
          }, 
          interactivity: { 
            detectsOn: "canvas", 
            events: { 
              resize: true, 
            }, 
          }, 
        }, 
      }}
    />
    </div>
  );
}

export default App;
