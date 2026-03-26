"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
  color?: string;
}

const HELP_TEXT = `Available commands:
  help          Show this message
  whoami        About me
  ls [dir]      List contents (projects, skills, links)
  cat <file>    Read a file (about.txt, stats.json, philosophy.txt)
  open <name>   Open a project in a new tab
  stats         Show my stats
  neofetch      System info
  clear         Clear the terminal
  history       Show command history
  sudo <cmd>    Try it and see`;

const WHOAMI = `Chandler Hardy — Full-Stack Developer
Birmingham, AL
Currently @ Performance Beef (4,000+ users, 40% US cattle market)`;

const STATS = ` ┌──────────────┬────────────────────┐
 │ Metric       │ Value              │
 ├──────────────┼────────────────────┤
 │ Merged MRs   │ 50+                │
 │ Active Users │ 4,000+             │
 │ Market Share │ 40% US cattle      │
 │ Projects     │ 4 shipped          │
 │ Location     │ Birmingham, AL     │
 └──────────────┴────────────────────┘`;

const ABOUT_TXT = `Chandler Hardy — Full-Stack Developer

Currently at Performance Beef, where the platform
serves 4,000+ active users across 40% of the US
cattle market. 50+ merged MRs into production —
working across PHP, Go, MongoDB, and MySQL.

Outside work: Next.js, FastAPI, PostgreSQL, Docker,
self-managed infra on Oracle Cloud. Built Chronicle,
an open-source MCP server that gives AI coding tools
persistent memory.`;

const PHILOSOPHY_TXT = `Build systems that ship.
Write code others can maintain.
Automate what can be automated.
Ship what matters.`;

const NEOFETCH = `        ████████████████
      ██              ██          chandler@chandlerOS
    ██    ██████████    ██        ──────────────────
   ██   ██          ██   ██       OS:      chandlerOS v1.0
  ██   ██   ██████   ██   ██     Shell:   portfolio.exe
  ██   ██   ██  ██   ██   ██     Uptime:  2 years
  ██   ██   ██████   ██   ██     Pkgs:    Next.js, FastAPI, Go
   ██   ██          ██   ██      CPU:     50+ merged MRs
    ██    ██████████    ██        Memory:  4,000+ users
      ██              ██          Disk:    4 shipped projects
        ████████████████          Theme:   WinXP [Luna Blue]`;

const PROJECTS: Record<string, { url: string; desc: string }> = {
  "crooked-finger": {
    url: "https://crookedfinger.chandlerhardy.com",
    desc: "AI-powered crochet pattern translator",
  },
  "elucidate-chess": {
    url: "https://github.com/ChandlerHardy/elucidate-chess",
    desc: "Chess training with Stockfish + AI explanations",
  },
  greenline: {
    url: "https://github.com/ChandlerHardy/greenline",
    desc: "Lawn care platform — built autonomously by Ralph",
  },
};

const SKILLS: Record<string, string[]> = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  backend: ["FastAPI", "Go", "GraphQL", "PHP"],
  data: ["PostgreSQL", "MongoDB", "MySQL"],
  infra: ["Docker", "Oracle Cloud", "Nginx", "Tailscale"],
  ai: ["Claude Code", "n8n", "OpenRouter", "MCP"],
  tools: ["Git", "Bash", "Vercel", "Linux"],
};

const INITIAL_LINES: TerminalLine[] = [
  { type: "output", text: "chandlerOS Terminal v1.0", color: "#888" },
  { type: "output", text: 'Type "help" for available commands.\n', color: "#888" },
];

interface TerminalWindowProps {
  onCrash?: () => void;
}

export default function TerminalWindow({ onCrash }: TerminalWindowProps = {}) {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll: find the scrollable parent (.winxp-content) and scroll it
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // The scrollable container is the parent .winxp-content div
    const scrollable = el.closest(".winxp-content") || el;
    scrollable.scrollTop = scrollable.scrollHeight;
  }, [lines]);

  const addOutput = useCallback((text: string, color?: string) => {
    setLines((prev) => [...prev, { type: "output", text, color }]);
  }, []);

  const processCommand = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      setLines((prev) => [
        ...prev,
        { type: "input", text: `C:\\chandler> ${trimmed}` },
      ]);
      setHistory((prev) => [...prev, trimmed]);
      setHistoryIdx(-1);

      const parts = trimmed.split(/\s+/);
      const cmd = parts[0].toLowerCase();
      const arg = parts.slice(1).join(" ").toLowerCase();

      switch (cmd) {
        case "help":
          addOutput(HELP_TEXT);
          break;

        case "whoami":
          addOutput(WHOAMI);
          break;

        case "stats":
          addOutput(STATS);
          break;

        case "neofetch":
          addOutput(NEOFETCH, "#0f0");
          break;

        case "clear":
        case "cls":
          setLines([]);
          break;

        case "history":
          addOutput(
            history.length
              ? history.map((h, i) => `  ${i + 1}  ${h}`).join("\n")
              : "  No history yet."
          );
          break;

        case "ls":
        case "dir": {
          if (!arg || arg === "." || arg === "/") {
            addOutput(
              " projects/    skills/    links/\n about.txt    stats.json    philosophy.txt"
            );
          } else if (arg === "projects" || arg === "projects/") {
            const list = Object.entries(PROJECTS)
              .map(([name, p]) => ` ${name.padEnd(18)} ${p.desc}`)
              .join("\n");
            addOutput(list);
          } else if (arg === "skills" || arg === "skills/") {
            const list = Object.entries(SKILLS)
              .map(([cat, items]) => ` ${cat.padEnd(12)} ${items.join(", ")}`)
              .join("\n");
            addOutput(list);
          } else if (arg === "links" || arg === "links/") {
            addOutput(
              " github       github.com/ChandlerHardy\n linkedin     linkedin.com/in/chandler-hardy\n email        hardych04@gmail.com"
            );
          } else {
            addOutput(`ls: cannot access '${arg}': No such file or directory`);
          }
          break;
        }

        case "cat":
        case "type": {
          if (arg === "about.txt") {
            addOutput(ABOUT_TXT);
          } else if (arg === "stats.json") {
            addOutput(
              JSON.stringify(
                {
                  merged_mrs: "50+",
                  active_users: "4,000+",
                  market_share: "40% US cattle",
                  projects_shipped: 4,
                  location: "Birmingham, AL",
                },
                null,
                2
              ),
              "#f0c040"
            );
          } else if (arg === "philosophy.txt") {
            addOutput(PHILOSOPHY_TXT);
          } else if (!arg) {
            addOutput("Usage: cat <filename>");
          } else {
            addOutput(`cat: ${arg}: No such file or directory`);
          }
          break;
        }

        case "open": {
          if (!arg) {
            addOutput("Usage: open <project-name>\nAvailable: " + Object.keys(PROJECTS).join(", "));
            break;
          }
          const match = Object.entries(PROJECTS).find(
            ([key]) => key === arg || key.startsWith(arg)
          );
          if (match) {
            addOutput(`Opening ${match[0]}...`);
            window.open(match[1].url, "_blank");
          } else {
            addOutput(
              `open: '${arg}' not found. Available: ${Object.keys(PROJECTS).join(", ")}`
            );
          }
          break;
        }

        case "cd":
          addOutput("Nice try. Everything is right here.");
          break;

        case "sudo":
          addOutput("chandler is not in the sudoers file. This incident will be reported. 🚨");
          break;

        case "rm":
          addOutput("Whoa there. This is a portfolio, not a live server.");
          break;

        case "exit":
        case "quit":
          addOutput("You can check out any time you like, but you can never leave. 🎸");
          break;

        case "ping":
          addOutput("PONG! hardych04@gmail.com — I usually respond within 24 hours.");
          break;

        case "pwd":
          addOutput("C:\\chandler\\portfolio");
          break;

        case "date":
          addOutput(new Date().toString());
          break;

        case "echo":
          addOutput(parts.slice(1).join(" ") || "");
          break;

        case "cowsay": {
          const msg = parts.slice(1).join(" ") || "moo";
          const border = "-".repeat(msg.length + 2);
          addOutput(
            ` ${border}\n< ${msg} >\n ${border}\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||`
          );
          break;
        }

        case "crash":
        case "bsod":
          addOutput("FATAL EXCEPTION — initiating blue screen...", "#f00");
          setTimeout(() => onCrash?.(), 800);
          break;

        default:
          addOutput(
            `'${cmd}' is not recognized as an internal or external command.\nType "help" for available commands.`
          );
      }
    },
    [addOutput, history]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const idx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx !== -1) {
        const idx = historyIdx + 1;
        if (idx >= history.length) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setHistoryIdx(idx);
          setInput(history[idx]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.split(/\s+/);
      const commands = ["help", "whoami", "ls", "cat", "open", "stats", "neofetch", "clear", "history", "ping", "cowsay", "pwd", "date", "echo", "sudo", "exit"];

      if (parts.length <= 1) {
        // Complete command name
        const partial = parts[0].toLowerCase();
        const matches = commands.filter((c) => c.startsWith(partial));
        if (matches.length === 1) {
          setInput(matches[0] + " ");
        } else if (matches.length > 1) {
          addOutput(matches.join("  "));
          setLines((prev) => [...prev, { type: "input", text: `C:\\chandler> ${input}` }]);
        }
      } else {
        // Complete arguments based on command
        const cmd = parts[0].toLowerCase();
        const partial = parts.slice(1).join(" ").toLowerCase();
        let candidates: string[] = [];

        if (cmd === "cat" || cmd === "type") {
          candidates = ["about.txt", "stats.json", "philosophy.txt"];
        } else if (cmd === "ls" || cmd === "dir") {
          candidates = ["projects", "skills", "links"];
        } else if (cmd === "open") {
          candidates = Object.keys(PROJECTS);
        }

        const matches = candidates.filter((c) => c.startsWith(partial));
        if (matches.length === 1) {
          setInput(`${cmd} ${matches[0]}`);
        } else if (matches.length > 1) {
          addOutput(matches.join("  "));
          setLines((prev) => [...prev, { type: "input", text: `C:\\chandler> ${input}` }]);
        }
      }
    }
  };

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100%",
        cursor: "text",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            color:
              line.type === "input"
                ? "#fff"
                : line.color || "#aaa",
          }}
        >
          {line.type === "input" ? (
            <>
              <span style={{ color: "#0f0" }}>C:\chandler&gt;</span>{" "}
              <span style={{ color: "#fff" }}>
                {line.text.replace("C:\\chandler> ", "")}
              </span>
            </>
          ) : (
            line.text
          )}
        </div>
      ))}

      {/* Input line */}
      <div style={{ display: "flex" }}>
        <span style={{ color: "#0f0", flexShrink: 0 }}>C:\chandler&gt;</span>
        <span>&nbsp;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontFamily: "'Courier New', monospace",
            fontSize: 12,
            flex: 1,
            padding: 0,
            margin: 0,
            caretColor: "#0f0",
          }}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
