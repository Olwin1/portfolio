import HeroButton from "./components/hero-button";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-48">
        <main className="flex items-center mt-[25vh]">
          <div className="w-1/2">
            <div>
              <sub>3rd Year Computer Systems Engineering Student</sub>
              <h1 className="font-semibold">Oliver Munn</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare venenatis metus, vitae rhoncus felis volutpat vel. In
                condimentum eu neque id congue.
              </p>
            </div>
            <div></div>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
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
