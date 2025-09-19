import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaStrava } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <nav>
        <a
          className="hover:underline"
          href="/alexgalicio_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/profile.png"
          width={100}
          height={100}
          alt="profile"
          className="rounded border border-gray-400"
        />
        <h1 className="text-xl">Hi, I&apos;m Alex.</h1>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="https://github.com/alexgalicio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexis-joy-galicio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={24} color="#0077B5" />
        </a>
        <a
          href="mailto:alexisjoygalicio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail size={24} color="#c71610" />
        </a>
        <a
          href="https://www.strava.com/athletes/101644431"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStrava size={24} color="#fc4c02" />
        </a>
      </footer>
    </div>
  );
}
