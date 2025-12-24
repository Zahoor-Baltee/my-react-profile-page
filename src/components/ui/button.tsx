export const Button = ({ children, variant = "primary", size = "default", className = "", ...props }) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};