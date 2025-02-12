import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
function CityRestaurants() {
  return (
    <>
      <section className=" xs:mx-4 md:container mx-auto lg:px-4 xl:px-0">
        <div className="grid xs:grid-cols-1 grid-cols-2 ">
          <div className="">
            <div>
              <div className=" text-center">
                <h2 className="xs:text-[25px] md:text-[3rem] xl:text-6xl font-bold md:leading-[4rem] lg:leading-normal">
                  12 Best Restaurants in Your City
                </h2>
                <p className="xs:leading-[1.5rem] xs:text-[15px] leading-7 text-color2 py-5">
                  Magna sit amet purus gravida quis blandit turpis cursus.
                  Venenatis tellus in metus vulputate.
                </p>
              </div>
              <div className=" py-7 xs:block md:block lg:flex xl:mx-8">
                <div className="xs:flex xs:justify-center xs:mb-4 md:px-4 lg:px-0">
                  <Image
                    src={"/photo/logos-1.jpg"}
                    className=" rounded-lg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="xs:text-center px-4 py-1 text-2xl font-bold">
                    The Wilmington
                  </h2>

                  <div className="xs:justify-center flex text-color1 px-4 py-1 text-[23px]">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                  </div>

                  <div className="xs:justify-center px-4 py-2 gap-3 flex xs:flex-wrap">
                    <h3>
                      <Link
                        href={""}
                        className=" xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700"
                      >
                        american
                      </Link>
                    </h3>
                    <h3>
                      <Link
                        href={""}
                        className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700"
                      >
                        steakhouse
                      </Link>
                    </h3>
                    <h3>
                      <Link
                        href={""}
                        className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700"
                      >
                        seafood
                      </Link>
                    </h3>
                  </div>
                  <p className="xs:text-center xs:w-full xs:text-sm md:max-w-96 py-2 px-4">
                    Vulputate enim nulla aliquet porttitor lacus luctus.
                    Suscipit adipiscing bibendum est ultricies integer. Sed
                    adipiscing diam donec adipiscing tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" xs:block md:block lg:flex xl:mx-8">
              <div className="xs:flex xs:justify-center xs:mb-4 md:px-4 lg:px-0">
                <Image
                  src={"/photo/logos-2.jpg"}
                  className=" rounded-lg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h2 className="xs:text-[20px] px-4 py-1 text-2xl font-bold xs:text-center">
                  Kennington Lane Cafe
                </h2>

                <div className="xs:justify-center flex text-color1 px-4 py-1 text-[23px]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                </div>

                <div className="px-4 py-2 gap-3 flex xs:flex-wrap xs:justify-center">
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      american
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      steakhouse
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      seafood
                    </Link>
                  </h3>
                </div>
                <p className="xs:w-full xs:text-sm  xs:text-center md:max-w-96 py-2 px-4 ">
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p>
              </div>
            </div>

            <div className=" py-10 xs:block md:block lg:flex xl:mx-8">
              <div className="xs:flex xs:justify-center xs:mb-4 md:px-4 lg:px-0">
                <Image
                  src={"/photo/logos-3.jpg"}
                  className=" rounded-lg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <h2 className="xs:text-center px-4 py-1 text-2xl font-bold ">
                  Kings Arms
                </h2>

                <div className=" xs:justify-center flex text-color1 px-4 py-1 text-[23px]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarHalf />
                </div>

                <div className="xs:justify-center px-4 py-2 gap-3 flex xs:flex-wrap ">
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      healthy
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      steakhouse
                    </Link>
                  </h3>
                  <h3>
                    <Link
                      href={""}
                      className="xs:px-[5px]  px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700"
                    >
                      vegetarian
                    </Link>
                  </h3>
                </div>
                <p className="xs:text-center xs:w-full xs:text-sm  md:max-w-96 py-2 px-4">
                  Tortor at risus viverra adipiscing at in tellus. Cras semper
                  auctor neque vitae tempus. Dui accumsan sit amet nulla
                  facilisi. Sed adipiscing diam donec adipiscing tristique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center py-10">
          <h1>
            <Link
              href={""}
              className="px-[25px] py-[12px] text-color1 border-[1px] rounded-lg border-color1 hover:bg-color1 hover:text-white duration-300"
            >
              SEE ALL
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
}
export default CityRestaurants;
