import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Carga todo, incluido parallax
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Podés usar esto si necesitás manipular el container luego
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0f172a" }, // slate-900
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "parallax",
              },
              resize: true,
            },
            modes: {
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: false },
            },
            size: {
              value: { min: 1, max: 3 },
              anim: { enable: false },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "out" },
              random: true,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
