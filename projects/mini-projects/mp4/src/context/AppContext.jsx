import { ListsContextProvider } from './ListsContext.jsx';
import { ItemsContextProvider } from './ItemsContext.jsx';

const AppContext = ({ children }) => {
  return (
    <ListsContextProvider>
      <ItemsContextProvider>{children}</ItemsContextProvider>
    </ListsContextProvider>
  );
};

export default AppContext;
