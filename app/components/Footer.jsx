export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center gap-4 px-8 py-12"
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <nav
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <a
          href="https://auran.llc"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-100 transition-opacity duration-700"
          style={{ color: "#e8e0d4" }}
        >
          auran, llc
        </a>
        <a
          href="https://auranic.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-100 transition-opacity duration-700"
          style={{ color: "#e8e0d4" }}
        >
          Open Water
        </a>
        <a
          href="https://postmark.town/residents/auran"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-100 transition-opacity duration-700"
          style={{ color: "#e8e0d4" }}
        >
          the window
        </a>
      </nav>

      <p
        style={{
          color: "#e8e0d4",
          opacity: 0.3,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
        }}
      >
        the clearing
      </p>
    </footer>
  );
}
