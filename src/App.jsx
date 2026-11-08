import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AsciiTrout from "./components/AsciiTrout";

const resume = `${import.meta.env.BASE_URL}Daniel_Park_Resume.pdf`;

const links = [
  ["Email", "mailto:park6565@mylaurier.ca"],
  ["GitHub", "https://github.com/parkdan26"],
  ["LinkedIn", "https://www.linkedin.com/in/parkdan26"],
  ["Instagram", "https://www.instagram.com/danyul_park/"],
];

function ShellPrompt() {
  return <span className="shell-prompt">~ ➤ </span>;
}

function formatLogin(date) {
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = String(date.getDate()).padStart(2, " ");
  const time = date.toLocaleTimeString("en-GB", { hour12: false });
  return `${weekday} ${month} ${day} ${time}`;
}

export default function App() {
  const [paused, setPaused] = useState(false);
  const [loginTime] = useState(() => formatLogin(new Date()));
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReducedMotion(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);

  return (
    <>
      <AsciiTrout paused={paused} reducedMotion={reducedMotion} />
      <main className="page">
        <header className="heading">
          <h1 aria-label="Daniel Park">
            <span aria-hidden="true">
              ~ ➤{" "}
              {reducedMotion ? (
                "Daniel Park"
              ) : (
                <TypeAnimation
                  sequence={["Daniel Park", 20000]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
              )}
            </span>
          </h1>
        </header>

        <section className="terminal" aria-label="About Daniel">
          <div className="terminal-bar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span className="terminal-title">
              <svg
                width="14"
                height="12"
                viewBox="0 0 16 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 3V1.5h5l1.5 2H15v8H1V3Z"
                  fill="#96969f"
                  stroke="#bdbdc6"
                  strokeWidth=".7"
                />
                <path d="M1 4h14" stroke="#dedee3" strokeWidth=".7" />
              </svg>
              daniel — -zsh
            </span>
            <span className="bar-spacer" />
          </div>
          <div className="terminal-content">
            <p className="login-date">Last login: {loginTime} on ttys000</p>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat bio.txt
              </p>
              <p>
                Hi, I’m Daniel Park, a third-year Computer Science & Mathematics
                student at Wilfrid Laurier University with an interest in
                backend development, networking, and databases. Outside of
                coding, I like fishing, spending time outdoors, and drinking
                coffee.
              </p>
            </div>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat contacts.txt
              </p>
              <p className="inline-links">
                [{" "}
                {links.map(([name, url], index) => (
                  <span key={name}>
                    <a
                      href={url}
                      {...(url.startsWith("https")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {name === "Email" ? "park6565@mylaurier.ca" : name}
                    </a>
                    {index < links.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                ]
              </p>
            </div>
            <div className="entry">
              <p className="command resume-command">
                <ShellPrompt />
                open{" "}
                <a
                  className="terminal-file"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Daniel’s résumé PDF in a new tab"
                >
                  Daniel_Park_Resume.pdf
                </a>
              </p>
            </div>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat education.txt
              </p>
              <p>
                BSc Computer Science & Mathematics — Wilfrid Laurier University
                · Expected 2028
              </p>
            </div>
            <section className="entry experience" aria-label="Work experience">
              <p className="command">
                <ShellPrompt />
                cat experience.txt
              </p>
              <div className="experience-list">
                <div className="experience-row">
                  <span>Software Engineer Intern — Shopify</span>
                  <span className="experience-dates">Sep 2026 – Dec 2026</span>
                </div>
                <div className="experience-row">
                  <span>Software Developer Intern — Giesecke+Devrient</span>
                  <span className="experience-dates">May 2025 – Aug 2025</span>
                </div>
                <div className="experience-row">
                  <span>Section Leader — Stanford University</span>
                  <span className="experience-dates">Apr 2026 – Jun 2026</span>
                </div>
                <div className="experience-row">
                  <span>
                    Mathematics Instructional Assistant — Wilfrid Laurier
                    University
                  </span>
                  <span className="experience-dates">Sep 2025 – Aug 2026</span>
                </div>
              </div>
            </section>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat location.txt
              </p>
              <p>Toronto, Ontario</p>
            </div>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat languages.txt
              </p>
              <p>
                Python · Ruby · Java · C# · SQL · TypeScript · JavaScript · C ·
                R · HTML · CSS
              </p>
            </div>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat frameworks.txt
              </p>
              <p>
                Django · ASP.NET · Ruby on Rails · Express.js · Flask · Blazor ·
                React · React Native · Tailwind CSS
              </p>
            </div>
            <div className="entry">
              <p className="command">
                <ShellPrompt />
                cat technologies.txt
              </p>
              <p>
                AWS (EC2, S3, Lightsail) · Docker · MySQL · PostgreSQL · MS SQL Server · GraphQL · Pi · Codex · Herdr
              </p>
            </div>
            <p className="prompt" aria-hidden="true">
              <ShellPrompt />
              <span className="cursor" />
            </p>
          </div>
        </section>

        <footer className="contact">
          <h2>Contact me</h2>
          <div className="contact-links">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                {...(url.startsWith("https")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {name === "Email" ? "park6565@mylaurier.ca" : name}
              </a>
            ))}
          </div>
          {!reducedMotion && (
            <button
              className="motion-toggle"
              aria-label={
                paused
                  ? "Resume brook trout animation"
                  : "Pause brook trout animation"
              }
              title={paused ? "Resume animation" : "Pause animation"}
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              Brook trout · <em>Salvelinus fontinalis</em>
            </button>
          )}
        </footer>
      </main>
    </>
  );
}
