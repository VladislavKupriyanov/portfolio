import Particles from 'react-particles-js';

type PropsType = {
    mainColor: string;
};

export const MyParticles: React.FC<PropsType> = ({ mainColor }) => {
    return (
        <Particles
            params={{
                particles: {
                    color: {
                        value: mainColor,
                    },
                    number: {
                        value: 1000,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            speed: 1,
                            size_min: 0.3,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: 'bottom-left',
                        out_mode: 'out',
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 300,
                            duration: 2,
                        },
                    },
                },
            }}
        />
    );
};
