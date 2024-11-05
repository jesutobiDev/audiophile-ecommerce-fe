import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-5 md:px-10 gap-10 lg:px-40 py-7 lg:justify-between mt-10 lg:mt-16">
          <div className="lg:w-[400px] text-center items-center lg:items-start lg:text-left lg:justify-center flex flex-col gap-5">
            <p className="uppercase text-black text-2xl md:text-4xl lg:text-2xl font-semibold w-8/12">
              Bringing you the <span className="text-primary">best</span> audio
              gear
            </p>
            <p className="text-black/50 text-sm md:w-9/12 lg:w-auto">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="w-full lg:w-[400px] relative md:h-[400px] h-[300px] overflow-hidden rounded-lg">
            <Image src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730674678/man_qo73p2.svg" alt="man_listening" layout="fill" className="rounded-lg" objectFit="cover"  />
          </div>
        </div>
  )
}

export default About