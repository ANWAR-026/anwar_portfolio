import { useState, useEffect } from "react";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = ["home", "about", "skills", "projects", "contact"];

  // 🔥 SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      let current = "home";

      menuItems.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SMOOTH SCROLL
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    let startTime = null;
    const duration = 900;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="relative min-h-screen text-gray-900 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-white" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 
        bg-gradient-to-r from-blue-50 via-white to-cyan-50
        backdrop-blur-md border-b border-gray-200/60 shadow-sm
      ">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex flex-col leading-tight">

            <h1 className="text-2xl font-bold italic text-blue-900 tracking-wide">
              ANWAR<span className="text-blue-700">.</span>
            </h1>

            <span className="text-[11px] text-blue-800 tracking-widest ml-1">
              Data Scientist
            </span>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 font-[Tahoma] text-sm">

            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => smoothScrollTo(item)}
                className={`capitalize relative transition ${
                  active === item
                    ? "text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all ${
                    active === item ? "w-full bg-blue-700" : "w-0"
                  }`}
                />
              </button>
            ))}

          </div>

          {/* RIGHT */}
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
          >
            Hire Me
          </a>

          {/* MOBILE */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 pb-6 bg-white border-t border-gray-200">

            <div className="flex flex-col space-y-4 font-[Tahoma]">

              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    smoothScrollTo(item);
                    setOpen(false);
                  }}
                  className={`text-left capitalize ${
                    active === item
                      ? "text-blue-700 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}

      </nav>

      {/* CONTENT */}
      <div className="pt-24">{children}</div>

    </div>
  );
}

export default Layout;