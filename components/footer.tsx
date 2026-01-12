"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
                DL
              </div>
              <span className="font-bold">Dan Lukorito</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Committed to transformational leadership and real change for Webuye East.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} />
              <span>contact@danlukorito.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} />
              <span>+254 (0) XXX XXX XXX</span>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>Webuye East, Bungoma County, Kenya</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm opacity-75 pt-4">Join our community and stay updated on campaign news and events.</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground border-opacity-20 pt-8">
          <p className="text-center text-sm opacity-75">
            © {currentYear} Dan Lukorito for Webuye East. All rights reserved. | Leadership with Integrity • Service
            with Purpose • Accountability to the People
          </p>
        </div>
      </div>
    </footer>
  )
}
