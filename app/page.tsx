export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Browser Extension + Dashboard
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Save and restore exact<br />
          <span className="text-[#58a6ff]">browser sessions</span> instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          TabSnap captures every open tab, form value, and scroll position into a named snapshot. One click to save your entire workspace. One click to bring it all back.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get TabSnap — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works on Chrome and Edge.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📸</div>
            <h3 className="font-semibold text-white mb-1">Named Snapshots</h3>
            <p className="text-sm text-[#8b949e]">Label sessions like "Bug #4821" or "Client Demo" and find them instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-semibold text-white mb-1">Full State Capture</h3>
            <p className="text-sm text-[#8b949e]">Tabs, scroll positions, and form inputs — all preserved exactly as you left them.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">☁️</div>
            <h3 className="font-semibold text-white mb-1">Cloud Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Manage, share, and restore sessions from any machine via the web dashboard.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited snapshots</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Full form &amp; scroll capture</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cloud sync &amp; dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Edge extension</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start for $8/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No lock-in.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-sm text-[#8b949e]">TabSnap works on Google Chrome and Microsoft Edge. Firefox support is on the roadmap.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it capture passwords or sensitive data?</h3>
            <p className="text-sm text-[#8b949e]">No. TabSnap skips password fields entirely. Only non-sensitive form inputs and page state are captured.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I restore sessions on a different machine?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Snapshots sync to your cloud dashboard so you can restore any session from any device with the extension installed.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TabSnap. All rights reserved.
      </footer>
    </main>
  );
}
