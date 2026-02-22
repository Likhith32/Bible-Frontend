import Logo from "../assets/Logo.jpeg";

const BibleHeader = () => {
  return (
    <header className="text-center py-8 md:py-12 relative">
      {/* Logo in circular shape */}
      <div className="flex justify-center mb-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gold shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-brown-dark tracking-wide">
        Holy Bible
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-lg md:text-xl text-muted-foreground font-serif italic tracking-wider">
        English &amp; Telugu Scripture Reading
      </p>

      {/* Golden divider */}
      <div className="golden-divider max-w-xs mx-auto mt-6" />
    </header>
  );
};

export default BibleHeader;
