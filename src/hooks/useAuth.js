import useAuthStore from "../features/auth/store";

const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const isAuthenticated = !!token;

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
