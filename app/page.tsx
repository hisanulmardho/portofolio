// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/70 z-50 border-b border-gray-200"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.h1
            className="text-xl font-semibold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
          </motion.h1>

          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            {[
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skills" },
              { name: "Experience", link: "#experience" },
              { name: "Contact", link: "#contact" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ opacity: 0.6 }}
                className="transition cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile placeholder for future menu */}
          <div className="md:hidden text-gray-700">
  <details>
    <summary className="py-2 px-4 rounded bg-gray-100">Menu</summary>
    <div className="flex flex-col gap-3 mt-2 bg-white shadow rounded p-4 absolute right-6 top-16 z-50 min-w-[120px]">
      {[
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Contact", link: "#contact" },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="py-1 text-gray-700 hover:text-black"
        >
          {item.name}
        </a>
      ))}
    </div>
  </details>
</div>
        </div>
      </motion.nav>

      {/* HERO WITH PARALLAX */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pb-32 md:pb-0">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating Parallax Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-72 h-72 bg-blue-300/25 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hisanul Mardho
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
          </motion.p>

          <motion.div
            className="mt-8 mb-16 md:mb-0 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-gray-200 text-gray-800 font-semibold hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Photo Placeholder (use Image component to replace) */}
        <motion.div
          className="absolute bottom-10 right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 rounded-2xl shadow-xl bg-gray-100 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image 
            src="/profil.jpg" 
            alt="Hisanul Mardho" 
            width={200} 
            height={200} 
            loading="eager"
            className="w-auto h-auto max-w-[160px] md:max-w-[240px] object-contain rounded-2xl" 
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-3 sm:px-6 md:px-20 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Saya merupakan seorang professional dalam bidang Teknik Informatika dan memiliki jiwa pemimpin serta mampu bekerja sama dalam tim.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-3 sm:px-6 md:px-20 bg-gray-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-900"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            "Next.js",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "UI/UX Design",
            "API Integration",
            "Responsive Layouts",
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white rounded-xl shadow text-center text-gray-700 font-medium border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-3 sm:px-6 md:px-20 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              role: "Staff Administrasi dan Operator",
              company: "SMA Negeri 2 Tualang",
              year: "Januari 2023 - Juni 2023",
              desc: "",
            },
            {
              role: "Staff Administrasi dan Operator",
              company: "SMK Negeri 2 Kandis",
              year: "Juli 2023 - Desember 2023",
              desc: "",
            },
            {
              role: "Staff Administrasi (Magang)",
              company: "Dinas Tenaga Kerja Kota Pekanbaru",
              year: "Maret 2021 - Juni 2021",
              desc: "",
            },
            {
              role: "Staff Perizinan Reklame (Magang)",
              company: "Mal Pelayanan Publik Kota Pekanbaru",
              year: "September 2021 - November 2021",
              desc: "",
            }
            
          ].map((exp, i) => (
            <motion.div
              key={i}
              className="p-6 border rounded-xl bg-white shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} — {exp.year}</p>
              <p className="mt-2 text-gray-700">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-3 sm:px-6 md:px-20 text-center bg-gray-50">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.div
            className="flex items-center gap-2 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-medium">Email:</span>
            <a href="mailto:hisanumardhol@gmail.com" className="text-blue-600 hover:text-blue-800 transition">
              hisanulmardho@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-medium">Phone:</span>
            <a href="tel:+6281234567890" className="text-blue-600 hover:text-blue-800 transition">
              +62 812-3456-7890
            </a>
          </motion.div>
        </div>

        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hisanulmardho@gmail.com&su=Hello%20from%20Portfolio&body=Hi%20Hisanul,%0D%0A%0D%0AI%20would%20like%20to%20discuss..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Send Email
        </motion.a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 text-sm">
        <div className="max-w-5xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Hisanul Mardho — Made with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
