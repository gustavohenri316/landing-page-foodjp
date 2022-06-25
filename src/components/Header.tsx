import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="flex items-center justify-center  gap-[235px]  mt-[40px]">
      <div>
        <Logo/>
      </div>
      <div className="flex gap-[91px]">
        <a href="#"className="text-[#292929] text-2xl font-inter hover:text-red-700 font-medium">Inicio</a>
        <a href="#"className="text-[#292929] text-2xl font-inter hover:text-red-700 font-medium">Cardápio</a>
        <a href="#"className="text-[#292929] text-2xl font-inter hover:text-red-700 font-medium">Sobre</a>
      </div>
      <a  href="#" className="group flex items-center justify-center rounded border border-[#292929] w-48 h-12 hover:bg-[#880712] hover:border-none transition-colors">
        <p className="text-[#292929] text-2xl font-inter group-hover:text-white font-medium transition-colors">Entrar</p>
      </a>
    </div>
  )
}