import Link from "next/link";

export const ContentTogether = () => (
  <section className="flex flex-col items-center space-y-5 mb-5 ">
    <h2 className="font-bold font-oswald md:text-6xl text-center">
      Lets start making content together
    </h2>
    <Link
      href="/contact"
      className="btn btn-primary btn-xl bg-white text-black"
    >
      Start Here
    </Link>
  </section>
);
