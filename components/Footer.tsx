export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 border-base-300 border-t py-8">
      <div className="container mx-auto px-6">
        <div className="text-base-content/60 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          {/* Copyright */}
          <div>© {currentYear} Homestay Design. All rights reserved.</div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-base-content transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-base-content transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-base-content transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
