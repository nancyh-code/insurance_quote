import React from "react";

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
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
