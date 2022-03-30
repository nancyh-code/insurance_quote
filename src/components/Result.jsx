import useQuote from "../hooks/useQuote";
import { BRANDS, PLANS } from "../constants";

const Result = () => {
  const { resultOfTheQuote, data } = useQuote();
  const { brand, plan, year } = data;

  const [brandName] = BRANDS.filter((br) => br.id === Number(brand));

  const [planName] = PLANS.filter((pl) => pl.id === Number(plan));

  if (resultOfTheQuote === 0) return null;
  return (
    <div className="bg-amber-100 text-center mt-5 p-5 shadows">
      <h2 className="text-red-700 font-black">Resumen</h2>
      <p className="py-1">
        <span className="font-bold">Brand: </span>
        {brandName.name}
      </p>
      <p className="py-1">
        <span className="font-bold">Plan: </span>
        {planName.name}
      </p>
      <p className="py-1">
        <span className="font-bold">Year Model: </span>
        {data.year}
      </p>
      <p className="py-1 text-xl">
        <span className="font-bold">Quote Result: </span>
        {resultOfTheQuote}
      </p>
    </div>
  );
};

export default Result;
