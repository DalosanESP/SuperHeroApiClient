import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from '../assets/styles/character.module.css'

function Character() {
    const { nameOfHero } = useParams(); // Extraer la propiedad 'name' de los parámetros
    const [activeTab, setActiveTab] = useState("tab1");
    const [heroData, setHeroData] = useState(null);

    const handleLikeClick = () => {
        const icon = document.querySelector('svg');

        icon.classList.add('like');

        setTimeout(() => {
            icon.classList.remove('like');
        }, 1000);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Actualiza el estado cuando se hace clic en un tab
    };

    useEffect(() => {
        axios.get(`https://superheroapiserver-oe55-dev.fl0.io/search?name=${nameOfHero}`)
            .then(response => {
                setHeroData(response.data.results);
            })
            .catch(error => {
                console.error('Error al cargar datos desde la API:', error);
            });
    }, [nameOfHero]);
    return (
        <div>
            {heroData ? (
                <div className={styles.mainWrapper}>
                    <div className="app">
                        <div className="app-header">
                            <h2 className="app-header-title">Super<span>Hero.</span></h2>
                            <form className="app-header-search" method="GET" action="/search">
                                <input type="text" className="form-control" placeholder="Search your superhero here ..." name="name" />
                                {/* <button type="submit" className="search-btn">
                                    <i className="fas fa-search"></i>
                                </button> */}
                                <div className="search-list" id="search-list">
                                    {/* <!-- <div class = "search-list-item">
                                 <img src = "images/thumbnail-batman.jpg" alt = "">
                                 <p>Batman</p>
                             </div> --> */}
                                    <td>
                                        <h1></h1>
                                    </td>
                                </div>
                            </form>
                        </div>

                        <div className="app-body">
                            <div className="app-body-content">
                                <div className="app-body-content-thumbnail">
                                    <article>
                                        <img
                                            src={heroData.image.url}
                                            alt="Descripción de la imagen"
                                            onDoubleClick={() => handleLikeClick()}
                                        />

                                        <svg aria-label="I like it" fill="red" role="img" viewBox="0 0 48 48">
                                            <title>I like it</title>
                                            <path
                                                d="M24 44.5c-0.9 0-1.7-0.4-2.3-1.1C10.7 32 4 25.2 4 17.5 4 11.2 8.7 6 14.4 6 18 6 21.2 8.4 24 11c2.8-2.6 6-5 9.6-5 5.7 0 10.4 5.2 10.4 11.5 0 7.7-6.7 14.5-17.7 25.9-0.6 0.6-1.4 1-2.3 1z">
                                            </path>
                                        </svg>
                                    </article>
                                    <figcaption>Double click if you like it!</figcaption>
                                </div>

                                <div className="app-body-content-list">
                                    <div className="name">
                                        {heroData.name}
                                    </div>
                                    <div className="test">
                                        <button
                                            type="button"
                                            className={`tab-head-single ${activeTab === "tab1" ? "active-tab" : ""}`}
                                            onClick={() => handleTabClick("tab1")}
                                        >
                                            <span>Power Stats</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`tab-head-single ${activeTab === "tab2" ? "active-tab" : ""}`}
                                            onClick={() => handleTabClick("tab2")}
                                        >
                                            <span>Biography</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`tab-head-single ${activeTab === "tab3" ? "active-tab" : ""}`}
                                            onClick={() => handleTabClick("tab3")}
                                        >
                                            <span>Appearance</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`tab-head-single ${activeTab === "tab4" ? "active-tab" : ""}`}
                                            onClick={() => handleTabClick("tab4")}
                                        >
                                            <span>Connections</span>
                                        </button>
                                    </div>
                                    <div className="app-body-tabs-body">
                                        {/* <!-- Power Stats tab --> */}
                                        <ul className={`tab-body-single powerstats ${activeTab === "tab1" ? "show-tab" : ""}`} id="tab1">
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Intelligence</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.intelligence}
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Strength</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.strength}
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Speed</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.speed}
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Durability</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.durability}
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Power</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.power}
                                                </span>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa-solid fa-shield-halved"></i>
                                                    <span>Combat</span>
                                                </div>
                                                <span>
                                                    {heroData.powerstats.combat}
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className={`tab-body-single biography ${activeTab === "tab2" ? "show-tab" : ""}`} id="tab2">
                                            <li>
                                                <span>Full name</span>
                                                <span>
                                                    {heroData.biography['full-name']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Alert Egos</span>
                                                <span>
                                                    {heroData.biography['alter-egos']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Aliases</span>
                                                <span>
                                                    {heroData.biography.aliases}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Place of Birth</span>
                                                <span>
                                                    {heroData.biography['place-of-birth']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>First Appearance</span>
                                                <span>
                                                    {heroData.biography['first-appearance']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Publisher</span>
                                                <span>
                                                    {heroData.biography.publisher}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Alignment</span>
                                                <span>
                                                    {heroData.biography.alignment}
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className={`tab-body-single appearance ${activeTab === "tab3" ? "show-tab" : ""}`} id="tab3">
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Gender
                                                </span>
                                                <span>
                                                    {heroData.appearance.gender}
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Race
                                                </span>
                                                <span>
                                                    {heroData.appearance.race}
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Height
                                                </span>
                                                <span>
                                                    {heroData.appearance.height}
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Weight
                                                </span>
                                                <span>
                                                    {heroData.appearance.weight}
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Eye Color
                                                </span>
                                                <span>
                                                    {heroData.appearance['eye-color']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="fas fa-star"></i> Hair Color
                                                </span>
                                                <span>
                                                    {heroData.appearance['hair-color']}
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className={`tab-body-single connections ${activeTab === "tab4" ? "show-tab" : ""}`} id="tab4">
                                            <li>
                                                <span>Affiliation</span>
                                                <span>
                                                    {heroData.connections['group-affiliation']}
                                                </span>
                                            </li>
                                            <li>
                                                <span>Relatives</span>
                                                <span>
                                                    {heroData.connections.relatives}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
}

export default Character;