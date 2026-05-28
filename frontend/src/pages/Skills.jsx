import { useEffect, useState } from "react";
import API from "../services/api";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    API.get("skills/")
      .then((res) => setSkills(res.data))
      .catch(console.log);

    API.get("tools/")
      .then((res) => setTools(res.data))
      .catch(console.log);

    API.get("experience/")
      .then((res) => setExperience(res.data))
      .catch(console.log);
  }, []);

  return (
    <section
      id="skills"
      className="
        w-full py-24 px-6 md:px-12
        bg-gradient-to-b from-white via-blue-50 to-white
        text-gray-900
        relative overflow-hidden
      "
    >

      {/* 🌊 SOFT BACKGROUND DECOR */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-200/40 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[380px] h-[380px] bg-cyan-200/30 blur-[150px] rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h4 className="text-blue-600 text-lg tracking-[0.35em] uppercase">
          My Expertise
        </h4>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-gray-900">
          Skills, Tools & Experience
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">

        {/* ================= SKILLS ================= */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-blue-700 mb-8 relative">
            Skills
            <div className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-blue-500 rounded-full"></div>
          </h3>

          <div className="space-y-6">

            {skills.map((s) => (
              <div key={s.id}>

                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {s.skill_name}
                  </span>

                  <span className="text-blue-600 font-bold">
                    {s.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ================= TOOLS ================= */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-blue-700 mb-8 relative">
            Tools I Use
            <div className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-cyan-400 rounded-full"></div>
          </h3>

          <div className="flex flex-wrap gap-3">

            {tools.map((t) => (
              <span
                key={t.id}
                className="
                  px-4 py-2
                  bg-blue-50
                  border border-blue-100
                  rounded-full
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-blue-100
                  hover:text-blue-700
                  transition
                "
              >
                {t.tool_name}
              </span>
            ))}

          </div>

        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h3 className="text-2xl font-bold text-blue-700 mb-8 relative">
            Experience
            <div className="absolute bottom-[-10px] left-0 w-10 h-[2px] bg-blue-500 rounded-full"></div>
          </h3>

          <div className="space-y-6">

            {experience.map((e) => (
              <div
                key={e.id}
                className="
                  relative
                  bg-blue-50
                  border border-blue-100
                  rounded-2xl
                  p-6
                  hover:-translate-y-1
                  transition
                  shadow-sm
                "
              >

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {e.title}
                </h4>

                <p className="text-sm text-blue-600 font-medium mb-4">
                  {e.start_time} — {e.end_time ? e.end_time : "Present"}
                </p>

                <p className="text-gray-700 text-sm leading-7 whitespace-pre-line">
                  {e.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;