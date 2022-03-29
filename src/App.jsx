import { useState } from "react";
import { QuoteProvider } from "./context/QuoteProvider";
import AppInsurance from "./components/AppInsurance";

function App() {
  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>
  );
}

export default App;
