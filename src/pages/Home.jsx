import HoverCard from "../components/HoverCard";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto h-160">
        <div className="max-w-lg py-16 px-12 ">
          <h1 className="text-6xl text-white">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <h4 className="text-white text-lg">
            Explicabo necessitatibus deleniti dolores blanditiis quas eveniet
            aut deserunt aspernatur quibusdam ducimus hic ut.
          </h4>
        </div>
      </div>
      <div className=" bg-white">
        <div className=" flex gap-4 max-w-6xl mx-auto py-16 px-12">
          <HoverCard
            title={"EastNest Property Care"}
            content={"Property Care and Management"}
          />
          <HoverCard
            title={"EASTNEST"}
            content={"Curated Homestays and Airbnb"}
          />
          <HoverCard
            title={"The Eastside Chronicles"}
            content={"Event Management"}
          />
          <HoverCard
            title={"Thrive East Studios"}
            content={"Designing and Production"}
          />
          <HoverCard
            title={"Thrive Kits"}
            content={"Curated and Personalized Gifting"}
          />
        </div>
      </div>
    </div>
  );
}
