export default function Button({ text }) {
  return (
    <div className="bg-primary text-white py-4 px-6 rounded-full cursor-pointer hover:text-black ">
      {text}
    </div>
  );
}
