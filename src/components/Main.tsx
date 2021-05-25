import { Button } from './Button';
import styles from './Main.module.css';

export const Main: React.FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.hello}>Hello, I'm</span>
                    <div className={styles.full_name}>
                        <span className={styles.first_name}>
                            <span className={styles.first_letter}>V</span>
                            ladislav
                        </span>
                        <span className={styles.last_name}>
                            <span className={styles.first_letter}>K</span>
                            upriyanov
                        </span>
                    </div>
                    <span className={styles.description}>Front-end Developer</span>
                    <span className={styles.stack}>HTML5 / CSS3 / JavaScript / React / Redux</span>
                </div>
                <div className={styles.btn}>
                    <Button label="Look portfolio" onClick={() => alert('click')} />
                </div>
            </div>
        </section>
    );
};
