import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/img-jeff.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return  <aside id="sidebar">
            <img src={Avatar} alt="Jefferson Patriota" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/>
        </aside>;
    
};
export default Sidebar;