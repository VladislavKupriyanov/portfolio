import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.first_letter}>K</div>
                    <div className={styles.second_letter}>V</div>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <a href="#aboutme" className={styles.nav_link}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className={styles.nav_link}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className={styles.nav_link}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contacts" className={styles.nav_link}>
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
