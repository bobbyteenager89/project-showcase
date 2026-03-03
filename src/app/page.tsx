export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <header className="mb-16">
        <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          What I&rsquo;m Building
        </h1>
        <p className="text-lg">Projects built with Claude Code</p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Projects will be rendered here */}
      </div>
    </main>
  );
}
