const DisplayResults = ({ formula, result }) => {
  return (
    <div className="p-4 w-full border bg-gray-300 text-right font-asap font-bold">
      <p>{formula}</p>
      <p>{result}</p>
    </div>
  );
};

export default DisplayResults;
