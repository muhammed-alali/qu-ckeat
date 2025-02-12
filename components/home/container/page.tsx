import Image from "next/image";
import Link from "next/link";
import { FaUserClock } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Container() {
  return (
    <>
      <section className=" md:container xs:mx-4 mx-auto">
        <div className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  justify-center py-10">
          <div className="  bg-white shadow-lg md:mx-4 lg:pr-0 xl:mx-0">
            <div className="xs:p-4 md:p-7  lg:p-4 xl:p-7">
              <p className=" xs:text-[25px] xs:w-full xs:pt-8 leading-[1.3] text-4xl font-bold w-[385px] py-4">
                Latest news and events
              </p>
              <div className=" ">
                <Image
                  className="rounded-xl "
                  src="/photo/photo-8.jpg"
                  width={800}
                  height={800}
                  alt="Picture of the author"
                />
                <div className=" absolute">
                  <div className="xs:top-[-14rem] md:top-[-15rem] lg:top-[-11rem] xl:top-[-15rem] flex gap-3 absolute  left-2">
                    <h1 className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      quickeat
                    </h1>
                    <h1 className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      news
                    </h1>
                  </div>
                </div>
              </div>

              <h3 className=" xs:text-4 xs:w-full md:text-4xl lg:text-2xl xl:text-4xl font-bold md:w-[600px] lg:w-[500px] xl:w-[600px]  py-3">
                We Have Received An Award For The Quality Of Our Work
              </h3>
              <p className=" xs:text-sm xs:mb-6 leading-8">
                Donec adipiscing tristique risus nec feugiat in fermentum.
                Sapien eget mi proin sed libero. Et magnis dis parturient montes
                nascetur. Praesent semper feugiat nibh sed pulvinar proin
                gravida.
              </p>
              <span>
                <Link href={"/"} className="hover:text-color1 duration-300">
                  Read More
                </Link>
              </span>
              <div className="py-5">
                <ul className="flex gap-3 xs:flex-wrap">
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaUserClock className=" text-lg m-1" /> Read More
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaRegCalendarDays className=" text-lg m-1" /> 01.Jan.
                      2022
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaEye className=" text-lg m-1" /> 132
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="xs:px-6 md:px-10 lg:px-6  py-4 xl:px-10">
            <div>
              <div className="xs:block flex py-3">
                <div>
                  <Image
                    className=" rounded-lg xs:w-full"
                    src="/photo/download2.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="xs:px-0 flex gap-2 px-4 py-4">
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      restaurants
                    </p>
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      cooking
                    </p>
                  </h1>
                  <h3 className="xs:px-0 xs:text-4 xs:w-full md:text-xl lg:text-[1rem] lg:leading-[1.5] xl:text-xl  font-bold py-1 px-4 w-[78%] hover:text-color1 duration-300">
                    <a href="">
                      Why You Should Optimize Your Menu for Delivery
                    </a>
                  </h3>
                  <div className="xs:px-0 py-2 px-4">
                    <ul className="xs:flex-wrap flex gap-3">
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaUserClock className=" text-lg m-1" /> Read More
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaRegCalendarDays className=" text-lg m-1" /> 01.Jan.
                          2022
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaEye className=" text-lg m-1" /> 132
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xs:block flex py-3">
                <div>
                  <Image
                    className=" rounded-lg xs:w-full"
                    src="/photo/food-2.jpg"
                    width={180}
                    height={180}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="xs:px-0 flex gap-2 px-4 py-4">
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      restaurants
                    </p>
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      cooking
                    </p>
                  </h1>
                  <h3 className="xs:px-0 xs:text-4 xs:w-full md:text-xl lg:text-[1rem] lg:leading-[1.5] xl:text-xl  font-bold py-1 px-4 w-[78%] hover:text-color1 duration-300">
                    <a href="">127+ Couriers On Our Team!</a>
                  </h3>
                  <div className="xs:px-0 py-2 px-4">
                    <ul className="xs:flex-wrap flex gap-3">
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaUserClock className=" text-lg m-1" /> Read More
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaRegCalendarDays className=" text-lg m-1" /> 01.Jan.
                          2022
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaEye className=" text-lg m-1" /> 132
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xs:block flex py-3">
                <div>
                  <Image
                    className=" rounded-lg xs:w-full"
                    src="/photo/download6.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="xs:px-0 flex gap-2 px-4 py-4">
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      restaurants
                    </p>
                    <p className="bg-color1 text-white py-1 px-[5px] rounded-md">
                      cooking
                    </p>
                  </h1>
                  <h3 className="xs:px-0 xs:text-4 xs:w-full md:text-xl lg:text-[1rem] lg:leading-[1.5] xl:text-xl  font-bold py-1 px-4 w-[78%] hover:text-color1 duration-300">
                    <a href="">
                      Why You Should Optimize Your Menu for Delivery
                    </a>
                  </h3>
                  <div className="xs:px-0 py-2 px-4">
                    <ul className="xs:flex-wrap flex gap-3">
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaUserClock className=" text-lg m-1" /> Read More
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaRegCalendarDays className=" text-lg m-1" /> 01.Jan.
                          2022
                        </h6>
                      </li>
                      <li>
                        <h6 className="flex gap-1 text-[#cfcfcf]">
                          <FaEye className=" text-lg m-1" /> 132
                        </h6>
                      </li>
                    </ul>
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
export default Container;
