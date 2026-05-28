function Contact() {
  return (
    <section
      id="contact"
      className="
        w-full py-24 px-6 md:px-12
        bg-gradient-to-b from-white via-blue-50 to-white
        text-gray-900
        relative overflow-hidden
      "
    >

      {/* 🌊 BACKGROUND DECOR */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-200/40 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[380px] h-[380px] bg-cyan-200/30 blur-[150px] rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-20 relative z-10">
        <h4 className="text-blue-600 text-sm tracking-[0.4em] uppercase font-semibold">
          Get In Touch
        </h4>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-4 tracking-tight text-gray-900">
          Contact Me
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-7">
          I am open for internships, collaborations, and data science opportunities.
          Feel free to reach out through any platform below.
        </p>

        {/* underline */}
        <div className="w-28 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT INFO */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Let’s Work Together
          </h3>

          <p className="text-gray-600 leading-7 mb-8">
            I am open for internships, collaborations, and data science opportunities.
            Feel free to reach out anytime — I usually respond fast.
          </p>

          {/* DETAILS */}
          <div className="space-y-4">

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <span className="text-blue-600 text-sm font-semibold">Phone</span>
              <p className="text-gray-700 mt-1">+255 777 640 498</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <span className="text-blue-600 text-sm font-semibold">Email</span>
              <p className="text-gray-700 mt-1">
                anwar.suley.saleh@gmail.com
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <span className="text-blue-600 text-sm font-semibold">Location</span>
              <p className="text-gray-700 mt-1">
                Dar es Salaam, Tanzania
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Social Links
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/255777640498"
              target="_blank"
              rel="noreferrer"
              className="group bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                alt="WhatsApp"
              />
              <p className="text-sm text-gray-700">WhatsApp</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                alt="LinkedIn"
              />
              <p className="text-sm text-gray-700">LinkedIn</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                alt="GitHub"
              />
              <p className="text-sm text-gray-700">GitHub</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                alt="Instagram"
              />
              <p className="text-sm text-gray-700">Instagram</p>
            </a>

            {/* Gmail */}
            <a
              href="mailto:anwar.suley.saleh@gmail.com"
              className="group bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-100 transition col-span-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                alt="Email"
              />
              <p className="text-sm text-gray-700">Send Email</p>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;