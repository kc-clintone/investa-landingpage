export const Section = ({
  children,
  className = "",
  id,
  fullHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`w-full container mx-auto px-6 ${
        fullHeight ? "min-h-screen flex items-center" : "py-24"
      } ${className}`}
    >
      {children}
    </section>
  );
};