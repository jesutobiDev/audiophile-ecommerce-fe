import Header from "../../sections/Header";

const HomePage = () => {
  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">Headphones</h1>
      </Header>
      <main>
        {/* headphones page content */}
        <p>This is the headphones page content.</p>
      </main>
    </>
  );
};

export default HomePage;
