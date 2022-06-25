import { Pratos } from "./Pratos";

export function SectionTree() {
  return (
    <div className="flex items-center justify-center mt-[100px]  flex-col">
      <h1 className="font-montserrat text-5xl font-semibold">
        Mais populares
      </h1>
      <div className="flex justify-center  mt-[-50px] gap-[44px]">
        <Pratos 
          image="/src/assets/prato1.png"
          title="Ramen de Frango"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <Pratos 
          image="/src/assets/prato2.png"
          title="Ramen Apimentado"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <Pratos 
          image="/src/assets/prato3.png"
          title="Ramen Tradicional"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
      </div>
    </div>
  )
}