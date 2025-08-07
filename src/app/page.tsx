"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Welcome to Craftfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Showcase your creative work effortlessly. Build a stunning portfolio
          in minutes.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
