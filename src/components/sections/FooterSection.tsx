export default function FooterSection() {
  return (
    <footer className="w-full py-6 text-center text-xs text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800 mt-8">
      <p>© {new Date().getFullYear()} Ricardo Ribeiro · Built with Next.js &amp; Tailwind</p>
      <p className="mt-1 select-none text-[10px] opacity-30 tracking-widest">↑↑↓↓←→←→BA</p>
    </footer>
  );
}
