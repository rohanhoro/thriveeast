import event from "../assets/event.jpg";
import homestay from "../assets/homestay_small.jpg";
import property from "../assets/property_small.jpg";
import store from "../assets/store.jpg";
import studio from "../assets/studio.jpg";

export default function Services() {
  return (
    <div className="flex bg-secondary text-white ">
      <div className="flex flex-col gap-12 max-w-6xl mx-auto my-12 px-12 text-justify">
        <div className="flex">
          <div className="h-70 w-100 max-md:w-55 max-md:h-70">
            <img
              className="object-cover object-[65%_50%] w-full h-full"
              src={event}
              alt="EastSide Chronicles"
            />
          </div>
          <div className="ml-12 w-[50%]">
            <div className="text-3xl mb-8 font-bold">
              THE EASTSIDE CHRONICLES
            </div>
            <div className="mb-4">
              The Eastside Chronicles transforms life’s most meaningful moments
              into unforgettable, artfully curated celebrations. From weddings
              and proposals, concerts, corporate gatherings, and music events,
              we design experiences that blend refined elegance with authentic
              local artistry.
            </div>
            <div>
              <b>The Eastside Chronicles</b> — Your partner in celebrating in
              elegance.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-70 w-100 max-md:w-55">
            <img
              className="object-cover object-[65%_50%] w-full h-full"
              src={studio}
              alt="EastSide Chronicles"
            />
          </div>
          <div className="ml-12 w-[50%]">
            <div className="text-3xl mb-8 font-bold">HOUSE OF FLICKS</div>
            <div className="mb-4">
              House of Flicks is where your story comes to life—beautifully and
              authentically. From cinematic films and commercial shoots to
              branded content and social media reels, we create visually
              compelling narratives that forge emotional connections and leave a
              lasting cultural impact. Rooted in Assamese heritage and infused
              with modern storytelling techniques, our work is crafted to be
              elegant, evocative, and unforgettable.
            </div>
            <div>
              <b>House of Flicks</b> — Visuals that thrive.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-70 w-100 max-md:w-55">
            <img
              className="object-cover object-[65%_50%] w-full h-full"
              src={store}
              alt="EastSide Chronicles"
            />
          </div>
          <div className="ml-12 w-[50%]">
            <div className="text-3xl mb-8 font-bold">THRIVE STORE</div>
            <div className="mb-4">
              Welcome to Thrive Store, your one-stop destination for curated
              essentials that elevate everyday living. From wellness and
              personal care to home, tech, and fashion accessories, we handpick
              products that blend quality, style, and practicality. At Thrive,
              we believe in helping you live better—whether you’re upgrading
              your space, simplifying your routine, or finding the perfect gift.
            </div>
            <div>
              <b>Thrive Store</b> — Where Lifestyle Meets Convenience.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-70 w-100 max-md:w-55">
            <img
              className="object-cover object-[65%_50%] w-full h-full"
              src={property}
              alt="EastSide Chronicles"
            />
          </div>
          <div className="ml-12 w-[50%]">
            <div className="text-3xl mb-8 font-bold">
              EASTNEST PROPERTY CARE
            </div>
            <div className="mb-4">
              EastNest Property Care provides professional, hassle-free property
              management. Tailored for NRIs and local owners, we handle guest
              services, maintenance, and marketing so your property performs
              while you relax. Cultural understanding meets modern
              professionalism.
            </div>
            <div>
              <b>EastNest Property Care</b> — Your Property, Our Priority.
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="h-70 w-100 max-md:w-55">
            <img
              className="object-cover object-[65%_50%] w-full h-full"
              src={homestay}
              alt="EastSide Chronicles"
            />
          </div>
          <div className="ml-12 w-[50%]">
            <div className="text-3xl mb-8 font-bold">EASTNEST</div>
            <div className="mb-4">
              EastNest offers curated homestay and Airbnb experiences with
              Assamese warmth and modern minimalism. It's more than a stay—it's
              an invitation to belong. Designed for comfort, culture, and
              authenticity, EastNest turns travel into an elegant, personal
              journey.
            </div>
            <div>
              <b>EastNest</b> — Stay. Belong. Thrive.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
