import Form from "./Form";
import useQuote from "../hooks/useQuote";
import Spinner from "./Spinner";
import Result from "./Result";

const AppInsurance = () => {
  const { resultOfTheQuote, isLoading } = useQuote();
  return (
    <>
      <header className="my-10">
        <h1 className="text-amber-100 text-center font-black">
          Car Insurance Quotes
        </h1>
      </header>
      <main className="bg-amber-50 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form />
        {isLoading ? <Spinner /> : <Result />}
      </main>
    </>
  );
};

export default AppInsurance;
