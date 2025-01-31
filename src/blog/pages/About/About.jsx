import './about.css';

const About = () => {
    return (
        <div className="about">
            <h1>Rólunk</h1>

            <section>

                <figure>
                    <img src="/assets/img/úti fotók/Istmuzesi.jpg" alt="Múzeum" />
                </figure>

                <div>
                    <p>
                        Ezen az oldalon saját készítésű természet- és útifotóim találhatóak.
                    </p>
                    <p>
                        A képek felhasználása bármely más weboldalon szigorúan tilos!
                    </p>
                    <p>
                        Képeim megtalálhatóak az Instagram-on is @bettig_l_s profilnév alatt.
                    </p>
                    <p>
                        Köszönönöm a látogatást!
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;