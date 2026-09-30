export default function About() {
  const skills = [
    "Figma & Prototyping",
    "UI/UX Design",
    "Web Development Basics",
    "Content & Music Creation",
    "E-Commerce & Social Media Ops",
  ];

  return (
    <section id="about" className="space-y-5">
      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        About Me
      </h3>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
        Mahasiswa Teknik Informatika di STITEK Bontang dengan minat kuat di bidang <strong className="font-semibold text-zinc-900 dark:text-zinc-100">UI/UX Design</strong> dan <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Web Development</strong>. Berpengalaman merancang antarmuka yang intuitif menggunakan Figma serta memahami dasar-dasar pengembangan web. Di luar dunia IT, saya juga aktif mengeksplorasi pembuatan <strong className="font-semibold text-zinc-900 dark:text-zinc-100">konten digital dan musik</strong>.
      </p>

      <div className="pt-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
          Core Competencies & Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}