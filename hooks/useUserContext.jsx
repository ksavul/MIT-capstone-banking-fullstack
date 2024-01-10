import { useContext } from 'react';
import UserContext from '../stores/contexts/userContext';

const useUserContext = () => useContext(UserContext);

export default useUserContext;
