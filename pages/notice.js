import Link from "next/link";

export const Notice = () => {
  return (
    <div className="text-white">
      <div className="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-5xl">Work In Progress...</h2>
        <p className="mt-3">Still wanna see? 😼</p>
        <Link
          href="/"
          className="border-2 border-white px-2 py-1 rounded-lg mt-4 hover:bg-white block hover:text-black transition-all"
        >
          View Current
        </Link>
      </div>
    </div>
  );
};
export default Notice;
