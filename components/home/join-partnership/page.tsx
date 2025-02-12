import Image from "next/image";
import Link from "next/link";

function Join_Bartnership() {
  return (
    <>
      <section className=" bg-color2">
        <div className="md:container xs:mx-4 mx-auto">
          <div className=" justify-center xs:pt-4 xs:pb-0  md:pb-0 md:pt-12 xl:py-12 ">
            <h2 className=" xs:text-[25px] md:text-5xl font-bold text-white text-center py-10">
              Want to Join Partnership?
            </h2>
            <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
              <div className=" mx-auto  ">
                <div className="border-solid border-2 border-color1 relative xs:w-full md:w-[340px] lg:w-[450px] xl:w-[504px]">
                  <Image
                    className="rounded-lg"
                    src={"/photo/download3.jpg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>

                <div className=" relative xs:bottom-[7.5rem] bottom-[8rem] xl:bottom-40 left-[20px] w-fit">
                  <h2 className="xs:text-[20px]  md:text-[28px] lg:text-4xl  font-bold text-white ">
                    Join Courier
                  </h2>
                  <h1 className="py-5">
                    <Link
                      href={"/"}
                      className="border-color1 border py-3 xs:px-4 px-6 rounded-md text-white bg-color1 text-lg hover:bg-slate-100 hover:text-color1 duration-500"
                    >
                      Learn More
                    </Link>
                  </h1>
                </div>
              </div>
              <div className=" mx-auto ">
                <div className="border-solid border-2 border-color1 relative xs:w-full md:w-[340px] lg:w-[450px] xl:w-[504px]">
                  <Image
                    className="rounded-lg"
                    src={"/photo/download4.jpg"}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>

                <div className=" relative md:bottom-[8rem] xl:bottom-40 xs:bottom-[7.5rem] left-[20px] w-fit">
                  <h2 className="xs:text-[20px] md:text-[28px] lg:text-4xl font-bold text-white  ">
                    Join Merchant
                  </h2>
                  <h1 className="py-5">
                    <Link
                      href={"/"}
                      className="border-color1 border py-3 xs:px-4 px-6 rounded-md text-white bg-color1 text-lg hover:bg-slate-100 hover:text-color1 duration-500"
                    >
                      Learn More
                    </Link>
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
export default Join_Bartnership;
