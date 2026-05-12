import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiLogOut } from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

export default function Sidebar() {
  const location = useLocation();

  const { logout } = useAuth();

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <FiHome size={20} />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <FiBox size={20} />,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-5 flex flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >
              {menu.icon}

              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-100 text-red-500 transition"
      >
        <FiLogOut size={20} />

        <span>Logout</span>
      </button>
    </aside>
  );
}
