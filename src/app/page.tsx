import Image from "next/image";
import Battery from "./components/battery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-gradient-to-b from-white to-blue-300">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extrabold bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent text-xl uppercase mb-8">
          Check your battery percentage
        </h1>
        <Battery></Battery>
      </div>
    </main>
  );
}
