import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RiHomeSmileFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";

const navLinks = [
  { label: "Home", path: "/", icon: RiHomeSmileFill },
  { label: "Products", path: "/products", icon: AiFillProduct },
];

export default function Sidebar({ open, onClose }) {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed left-0 top-0 w-64 z-30 h-screen bg-white md:border-r flex flex-col ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300`}
      >
        <div className="px-5 h-16 flex items-center border-b">
          <span className="font-bold text-lg tracking-tight">
            my<span className="text-gray-400">dashboard</span>
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon size={17} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <IoLogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
