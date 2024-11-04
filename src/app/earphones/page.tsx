import Header from "../../sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";

const HomePage = () => {
  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">Earphones</h1>
      </Header>
      <main>
      <Categories/>
      <About/>
      </main>
    </>
  );
};

export default HomePage;
