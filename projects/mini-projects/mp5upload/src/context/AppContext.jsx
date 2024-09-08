import { HotelsContextProvider } from './HotelsContext.jsx';
import { ReviewsContextProvider } from './ReviewsContext.jsx';

const AppContext = ({ children }) => {
  return (
    <HotelsContextProvider>
      <ReviewsContextProvider>{children}</ReviewsContextProvider>
    </HotelsContextProvider>
  );
};

export default AppContext;
