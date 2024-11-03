import Header from "../../components/Header";

const HomePage = () => {
  return (
    <>
      <Header>
        <h1 className="uppercase py-20 flex items-center justify-center font-bold text-4xl">Speaker</h1>
      </Header>
      <main>
        {/* Speaker page content */}
        <p>This is the speaker page content.</p>
      </main>
    </>
  );
};

export default HomePage;
