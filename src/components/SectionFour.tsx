import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import estrelas from '../assets/estrelas.svg'

export function SectionFour() {
  return (
    <div className="flex flex-col mt-[100px] items-start ml-[340px] font-semibold">
      <h1 className="text-5xl mb-12">
        Comentários
      </h1>
      <div className="flex justify-center gap-5">
        <div className="flex flex-col w-[604px] h-[390px] bg-[#F3F3F3] rounded-2xl cursor-pointer border-2 border-[#F3F3F3] p-10 hover:border-2px opacity-[90%] hover:border-[#880712] hover:opacity-[100%]">
          <img src={profile1} alt="" className="w-[120px] h-[120px] mb-6 " />
          <h3 className="mb-4 text-[32px] font-medium">
            Daniele Almeida
          </h3>
          <span className="mb-6 text-2xl text-[#616161]">
            Ótimo serviço! Encantada com a <br /> qualidade dos pratos.
          </span>
          <img src={estrelas} alt="" className="w-[122px] h-[19px]" />
        </div>
        <div className="flex flex-col w-[604px] h-[390px] bg-[#F3F3F3] rounded-2xl cursor-pointer border-2 border-[#F3F3F3] p-10 hover:border-2px opacity-[90%] hover:border-[#880712] hover:opacity-[100%]">
          <img src={profile2} alt="" className="w-[120px] h-[120px] mb-6 " />
          <h3 className="mb-4 text-[32px] font-medium">
            Ricardo França
          </h3>
          <span className="mb-6 text-2xl text-[#616161]">
            Não é apenas a comida excelente, o serviço torna a experiência especial.
          </span>
          <img src={estrelas} alt="" className="w-[122px] h-[19px]" />
        </div>
      </div>
    </div>
  )
}