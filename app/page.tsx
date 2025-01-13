import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-fuchsia-900/80 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-rose-300 mt-8 max-md:text-center max-md:text-4xl max-md:border-black max-md:border-double max-md:pb-7 max-md:border-b-2">Data Fetching Assignment</h1>
      <div className="flex gap-12 h-[70%] items-center max-md:flex-col max-md:justify-center">
        <Link href="/clientSide" className="w-[22rem] h-[12rem] bg-purple-600 justify-self-center text-3xl font-bold border-box border-2 border-purple-950 flex justify-center items-center rounded-lg text-zinc-900">Client Side Fetching</Link>
        <Link href="/serverSide" className="w-[22rem] h-[12rem] bg-purple-600 justify-self-center text-3xl font-bold border-box border-2 border-purple-950 flex justify-center items-center rounded-lg text-zinc-900">Server Side Fetching</Link>
      </div>
    </div>
  )
}
