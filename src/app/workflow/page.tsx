import { Window } from '@/components/Window';
import { Section } from '@/components/workflow/Section';

export default function WorkflowPage() {
  return (
    <Window title="workflow.md">
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', lineHeight: 1.1, margin: '0 0 8px 0', fontWeight: 700 }}>
          How I Work with Claude Code
        </h2>
        <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', opacity: 0.7, margin: 0 }}>
          A linear walkthrough of my workflow — from the basics to how the system evolved.
        </p>
      </div>

      <Section id="what-is-claude-code" title="What Is Claude Code">
        <p>Claude Code is Anthropic&apos;s official CLI tool for using Claude as a pair programmer directly in the terminal. Unlike ChatGPT-style chat interfaces, Claude Code has access to your filesystem, can run commands, edit files, search code, and browse the web — it operates as a real agent in your development environment.</p>
        <p>I use it as my primary development tool. I still write code manually for small edits, but for anything involving multiple files, architecture decisions, or building full features, I&apos;m working with Claude Code.</p>
      </Section>

      <Section id="the-stack" title="The Stack">
        <p>My default starting point for any web project:</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            ['Next.js 15 (App Router)', 'full-stack framework, easy to deploy'],
            ['Tailwind CSS v4', 'utility-first styling, no context switching'],
            ['TypeScript', 'always, even for quick prototypes'],
            ['Neon', 'serverless Postgres, free via Vercel integration'],
            ['Vercel', 'deployment, environment variables, preview branches'],
          ].map(([tech, desc]) => (
            <li key={tech}><strong>{tech}</strong> — {desc}</li>
          ))}
        </ul>
        <p>For iOS: SwiftUI + CloudKit or a lightweight Vercel API proxy. I&apos;ve shipped four iOS apps this way.</p>
      </Section>

      <Section id="project-structure" title="Project Structure">
        <p>Every project I work on has two files Claude Code creates and maintains:</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>CLAUDE.md</strong> — the project&apos;s briefing doc. Tech stack, commands, structure, rules. Claude reads this at the start of every session.</li>
          <li><strong>PROGRESS.md</strong> — session log. What was done, what&apos;s next. Auto-updated by the <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', background: 'var(--white)', padding: '1px 4px', border: '1px solid var(--ink)' }}>/done</code> command.</li>
        </ul>
        <p>I also have a global <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', background: 'var(--white)', padding: '1px 4px', border: '1px solid var(--ink)' }}>~/.claude/CLAUDE.md</code> with rules that apply everywhere — preferences, model strategy, startup behavior, agent dispatch rules.</p>
        <p>All projects are tracked in <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', background: 'var(--white)', padding: '1px 4px', border: '1px solid var(--ink)' }}>~/Projects/.projects.json</code> — a master registry with status, last worked date, deployment URLs, and descriptions.</p>
      </Section>

      <Section id="agents" title="Agents">
        <p>Claude Code can spawn sub-agents — separate Claude instances with their own context and tool access. I&apos;ve built a library of named agents for specific jobs. When dispatching one, I announce it: <em>&quot;Calling my friend [Agent Name] in to help.&quot;</em></p>
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            ['brainstormer', 'Explores requirements, asks questions, presents architecture options before any code is written. Always the first call for new features.'],
            ['project-resumer', 'Reads PROGRESS.md and recent commits, briefs me on where a project left off. Run at the start of any resumed session.'],
            ['implementer', 'Executes a written implementation plan task-by-task, commits frequently, self-reviews.'],
            ['code-reviewer', 'Reviews code for spec compliance, logic, quality, and test coverage.'],
            ['security-reviewer', 'Scans for OWASP top 10, exposed secrets, auth flaws.'],
            ['performance-reviewer', 'Checks for slow queries, bundle bloat, render inefficiencies.'],
            ['compound-docs', 'After solving a hard problem, captures it as searchable documentation so the same issue never costs time twice.'],
          ].map(([name, desc]) => (
            <div key={name} style={{ paddingLeft: '12px', borderLeft: '3px solid var(--ink)' }}>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0' }}>{name}</p>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills-and-commands" title="Skills & Commands">
        <p>Skills are reusable prompt modules — structured instructions Claude loads on demand. Slash commands invoke them. The ones I use most:</p>
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            ['/done', 'End-of-session wrap-up. Updates PROGRESS.md, commits everything, renames the conversation to [Project] — S[N]: [summary] — date.'],
            ['/preflight', 'Pre-ship check. Runs build, opens the app in a browser, takes screenshots at desktop and mobile widths. Reports pass/fail with evidence.'],
            ['/review-suite', 'Dispatches all three code reviewers in parallel (code, security, performance).'],
            ['/brainstorming', 'Opens the brainstorming skill — one question at a time, then presents a design in sections for validation.'],
            ['/writing-plans', 'Turns a validated design into a bite-sized implementation plan saved to docs/plans/.'],
          ].map(([cmd, desc]) => (
            <div key={cmd} style={{ paddingLeft: '12px', borderLeft: '3px solid var(--ink)' }}>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0' }}>{cmd}</p>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hooks-and-automation" title="Hooks & Automation">
        <p>Claude Code supports hooks — shell commands that run automatically in response to events (session start, tool use, etc.). My setup:</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>SessionStart hook</strong> — reads <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', background: 'var(--white)', padding: '1px 4px', border: '1px solid var(--ink)' }}>.projects.json</code>, displays the project list grouped by category.</li>
          <li><strong>PreToolUse hooks</strong> — lightweight guards on TaskUpdate and Bash calls.</li>
        </ul>
        <p>One thing I learned the hard way: <strong>Stop hooks don&apos;t work reliably.</strong> Prompt-type hooks on the Stop event cause JSON validation errors consistently. I use CLAUDE.md rules instead.</p>
        <p>The session naming system is also automated — after the first meaningful action, Claude renames the conversation to <code style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', background: 'var(--white)', padding: '1px 4px', border: '1px solid var(--ink)' }}>[Project] — S[N]: [description] — YYYY-MM-DD</code>.</p>
      </Section>

      <Section id="settings-and-evolution" title="Settings & Evolution">
        <p>My global CLAUDE.md has gone through many iterations. A few things that evolved:</p>
        <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Model strategy</strong> — Opus for architecture/review, Sonnet for implementation, Haiku for quick lookups. Meaningfully reduced cost and latency.</li>
          <li><strong>Question format</strong> — standardized to AskUserQuestion with multi-choice tabs. Batches clarifying questions into structured forms.</li>
          <li><strong>YAGNI enforcement</strong> — explicit rules against over-engineering. Minimum complexity for the current task.</li>
          <li><strong>Session checkpoints</strong> — confirm the session deliverable at start: &quot;The goal for this session is X. I&apos;ll tell you when that&apos;s done.&quot;</li>
          <li><strong>Auto-memory</strong> — Claude maintains a /memory/ directory with topic files. Persist across sessions and update as new patterns emerge.</li>
        </ul>
        <p>The system keeps getting better because Claude itself maintains the docs. Rule: if you solved something hard, document it immediately.</p>
      </Section>
    </Window>
  );
}
