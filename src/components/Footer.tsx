import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="flex justify-center gap-52 mb-[100px]">
      <div className="mt-3">
        <Logo />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[32px] text-[#292929] font-medium mb-6">Contato</h1>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">+55 21 9999-9999</a>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">email@gmail.com</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[32px] text-[#292929] font-medium mb-6">Sobre nós</h1>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">Menu</a>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">Valores</a>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">Pagina principal</a>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[32px] text-[#292929] font-medium mb-6">Serviços</h1>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">Entrega</a>
        <a href="#" className="text-[#616161] text-lg hover:text-[#880712]">Retirada</a>
      </div>
    </div>
  )
}