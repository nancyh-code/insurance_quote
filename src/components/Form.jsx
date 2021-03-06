import { BRANDS, YEARS, PLANS } from "../constants";
import useQuote from "../hooks/useQuote";
import Error from "./Error";

const Form = () => {
  const { data, handleChangeData, error, setError, quoteInsurance } =
    useQuote();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("All fields are required");
      return;
    }
    setError("");
    quoteInsurance();
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-2 font-bold text-red-700 uppercase">
            Brand
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-amber-50 border-red-200"
            onChange={(e) => handleChangeData(e)}
            value={data.brand}
          >
            <option value="">--Select Brand--</option>
            {BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-2 font-bold text-red-700 uppercase">
            Year
          </label>
          <select
            name="year"
            className="w-full p-3 bg-amber-50 border-red-200"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="">--Select Year--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-2 font-bold text-red-700 uppercase">
            Choose a Plan
          </label>
          <div className="flex gap-5">
            {PLANS.map((plan) => (
              <div className="flex gap-5 items-center" key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </div>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-teal-800 hover:bg-teal-900 transition-colors text-amber-50 cursor-pointer p-3 uppercase font-bold"
          value="quote"
        />
      </form>
    </>
  );
};

export default Form;
