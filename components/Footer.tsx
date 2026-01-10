import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Xingyu Homestay
            </h3>
            <p className="text-background/70 text-sm">
              Your perfect home away from home. Experience comfort, luxury, and
              unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#rooms"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Our Rooms
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>123 Xingyu Street</li>
              <li>City Center, 12345</li>
              <li>+1 (234) 567-890</li>
              <li>info@xingyuhomestay.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <div className="flex items-center gap-1">
            © {currentYear} Xingyu Homestay. Made with{" "}
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
