import useAuth from "../../hooks/useAuth";
import { FiMenu } from "react-icons/fi";

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between z-10">
      <button
        onClick={onMenuClick}
        className="md:hidden text-gray-500 hover:text-gray-700"
      >
        <FiMenu size={20} />
      </button>

      <div className="hidden md:block" />

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-gray-400">{user?.email}</p>
        </div>
      </div>
    </header>
  );
}
