export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  size = "md",
}) {
  const variants = {
    primary: "btn btn-danger",
    secondary: "btn btn-secondary",
    outline: "btn btn-outline-danger",
    danger: "btn btn-danger",
    success: "btn btn-success",
  };

  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
