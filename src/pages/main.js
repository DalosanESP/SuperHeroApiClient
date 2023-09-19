import React, { useState } from 'react'; // Asegúrate de importar 'useState' desde 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/main.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Main() {
    const [nameOfHero, setNameOfHero] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Agrega esto para evitar que el formulario se envíe por defecto
        navigate(`/character/${nameOfHero}`);
    };

    return (
        <div className={styles.gif}>
           

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.logo}>
                        Super<span className={styles.hero}>Hero</span>
                    </h1>
                    <span className={styles.description}>Explore a database of superheroes</span>
                </div>
                <form className={styles["search-form"]} onSubmit={handleSubmit}>
                    <div className={styles["search-input-container"]}>
                        <input
                            type="text"
                            className={styles["search-input"]}
                            value={nameOfHero}
                            onChange={(e) => setNameOfHero(e.target.value)}
                            placeholder="Search superheroes..."
                        />
                        <button type="submit" className={styles["search-button"]}>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <br></br>
            <img src="https://i.pinimg.com/originals/4c/5f/5c/4c5f5c71edccb657b8fdee89e568bc03.gif" alt="" />
        </div>
    );
}

export default Main;
