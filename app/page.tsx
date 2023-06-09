import Link from "next/link"

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hacker News Viewer</h1>
      <ul>
        <li><Link href="/top20">Top 20</Link></li>
      </ul>
    </div>
  )
}
