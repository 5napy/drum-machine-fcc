import './App.css';
import { useEffect } from 'react';

const pads = [
  { key: "Q", id: "Heater-1", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
  { key: "W", id: "Heater-2", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
  { key: "E", id: "Heater-3", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
  { key: "A", id: "Heater-4", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
  { key: "S", id: "Clap", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
  { key: "D", id: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
  { key: "Z", id: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
  { key: "X", id: "Kick", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
  { key: "C", id: "Closed-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
];

function App() {

  useEffect(() => {
    const handleKeydown = (e) => {
      const key = e.key.toUpperCase();
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        const pad = pads.find(p => p.key === key);
        document.getElementById("display").innerText = pad.id;

        const button = document.getElementById(pad.id); //Class to manage key press on keyboard
        button.classList.add('active');
      }
    };
    const handleKeyup = (e) => {
      const key = e.key.toUpperCase();
      const pad = pads.find(p => p.key === key);
      if (pad) {
        const button = document.getElementById(pad.id);
        button.classList.remove('active');
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const playSound = (pad) => {
    const audio = document.getElementById(pad.key);
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerText = pad.id;
  };

  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="buttons">
      {pads.map((pad) => (
        <button
          key={pad.key}
          className="drum-pad"
          id={pad.id}
          onClick={() => playSound(pad)}
        >
          {pad.key}
          <audio className="clip" id={pad.key} src={pad.src}></audio>
        </button>

      ))}
      </div>
    </div>
  );
}

export default App;
