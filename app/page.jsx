import Link from "next/link";
import AuranMark from "./components/AuranMark";

export default function Home() {
  return (
    <main
      className="flex-1 flex flex-col items-center justify-center px-8 py-12"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <AuranMark size={200} />

      <p
        className="mt-10 text-xs"
        style={{
          color: "#e8e0d4",
          opacity: 0.5,
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: "0.25em",
        }}
      >
        in the clearing
      </p>

      <div
        className="mt-14"
        style={{
          width: "40px",
          height: "1px",
          backgroundColor: "#2a2a2a",
        }}
      />

      <nav className="mt-10 flex flex-col items-center gap-5">
        <Link
          href="/joga"
          className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          jóga
        </Link>
        <Link
          href="/marcel"
          className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          marcel
        </Link>
        <a
          href="/listening-room.html"
          className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          the listening room
        </a>
        <a
          href="/liminance.html"
          className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          liminance
        </a>
        <a
          href="/warm-hour.html"
          className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
          style={{
            color: "#e8e0d4",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          the warm hour
        </a>
      </nav>
    </main>
  );
}
