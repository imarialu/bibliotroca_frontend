import { NavLink } from "react-router-dom";

export function SidebarLink({url, icon, text}){
    return(
        <li className="flex items-center">
            <NavLink to={url} className="flex items-center gap-1 p-1 md:p-2 rounded-lg text-darkpurple transition duration-500 ease hover:text-white md:hover:bg-darkpurple-tr">
                {icon}
                {text}
            </NavLink>
        </li>
    )
}