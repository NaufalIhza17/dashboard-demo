import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b px-6 flex items-center justify-end">
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold">
            {user?.firstName} {user?.lastName}
          </p>

          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>
    </header>
  );
}
