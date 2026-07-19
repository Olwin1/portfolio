import Link from "next/link";
import FloatingButton from "./components/floating-button";
import HeroButton from "./components/hero-button";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-48">
        <main className="flex items-center mt-[15vh]">
          <div className="w-1/2">
            <div>
              <em className="text-[24px]">3rd Year Computer Systems Engineering Student</em>
              <h1 className="font-semibold text-[48px]">Oliver Munn</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare venenatis metus, vitae rhoncus felis volutpat vel. In
                condimentum eu neque id congue.
              </p>
            </div>
            <br />
            <div className="flex gap-4">
              <FloatingButton className="bg-accent/30 backdrop-blur-sm">See My Projects</FloatingButton>
              <Link href="" className="flex items-center">See My CV</Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-12 text-[36px]">
            <HeroButton>
              <strong>My Projects</strong>
            </HeroButton>
            <HeroButton>
              <strong>Experience</strong>
            </HeroButton>
            <HeroButton>
              <strong>About Me</strong>
            </HeroButton>
          </div>
        </main>
      </div>
    </div>
  );
}
