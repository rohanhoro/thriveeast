export default function Button({ text }) {
  return (
    <div className="bg-white py-4 px-6 rounded-full cursor-pointer hover:text-primary">
      {text}
    </div>
  );
}
