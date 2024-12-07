import './App.css'
import './style.scss'
import React, { useState } from 'react';

const SolarExplorer: React.FC = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<string>('mars');

    const handlePlanetChange = (planet: string) => {
        setSelectedPlanet(planet);
    };


    const [activePanel, setActivePanel] = useState<string | null>(null);

    const handleTogglePanel = (panelId: string) => {
        setActivePanel(prevPanel => (prevPanel === panelId ? null : panelId));
    };

    const planets = [
        {
            id: 'Mercury',
            title: 'Mercury',
            content: [
                'Mercury is the closest planet to the sun...',
                'A year on Mercury is just 88 days long...',
                'Mercury is the smallest planet in the Solar System...',
                'Mercury is the second densest planet...',
                'Mercury has wrinkles...',
            ],
            imageSrc: 'https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&ssl=1'
        },
        {
            id: 'Venus',
            title: 'Venus',
            content: [
                'Venus, the second planet from the sun...',
                'A day on Venus lasts longer than a year...',
                'Venus rotates in the opposite direction...',
                'Venus is the second brightest object in the night sky...',
                'Atmospheric pressure on Venus is 92 times greater than the Earth’s...',
            ],
            imageSrc: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg'
        },
        {
            id: 'Earth',
            title: 'Earth',
            content: [
                'Earth, our home, is the third planet from the sun...',
                'The Earth’s rotation is gradually slowing...',
                'The Earth was once believed to be the centre of the universe...',
                'Earth has a powerful magnetic field...',
                'There is only one natural satellite of the planet Earth...',
            ],
            imageSrc: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id: 'Mars',
            title: 'Mars',
            content: [
                'Mars is the fourth planet from the sun...',
                'Mars and Earth have approximately the same landmass...',
                'Mars is home to the tallest mountain in the solar system...',
                'Only 18 missions to Mars have been successful...',
                'Mars has the largest dust storms in the solar system...',
            ],
            imageSrc: 'https://1.bp.blogspot.com/-ou7Je3OVg6U/WYtxDqjNp_I/AAAAAAAACSQ/fsopS5VtFg4bmlv8hQNfiRYfJqTygCotQCLcBGAs/s2048/Martian%2Blandscape%2Bby%2BAmante%2BLombardi.jpg'
        },
        {
            id: 'Jupiter',
            title: 'Jupiter',
            content: [
                'Jupiter is the largest planet in the solar system...',
                'Jupiter helped revolutionize the way we saw the universe...',
                'Jupiter is the fourth brightest object in the solar system...',
                'The ancient Babylonians were the first to record their sightings of Jupiter...',
                'Jupiter has the shortest day of all the planets...',
            ],
            imageSrc: 'http://hanaleikauaivacation.com/wp-content/uploads/parser/jupiter-landscape-1.jpg'
        },
        {
            id: 'Saturn',
            title: 'Saturn',
            content: [
                'Saturn is the sixth planet from the sun...',
                'Saturn can be seen with the naked eye...',
                'Saturn was known to the ancients...',
                'Saturn is the flattest planet...',
                'Saturn orbits the Sun once every 29.4 Earth years...',
            ],
            imageSrc: 'http://ak0.picdn.net/shutterstock/videos/4049260/thumb/1.jpg'
        },
        {
            id: 'Uranus',
            title: 'Uranus',
            content: [
                'Uranus is the seventh planet from the sun...',
                'Uranus was officially discovered by Sir William Herschel in 1781...',
                'Uranus turns on its axis once every 17 hours, 14 minutes...',
                'Uranus makes one trip around the Sun every 84 Earth years...',
                'Uranus is often referred to as an “ice giant” planet...',
            ],
            imageSrc: 'http://www.cosmosup.com/wp-content/uploads/2016/02/Uranus-Facts-About-the-Planet-Uranus-700x325.jpg'
        },
        {
            id: 'Neptune',
            title: 'Neptune',
            content: [
                'Neptune is the eighth planet from the sun...',
                'Neptune was not known to the ancients...',
                'Neptune spins on its axis very rapidly...',
                'Neptune is the smallest of the ice giants...',
                'The atmosphere of Neptune is made of hydrogen and helium...',
            ],
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8Dd14tbXAzh1iz-EJl9tulRwH7Bb-SxX6sXpKFDbqb-NKwpE'
        },
        {
            id: 'Pluto',
            title: 'Pluto',
            content: [
                'Pluto, once considered the ninth and most distant planet from the sun...',
                'Pluto is now considered the largest known dwarf planet in the solar system...',
            ],
            imageSrc: '' // Add an image for Pluto if you have one
        }
    ];



    return (
        <>
            <h1 className="logo">
                Solar explorer
                <span>in only CSS</span>
            </h1>

            <input
                className="planet9"
                id="pluto"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'pluto'}
                onChange={() => handlePlanetChange('pluto')}
            />
            <label className="menu pluto" htmlFor="pluto">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Pluto
                    </h2>
                    <h3>39.5 AU</h3>
                </div>
            </label>

            <input
                className="planet8"
                id="neptune"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'neptune'}
                onChange={() => handlePlanetChange('neptune')}
            />
            <label className="menu neptune" htmlFor="neptune">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Neptune
                    </h2>
                    <h3>30.06 AU</h3>
                </div>
            </label>

            <input
                className="planet7"
                id="uranus"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'uranus'}
                onChange={() => handlePlanetChange('uranus')}
            />
            <label className="menu uranus" htmlFor="uranus">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Uranus
                    </h2>
                    <h3>19.18 AU</h3>
                </div>
            </label>

            <input
                className="planet6"
                id="saturn"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'saturn'}
                onChange={() => handlePlanetChange('saturn')}
            />
            <label className="menu saturn" htmlFor="saturn">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Saturn
                    </h2>
                    <h3>9.539 AU</h3>
                </div>
            </label>

            <input
                className="planet5"
                id="jupiter"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'jupiter'}
                onChange={() => handlePlanetChange('jupiter')}
            />
            <label className="jupiter menu" htmlFor="jupiter">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Jupiter
                    </h2>
                    <h3>5.203 AU</h3>
                </div>
            </label>

            <input
                className="planet4"
                id="mars"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'mars'}
                onChange={() => handlePlanetChange('mars')}
            />
            <label className="mars menu" htmlFor="mars">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Mars
                    </h2>
                    <h3>1.524 AU</h3>
                </div>
            </label>

            <input
                className="planet3"
                id="earth"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'earth'}
                onChange={() => handlePlanetChange('earth')}
            />
            <label className="earth menu" htmlFor="earth">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Earth
                    </h2>
                    <h3>1 AU</h3>
                </div>
            </label>

            <input
                className="planet2"
                id="venus"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'venus'}
                onChange={() => handlePlanetChange('venus')}
            />
            <label className="menu venus" htmlFor="venus">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Venus
                    </h2>
                    <h3>0.723 AU</h3>
                </div>
            </label>

            <input
                className="planet1"
                id="mercury"
                type="radio"
                name="planet"
                checked={selectedPlanet === 'mercury'}
                onChange={() => handlePlanetChange('mercury')}
            />
            <label className="menu mercury" htmlFor="mercury">
                <div className="preview"></div>
                <div className="info">
                    <h2>
                        <div className="pip"></div>
                        Mercury
                    </h2>
                    <h3>0.39 AU</h3>
                </div>
            </label>


            <div className="solar">
                {/* Mercury */}
                <div className="solar_systm">
                    <div className="mercury planet">
                        <div className="mercury planet_description">
                            <h2>Planet</h2>
                            <h1>Mercury</h1>
                            <p>The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.</p>
                            <label htmlFor="readMercury">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Venus */}
                <div className="solar_systm">
                    <div className="venus planet">
                        <div className="planet_description venus">
                            <h2>Planet</h2>
                            <h1>Venus</h1>
                            <p>Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.</p>
                            <label htmlFor="readVenus">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Earth */}
                <div className="solar_systm">
                    <div className="earth planet">
                        <div className="moon moon">
                            <h3>Moon</h3>
                            <h2>Moon</h2>
                        </div>
                        <div className="m trajectory"></div>
                        <div className="earth planet_description">
                            <h2>Planet</h2>
                            <h1>Earth</h1>
                            <p>Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.</p>
                            <label htmlFor="readEarth">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Mars */}
                <div className="solar_systm">
                    <div className="mars planet">
                        <div className="deimos moon">
                            <h3>Moon</h3>
                            <h2>Deimos</h2>
                        </div>
                        <div className="d trajectory"></div>
                        <div className="moon phoebos">
                            <h3>Moon</h3>
                            <h2>Phoebos</h2>
                        </div>
                        <div className="p trajectory"></div>
                        <div className="mars planet_description">
                            <h2>Planet</h2>
                            <h1>Mars</h1>
                            <p>Fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war often described as the “Red Planet”.</p>
                            <label htmlFor="readMars">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Jupiter */}
                <div className="solar_systm">
                    <div className="jupiter planet">
                        <div className="lo moon">
                            <h3>Moon</h3>
                            <h2>Io</h2>
                        </div>
                        <div className="europa moon">
                            <h3>Moon</h3>
                            <h2>Europa</h2>
                        </div>
                        <div className="ganymede moon">
                            <h3>Moon</h3>
                            <h2>Ganymede</h2>
                        </div>
                        <div className="lop trajectory"></div>
                        <div className="eu trajectory"></div>
                        <div className="ga trajectory"></div>
                        <div className="jupiter planet_description">
                            <h2>Planet</h2>
                            <h1>Jupiter</h1>
                            <p>Jupiter is the largest planet in the solar system. Fittingly, it was named after the king of the gods in Roman mythology.</p>
                            <label htmlFor="readJupiter">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Saturn */}
                <div className="solar_systm">
                    <div className="planet saturn">
                        <div className="moon titan">
                            <h3>Moon</h3>
                            <h2>Titan</h2>
                        </div>
                        <div className="dione moon">
                            <h3>Moon</h3>
                            <h2>Dione</h2>
                        </div>
                        <div className="enceladus moon">
                            <h3>Moon</h3>
                            <h2>Enceladus</h2>
                        </div>
                        <div className="ti trajectory"></div>
                        <div className="di trajectory"></div>
                        <div className="enc trajectory"></div>
                        <div className="planet_description saturn">
                            <h2>Planet</h2>
                            <h1>Saturn</h1>
                            <p>Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans.</p>
                            <label htmlFor="readSaturn">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Uranus */}
                <div className="solar_systm">
                    <div className="planet uranus">
                        <div className="miranda moon">
                            <h3>Moon</h3>
                            <h2>Miranda</h2>
                        </div>
                        <div className="ariel moon">
                            <h3>Moon</h3>
                            <h2>Ariel</h2>
                        </div>
                        <div className="moon umbriel">
                            <h3>Moon</h3>
                            <h2>Umbriel</h2>
                        </div>
                        <div className="mir trajectory"></div>
                        <div className="ari trajectory"></div>
                        <div className="trajectory umb"></div>
                        <div className="planet_description uranus">
                            <h2>Planet</h2>
                            <h1>Uranus</h1>
                            <p>The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.</p>
                            <label htmlFor="readUranus">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Neptune */}
                <div className="solar_systm">
                    <div className="neptune planet">
                        <div className="moon triton">
                            <h3>Moon</h3>
                            <h2>Triton</h2>
                        </div>
                        <div className="moon proteus">
                            <h3>Moon</h3>
                            <h2>Proteus</h2>
                        </div>
                        <div className="moon nereid">
                            <h3>Moon</h3>
                            <h2>Nereid</h2>
                        </div>
                        <div className="trajectory tri"></div>
                        <div className="pro trajectory"></div>
                        <div className="ner trajectory"></div>
                        <div className="neptune planet_description">
                            <h2>Planet</h2>
                            <h1>Neptune</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                            <label htmlFor="readNeptune">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>

                {/* Pluto */}
                <div className="solar_systm">
                    <div className="planet pluto">
                        <div className="planet_description pluto">
                            <h2>Dwarf planet</h2>
                            <h1>Pluto</h1>
                            <p>Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system.</p>
                            <label htmlFor="readPluto">
                                <a>
                                    Read Mor
                                    <span>e</span>
                                </a>
                            </label>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>


            <div className="planet-info">
                {planets.map((planet) => (
                    <div key={planet.id}>
                        <input
                            className="read"
                            id={`read${planet.id}`}
                            type="radio"
                            name={`${planet.id}Read`}
                            checked={activePanel === planet.id}
                            onChange={() => handleTogglePanel(planet.id)}
                        />
                        <label className="closeBig" htmlFor={`close${planet.id}`}></label>
                        <input
                            className="read"
                            id={`close${planet.id}`}
                            type="radio"
                            name={`${planet.id}Read`}
                            checked={activePanel !== planet.id}
                            onChange={() => handleTogglePanel(planet.id)}
                        />
                        <div className="panel">
                            <h1>{planet.title}</h1>
                            <p>{planet.content[0]}</p>
                            <p>{planet.content[1]}</p>
                            <p>{planet.content[2]}</p>
                            <img src={planet.imageSrc} alt={planet.title} />
                            <h2>{planet.title} Facts</h2>
                            <ul>
                                {planet.content.slice(3).map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
};

export default SolarExplorer;
