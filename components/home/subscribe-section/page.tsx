import Image from "next/image";

function Subscribe_Section() {
  return (
    <>
      <section className=" md:container xs:mx-4 mx-auto justify-center">
        <div className="grid xs:grid-cols-1  md:grid-cols-2  justify-center py-20">
          <div className=" ">
            <Image
              src={"/photo/illustration-4.png"}
              alt="Picture of the author"
              width={700}
              height={700}
            />
          </div>

          <div className=" xs:px-4 px-6 py-8">
            <h2 className="xs:text-[1.75rem] md:text-[2.75rem] md:leading-[1] lg:text-6xl font-bold ">
              Get the menu of your favorite restaurants every day
            </h2>
            <h2 className="mt-[20px] py-7">
              <a
                href=""
                className="bg-color1 text-white py-3 px-[10px] rounded-md border  border-color1 hover:bg-white hover:text-color1 duration-300"
              >
                SUBSCRIBE
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Subscribe_Section;
