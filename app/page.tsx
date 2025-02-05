import CityRestaurants from "@/components/home/city-restaurants/page";
import Container from "@/components/home/container/page";
import Counters_Section from "@/components/home/counters-section/counters-section";
import Hero from "@/components/home/Hero/page";
import Join_Bartnership from "@/components/home/join-partnership/page";
import Subscribe_Section from "@/components/home/subscribe-section/page";
import Work from "@/components/home/Work/page";
import Your_Yavorite_Food from "@/components/home/your-favorite-food/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <CityRestaurants />
      <Your_Yavorite_Food />
      <Counters_Section />

      <Join_Bartnership />
      <Container />
      <Subscribe_Section />
    </>
  );
}
