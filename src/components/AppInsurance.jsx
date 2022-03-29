import Form from "./Form";

const AppInsurance = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-amber-100 text-center font-black">
          Car Insurance Quotes
        </h1>
      </header>
      <main className="bg-amber-50 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Form />
      </main>
    </>
  );
};

export default AppInsurance;
