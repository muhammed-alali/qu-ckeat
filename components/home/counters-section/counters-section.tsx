function Counters_Section() {
  return (
    <>
      <section className=" xs:mx-4 md:container mx-auto ">
        <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-16 ">
          <div className="  flex gap-7 md:text-center text-title py-10 text-4xl font-bold  ">
            <h2>Service shows good taste.</h2>
          </div>
          <div className="  md:mx-auto flex gap-7 bg-white drop-shadow-2xl px-10 xs:w-full my-3 md:w-[270px] h-[175px] rounded-2xl">
            <span className="text-5xl font-bold text-color1 py-16">976</span>
            <h3 className="text-color2 py-16">Satisfied Customer</h3>
          </div>
          <div className="  md:mx-auto flex gap-7 bg-white drop-shadow-2xl px-14 py-1 xs:w-full my-3 md:w-[270px] h-[175px] rounded-2xl">
            <span className="text-5xl font-bold text-color1 py-16">12</span>
            <h3 className="text-color2 py-16">Best Restaurants</h3>
          </div>
          <div className="  md:mx-auto flex gap-7 bg-white drop-shadow-2xl px-14 py-1 xs:w-full my-3 md:w-[270px] h-[175px] rounded-2xl">
            <span className="text-5xl font-bold text-color1 py-16">1K+</span>
            <h3 className="text-color2 py-16">Food Delivered</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export default Counters_Section;
