export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-center text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Random <span className="text-secondary">User</span> Generator App
      </h2>
      <h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Instantly generate a random user data
      </h3>
    </div>
  );
}
