"use client";

export default function AboutWindow() {
  return (
    <div style={{ whiteSpace: "pre-wrap", color: "#000" }}>
      {`===========================================
 ABOUT.TXT
===========================================

I build things from blank terminals.

My day job is shipping production code at
Performance Beef — a platform that covers
40% of the US cattle market. PHP, Go, Mongo,
MySQL, 4,000+ users, the works.

At night I build my own stuff. Full-stack
apps from zero: frontends, APIs, databases,
Docker, infrastructure — all self-hosted on
a server I manage on Oracle Cloud.

Some recent highlights:

  > Chronicle — an MCP server that gives AI
    coding tools persistent memory across
    sessions. Open source, 140 tests.

  > Crooked Finger — deployed AI-powered
    pattern translator with multi-model
    routing. Live at crookedfinger.chandlerhardy.com

  > This website — a Win95 desktop. Because
    portfolios shouldn't look like portfolios.

I like building things that actually work,
shipping them, and then building the next one.

---
Email:    hardych04@gmail.com
GitHub:   github.com/ChandlerHardy
LinkedIn: linkedin.com/in/chandler-hardy
`}
    </div>
  );
}
