import Link from "next/link";

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export function PageHeader({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <div className="now-header">
      <p className="now-header-label">{label}</p>
      <h1 className="now-title">{title}</h1>
      <p className="now-desc">{desc}</p>
    </div>
  );
}

export function BackLink() {
  return (
    <Link href="/" className="back-link">
      back to home
    </Link>
  );
}