import { useState } from "react";
import DisplayButtons from "./DisplayButtons";
import DisplayResults from "./DisplayResults";

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(0);

  return (
    <div className="w-96 bg-white border flex flex-col justify-center items-center">
      <DisplayResults formula={formula} result={result} />
      <span className="my-1"></span>
      <DisplayButtons
        formula={formula}
        setFormula={setFormula}
        setResult={setResult}
      />
    </div>
  );
};

export default Calculator;
