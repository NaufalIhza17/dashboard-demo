import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div className="text-3xl font-bold">
      Welcome, {user?.firstName} {user?.lastName}!
    </div>
  );
}
