import { Pratos } from "./Pratos";
import prato1 from '../assets/prato1.png'
import prato2 from '../assets/prato2.png'
import prato3 from '../assets/prato3.png'

export function SectionTree() {
  return (
    <div className="flex items-center justify-center mt-[100px]  flex-col">
      <h1 className="font-montserrat text-5xl font-semibold">
        Mais populares
      </h1>
      <div className="flex justify-center  mt-[-50px] gap-[44px]">
        <Pratos 
          image={prato1}
          title="Ramen de Frango"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <Pratos 
          image={prato2}
          title="Ramen Apimentado"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <Pratos 
          image={prato3}
          title="Ramen Tradicional"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
      </div>
    </div>
  )
}