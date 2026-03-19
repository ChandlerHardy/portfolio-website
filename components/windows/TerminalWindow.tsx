"use client";

export default function TerminalWindow() {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      <Line prompt>whoami</Line>
      <Output>Chandler Hardy — Full-Stack Developer</Output>
      <br />
      <Line prompt>dir skills\</Line>
      <Output>
        {` Next.js     React       TypeScript   Tailwind
 FastAPI     Go          GraphQL      PHP
 PostgreSQL  MongoDB     Docker       OCI`}
      </Output>
      <br />
      <Line prompt>stats --format table</Line>
      <Output>
        {` ┌──────────────┬────────────────────┐
 │ Metric       │ Value              │
 ├──────────────┼────────────────────┤
 │ Merged MRs   │ 51                 │
 │ Active Users │ 4,000+             │
 │ Market Share │ 40% US cattle      │
 │ Projects     │ 4 shipped          │
 │ Experience   │ 2 years            │
 │ Location     │ Birmingham, AL     │
 └──────────────┴────────────────────┘`}
      </Output>
      <br />
      <Line prompt>cat philosophy.txt</Line>
      <Output>Build systems that ship. Write code others can maintain.</Output>
      <Output>Automate what can be automated. Ship what matters.</Output>
      <br />
      <Line prompt>
        <span style={{ animation: "blink 1s step-end infinite" }}>█</span>
      </Line>
      <style>{`@keyframes blink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }`}</style>
    </div>
  );
}

function Line({
  prompt,
  children,
}: {
  prompt?: boolean;
  children?: React.ReactNode;
}) {
  if (prompt) {
    return (
      <div>
        <span style={{ color: "#00ff00" }}>C:\chandler&gt;</span>{" "}
        <span style={{ color: "#ffffff" }}>{children}</span>
      </div>
    );
  }
  return <div>{children}</div>;
}

function Output({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "#aaaaaa" }}>{children}</div>;
}
