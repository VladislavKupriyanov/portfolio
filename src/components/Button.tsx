import styles from './Button.module.css';

type PropsType = {
    label: string;
    onClick: () => void;
};

export const Button: React.FC<PropsType> = ({ onClick, label }) => {
    return (
        <div onClick={onClick} className={styles.btn}>
            {label}
        </div>
    );
};
