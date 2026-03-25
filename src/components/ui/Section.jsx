export const Section = ({
  children,
  className = "",
  fullHeight = false,
}) => {
  return (
    <section
      className={`w-full my-10 container mx-auto px-6${
        fullHeight ? "min-h-screen flex items-center" : "py-24"
      } ${className}`}
    >
      {children}
    </section>
  );
};