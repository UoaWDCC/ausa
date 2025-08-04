import React from "react";
import { IconType } from "react-icons/lib";

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
        <div className="w-64 py-30 h-full min-h-[100vh] bg-[#7BB8E4] text-white px-10">
        <div className="space-y-2">
            {links.map((link) => (
                <React.Fragment key={link.label}>
                    <div className="flex items-center gap-2 text-xl">
                    {link.icon && <link.icon/>}
                    <a href={link.href} className="hover:underline">
                        {link.label}
                    </a>
                    </div>
                </React.Fragment>
            ))}
        </div>
        </div>
    );
})

Sidebar.displayName = "Sidebar";

export default Sidebar;