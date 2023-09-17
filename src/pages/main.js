import React, { useState } from 'react'; // Asegúrate de importar 'useState' desde 'react'
import { useNavigate } from 'react-router-dom';

function Main() {
    const [nameOfHero, setNameOfHero] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Agrega esto para evitar que el formulario se envíe por defecto
        navigate(`/character/${nameOfHero}`);
    };

    return (
        <div className="gif"> {/* Cambia 'class' a 'className' para las clases CSS */}
            <img src="https://i.pinimg.com/originals/4c/5f/5c/4c5f5c71edccb657b8fdee89e568bc03.gif" alt="" />

            <div className="container"> {/* Cambia 'class' a 'className' */}
                <div className="header"> {/* Cambia 'class' a 'className' */}
                    <h1 className="logo">Superhero API</h1> {/* Cambia 'class' a 'className' */}
                    <span>Explore a database of superheroes</span>
                </div>
                <form className="search-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        value={nameOfHero}
                        onChange={(e) => setNameOfHero(e.target.value)}
                        placeholder="Search superheroes..."
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Main;
