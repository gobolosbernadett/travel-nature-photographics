import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import getFirebaseApp from '../../../blog/firebase/firebaseApp/getFirebaseApp';

const SiteHeader = ({userEmail}) => {

    const [userData, setUserData] = useState(null);

    const app = getFirebaseApp();
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        setUserData(user);
        console.log(user);
    });

    return (
        <header>
            <nav userEmail={userData?.email || null} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/photogalery">Photogalery</a>
                            </li>
                        </ul>
                </div>
                <div>
                    <ul className="navbar-nav" >
                        <li className="nav-item" >
                        {
                        userEmail
                        ? <a className="nav-link" href="/auth/userprofile">{userEmail}</a>
                        : <a className="nav-link" href="/login">Login</a>
                        }               
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}

export default SiteHeader;
