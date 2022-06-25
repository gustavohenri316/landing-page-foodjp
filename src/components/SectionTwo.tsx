import segurandoPrato from '../assets/segurandoPrato.png'
export function SectionTwo() {
  return (
    <div className="flex items-center justify-center gap-[124px]">
      <img src={segurandoPrato} alt="" />
      <div className="flex flex-col items-start">
        <h1 className="text-[#292929] text-5xl font-montserrat font-semibold w-[361px] h-[124px] leading-[64px] mb-6">
          Feita de forma Tradicional
        </h1>
        <p className="text-2xl font-inter leading-7 mb-10 text-[#292929]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor  <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="text-[#DA2535] text-2xl font-inter  font-medium border-b-2 border-b-[#DA2535] hover:text-[#880712] hover:border-b-[#880712] transition-colors">Ler mais sobre o modo de preparo </a>
      </div>
    </div>
  )
}