import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/coffee";

export function Footer() {
  return (
    <footer className="dark:bg-black">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-bold text-base sm:text-lg md:text-xl">Brew Haven</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Crafting perfect moments, one cup at a time.
            </p>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 sm:space-y-4 text-center sm:text-left"
          >
            <h3 className="font-semibold text-base sm:text-lg md:text-xl">Connect</h3>
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank" // Buka link di tab baru
                rel="noopener noreferrer" // Untuk keamanan
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Information Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 text-center sm:text-left"
          >
            <h3 className="font-semibold text-base sm:text-lg md:text-xl">Information</h3>
            {footerLinks.info.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://raldprojects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300"
            >
              raldprojects
            </a>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}