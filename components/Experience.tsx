const experiences = [
  {
    role: "Junior Associate – Operations",
    company: "UnifyCX",
    date: "Mar 2025 – Nov 2025",
    location: "Mangaluru, India",
    bullets: [
      "Handled 40–80 VPN support tickets per shift, resolving connectivity issues and monitoring server load using Zendesk and Okta.",
      "Designated QA tester for the team; commended by management as a highly motivated self-starter with strong technical knowledge.",
    ],
    tags: ["VPN", "Zendesk", "Okta", "QA Testing"],
  },
  {
    role: "Junior Support Engineer – Bluehost",
    company: "UnifyCX",
    date: "Jul 2024 – Mar 2025",
    location: "Mangaluru, India",
    bullets: [
      "Resolved 60+ technical support tickets per shift covering hosting, email, DNS, and website security across shared and VPS environments.",
      "Performed security fixes, patch applications, and email delivery troubleshooting via cPanel, WHM, and Linux-based tools.",
    ],
    tags: ["cPanel", "WHM", "DNS", "Linux", "Grafana"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full ">
      <h2 className="heading p-4">Work Experience</h2>
      <p className="text-center  text-xl md:text-2xl font-bold text-gray-500 mb-10">
        Professional roles and responsibilities
      </p>

      <div className="flex flex-col gap-4 w-full">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative bg-[#13131a] border border-white/5 rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 to-blue-500" />

            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
              <div>
                <p className="text-white font-semibold  text-xl md:text-2xl">
                  {exp.role}
                </p>
                <p className="text-violet-500 text-xl font-semibold md:text-2xl mt-1">
                  {exp.company}
                </p>
              </div>
              <span className=" text-xl md:text-2xl font-semibold bg-indigo-950 border border-indigo-700 text-indigo-300 px-3 py-1 rounded-full">
                {exp.date}
              </span>
            </div>

            <p className="text-gray-500 text-s mb-3">{exp.location}</p>

            <ul className="space-y-2">
              {exp.bullets.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-gray-400 text-m font-semibold leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tags.map((tag, k) => (
                <span
                  key={k}
                  className="text-[13px] bg-white/5 border border-white/10 text-gray-500 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
