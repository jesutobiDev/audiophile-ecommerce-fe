import { TbLoader2 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <TbLoader2 className="animate-spin text-white" />
    </div>
  );
};

export default Loader;
