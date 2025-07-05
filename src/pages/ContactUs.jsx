import contact from "../assets/contact.jpg";
import emailIcon from "../assets/icons/email.svg";
import phoneIcon from "../assets/icons/phone.svg";
export default function ContactUs() {
  return (
    <div className="flex bg-secondary text-white h-screen pt-16">
      <div className="flex max-w-6xl mx-auto text-justify px-12 my-8 gap-12 max-sm:flex-col">
        <div className="w-[50%] h-100 overflow-hidden max-sm:w-full">
          <img src={contact} alt="Contact Us Image"/>
        </div>
        <div className="w-[50%] max-sm:w-full ">
          <div className="font-medium text-5xl mb-4">Contact Us</div>
          <div className="mb-8">
            We’d love to hear from you. Whether you’re planning an unforgettable
            event, looking for elegant lifestyle products, or just want to say
            hello—Thrive East is here to help you thrive in elegance. Reach out
            to us for collaborations, custom styling, or any questions. Our team
            will reach out to you as soon as possible.
          </div>
          <div className="font-bold mb-4">Contact Info</div>
          <div className="flex gap-2 mb-4">
            <img src={emailIcon} alt="Email Icon" />
            <a href="mailto:thriveeastinfo@gmail.com">
              thriveeastinfo@gmail.com
            </a>
          </div>
          <div className="flex gap-2 mb-8">
            <img src={phoneIcon} alt="Phone Icon" />
            <a href="tel:+919678039205">+91-9678039205</a>
          </div>
          <a
            className="font-bold text-2xl text-primary"
            href="https://forms.gle/a9Fg6geSZdutAf3M9"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
