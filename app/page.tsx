import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph"

import { description } from "@/utils/text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-transparent">
      <Title/>
      <Paragraph text={description}/>
      <div className="h-screen"></div>
    </main>
  );
}
