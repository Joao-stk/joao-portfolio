import Menu from "@/components/Menu";
import Banner from "@/components/Banner";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";

function Home() {
  return (
    <main>
      <Menu />
      <Banner />
      <Projetos />
      <Sobre />
      <Contato />
    </main>
  );
}
export default Home;
