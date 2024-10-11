import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/JaydityaDhaka',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/jayditya_dhaka/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/jd03/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/JayD2712',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:dhakajayditya@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  }, // <-- Trailing comma added here
];

export default data;
