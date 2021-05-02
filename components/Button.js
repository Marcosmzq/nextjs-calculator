const Button = ({ value, handleClick, extraClases }) => {
  return (
    <button
      onClick={handleClick}
      value={value}
      className={`border bg-gray-900 font-black font-asap text-white text-3xl sm:text-5xl transform hover:scale-90 focus:outline-none ${extraClases} `}
    >
      {value}
    </button>
  );
};

export default Button;
