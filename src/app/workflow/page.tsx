import { Window } from '@/components/Window';
import { Section } from '@/components/workflow/Section';

const mono: React.CSSProperties = {
  fontFamily: 'var(--font-mono), monospace',
  fontSize: '12px',
  background: 'var(--white)',
  padding: '1px 4px',
  border: '1px solid var(--ink)',
};

function TerminalBlock({ lines }: { lines: string[] }) {
  return (
    <div style={{
      background: '#181818',
      border: '2px solid var(--ink)',
      borderRadius: '8px',
      padding: '16px 20px',
      margin: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    }}>
      {lines.map((line, i) => (
        <p key={i} style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '13px',
          color: line.startsWith('#') ? 'rgba(255,255,255,0.35)' : line.startsWith('>') ? '#7DD3C8' : '#F2EBD9',
          margin: 0,
          whiteSpace: 'pre',
        }}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default function WorkflowPage() {
  return (
    <Window title="workflow.md">
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '28px', lineHeight: 1.1, margin: '0 0 8px 0', fontWeight: 700 }}>
          How I Work
        </h2>
        <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', opacity: 0.7, margin: 0 }}>
          A linear walkthrough — from opening the terminal to shipping.
        </p>
      </div>

      <Section id="starting" title="Starting a Session">
        <p>I open Terminal and type <code style={mono}>c</code>. That&apos;s it. <code style={mono}>c</code> is a shell alias for <code style={mono}>claude</code> — the Claude Code CLI. It launches immediately in the current directory.</p>
        <TerminalBlock lines={[
          '~ $ c',
          '',
          '> Good morning. What are we working on?',
        ]} />
        <p>From there I either ask to see all my recent projects, or jump straight to one by name.</p>
      </Section>

      <Section id="project-navigation" title="Project Navigation">
        <p>When I start a session without a specific project in mind, I ask Claude to show me what I&apos;ve been working on. It reads a master registry file — <code style={mono}>~/Projects/.projects.json</code> — and renders a grouped list with status and last-worked dates.</p>
        <TerminalBlock lines={[
          '> Show me my active projects',
          '',
          '# consulting',
          '  Dossier             last: 2026-03-05',
          '  Merch Agency        last: 2026-03-04',
          '',
          '# ios-apps',
          '  Sponsio             last: 2026-03-03  ← in review',
          '  Frend               last: 2026-03-02',
          '',
          '# personal',
          '  Project Showcase    last: 2026-03-03',
          '  Futures             last: 2026-03-03',
        ]} />
        <p>To resume a project I just say <em>&quot;take me to Frend&quot;</em> — Claude reads that project&apos;s <code style={mono}>PROGRESS.md</code> and last commits, then briefs me on exactly where we left off before I&apos;ve typed anything else.</p>
        <p>Every project also has a <code style={mono}>CLAUDE.md</code> — a project briefing Claude reads automatically. Tech stack, commands, rules, structure. It&apos;s the single source of truth for how each project works.</p>
      </Section>

      <Section id="the-stack" title="The Web Stack">
        <p>My default starting point for any web project:</p>
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {([
            ['Next.js 15', 'App Router', 'Full-stack framework — API routes, server components, and deployment all in one. Easy Vercel integration.'],
            ['Tailwind CSS v4', 'Styling', 'Utility-first CSS with a CSS-first config. No context switching between files.'],
            ['TypeScript', 'Language', 'Always, even for quick prototypes. Claude writes better code with types.'],
            ['Neon', 'Database', 'Serverless Postgres, free via Vercel integration. Set up through the Vercel dashboard — NOT neon.tech directly.'],
            ['Vercel', 'Deployment', 'Push to GitHub, it deploys. Preview branches, environment variables, edge functions.'],
            ['Drizzle ORM', 'DB layer', 'Type-safe SQL — schema as TypeScript, migrations as files.'],
          ] as [string, string, string][]).map(([name, tag, desc]) => (
            <div key={name} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--ink)', flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline', marginBottom: '2px' }}>
                  <span style={{ fontWeight: 700, fontSize: '14px' }}>{name}</span>
                  <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', textTransform: 'uppercase', opacity: 0.45, letterSpacing: '0.05em' }}>{tag}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '16px' }}>For iOS: SwiftUI + CloudKit or a lightweight Vercel API proxy. I&apos;ve shipped four iOS apps this way.</p>
      </Section>

      <Section id="remote-sessions" title="Remote Sessions">
        <p>I have a Mac Mini running 24/7 on my home network as a persistent build server and personal gateway. When I&apos;m not at my desk — including from my phone — I can SSH in and pick up exactly where I left off.</p>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--ink)' }}>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 4px 0' }}>Tailscale</p>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75, lineHeight: 1.5 }}>
              My three devices — MacBook Pro, Mac Mini, and iPhone — are on a private Tailscale network. The Mac Mini is always reachable at <code style={{ ...mono, fontSize: '11px' }}>jeffs-mac-mini</code> regardless of what network I&apos;m on. No port forwarding, no VPN config.
            </p>
          </div>

          <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--ink)' }}>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 4px 0' }}>Terminus (iPhone)</p>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75, lineHeight: 1.5 }}>
              Terminus is an SSH client for iPhone. I open it, connect to the Mac Mini over Tailscale, and I&apos;m in a real terminal on my phone. Swipe keyboard, full color, all the tools.
            </p>
          </div>

          <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--ink)' }}>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 4px 0' }}>tmux</p>
            <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75, lineHeight: 1.5 }}>
              tmux keeps sessions alive on the Mac Mini between connections. I can start a Claude session on my laptop, disconnect, SSH in from my phone, and reattach to the exact same running session. Nothing is lost.
            </p>
          </div>
        </div>

        <TerminalBlock lines={[
          '# On iPhone via Terminus:',
          'ssh andrewgoble@jeffs-mac-mini',
          'tmux attach',
          '',
          '# Picks up exactly where I left off',
          '> Where were we? ...',
        ]} />

        <p>The Mac Mini also runs OpenClaw — a personal AI gateway. It&apos;s a self-hosted proxy that lets me hit Claude and other models from any device on the Tailscale network through a single authenticated endpoint.</p>
      </Section>

      <Section id="agents" title="Agents">
        <p>Claude Code can spawn sub-agents — separate Claude instances with their own context and tool access. Each agent has a numbered prefix that defines its place in the workflow. I announce them when dispatching: <em>&quot;Calling my friend [Agent] in to help.&quot;</em></p>
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {([
            ['00', 'project-resumer', 'Reads PROGRESS.md and recent commits. Briefs me on exactly where a project left off before I type anything else.'],
            ['01', 'brainstormer', 'Explores requirements, asks clarifying questions, presents architecture options. Always dispatched before any new feature or project.'],
            ['02', 'planner', 'Turns an approved design into a bite-sized implementation plan with exact file paths, code, and commands. Saves to docs/plans/.'],
            ['03', 'implementer', 'Executes a written plan task-by-task. Follows TDD, commits frequently, self-reviews before handoff.'],
            ['05', 'code-reviewer', 'Reviews for spec compliance, logic, architecture, and test coverage.'],
            ['05a', 'security-reviewer', 'OWASP top 10, auth flaws, injection risks, data exposure. Runs in parallel with code-reviewer.'],
            ['05b', 'performance-reviewer', 'N+1 queries, bundle size, rendering inefficiencies. Runs in parallel with code-reviewer.'],
            ['06', 'verifier', 'Runs verification commands and provides evidence before any "done" claim. Mandatory before commits or PRs.'],
            ['07', 'git-workflow', 'Handles commits, PRs, branch management, and chunking work for easy revert.'],
            ['08', 'parallel-dispatcher', 'Dispatches 2+ independent agents concurrently and synthesizes results.'],
            ['09', 'capabilities-advisor', 'Scans the project mid-build and suggests relevant tools or patterns I might be missing.'],
            ['10', 'isolation-checker', 'Verifies correct credentials and no cross-project contamination before committing or deploying.'],
            ['11', 'compound-docs', 'After solving a hard problem, captures it as searchable documentation so the same issue never costs time twice.'],
            ['12', 'app-store-ship', 'End-to-end iOS App Store submission — fastlane, metadata, screenshots, TestFlight, compliance, submission.'],
            ['13', 'researcher', 'Deep-dive research: competitor analysis, tech evaluation, market research, trend analysis with citations.'],
          ] as [string, string, string][]).map(([num, name, desc]) => (
            <div key={name} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                fontWeight: 700,
                opacity: 0.3,
                flexShrink: 0,
                paddingTop: '1px',
                width: '24px',
                textAlign: 'right',
              }}>{num}</span>
              <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--ink)', flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0' }}>{name}</p>
                <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills-hooks" title="Skills, Commands & Hooks">
        <p>Agents do the work. Skills tell them <em>how</em>. Hooks wire it all together automatically.</p>

        <div style={{ marginTop: '20px', marginBottom: '8px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5 }}>Skills</div>
        <p style={{ marginTop: 0 }}>Skills are reusable prompt modules stored in <code style={mono}>~/.claude/skills/</code>. When an agent loads a skill, it gets a structured set of instructions for that task — how to debug, how to plan, how to review code. The slash command is the shorthand that invokes one.</p>
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {([
            ['/done', 'Session wrap-up. Updates PROGRESS.md, commits everything, renames the conversation to [Project] — S[N]: [summary] — date.'],
            ['/preflight', 'Pre-ship check. Runs build, opens the app in a browser, takes screenshots at desktop and mobile widths. Reports pass/fail with evidence.'],
            ['/review-suite', 'Dispatches code-reviewer, security-reviewer, and performance-reviewer in parallel. All three run at once.'],
            ['/brainstorming', 'Loads the brainstorming skill — one clarifying question at a time, then presents a design in sections for validation before any code is written.'],
            ['/writing-plans', 'Turns a validated design into a bite-sized implementation plan saved to docs/plans/.'],
          ] as [string, string][]).map(([cmd, desc]) => (
            <div key={cmd} style={{ paddingLeft: '12px', borderLeft: '3px solid var(--ink)' }}>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0' }}>{cmd}</p>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', marginBottom: '8px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5 }}>Hooks</div>
        <p style={{ marginTop: 0 }}>Hooks are shell commands that fire automatically on Claude Code events — session start, before a tool call, after a tool call. They&apos;re the automation layer that makes the system feel alive.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {([
            ['SessionStart', 'Fires when Claude launches. Reads .projects.json, displays the grouped project list. Every session opens with full context.'],
            ['PreToolUse → TaskUpdate', 'Fires before any task status change. Lightweight guard to prevent accidental state mutations.'],
            ['PreToolUse → Bash', 'Fires before shell commands. Used as a checkpoint for destructive operations.'],
          ] as [string, string][]).map(([event, desc]) => (
            <div key={event} style={{ paddingLeft: '12px', borderLeft: '3px solid var(--ink)' }}>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0' }}>{event}</p>
              <p style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', margin: 0, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '16px' }}>One hard-won lesson: <strong>Stop hooks don&apos;t work reliably.</strong> Prompt-type hooks on the Stop event cause JSON validation errors consistently. I use CLAUDE.md rules instead of hooks for anything that needs to happen at session end.</p>

        <div style={{ marginTop: '24px', marginBottom: '8px', fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.5 }}>How They Connect</div>
        <TerminalBlock lines={[
          '# Session start → hook fires → project list displayed',
          'SessionStart hook → reads .projects.json → shows grouped list',
          '',
          '# I say "take me to Frend"',
          'Claude → dispatches project-resumer agent (00)',
          'project-resumer → reads PROGRESS.md + git log → briefs me',
          '',
          '# I describe a new feature',
          'Claude → invokes /brainstorming skill → asks questions',
          'Skill → dispatches brainstormer agent (01) → design validated',
          'Claude → invokes /writing-plans skill → plan written',
          '',
          '# Implementation',
          'Claude → dispatches implementer agent (03)',
          'implementer → commits chunks → signals done',
          '',
          '# Pre-ship',
          'Claude → invokes /review-suite → agents 05, 05a, 05b run in parallel',
          'Claude → invokes /preflight → verifier agent (06) takes screenshots',
          '',
          '# Wrap up',
          'Claude → invokes /done → PROGRESS.md updated → commit → renamed',
        ]} />
      </Section>
    </Window>
  );
}
