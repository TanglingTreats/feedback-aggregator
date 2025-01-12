import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-3 gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <div className="border-2 border-gray-50 px-2 py-3 h-full flex flex-col justify-between">
          <p>First long feedback of the app</p>
          <div className="flex flex-row-reverse">Thumbs up</div>
        </div>
        <div className="border-2 border-gray-50 px-2 py-3 h-full flex flex-col justify-between">
          <p>Second feedback</p>
          <div className="flex flex-row-reverse">Thumbs up</div>
        </div>
        <div className="border-2 border-gray-50 px-2 py-3 h-full flex flex-col justify-between">
          <p>Third feedback that is quite long as well that it may overflow</p>
          <div className="flex flex-row-reverse">Thumbs up</div>
        </div>
        <div className="border-2 border-gray-50 px-2 py-3 h-full flex flex-col justify-between">
          <p>Fourth feedback</p>
          <div className="flex flex-row-reverse">Thumbs up</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
