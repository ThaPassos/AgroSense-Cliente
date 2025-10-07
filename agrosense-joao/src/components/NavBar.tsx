import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { LayoutDashboard, BarChart2, Leaf, Calendar, Wallet } from "lucide-react";
import logoEscrita from "../assets/logoEscrita2.png";

export default function NavBar() {
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
    { to: "/harvest", label: "Harvest", icon: <Leaf size={20} /> },
    { to: "/schedules", label: "Schedules", icon: <Calendar size={20} /> },
    { to: "/payments", label: "Payments", icon: <Wallet size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-52 bg-[#445816] text-[#ebe7d6] flex flex-col items-start p-6 space-y-6 z-50 font-novicento">
      <div className="font-bold text-[28px] flex items-center gap-2 mb-4">
        <Link to="/">
          <img src={logoEscrita} alt="AgroSense" className="w-[260px]" />
        </Link>
      </div>

      <nav className="flex flex-col space-y-4 w-full">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 transition-all mt-0.5 ${
                isActive
                  ? "text-[#ebe7d6] font-semibold"
                  : "text-[#ebe7d6] hover:text-[#63981e]"
              }`
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}