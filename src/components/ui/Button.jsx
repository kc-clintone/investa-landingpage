export const Button = ({
  text,
  icon,
  className = "",
  iconPosition = "left",
  ...props
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-4 cursor-pointer bg-amber-4 text-white transition-colors duration-300 ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {text}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};