export default function Home() {
  return (
    <main className="home h-[100vh] w-full flex items-center lg:items-end">

      <div className="flex lg:flex-row flex-col lg:justify-between gap-10 items-center lg:p-[10rem] p-4">
        <div className="flex flex-col lg:text-left text-center gap-2 lg:w-[50%] items-center lg-items-start">
          <h2 className="text-[var(--primary)] navbar text-lg">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] heading-bellefair">SPACE</h1>
          <p className="text-sm md:w-[70%]">
            Let&apos;s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because you are going to the space tourism capital of
            the world!
          </p>
        </div>

        <div className="lg:w-[12rem] lg:h-[12rem] w-[9rem] h-[9rem] rounded-full flex items-center justify-center bg-[var(--primary)] text-[var(--secondary)] text-2xl heading-bellefair">
          EXPLORE
        </div>
      </div>
    </main>
  );
}