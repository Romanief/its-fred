import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph"

import { description, tttDescription, ndDescription, ndTech, shDescription, ff1, aboutSh, aboutBe, ff2, theEnd, theEndAgain, edcDescription } from "@/utils/text";
import Project from "@/components/Project";
import Funfact from "@/components/Funfact";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-transparent overflow-x-hidden">
      <Title/>
      <Paragraph text={description}/>
      <Techstack/>
      <Project text={ndDescription} title="Image classification" image="/number.jpeg" mt={100} git="https://github.com/Romanief/number-recognition"/>
      <Funfact title="Fun fact!" texts={[ff1]}/>
      <Project text={tttDescription} title="Tic Tac Toe" image="/tictactoe.jpeg" mt={10} link="https://romanief.github.io/tictactoe/" git="https://github.com/Romanief/tictactoe"/>
      <Project text={edcDescription} title="EDCaseload" image="/edcaseload.jpeg" git="https://github.com/Romanief/edcaseload"/>
      <Project text={shDescription} title="e-shop" image="/shop.jpeg" mt={50} git="https://github.com/Romanief/shopapp/tree/main"/>
      {/* <Paragraph text={aboutSh}/>
      <Paragraph text={aboutBe}/> */}
      <Funfact title="Useless fact!" texts={[ff2]}/>
      {/* <Paragraph text={theEnd}/>
      <Paragraph text={theEndAgain}/> */}
    </main>
  );
}
