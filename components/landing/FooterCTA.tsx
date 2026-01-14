"use client";
import * as motion from "framer-motion/client";
import { ArrowUp } from 'lucide-react';
import Link from "next/link";
import { Logo } from "../Logo";

type LinkDetails = {
  label: string,
  href: string,
  onClick?: () => void,
  isExternal: boolean,
}

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    product: [
      { label: 'How it Works', href: '/#how-it-works', onClick: () => scrollToSection('how-it-works') },
      { label: 'Features', href: '/#features', onClick: () => scrollToSection('features') },
      { label: 'Pricing', href: '/#pricing', onClick: () => scrollToSection('pricing') },
    ] as LinkDetails[],
    company: [
      { label: 'About', href: '/about', isExternal: false },
      { label: 'Blog', href: '/blog', isExternal: false },
    ] as LinkDetails[],
    legal: [
      { label: 'Privacy', href: '/privacy', isExternal: false },
      { label: 'Terms', href: '/terms', isExternal: false },
    ] as LinkDetails[]
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Logo />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8 max-w-md"
            >
              The no-code way to sync Airtable with databases. Built for makers and teams who ship fast.
            </motion.p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (categoryIndex + 1) }}
              >
                <h3 className="font-heading font-bold text-sm uppercase mb-4 text-gray-500">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * itemIndex }}
                    >
                      {item?.onClick ? (
                        <button
                          onClick={item.onClick}
                          className="text-sm hover:text-[#FF4500] transition-colors text-left"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm hover:text-[#FF4500] transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Social */}
          <div className="flex items-center gap-6">
            <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
              © {new Date().getFullYear()} DBPiper. Built for no-code makers.
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm hover:text-[#FF4500] transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 text-center"
        >
          <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
            Made with ❤️ for the no-code community
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
