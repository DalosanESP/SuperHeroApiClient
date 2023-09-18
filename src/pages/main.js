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
        <div className={styles.background}>
            <div className={styles.formHero}>
                <div className="">
                    <h1 className={styles.title}>Superhero API</h1>
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={styles.searchInput}
                            value={nameOfHero}
                            onChange={(e) => setNameOfHero(e.target.value)}
                            placeholder="Search superheroes..."
                        />
                        <button className={styles.searchButton}>
                            Search
                        </button>
                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
