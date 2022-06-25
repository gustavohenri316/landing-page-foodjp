import sushi from '../assets/sushi.png'
export function SectionOne() {
  return (
    <div className="flex items-center justify-center gap-[308px] mt-36">
      <div className="flex flex-col items-start">
        <h1 className="font-montserrat text-5xl font-semibold text-[#292929]">
          Comida Oriental
        </h1>
        <p className="font-inter text-2xl mt-6 text-[#292929]">
          A culinária Japonesa é bastante equilibrada, <br /> sendo muito rica em peixes (ômega 3), <br /> vegetais, massas e ingredientes frescos.
        </p>
        <button className="w-[292px] h-[60px] bg-[#DA2535] rounded mt-12 text-[#FBFBFB] text-2xl font-inter hover:bg-[#880712] transition-colors">
          Cardápio
        </button>
      </div>
      <div>
        <img src={sushi} alt="" />
      </div>
    </div>

  )
}