'use client';

import { toast } from 'sonner';

export default function SubscribeForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email'));

    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    })
      .then(async (res) => {
        const txt = await res.text();
        if (res.ok) {
          return txt;
        } else {
          return Promise.reject(txt);
        }
      })
      .catch((e) => {
        toast.error('Une erreur est survenue, réessaye plus tard !');
      });

    toast.success('Merci pour ton abonnement !');
  };

  return (
    <div className="max-w-[360px] mx-auto">
      <div className="text-xs text-slate-500 font-medium uppercase italic mb-8">
        Abonne toi à ma newsletter !
      </div>
      <div className="w-full">
        <label className="sr-only" htmlFor="url">
          URL
        </label>
        <form className="relative flex items-center" onSubmit={handleSubmit}>
          <div
            className="absolute inset-0 opacity-60 bg-gradient-to-r from-slate-700 to-slate-700/50 rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />
          <input
            id="url"
            type="text"
            name="email"
            className="form-input w-full bg-transparent border-transparent text-slate-300 focus:border-blue-300 focus:ring-0 pr-24 text-sm"
          />
          <button
            className="absolute inset-0 left-auto text-sm pl-2 pr-3 font-medium text-blue-500"
            type="submit"
          >
            <span
              className="absolute inset-0 right-auto w-px -ml-px my-2 bg-slate-600"
              aria-hidden="true"
            />
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
