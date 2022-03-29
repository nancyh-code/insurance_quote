import { createContext } from "react";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  return <QuoteContext.Provider value={{}}>{children}</QuoteContext.Provider>;
};

export { QuoteProvider };
export default QuoteContext;
