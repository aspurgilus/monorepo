import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store";

export function useAuth() {
  const { email, token, id } = useAppSelector((state: RootState) => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
