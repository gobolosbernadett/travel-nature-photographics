import './homepage-article.css';

const HomepageArticle = () => {

    return (
        <div className='homepage-article'>
            <h1>Üdvözöllek a természet és úti fotózás világában!</h1>

            <section>
                <figure>
                    <img src="/assets/img/természet fotók/Viragzas.jpg" alt="Virágzás" />
                </figure>

                <div>
                    <p>
                        Gyermekkorom óta szeretem emlékeimet fotók formájában megőrizni. Utazásaim során készített fotóimnál törekszem átadni az aktuális hely hangulatát. Legyen az egy múzeum vagy egy belvárosi utcajelenet.
                    </p>
                    <p>
                        Úti fotózás mellett szeretek a természetben is fotózni. A színek harmóniája, adott esetben az állatok vagy rovarok jelenlétének megörökítése is fontos szempont. Igyekszem az állatokat nem zavarni jelenlétemmel.
                    </p>
                    <p>
                        Képeimet jelenleg egy Xiaomi Redmi Note 11 PRO készülékkel készítem, minimális képretusálással.
                    </p>
                    <p>
                        Gyere és nézz körül!
                    </p>
                </div>
            </section>
        </div>
    );
}

export default HomepageArticle;
