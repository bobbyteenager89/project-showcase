import { ExternalLink } from 'lucide-react';
import { apps } from '@/lib/setup';

export default function SetupPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">My Setup</h2>
        <p className="text-gray-500">The utility apps that make the workflow possible — things I&apos;d miss immediately if they disappeared.</p>
      </div>

      <div className="space-y-8">
        {apps.map((app) => (
          <div key={app.name} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
            <div className="flex items-start justify-between mb-1">
              <div>
                <span className="font-semibold text-gray-900">{app.name}</span>
                <span className="ml-2 text-xs text-gray-400 uppercase tracking-wider">{app.category}</span>
              </div>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 flex-shrink-0 ml-4"
              >
                {app.url.replace('https://', '').replace('http://', '').split('/')[0]}
                <ExternalLink size={11} />
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-2 italic">{app.tagline}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{app.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
