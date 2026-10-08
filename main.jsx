import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  Clock3,
  Sparkles,
  Bot,
  BarChart3,
  Users,
  Award,
  MessageCircle,
  Zap,
  Target,
  Rocket,
  Menu,
  X,
} from "lucide-react";
import "./styles.css";

const stats = [
  ["60 Days", "Online programme"],
  ["51+ Hours", "Learning & practice"],
  ["Zero Cost", "To participate"],
  ["Microsoft", "Certified programme"],
];
const impact = [
  [
    "5×",
    "Faster workflows",
    "Cut down repetitive work and free your team for higher-value tasks.",
  ],
  [
    "24/7",
    "Customer support",
    "Use AI assistants and chatbots to respond faster and stay available.",
  ],
  [
    "10×",
    "Content output",
    "Create, adapt and repurpose content with far less manual effort.",
  ],
  [
    "Smarter",
    "Decisions",
    "Turn business data into useful insights without spending hours doing it manually.",
  ],
];
const journey = [
  [
    "01",
    "Week 0–1",
    "Join & Orient",
    "Sign up, complete screening, join the Whatsapp community and attend orientation.",
  ],
  [
    "02",
    "Week 1–4",
    "Live AI Training & LMS self paced",
    "4 sessions × 4 hrs each with expert trainers + 29 hrs of Self Paced LMS.",
  ],
  [
    "03",
    "Week 1–5",
    "Apply & Practice",
    "29 hrs of industry-specific modules — learn at your own pace, anytime.",
  ],
  [
    "04",
    "Week 5–6",
    "Expert Mentoring",
    "3-4 sessions & Podcasts with domain experts to tackle your real business challenges.",
  ],
  [
    "05",
    "Week 8",
    "Showcase & Graduate",
    "Present your AI proof of concept, earn your certificate and celebrate your progress.",
  ],
];
const outcomes = [
  "Microsoft AI certification",
  "A live, working AI automation or use case",
  "Documented time and cost savings",
  "A stronger growth and investor story",
  "Peer learning with other MSMEs",
  "Access to AI guidance and mentorship",
];

function Brand() {
  return (
    <div className="brand">
      <img src="/assets/shinefoundation.jpg" alt="SHINE Foundation" />{" "}
    </div>
  );
}
function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <a href="#top">
            <Brand />
          </a>
          <button className="menub" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "open" : ""}>
            {[
              "Programme",
              ,
              "Impact",
              "Journey",
              "Eligibility",
            ].map((x) => (
              <a
                key={x}
                href={"#" + x.toLowerCase().replaceAll(" ", "-")}
                onClick={() => setOpen(false)}
              >
                {x}
              </a>
            ))}
            <a className="navcta" href="https://msme.samhita.org/SAMI000000737"
            >
              Sign Up Now <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="heroGlow one" />
          <div className="heroGlow two" />
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">
                <span /> LEARN · IMPLEMENT · GROW
              </div>
              <h1>
                AI Enablement <em>for</em>
                <br />
                MSMEs
              </h1>
              <p className="lead">
                A 60-day online programme to help MSMEs adopt AI, automate
                workflows, improve productivity and drive real business growth.
              </p>
              <div className="heroActions">
                <a className="primary" href="https://msme.samhita.org/SAMI000000737">
                  Sign Up Now <ArrowRight size={18} />
                </a>
                <a className="textlink" href="#programme">
                  Explore programme
                </a>
              </div>
              <div className="micro">
                <span>
                  <Clock3 /> 60 Days
                </span>
                <span>
                  <Bot /> Online
                </span>
                <span>
                  <Award /> Certified
                </span>
              </div>
            </div>
            <div className="heroVisual">
              <div className="orb">
                <div className="orbCore">
                  <Sparkles size={30} />
                  <span>AI</span>
                </div>
              </div>
              <div className="floatCard c1">
                <b>Automate</b>
                <small>repetitive work</small>
              </div>
              <div className="floatCard c2">
                <b>Grow</b>
                <small>with smarter decisions</small>
              </div>
              <div className="floatCard c3">
                <b>51+</b>
                <small>hours of learning</small>
              </div>
            </div>
          </div>
        </section>
        <section className="stats">
          <div className="wrap statsGrid">
            {stats.map(([a, b]) => (
              <div className="stat" key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section light" id="programme">
          <div className="wrap twoCol">
            <div>
              <div className="eyebrow">THE REALITY</div>
              <h2>
                Your business is growing. <em>Is your team keeping up?</em>
              </h2>
            </div>
            <div>
              <p className="bigp">
                Every day, teams lose time to work that can be automated:
                answering the same customer questions, repeating emails and
                reports, creating content slowly and spending hours trying to
                make sense of data.
              </p>
              <p>
                AI can change that. The challenge is knowing where to start,
                choosing the right tools and turning experimentation into
                measurable business value.
              </p>
            </div>
          </div>
          <div className="wrap painGrid">
            {[
              "Repetitive customer questions",
              "Repeated emails & reports",
              "Slow content creation",
              "No time for data analysis",
              "Unclear AI starting point",
              "Competitors moving faster",
            ].map((x, i) => (
              <div className="pain" key={x}>
                <span>0{i + 1}</span>
                {x}
              </div>
            ))}
          </div>
        </section>
        <section className="section solution">
          <div className="wrap center">
            <div className="eyebrow">THE SOLUTION</div>
            <h2>
              From beginner to <em>AI-enabled</em> in 60 days.
            </h2>
            <p className="sub">
              Learn the fundamentals, apply them to a real business problem and
              prove the value of what you build.
            </p>
          </div>
          <div className="wrap steps">
            {[
              [
                "01",
                "Learn",
                "Identify high-impact areas and understand AI for sales, marketing, customer support and operations.",
              ],
              [
                "02",
                "Apply",
                "Choose one repetitive task, use AI to improve it and measure the time or value you save.",
              ],
              [
                "03",
                "Prove",
                "Showcase your working solution, share the business impact and build your AI success story.",
              ],
            ].map(([n, t, d]) => (
              <div className="step" key={n}>
                <span className="num">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <ArrowRight className="stepArrow" />
              </div>
            ))}
          </div>
        </section>
        <section className="section impact" id="impact">
          <div className="wrap center">
            <div className="eyebrow">BUSINESS IMPACT</div>
            <h2>
              Make AI work for <em>your business.</em>
            </h2>
            <p className="sub">
              Focus on practical outcomes—not AI for the sake of AI.
            </p>
          </div>
          <div className="wrap impactGrid">
            {impact.map(([a, b, c]) => (
              <article className="impactCard" key={a}>
                <strong>{a}</strong>
                <h3>{b}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
          <div className="wrap impactBanner">
            <div>
              <span className="tag">THE GOAL</span>
              <h3>More time. Lower effort. Better business decisions.</h3>
            </div>
            <Zap size={36} />
          </div>
        </section>
        <section className="section journey" id="journey">
          <div className="wrap center">
            <div className="eyebrow">YOUR 60-DAY JOURNEY</div>
            <h2>
              A guided path from <em>learning to implementation.</em>
            </h2>
          </div>
          <div className="wrap timeline">
            {journey.map(([n, w, t, d]) => (
              <div className="journeyItem" key={n}>
                <div className="jnum">{n}</div>
                <div>
                  <span className="week">{w}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section eligibility" id="eligibility">
          <div className="wrap eligGrid">
            <div>
              <div className="eyebrow">IS THIS FOR YOU?</div>
              <h2>
                Built for ambitious <em>MSMEs.</em>
              </h2>
              <p className="sub">
                The reference programme is designed for established,
                growth-oriented MSMEs ready to put AI into practice.
              </p>
            </div>
            <div className="eligList">
              {[
                "Udyam-registered MSME",
                "₹50 lakh+ annual turnover and growth-stage operations",
                "At least 2 years of incorporation / registration",
                "GST registered or actively applying",
                "Two participants from management, leadership or mid-level roles",
              ].map((x) => (
                <div key={x}>
                  <Check size={19} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section outcomes">
          <div className="wrap outcomeGrid">
            <div>
              <div className="eyebrow">WHAT YOU WALK AWAY WITH</div>
              <h2>
                Learn it. <em>Use it.</em> Prove it.
              </h2>
              <p className="sub">
                The programme is designed to leave you with something
                tangible—not just a certificate.
              </p>
              
            </div>
            <div className="outcomeList">
              {outcomes.map((x, i) => (
                <div key={x}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <Check size={17} />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="cta" id="apply">
          <div className="wrap ctaBox">
            <div className="ctaIcon">
              <Rocket />
            </div>
            <div>
              <div className="eyebrow">
                A Programme brought to you In Collaboration with
              </div>
                <div className="partnerLogos">
                <img src="/assets/mm.png" alt="Microsoft" />
                <img src="/assets/sam.png" alt="Partner 2" />
                <img src="/assets/ss.png" alt="Partner 3" />
           </div>     
              
            </div>
            
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap foot">
          <Brand />
          <p>AI Enablement for MSMEs · Learn · Implement · Grow</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
