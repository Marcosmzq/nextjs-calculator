import { useState } from "react";
import Button from "components/Button";

const DisplayButtons = ({ formula, setFormula, setResult }) => {
  const [operatorLimit, setOperatorLimit] = useState(true);

  const handleNums = (e) => {
    const value = e.target.value.toString();
    const newStr = formula.concat(value).trim();
    setFormula(newStr);
    setOperatorLimit(false);
  };
  const handleOperators = (e) => {
    const value = e.target.value.toString();
    if (!operatorLimit) {
      const newStr = formula.concat(value).trim();
      setFormula(newStr);
      setOperatorLimit(true);
    }
  };
  const handleClear = () => {
    setFormula("");
    setResult(0);
    setOperatorLimit(true);
  };
  const handleResult = () => {
    try {
      setResult(eval(formula));
    } catch {
      setResult("La operacion ingresada es invalida.");
    }
  };
  return (
    <div className="w-full flex flex-wrap">
      <Button value={"AC"} extraClases="w-1/2" handleClick={handleClear} />
      <Button value={"/"} extraClases="w-1/4" handleClick={handleOperators} />
      <Button value={"*"} extraClases="w-1/4" handleClick={handleOperators} />
      <Button value={"7"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"8"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"9"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"-"} extraClases="w-1/4" handleClick={handleOperators} />
      <Button value={"4"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"5"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"6"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"+"} extraClases="w-1/4" handleClick={handleOperators} />
      <Button value={"1"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"2"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"3"} extraClases="w-1/4" handleClick={handleNums} />
      <Button value={"."} extraClases="w-1/4" handleClick={handleOperators} />
      <Button value={"0"} extraClases="w-1/2" handleClick={handleNums} />
      <Button value={"="} extraClases="w-1/2" handleClick={handleResult} />
    </div>
  );
};

export default DisplayButtons;
