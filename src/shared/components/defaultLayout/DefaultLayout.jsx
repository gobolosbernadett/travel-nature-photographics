import './default-layout.css';
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteHeader from "../SiteHeader/SiteHeader";


const DefaultLayout = ({ children }) => {

    return (
        <div className="default-layout">
            <SiteHeader/>
            
            { children }

            <SiteFooter/>
        </div>
    );
}

export default DefaultLayout;
