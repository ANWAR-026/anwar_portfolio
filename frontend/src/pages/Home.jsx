import { useEffect, useState } from "react";
import API from "../services/api";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    API.get("home/")
      .then((res) => setHome(res.data))
      .catch((err) => console.log(err));
  }, []);

  const data = home[0];

  return (
    <Layout>

      <section
        id="home"
        className="min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50"
      >

        <div className="max-w-7xl mx-auto w-full px-6">

          {data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* TEXT SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >

                <p className="text-blue-700 mb-3 text-lg font-medium">
                  Hello, I'm
                </p>

                <h1 className="
                  text-5xl md:text-6xl font-extrabold mb-6
                  bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600
                  text-transparent bg-clip-text
                  tracking-wide
                ">
                  {data.name}
                </h1>

                {/* 🔥 CLEAN BIO CARD (WHITE STYLE) */}
                <div className="relative mb-8">

                  {/* soft glow */}
                  <div className="absolute inset-0 bg-blue-100/40 blur-xl rounded-2xl"></div>

                  {/* content */}
                  <div className="relative bg-white border border-blue-100 rounded-2xl p-6 md:p-8 shadow-md">

                    <p className="text-gray-700 text-base md:text-lg leading-8 font-light">
                      {data.bio}
                    </p>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="
                  flex flex-col sm:flex-row
                  gap-4
                  justify-center md:justify-start
                ">

                  <a
                    href={data.cv_download}
                    target="_blank"
                    className="
                      bg-blue-700 hover:bg-blue-800
                      text-white
                      px-6 py-3 rounded-xl
                      font-semibold
                      transition
                      transform hover:scale-105
                      text-center
                    "
                  >
                    Download CV
                  </a>

                  <a
                    href="#projects"
                    className="
                      border border-blue-600 text-blue-700
                      hover:bg-blue-50
                      px-6 py-3 rounded-xl
                      font-semibold
                      transition
                      transform hover:scale-105
                      text-center
                    "
                  >
                    View Projects
                  </a>

                </div>

              </motion.div>

              {/* IMAGE SECTION */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
              >

                <div className="
                  w-full max-w-md
                  rounded-2xl overflow-hidden
                  border border-blue-200
                  shadow-xl
                  hover:scale-105 transition duration-300
                  bg-white
                ">

                  <img
                    src={data.home_image}
                    alt="profile"
                    className="w-full h-[420px] object-cover"
                  />

                </div>

              </motion.div>

            </div>
          )}

        </div>

      </section>

    </Layout>
  );
}

export default Home;