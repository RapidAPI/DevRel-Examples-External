const Input = ({ dropdown, onChange, label, symbols }) => {
  const arrOfSymbols = Object.keys(symbols);

  return (
    <div className="flex flex-col h-16 mb-12">
      <label
        htmlFor={label}
        className="text-primary text-2xl font-raleway pb-2 font-bold"
      >
        {label}
      </label>
      {(dropdown && (
        <select
          name="countries"
          onChange={(e) => onChange(e.target.value)}
          className="px-4 py-2 rounded"
        >
          {arrOfSymbols.map((symbol) => (
            <option value={symbol} key={arrOfSymbols.indexOf(symbol)}>
              {symbols[symbol]}
            </option>
          ))}
        </select>
      )) || (
        <input
          type="number"
          placeholder="Enter amount..."
          className="border-none outline-none bg-primary px-4 py-2 rounded-sm font-raleway"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
