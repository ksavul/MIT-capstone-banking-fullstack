import React, {
  createContext, useReducer, useEffect, useCallback,
} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState('null')
  // const [state, dispatch] = useReducer(playerReducer, initialState);
  // const { gameState, updateGameInfo, setPreviousGameState } = useGamesContext();
  // const
  // const [gameIsSaved, setGameIsSaved] = React.useState(true);

  useEffect(() => {
    const storedUser = JSON?.parse(localStorage?.getItem('user'));
    setCurrentUser(storedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON?.stringify(currentUser))
  }, [currentUser]);


  const value = React.useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser, setCurrentUser],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
