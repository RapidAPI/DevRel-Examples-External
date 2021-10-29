function Button({ className, children, onClick, disabled }) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
