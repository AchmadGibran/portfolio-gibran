import Image from 'next/image';

export default function Projects() {
  const projectCategories = [
    {
      category: "UI/UX & Tech Projects",
      items: [
        {
          title: "Local Culinary & UMKM Food App (UI/UX Design)",
          description: "Perancangan antarmuka dan alur pengguna (user flow) aplikasi pemesanan & pengantaran makanan yang didesain khusus untuk mendukung UMKM pangan lokal. Proyek ini dibuat dalam rangka kompetisi desain UI/UX menggunakan Figma.",
          image: "/figma.png",
          tags: ["Figma", "UI/UX Design", "User Flow", "Mobile App Prototype"],
        },
      ],
    },
    {
      category: "E-Commerce & Digital Business",
      items: [
        {
          title: "Numismatic Digital Marketing & Live Commerce",
          description: "Pemasaran digital dan edukasi sejarah uang kuno (numismatik) berbasis live streaming di TikTok. Berfokus pada pemahaman nilai produk, edukasi interaktif, serta konversi transaksi langsung via WhatsApp.",
          image: "/live.png", 
          tags: ["TikTok Live", "Digital Marketing", "Numismatics", "Direct Commerce"],
        },
      ],
    },
    {
      category: "Creative & Music Content",
      items: [
        {
          title: "Music Cover Production & Digital Content",
          description: "Produksi konten musik berbasis cover lagu untuk platform media sosial (Instagram). Mencakup proses aransemen/perekaman audio, penataan visual serta thumbnail yang konsisten, dan strategi publikasi untuk membangun engagement dengan pendengar.",
          image: "/ig.png", 
          tags: ["Music Cover", "Audio Production", "Instagram Strategy", "Visual Thumbnail"],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        Projects
      </h3>

      <div className="space-y-10">
        {projectCategories.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              {group.category}
            </h4>

            <div className="space-y-6">
              {group.items.map((project, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-x-6 gap-y-4 items-start pt-2">
                  <Image
                    alt={project.title}
                    src={project.image}
                    className="w-full md:w-48 aspect-video rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800"
                    width={800}
                    height={500}
                  />
                  <div className="w-full">
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      {project.title}
                    </h5>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-md text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}