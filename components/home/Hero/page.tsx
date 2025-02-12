import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
function Hero() {
  return (
    <>
      <section className="bg-[url('/photo/download.png')]">
        <div className="xs:mx-4 md:container mx-auto">
          <div className="xs:grid-cols-1 grid grid-cols-2 text-center">
            <div className="xs:pt-[8rem] md:pt-[6rem] lg:py-40">
              <h1 className="xs:text-[25px] md:text-[3rem] leading-[1] lg:text-6xl font-bold flex-wrap ">
                The Best Restaurants In Your Home
              </h1>
              <p className="flex-wrap py-5 mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <Link
                href={"/"}
                className=" py-3 px-3 rounded-md text-white bg-color1  hover:bg-slate-50 hover:text-color1 duration-150 border-color1 border"
              >
                ORDER NOW
              </Link>
            </div>
            <div className="md:my-auto ">
              <Image
                src="/photo/photo-1.png"
                width={600}
                height={600}
                alt="Picture of the author"
              />

              <div className="flex absolute xs:bottom-[-2.5rem] xs:right-0  md:top-[10rem]  md:right-0 lg:right-4 xl:right-[7rem] bg-white py-3 px-3 rounded-2xl">
                <div className="bg-color1 px-2 py-2 lg:px-3 lg:py-3 m-3 rounded-3xl">
                  <CiLocationOn className=" text-white text-xl font-bold" />
                </div>
                <div>
                  <div className=" px-2 py-2">
                    <h3 className="xs:text-4 md:text-[16px] lg:text-lg font-bold">
                      12 Restaurant
                    </h3>
                    <p className="text-sm">In Your city</p>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-2">
                <div className="xs:bottom-auto flex absolute md:bottom-[11rem] lg:bottom-0 xl:bottom-[3rem]  bg-white py-3 px-3 rounded-2xl">
                  <div>
                    <Image
                      src="/photo/photo-2.jpg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className=" px-2 py-2">
                      <p className="text-sm">Restaurant of the Month</p>
                      <h3 className="xs:text-[16px] md:text-[16px] lg:text-lg  font-bold">
                        The Wilmington
                      </h3>
                    </div>
                    <div className=" flex text-color1 px-12 text-lg">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarHalf />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
