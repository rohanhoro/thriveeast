import logo from "../assets/EastSideChroniclesLogo.svg";
import heroImg from "../assets/event2.jpg";
import Card from "../components/Card";

export default function EastSideChronicles() {
  return (
    <div className="bg-secondary text-white">
      <div
        className="flex h-80 bg-center mb-14 "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="flex justify-center items-center h-full w-full bg-black/50">
          <img
            className="h-20 max-xs:h-16"
            src={logo}
            alt="EastSide Chronicles Logo"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto items-center justify-center ">
        <div className="mb-8 font-medium text-2xl text-primary">
          Featured Services
        </div>
        <div className="w-140 text-center mb-16">
          Whatever the occasion, our diverse range of event management services
          is here to make your moments truly special and worry-free.
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16">
          <Card
            title={"Event Management"}
            description={
              "Comprehensive planning and coordination for events of all sizes, ensuring a seamless and memorable experience."
            }
          />
          <Card
            title={"Marriage"}
            description={
              "Expert wedding planning services to bring your dream celebration to life, from traditional to modern ceremonies."
            }
          />
          <Card
            title={"Proposal"}
            description={
              "Romantic and personalized proposal planning to create the perfect 'yes' moment."
            }
          />
          <Card
            title={"Private Events"}
            description={
              "Tailored experiences for birthdays, anniversaries, and intimate gatherings — made unforgettable."
            }
          />
        </div>
      </div>
    </div>
  );
}
