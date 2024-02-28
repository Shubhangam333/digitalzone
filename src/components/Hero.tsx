"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-between items-center">
      <div className="flex flex-col md:items-start items-center gap-4 md:gap-6 basis-[50%]">
        <h1 className="font-extrabold sm:text-3xl text-2xl">
          Digital <span className="text-primary">Zone</span>
        </h1>
        <p className="md:text-xl text-md text-center">
          Empower Your Digital
          <span className="text-primary mx-2">Journey</span>
        </p>
        <p className="md:text-lg text-sm text-center md:text-start">
          Welcome to Digital <span className="text-primary">Zone</span>, where
          digital dreams come to life! As passionate tech enthusiasts, we curate
          a collection of cutting-edge products to elevate your digital
          experience.
        </p>
      </div>
      <motion.div
        animate={{
          y: [-40, 0, -40],
          transition: { duration: 5, repeat: Infinity },
        }}
        className="max-w-md w-[25rem] h-[400px] relative"
      >
        <Image
          src="/hero.jpg"
          alt="hero"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </section>
  );
}
