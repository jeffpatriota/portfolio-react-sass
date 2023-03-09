import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", site:"https://www.linkedin.com/in/jefferson-patriota/", icon: <FaLinkedin /> },
    { name: "github", site:"https://github.com/jeffpatriota", icon: <FaGithub /> },
    { name: "instagram", site:"https://www.instagram.com/jeffpatriota/", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.site} target="_blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon} 
                </a>
            ))}

        </section>
    )
};

export default SocialNetworks
