import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph"

import { description, tttDescription } from "@/utils/text";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-transparent">
      <Title/>
      <Paragraph text={description}/>
      <Project text={tttDescription} title="Tic Tac Toe" image="/tictactoe.jpeg" link="https://romanief.github.io/tictactoe/"/>
      <div className="h-[14vh]"></div>
    </main>
  );
}
