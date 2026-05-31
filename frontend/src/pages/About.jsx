import { useEffect, useState } from "react";
import API from "../services/api";
 const BASE_URL = "https://anwar-portfolio-1.onrender.com";

function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    API.get("about/")
      .then((res) => {
        setAbout(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!about) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-blue-700">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-12 bg-white text-gray-900"
    >

      {/* SECTION TITLE */}
      <div className="text-center mb-20">
        <h4 className="text-blue-600 text-xl font-semibold mb-3 tracking-widest">
          About Me
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Know More About Me
        </h2>
      </div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

        {/* LEFT SIDE */}
        <div
          className="
            bg-white
            border border-blue-100
            rounded-3xl
            p-8
            shadow-md
            text-center
            hover:shadow-xl
            transition
          "
        >

          {/* IMAGE CIRCLE */}
          <div className="mb-8 flex justify-center">

            <div
              className="
                w-[260px]
                h-[260px]
                rounded-full
                p-[6px]
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-blue-400
                shadow-lg
              "
            >

               {/* IMAGE ONLY FIXED */}
      <img
         src={`https://anwar-portfolio-1.onrender.com${about.about_image}`}
        alt="profile"
        className="
          w-full
          h-full
          object-cover
          rounded-full
          border-[4px]
          border-white
          hover:scale-105
          transition duration-500
        "
      />

            </div>

          </div>

          {/* NAME + BIO */}
          <div>

            <h3
              className="
                text-3xl md:text-4xl
                font-extrabold
                mb-6
                text-blue-800
                tracking-wide
              "
            >
              Anwar Suleiman
            </h3>

            <div
              className="
                relative
                bg-blue-50
                border border-blue-100
                rounded-2xl
                p-6
                shadow-sm
              "
            >

              <div
                className="
                  absolute top-0 left-0
                  w-full h-1
                  rounded-t-2xl
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-400
                  to-blue-400
                "
              ></div>

              <p className="text-gray-700 leading-8 text-[16px] font-light">
                {about.about_bio}
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {/* EDUCATION */}
          <div
            className="
              bg-white
              border border-blue-100
              rounded-3xl
              p-8
              shadow-md
            "
          >

            <h3 className="text-3xl font-bold text-blue-700 mb-8">
              Education
            </h3>

            <div className="space-y-10">

              <div className="border-l-2 border-blue-500 pl-6">
                <span className="text-blue-500 text-sm">Present</span>
                <h4 className="text-2xl font-semibold mt-2 mb-2 text-gray-900">
                  Bachelor Degree in Data Science
                </h4>
                <p className="text-gray-600">
                  East African Statistical Training Centre (EASTC)
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-6">
                <span className="text-blue-500 text-sm">2021 - 2023</span>
                <h4 className="text-2xl font-semibold mt-2 mb-2 text-gray-900">
                  Diploma in Official Statistics
                </h4>
                <p className="text-gray-600">
                  East African Statistical Training Centre (EASTC)
                </p>
              </div>

            </div>

          </div>

          {/* PERSONAL INFO */}
          <div
            className="
              bg-white
              border border-blue-100
              rounded-3xl
              p-8
              shadow-md
            "
          >

            <h3 className="text-3xl font-bold text-blue-700 mb-8">
              Personal Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <span className="text-blue-600 text-sm font-bold">Location</span>
                <p className="text-gray-700">{about.location}</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <span className="text-blue-600 text-sm font-bold">Languages</span>
                <p className="text-gray-700">{about.language}</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <span className="text-blue-600 text-sm font-bold">Email</span>
                <p className="text-gray-700 break-all">{about.email}</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                <span className="text-blue-600 text-sm font-bold">Career</span>
                <p className="text-gray-700">{about.career}</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;