import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
      <div className="relative">
        <Image
          className="size-24 rounded-2xl object-contain bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-800 shadow-md p-1"
          src="/gibran_foto.jpeg"
          alt="Achmad Gibran"
          width={96}
          height={96}
          priority
        />
        <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-zinc-900"></span>
        </span>
      </div>

      <div className="space-y-2 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Achmad Gibran
          </h1>
          <span className="self-center md:self-auto text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            Open for Collaboration
          </span>
        </div>

        <h2 className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
          • UI/UX Enthusiast • Social Media Specialist • Music Content Creator 
        </h2>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center md:justify-start gap-1.5">
          <span>🎓 Mahasiswa Teknik Informatika - STITEK Bontang</span>
          <span>•</span>
          <span>📍 Bontang, Kaltim</span>
        </p>
      </div>
    </header>
  );
}