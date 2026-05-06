export default function Home() {
  const faqs = [
    {
      q: "Do I need to know how to code?",
      a: "No. The visual drag-and-drop builder lets you create complex automation rules without writing a single line of code."
    },
    {
      q: "Which Discord events can trigger role changes?",
      a: "Reactions, messages, join events, activity milestones, and time-based schedules are all supported triggers."
    },
    {
      q: "Is my Discord server data safe?",
      a: "We only request the minimum Discord permissions needed. Your data is never sold or shared with third parties."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff] bg-opacity-10 border border-[#58a6ff] border-opacity-30 rounded-full px-4 py-1 text-[#58a6ff] text-sm font-medium mb-6">
          Discord Automation
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visual Discord Role Automation<br />
          <span className="text-[#58a6ff]">Without Writing Code</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Build complex role assignment rules with a drag-and-drop flowchart. Connect to Discord, set your triggers, and let automation handle the rest.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Automating — $15/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>Reaction-based roles</span>
          <span>Activity tracking</span>
          <span>Time-based rules</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited automation rules",
              "All trigger types (reactions, messages, time)",
              "Visual drag-and-drop builder",
              "Real-time role assignment",
              "Up to 10 Discord servers",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
