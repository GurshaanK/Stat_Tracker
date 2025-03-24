import React from "react";
import Matches from "../components/Matches";
import Players from "../components/Players";

function Home() {
  return (
    <div>
      <h1 className="text-3x1 font-bold underline bg-blue-500 text-white">
        Welcome to Home
      </h1>
      <section className="h-3 bg-green-400 flex items-center justify-center text-3xl p-12 md:p-14 lg:p-16">
        <p>lorem ipsum dolor </p>
      </section>
      <Matches />
      <Players />
    </div>
  );
}

export default Home;
