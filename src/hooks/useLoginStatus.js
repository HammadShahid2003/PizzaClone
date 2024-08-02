
import { useLogin } from '../LoginContext';

const useLoginStatus = () => {
    const { isLoggedIn, login, logout } = useLogin();
    return {isLoggedIn, login, logout };
};

export default useLoginStatus;
