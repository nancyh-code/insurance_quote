import useQuote from "../hooks/useQuote";

const Error = () => {
  const { error } = useQuote();
  return (
    <div className="border text-center border-red-300 bg-red-100 py-2 text-red-600">
      <p>{error}</p>
    </div>
  );
};

export default Error;
