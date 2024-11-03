import Header from "../components/Header";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Header>
        <div className="flex justify-between items-center py-7">
          <div className="w-full md:w-[45%] space-y-4">
            <p className="uppercase opacity-50 tracking-widest font-light text-sm">New Product</p>
            <h1 className="text-5xl font-bold uppercase">XX99 Mark II Headphones</h1>
            <p className="opacity-75 w-10/12">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
          <div className="w-full md:w-[55%] relative h-[430px]">
            <Image 
              src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730629756/headphone_rgafzt.png" 
              alt="XX99 Mark II Headphones" 
              layout="fill"
              objectFit="contain" 
              className="rounded" 
            />
          </div>
        </div>
      </Header>
      <main>
        {/* Home page content */}
        <p>This is the home page content.</p>
      </main>
    </>
  );
};

export default HomePage;
