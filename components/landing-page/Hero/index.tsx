import Link from "next/link";
import Bg from "../../bg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  Discover Open Source, <br /> Connect & Code
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Navigate Your Coding Journey: Explore Open Source Projects by Tech Stack, Connect, and Collaborate with New Developers on Open Path Finder.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-md bg-primary-2 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out"
                  >
                    Find Open Source
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Bg />
    </>
  );
};

export default Hero;
