function Navbar() {
  return (
    <>
      <nav className="bg-custom-bg py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="src\assets\img\logo.png"
            alt="Logo"
            className="w-16 h-auto mr-2"
          />
          <span className="text-custom-text font-semibold">
            Riqueza das Raízes
          </span>
        </div>
        <div className="flex space-x-6 text-custom-text">
          <div className="hover:underline">Home</div>
          <div className="hover:underline">Produtos</div>
          <div className="hover:underline">Sobre Nós</div>
          <div className="hover:underline">Contatos</div>
          <div className="hover:underline">Faça login</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
