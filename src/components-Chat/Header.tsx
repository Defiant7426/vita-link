

export default function Header() {
  return (
    <header className=" max-w-7xl mx-auto flex items-center justify-between py-4 px-6 border-b-2">
        
      <div className="flex items-center gap-64 ">

        <div>
            <a href="/home" className="bg-vita-link rounded-full p-3 hover:bg-vita-link-dark text-white text-sm font-bold">
            Salir

            </a>
        </div>

        <div className="flex items-center gap-6">
            <div>
                <img src="vitalink_logo.png" alt="Vitalink Logo" className="w-20" />
            </div>

            <div className="">
                <h1 className="text-2xl font-bold text-center">Chat VitaLink</h1>
                <p className="text-sm text-gray-500">Hola Luis, estamos aquí para ayudarte a reservar tu cita médica</p>
            </div>
        </div>
        
      </div>
      
    </header>
  );
}
