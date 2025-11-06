import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, BarChart2, Menu, X } from "lucide-react";
import logoEscrita from "../assets/logoEscrita2.png";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const links = [
    {
      to: "/paineis",
      label: "Painéis",
      icon: <LayoutDashboard size={20} />,
      subLinks: [
        { to: "/paineis/baia1", label: "Baia 1" },
        { to: "/paineis/baia2", label: "Baia 2" },
        { to: "/paineis/baia3", label: "Baia 3" },
      ],
    },
    {
      to: "/analises",
      label: "Análises",
      icon: <BarChart2 size={20} />,
      subLinks: [
        { to: "/analises/baia1", label: "Baia 1" },
        { to: "/analises/baia2", label: "Baia 2" },
        { to: "/analises/baia3", label: "Baia 3" },
      ]
    },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-4 left-5 z-50">
        <button
          onClick={toggleMobileMenu}
          className="bg-[#445816b6] text-[#ebe7d6] p-2 h-[35px] w-[35px] rounded-4xl flex justify-center items-center"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed left-0 top-0 h-screen w-52 bg-[#445816] text-[#ebe7d6] flex flex-col items-start p-6 space-y-6 z-50 font-novicento transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`
      }>

        <div className="flex justify-between items-center w-full mb-4">
          <div className="font-bold text-[28px] flex items-center gap-2 ">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logoEscrita}
                alt="AgroSense"
                className="w-[260px] translate-y-4"
              />
            </Link>
          </div>

          <button 
            onClick={closeMobileMenu}
            className="lg:hidden text-[#ebe7d6] hover:text-[#55990d] p-2 -mt-2 -mr-2 translate-x-[-5px]"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 w-full">
          {links.map(({ to, label, icon, subLinks }) => (
            <div key={to} className="w-full">
              {subLinks ? (
                <button
                  onClick={() => toggleMenu(label)}
                  className="flex items-center gap-3 w-full px-6 py-2 text-left text-[#ebe7d6] hover:text-[#55990d] transition-all translate-x-4 translate-y-5"
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ) : (
                <NavLink
                  to={to}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 w-full px-6 py-2 text-[#ebe7d6] hover:text-[#55990d] transition-all translate-x-4 translate-y-10"
                >
                  {icon}
                  <span>{label}</span>
                </NavLink>
              )}

              {subLinks && openMenu === label && (
                <div className="ml-10 mt-2 flex flex-col space-y-2 animate-fadeIn">
                  {subLinks.map((sub) => (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      onClick={closeMobileMenu}
                      className="text-sm text-[#ebe7d6b3] hover:text-[#55990d] transition translate-x-12 translate-y-5"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}