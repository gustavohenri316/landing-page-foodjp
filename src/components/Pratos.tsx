interface Props {
  title: string
  image: string
  text: string
  price: string
}

export function Pratos(props: Props) {
  return (
    <div className="flex flex-col group cursor-pointer opacity-[90%] hover:opacity-[100%]">
      <img src={props.image} alt="" className=" flex relative w-[291px] h-[291px] ml-[50px] top-[160px]" />
      <div className="bg-[#F3F3F3] flex flex-col w-[388px] h-[450px] rounded-[32px] items-center justify-center group-hover:border-2 group-hover:border-[#DA2535] transition-colors">
        <h2 className="text-[#292929] text-[32px] font-medium mt-[161px]  font-montserrat">
          {props.title}
        </h2>
        <span className="font-inter text-lg text-[#292929] w-[249px] h-[58px] mt-[16px]">
          {props.text}
        </span>
        <h3 className="font-montserrat font-medium text-[32px] text-[#292929] mt-8">
          {props.price}
        </h3>
      </div>
    </div>
  )
}