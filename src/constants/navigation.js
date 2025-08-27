import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { href } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionSimpleDuotone />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];
export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoMdHome />,
  },
  ...navigation,
  {
    label:'Search',
    href: '/search',
    icon:<IoIosSearch /> ,
  }
];
