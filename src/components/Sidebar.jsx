import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/img-jeff.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return  <aside id="sidebar">
            <img src={Avatar} alt="Jefferson Patriota" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/><br />

            <a href='https://drive.google.com/file/d/1Sjt7d7S_31gasm4UU7jQnuqNxJ3DlPqj/view?usp=sharing'target="_blank" className='btn'>Download CV</a>

            

        </aside>;


    
};
export default Sidebar;