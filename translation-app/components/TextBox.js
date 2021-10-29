function TextBox({ value, setValue, readOnly }) {
  return (
    <textarea
      className="m-10 outline-none border-2 p-4 h-[200px] w-[400px]"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly={readOnly}
    ></textarea>
  );
}

export default TextBox;
