import { useState, createContext } from "react";
import {
  getYearsDifference,
  calculateByBrand,
  calculateByPlan,
  formattingCurrency,
} from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultOfTheQuote, setResultofTheQuote] = useState(0);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    //Base price
    let result = 2000;
    //Difference in years
    const substractingYears = getYearsDifference(data.year);
    //Subtract 3% for each year
    result -= (substractingYears * 3 * result) / 100;

    //European 30%
    //American 15%
    //Asian 5%
    result *= calculateByBrand(data.brand);

    //Bassic 20%
    //Full 50%
    result *= calculateByPlan(data.plan);

    result = formattingCurrency(result);

    setResultofTheQuote(result);
  };

  return (
    <QuoteContext.Provider
      value={{ data, handleChangeData, error, setError, quoteInsurance }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };
export default QuoteContext;
