export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        Contact
      </h3>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
        Terbuka untuk peluang kolaborasi proyek <strong className="font-semibold text-zinc-900 dark:text-zinc-100">UI/UX Design</strong>, <strong className="font-semibold text-zinc-900 dark:text-zinc-100">E-Commerce & Digital Marketing</strong>, maupun pembuatan konten kreatif. Silakan hubungi saya melalui email atau media sosial di bawah ini.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        {/* Email Link */}
        <a
          href="mailto:achmadgibran27@gmail.com"
          className="inline-flex items-center gap-x-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>achmadgibran27@gmail.com</span>
        </a>

        <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/achmad_gibran_13"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span>@achmad_gibran_13</span>
        </a>

        <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>

        {/* TikTok Link */}
        <a
          href="https://tiktok.com/@achmd.gbrn_13"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
          <span>@DINGISHOP</span>
        </a>
      </div>
    </section>
  );
}