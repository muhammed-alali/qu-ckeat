import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { FaCheese } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";
function Your_Yavorite_Food() {
  return (
    <>
      <section className="bg-[url('/photo/download.png')]">
        <div className=" md:container mx-auto ">
          <div className=" grid xs:grid-cols-1 grid-cols-2 justify-center xs:px-4 xs:py-4 md:px-8 md:py-12">
            <div className="my-auto">
              <Image
                src={"/photo/photo-3.png"}
                alt=""
                width={500}
                height={400}
              />
              <div className="flex absolute  md:top-[135rem]  bg-white py-3 px-3 rounded-2xl gap-2">
                <FaHamburger className=" my-1 text-color1" />
                <div>
                  <h1> Burgers</h1>
                </div>
              </div>
              <div className="xs:w-fit xs:bottom-[54px] xs:relative flex absolute xs:left-[204px] md:top-[134rem] left-[400px] xl:left-[460px] bg-white py-3 px-3 rounded-2xl gap-2">
                <FaCheese className=" my-1 text-color1" />
                <div>
                  <h1> Steaks</h1>
                </div>
              </div>
              <div className="xs:w-fit xs:bottom-[280px] xs:relative flex absolute xs:left-[204px] md:top-[140rem] left-[413px]  xl:left-[460px]  bg-white py-3 px-3 rounded-2xl gap-2">
                <FaPizzaSlice className=" my-1 text-color1" />
                <div>
                  <h1> Pizza</h1>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="xs:pt-8 xs:pb-8 py-16">
                <h2 className="xs:text-[30px] md:text-[3rem] md:leading-[1] lg:text-6xl font-bold py-4">
                  Food from your favorite restaurants to your table
                </h2>
                <p className=" text-color2 leading-7">
                  Pretium lectus quam id leo in vitae turpis massa sed. Lorem
                  donec massa sapien faucibus et molestie. Vitae elementum
                  curabitur vitae nunc.
                </p>
                <div className="py-4">
                  <h1 className="bg-color1 py-3 px-2 pl-12 w-48 rounded-md text-white border-[#f29f05f6] border hover:bg-slate-50 hover:text-[#f29f05f6] duration-500">
                    <Link href={"/"} className="" />
                    ORDER NOW
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Your_Yavorite_Food;
