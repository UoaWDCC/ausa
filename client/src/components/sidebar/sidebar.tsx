import React from "react";
import { IconType } from "react-icons/lib";
import { IoLogOut } from "react-icons/io5";

interface SidebarLink {
    label: string;
    href: string;
    icon?: IconType;
}
interface SidebarProps {
    links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = React.memo(({links}) => {
    return (
        <div className="w-64 pt-30 pb-10 h-full min-h-[100vh] bg-[#7BB8E4] text-white px-10 flex flex-col justify-between">
        <div className="space-y-2">
            {links.map((link) => (
                <React.Fragment key={link.label}>
                    <div className="grid grid-cols-5 items-center text-xl">
                    {link.icon && <link.icon/>}
                    <a href={link.href} className="hover:underline col-start-2">
                        {link.label}
                    </a>
                    </div>
                </React.Fragment>
            ))}
        </div>
        <div>
            <div className="grid grid-cols-5 items-center text-xl">
                <IoLogOut className="col-start-1" />
                <a href="/logout" className="hover:underline col-start-2">Logout</a>
            </div>
        </div>
        </div>
    );
})

Sidebar.displayName = "Sidebar";

export default Sidebar;