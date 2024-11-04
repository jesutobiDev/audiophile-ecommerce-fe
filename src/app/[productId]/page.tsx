import Header from "@/sections/Header";
import Categories from "@/sections/Categories";
import About from "@/sections/About";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <About />
      </main>
    </>
  );
};

export default page;
