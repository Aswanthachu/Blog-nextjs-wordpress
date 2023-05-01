const Button = ({ className, onClick, text, Icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      <Icon className="w-5 h-5"/>
    </button>
  );
};

export default Button;
