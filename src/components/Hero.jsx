
import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-white text-center px-4">
      <img
        src="/profile.jpg"
        alt="Trinadh Samudrala"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-white">Trinadh Samudrala</h1>
      <h2 className="text-xl md:text-2xl text-purple-100 mt-2">AEM / Java Developer</h2>
      <p className="max-w-xl text-md md:text-lg text-white mt-4">
        Building scalable digital experiences, optimizing asset delivery, and crafting powerful AEM solutions that drive results.
      </p>
      <div className="flex gap-4 mt-6">
        <a href="mailto:trinadhsamudrala11@gmail.com">
          <Button className="bg-white text-purple-700 hover:bg-purple-100">Contact Me</Button>
        </a>
        <a href="https://www.linkedin.com/in/trinadh-samudrala" target="_blank">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-700">
            LinkedIn
          </Button>
        </a>
      </div>
      <div className="flex gap-6 mt-4 text-white">
        <a href="https://github.com/trinadhsamudrala11" target="_blank">GitHub</a>
        <a href="https://leetcode.com/trinadh11/" target="_blank">LeetCode</a>
      </div>
    </section>
  );
}
