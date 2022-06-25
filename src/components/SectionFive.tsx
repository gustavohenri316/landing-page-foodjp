import { Map } from "./Map";

export function SectionFive() {

  return (
    <div className="ml-[346px]">
      <h1 className="mt-[100px] font-montserrat text-5xl font-semibold">
        Localização
      </h1>
      <div className="mt-12 flex flex-col justify-center">
        <iframe className="rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30026.586593201737!2d-44.29155445!3d-19.826267849999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1656168226301!5m2!1spt-BR!2sbr"
          width="1228"
          height="500"
        ></iframe>

        <div className=" ml-[-346px] mt-[56px] flex justify-center mb-[100px]">
          <div className="flex items-center w-[630px] h-[70px] border-[2px] border-[#292929] rounded-[10px]">
            <div className='ml-3'>
              <Map />
            </div>
            <input
              className="flex flex-auto ml-2 w-[580px] h-[60px] font-inter text-2xl text-[#292929] outline-none"
              placeholder="Localização para entrega"
            />
          </div>
          <button className="w-[183px] h-[70px] bg-[#DA2535] rounded-[10px] font-inter text-2xl text-[#ffffff]">
            Buscar
          </button>
        </div>
      </div>
    </div>
  )
}