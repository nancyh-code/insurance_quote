import { useState, createContext } from "react";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <QuoteContext.Provider value={{ data, handleChangeData, error, setError }}>
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };
export default QuoteContext;
