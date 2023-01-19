import styles from "../styles/btn.module.css"

function Button(props) {
    return (
        <>
            <button className={styles.btn}>{props.name}</button>
        </>
    );
}

export default Button;