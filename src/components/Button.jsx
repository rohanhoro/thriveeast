export default function Button({ text, classname }) {
  return (
    <div
      className={`bg-primary font-bold text-white py-4 px-6 rounded-full cursor-pointer hover:text-black w-fit ${classname}`}
    >
      {text}
    </div>
  );
}
