export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-[#4B0082]">
          Investa
        </h1>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-2 md:mt-0">
          © {new Date().getFullYear()} Investa. All rights reserved.
        </p>

      </div>
    </footer>
  );
};