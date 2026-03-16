import { NavLink } from "react-router-dom";

function NavItem({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <NavLink to={to} onClick={onClick} className={
            ({isActive}) => `px-4 py-1 text-center font-light whitespace-nowrap
             ${isActive ? 'bg-accent-light/20 rounded-md text-accent' : 'hover:bg-text/20 hover:rounded-md'}`
            }>
        {({isActive}) => <span className="flex items-center justify-center gap-1">
        {isActive && <span className="w-2 h-2 bg-accent rounded-full"></span>}
        {children}
        </span>}
        </NavLink>
    )
}

export default NavItem