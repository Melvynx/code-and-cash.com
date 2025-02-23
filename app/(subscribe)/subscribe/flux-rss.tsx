'use client';

import { toast } from 'sonner';

const RSS_LINK = 'https://anchor.fm/s/e6d4c1b4/podcast/rss';

export default function FluxRss() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(RSS_LINK);
    toast.success('Lien copié !');
  };

  return (
    <div className="max-w-[360px] mx-auto">
      <div className="mb-4 text-xs italic font-medium uppercase text-slate-500">
        Abonne toi au flux RSS
      </div>
      <div className="w-full">
        <label className="sr-only" htmlFor="url">
          URL
        </label>
        <div className="relative flex items-center">
          <div
            className="absolute inset-0 rounded-full pointer-events-none opacity-60 bg-gradient-to-r from-slate-700 to-slate-700/50 -z-10"
            aria-hidden="true"
          />
          <input
            id="url"
            type="text"
            value={RSS_LINK}
            name="email"
            className="w-full pr-24 text-sm bg-transparent border-transparent form-input text-slate-300 focus:border-blue-300 focus:ring-0"
          />
          <button
            onClick={copyToClipboard}
            className="absolute inset-0 left-auto pl-2 pr-3 text-sm font-medium text-blue-500"
            type="submit"
          >
            <span
              className="absolute inset-0 right-auto w-px my-2 -ml-px bg-slate-600"
              aria-hidden="true"
            />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
