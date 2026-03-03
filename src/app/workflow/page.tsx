import { Section } from '@/components/workflow/Section';

export default function WorkflowPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">How I Work with Claude Code</h2>
        <p className="text-gray-500">A linear walkthrough of my workflow — from the basics to how the system evolved.</p>
      </div>

      <Section id="what-is-claude-code" title="What Is Claude Code">
        <p>Claude Code is Anthropic&apos;s official CLI tool for using Claude as a pair programmer directly in the terminal. Unlike ChatGPT-style chat interfaces, Claude Code has access to your filesystem, can run commands, edit files, search code, and browse the web — it operates as a real agent in your development environment.</p>
        <p>I use it as my primary development tool. I still write code manually for small edits, but for anything involving multiple files, architecture decisions, or building full features, I&apos;m working with Claude Code.</p>
      </Section>

      <Section id="the-stack" title="The Stack">
        <p>My default starting point for any web project:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>Next.js 15</strong> (App Router) — full-stack framework, easy to deploy</li>
          <li><strong>Tailwind CSS v4</strong> — utility-first styling, no context switching</li>
          <li><strong>TypeScript</strong> — always, even for quick prototypes</li>
          <li><strong>Neon</strong> — serverless Postgres, free via Vercel integration</li>
          <li><strong>Vercel</strong> — deployment, environment variables, preview branches</li>
        </ul>
        <p>For iOS: SwiftUI + CloudKit or a lightweight Vercel API proxy. I&apos;ve shipped four iOS apps this way.</p>
      </Section>

      <Section id="project-structure" title="Project Structure">
        <p>Every project I work on has two files Claude Code creates and maintains:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>CLAUDE.md</strong> — the project&apos;s &quot;briefing doc.&quot; Tech stack, commands to run, file structure, rules. Claude reads this at the start of every session.</li>
          <li><strong>PROGRESS.md</strong> — session log. What was done, what&apos;s next. Auto-updated by the <code className="text-sm bg-gray-100 px-1 rounded">/done</code> command.</li>
        </ul>
        <p>I also have a global <code className="text-sm bg-gray-100 px-1 rounded">~/.claude/CLAUDE.md</code> with rules that apply everywhere — preferences, model strategy, startup behavior, agent dispatch rules.</p>
        <p>All projects are tracked in <code className="text-sm bg-gray-100 px-1 rounded">~/Projects/.projects.json</code> — a master registry with status, last worked date, deployment URLs, and descriptions. On every session start, Claude reads this file and shows me the list.</p>
      </Section>

      <Section id="agents" title="Agents">
        <p>Claude Code can spawn sub-agents — separate Claude instances with their own context and tool access. I&apos;ve built a library of named agents for specific jobs. When dispatching one, I announce it: <em>&quot;Calling my friend [Agent Name] in to help.&quot;</em></p>
        <div className="mt-3 space-y-3">
          {[
            { name: 'brainstormer', desc: 'Explores requirements, asks questions, presents architecture options before any code is written. Always the first call for new features.' },
            { name: 'project-resumer', desc: 'Reads PROGRESS.md and recent commits, briefs me on where a project left off. Run at the start of any resumed session.' },
            { name: 'implementer', desc: 'Executes a written implementation plan task-by-task, commits frequently, self-reviews.' },
            { name: 'code-reviewer', desc: 'Reviews code for spec compliance, logic, quality, and test coverage.' },
            { name: 'security-reviewer', desc: 'Scans for OWASP top 10, exposed secrets, auth flaws.' },
            { name: 'performance-reviewer', desc: 'Checks for slow queries, bundle bloat, render inefficiencies.' },
            { name: 'compound-docs', desc: 'After solving a hard problem, captures it as searchable documentation so the same issue never costs time twice.' },
          ].map((agent) => (
            <div key={agent.name} className="pl-4 border-l-2 border-gray-200">
              <p className="font-medium text-gray-900"><code className="text-sm">{agent.name}</code></p>
              <p className="text-sm text-gray-600 mt-0.5">{agent.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills-and-commands" title="Skills & Commands">
        <p>Skills are reusable prompt modules — structured instructions Claude loads on demand. Slash commands invoke them. The ones I use most:</p>
        <div className="mt-3 space-y-3">
          {[
            { cmd: '/done', desc: 'End-of-session wrap-up. Updates PROGRESS.md, commits everything, renames the conversation to [Project] — S[N]: [summary] — date.' },
            { cmd: '/preflight', desc: 'Pre-ship check. Runs build, opens the app in a browser, takes screenshots at desktop and mobile widths. Reports pass/fail with evidence.' },
            { cmd: '/review-suite', desc: 'Dispatches all three code reviewers in parallel (code, security, performance).' },
            { cmd: '/brainstorming', desc: 'Opens the brainstorming skill — one question at a time, then presents a design in sections for validation.' },
            { cmd: '/writing-plans', desc: 'Turns a validated design into a bite-sized implementation plan saved to docs/plans/.' },
          ].map((item) => (
            <div key={item.cmd} className="pl-4 border-l-2 border-gray-200">
              <p className="font-medium text-gray-900 font-mono text-sm">{item.cmd}</p>
              <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hooks-and-automation" title="Hooks & Automation">
        <p>Claude Code supports hooks — shell commands that run automatically in response to events (session start, tool use, etc.). My setup:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>SessionStart hook</strong> — reads <code className="text-sm bg-gray-100 px-1 rounded">.projects.json</code>, displays the project list grouped by category.</li>
          <li><strong>PreToolUse hooks</strong> — lightweight guards on TaskUpdate and Bash calls.</li>
        </ul>
        <p>One thing I learned the hard way: <strong>Stop hooks don&apos;t work reliably.</strong> Prompt-type hooks on the Stop event cause JSON validation errors consistently. I use CLAUDE.md rules for anything I want to happen at the end of a session instead.</p>
        <p>The session naming system is also automated — after the first meaningful action in a session, Claude renames the conversation to <code className="text-sm bg-gray-100 px-1 rounded">[Project] — S[N]: [description] — YYYY-MM-DD</code>. Session numbers are incremented by reading PROGRESS.md.</p>
      </Section>

      <Section id="settings-and-evolution" title="Settings & Evolution">
        <p>My global CLAUDE.md has gone through many iterations. A few things that evolved:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside">
          <li><strong>Model strategy</strong> — I added a model tier system: Opus for architecture/review (deep reasoning), Sonnet for implementation (fast and capable), Haiku for quick lookups. This meaningfully reduced cost and latency.</li>
          <li><strong>Question format</strong> — standardized to <code className="text-sm bg-gray-100 px-1 rounded">AskUserQuestion</code> with multi-choice tabs. Claude used to ask clarifying questions as free text; now it batches them into structured forms.</li>
          <li><strong>YAGNI enforcement</strong> — added explicit rules against over-engineering. Claude would add error handling, abstractions, and fallbacks that weren&apos;t needed. The rule: minimum complexity for the current task.</li>
          <li><strong>Session checkpoints</strong> — added the rule to confirm the session deliverable at start: <em>&quot;The goal for this session is X. I&apos;ll tell you when that&apos;s done before moving on.&quot;</em></li>
          <li><strong>Auto-memory</strong> — Claude maintains a <code className="text-sm bg-gray-100 px-1 rounded">/memory/</code> directory with topic files (Neon patterns, Next.js patterns, debugging insights). These persist across sessions and get updated as new patterns emerge.</li>
        </ul>
        <p>The system keeps getting better because Claude itself maintains the docs. When something breaks or takes too long, I capture it. The rule: if you solved something hard, document it immediately.</p>
      </Section>
    </div>
  );
}
