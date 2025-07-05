import event from "../assets/event.jpg";
import store from "../assets/store.jpg";
import homestay from "../assets/homestay_small.jpg";
import property from "../assets/property_small.jpg";
import studio from "../assets/studio.jpg";
import Button from "../components/Button";
import HoverCard from "../components/HoverCard";

export default function Home() {
  return (
    <div>
      <div className="from-black/70 bg-linear-to-r">
        <div className="max-w-6xl mx-auto h-160 max-md:h-screen  ">
          <div className="max-w-2xl py-16 px-12 ">
            <h1 className="text-6xl text-white mb-8 font-[Playfair]">
              Hybrid lifestyle ecosystem
            </h1>
            <h4 className="text-white text-xl leading-none font-[Playfair] mb-8">
              Thrive East is your invitation to live beautifully. We craft
              styled events that linger in memory, gifts that speak from the
              heart, stays that feel like coming home, and property care that
              brings true peace of mind. And for the dreamers and visionaries?
              Our Studio turns your ideas into art — with creative direction and
              design that whisper elegance at every turn.
            </h4>
            <Button text={"Book a free consultation"} link={"/contact"} />
          </div>
        </div>
      </div>
      <div className=" bg-secondary">
        <div className=" flex max-xs:flex-col gap-4 max-w-6xl mx-auto py-16 px-12">
          <HoverCard
            title={"The Eastside Chronicles"}
            content={"Event Management"}
            image={event}
          />
          <HoverCard
            title={"House of Flicks"}
            content={"Designing and Production"}
            image={studio}
          />
          <HoverCard
            title={"Thrive Store"}
            content={"Curated and Personalized Gifting"}
            image={store}
          />
          <HoverCard
            title={"EastNest Property Care"}
            content={"Property Care and Management"}
            image={property}
          />
          <HoverCard
            title={"EASTNEST"}
            content={"Curated Homestays and Airbnb"}
            image={homestay}
          />
        </div>
      </div>
    </div>
  );
}
