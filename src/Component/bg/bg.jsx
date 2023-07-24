import { useCallback } from "react";
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"

const Bg = ()=>{
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "",
                },
            },
            fpsLimit: 190,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000000",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 400,
                    },
                    value:60,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: .5, max: 2 },
                },
            },
            detectRetina: true,
        }}
    />
    );
}
export default Bg