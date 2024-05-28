import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph"

import { description, tttDescription, ndDescription, ndTech } from "@/utils/text";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-transparent overflow-x-hidden">
      <Title/>
      <Paragraph text={description}/>
      <Project text={ndDescription} title="Number Recognition" image="/number.jpeg" mt={200} git="https://github.com/Romanief/number-recognition"/>
      <Project text={tttDescription} title="Tic Tac Toe" image="/tictactoe.jpeg" mt={200} link="https://romanief.github.io/tictactoe/" git="https://github.com/Romanief/tictactoe"/>
      <div className="h-[14vh]"></div>
    </main>
  );
}
