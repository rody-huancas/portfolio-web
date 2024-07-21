const Footer = () => {
  return (
    <footer className="p-5 flex items-center justify-center gap-1">
      &copy;
      <a
        href="https://www.linkedin.com/in/rody-huancas/"
        target="_blank"
        className="text-white/90 font-bold hover:text-primary transition-colors duration-300"
      >
        Rody Huancas
      </a>
      {"|"}
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
