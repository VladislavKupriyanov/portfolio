import { useState } from 'react';
import { Header } from './Header';
import { MyParticles } from './Particles';
import styles from './App.module.css';
import { Main } from './Main';

export const App: React.FC = () => {
    const [mainColor] = useState('#61dafb');

    // const changeMainColor = () => {
    //     const newColor = '#0ABC5C';
    //     document.getElementsByTagName('body')[0].style.setProperty('--main-color', newColor);
    //     setMainColor(newColor);
    // };

    return (
        <div className={styles.app}>
            <MyParticles mainColor={mainColor} />
            <Header />
            <Main />
        </div>
    );
};
