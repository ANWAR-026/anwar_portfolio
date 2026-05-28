function Footer() {
  return (
    <footer className="relative text-white pt-20 px-6 md:px-12 overflow-hidden bg-[#0b1220]">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-blue-500/10 to-[#0b1220] pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Anwar Suleiman
          </h2>

          <p className="text-gray-300 leading-7 text-sm">
            Data Scientist passionate about turning data into insights
            and building data-driven solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col space-y-2">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-gray-300 text-sm">
            <p>Dar es Salaam, Tanzania</p>
            <p>anwar.suley.saleh@gmail.com</p>
            <p>+255 777 640 498</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Follow Me
          </h3>

          <div className="space-y-2">
            <a
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGJTgC9ErhzMAAAAZ5v19PgNoIfl31stFY0Hl5NqKeUC0kf_zhB0TErWnv48CXyHRWbQT9Lo6QCpfExNMu90k296b0VNgluXwIiJbgXCl9YWKbXxGlgUcBn7evakz4L7TIoCRw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanwar-saleh-a152b1401%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_android"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ANWAR-026"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/anwarsaleh_02?utm_source=qr&igsh=MTk1MG50b29seDVwcA=="
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/255777640498"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-300 hover:text-cyan-400 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative border-t border-white/10 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 Anwar Suleiman. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;