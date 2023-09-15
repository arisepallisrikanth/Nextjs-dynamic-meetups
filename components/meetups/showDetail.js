// import { Fragment } from "react";
import styles from './showDetail.module.css';
function showDetail(props){
    return (
        <section className={styles.detail} >
            <img src={props.src} alt={props.title}/>    
            <p className={styles.high}>{props.title}</p>
            <address>{props.address}</address>
        </section>

    )
}
export default showDetail