import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsYoutube,
  BsTwitterX,
} from 'react-icons/bs';
import BlueskyLogo from './bluesky-solid-sharp.svg';

const socialRefs = [
  {
    path: 'https://www.instagram.com/mieux_voter/?hl=fr',
    name: 'instagram',
    icon: <BsInstagram />,
  },
  {
    path: 'https://bsky.app/profile/mieuxvoter.bsky.social',
    name: 'bsky',
    icon: <BlueskyLogo/>,
  },
  {
    path: 'https://www.linkedin.com/company/mieux-voter/',
    name: 'linkedin',
    icon: <BsLinkedin />,
  },
  {
    path: 'https://www.facebook.com/mieuxvoter.fr',
    name: 'facebook',
    icon: <BsFacebook />,
  },
  {
    path: 'https://www.youtube.com/channel/UCNnvjrbesSdju53YX7ijtyQ',
    name: 'youtube',
    icon: <BsYoutube />,
  },
  {
    path: 'https://x.com/Mieux_voter/',
    name: 'x',
    icon: <BsTwitterX />,
  },
];

export default socialRefs;
