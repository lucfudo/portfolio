import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import CV  from "../../assets/cv_lucas_grondin.pdf";
import { LINK_GITHUB, LINK_LINKEDIN } from "../../constants/constants";

export const BUTTON_CONFIG = [
    {
      id: 'github',
      link: LINK_GITHUB,
      icon: <AiFillGithub size="3rem" />,
    },
    {
      id: 'linkedin',
      link: LINK_LINKEDIN,
      icon: <AiFillLinkedin size="3rem" />,
    },
    {
      id: 'cv',
      link: CV,
      label: 'CV',
    },
  ];