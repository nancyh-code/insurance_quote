import { BRANDS, YEARS, PLANS } from "../constants";

const Form = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-2 font-bold text-red-700 uppercase">
            Brand
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-amber-50 border-red-200"
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
          <select name="year" className="w-full p-3 bg-amber-50 border-red-200">
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
                <input type="radio" name="plan" value={plan.id} />
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
