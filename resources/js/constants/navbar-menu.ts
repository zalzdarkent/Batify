import { TbShirtFilled } from "react-icons/tb";
import { MdOutlineArticle } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

export const navbarMenu = [
    {
        url: 'katalog',
        label: 'Katalog',
        icon: () => TbShirtFilled
    },
    {
        url: 'artikel',
        label: 'Artikel',
        icon: () => MdOutlineArticle

    },
    {
        url: 'tentang-kami',
        label: 'Tentang Kami',
        icon: () => FaBuilding
    },
]