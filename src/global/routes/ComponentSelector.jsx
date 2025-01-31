import LoginForm from "../../blog/auth/components/LoginForm/LoginForm";
import RegisterForm from "../../blog/auth/components/registerForm/RegisterForm";
import About from "../../blog/pages/About/About";
import Homepage from "../../blog/pages/Homepage/Homepage";
import Photopage from "../../blog/pages/photo/Photopage";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PhotoGalery from "../../blog/pages/photoGalery/PhotoGalery";
import UserProfile from "../../blog/pages/user/components/userProfile/UserProfile";

const ComponentSelector = () => {

    const pathname = window.location.pathname;

    let ComponentToLoad = Homepage;

    switch (pathname) {
        case '/': ComponentToLoad = Homepage;
        break;

        case '/about': ComponentToLoad = About;
        break;

        case '/photopage': ComponentToLoad = Photopage;
        break;

        case '/login': ComponentToLoad = LoginForm;
        break;

        case '/register': ComponentToLoad = RegisterForm;
        break;

        case '/auth/userprofile': ComponentToLoad = UserProfile;

        case '/photogalery': ComponentToLoad = PhotoGalery;
        break;

        default: ComponentToLoad = () => (<h1>404</h1>);
    }

    return (
        <ComponentToLoad />
    );
}

export default ComponentSelector;
