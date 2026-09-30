export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-zinc-800 dark:text-zinc-200 text-sm">
      &copy; {currentYear} Achmad Gibran. All rights reserved.
    </footer>
  );
}