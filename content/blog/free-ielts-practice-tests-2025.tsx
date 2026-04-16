export default function FreePracticeTests2025Content() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Finding high-quality free IELTS practice tests online can be overwhelming — there are hundreds of sites
        with wildly varying quality. We tested and reviewed the top resources so you can spend more time practising
        and less time searching.
      </p>

      <h2 id="what-to-look-for">What Makes a Good IELTS Practice Test?</h2>
      <p>
        Not all free practice tests are created equal. Before investing your time, look for these quality
        indicators:
      </p>
      <ul>
        <li><strong>Authentic test format:</strong> 40 Listening questions across 4 sections, 3 Reading passages with 40 questions, Writing with realistic prompts</li>
        <li><strong>Answer keys and explanations:</strong> Simply knowing the right answer is not enough — understanding why helps more</li>
        <li><strong>Audio scripts:</strong> Essential for Listening practice so you can identify exactly what you missed</li>
        <li><strong>Timed conditions:</strong> A practice test taken without time pressure is not a practice test</li>
        <li><strong>Band score estimation:</strong> Helps you track progress meaningfully</li>
      </ul>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Beware of Low-Quality Tests</h4>
            <p className="text-gray-700 text-sm">
              Many free sites use recycled, inaccurate, or outdated questions that do not reflect actual IELTS
              difficulty. Practising with poor-quality tests can give you a false sense of readiness or
              actually teach you the wrong strategies. Always prioritise official Cambridge materials.
            </p>
          </div>
        </div>
      </div>

      <h2 id="top-resources">Top Free IELTS Practice Resources in 2025</h2>

      <div className="space-y-6 my-6">
        {[
          {
            rank: 1,
            name: "Cambridge IELTS Books (Sample Tests)",
            category: "Official",
            badge: "bg-green-100 text-green-800",
            description:
              "The gold standard. Cambridge publishes free sample test papers on their official website. These are the most authentic tests available because they are written by the same people who create the real exam.",
            pros: ["100% authentic test format", "Official band score conversion tables", "Audio files from real examiners"],
            cons: ["Limited number of free tests (most require book purchase)", "No instant digital marking"],
          },
          {
            rank: 2,
            name: "British Council IELTS Practice Tests",
            category: "Official",
            badge: "bg-green-100 text-green-800",
            description:
              "The British Council offers free sample tests and preparation resources online. As one of the official IELTS test administrators, their materials are highly trustworthy and up to date.",
            pros: ["Free and official", "Covers all four skills", "Includes tips alongside tests"],
            cons: ["Fewer tests than Cambridge", "Writing assessment requires human marking"],
          },
          {
            rank: 3,
            name: "IELTS.org (IDP Official Site)",
            category: "Official",
            badge: "bg-green-100 text-green-800",
            description:
              "IDP, the other official IELTS administrator, provides free sample test questions and preparation resources. The site also includes video tutorials from IELTS examiners.",
            pros: ["Official examiner video guidance", "Free sample questions", "Clear format explanation"],
            cons: ["Fewer complete tests", "Some features require registration"],
          },
          {
            rank: 4,
            name: "OpenIELTS Practice Platform",
            category: "AI-Powered",
            badge: "bg-purple-100 text-purple-800",
            description:
              "OpenIELTS offers AI-graded Writing and Speaking practice alongside full Listening and Reading tests. Unique among free resources, it provides instant band score estimates and specific feedback rather than just an answer key.",
            pros: ["AI feedback on Writing and Speaking", "Instant band score estimates", "Detailed explanations per question", "Progress tracking across sessions"],
            cons: ["Newer platform (less content volume than Cambridge)"],
          },
          {
            rank: 5,
            name: "IELTS Liz",
            category: "Expert Blog",
            badge: "bg-blue-100 text-blue-800",
            description:
              "IELTS Liz is one of the most trusted independent IELTS resources, run by a former IELTS examiner. The site includes free lessons, tips, and sample tasks with model answers for all four skills.",
            pros: ["Tips from a real examiner", "Excellent Writing model answers", "Clear explanations of scoring criteria"],
            cons: ["Not a full-test simulator", "No automated scoring"],
          },
          {
            rank: 6,
            name: "Magoosh IELTS Blog",
            category: "Prep Blog",
            badge: "bg-orange-100 text-orange-800",
            description:
              "Magoosh offers a library of free IELTS vocabulary, tips, and practice questions. Their vocabulary lists are particularly well-organized for systematic study.",
            pros: ["Excellent vocabulary content", "Well-explained strategies", "Free email course available"],
            cons: ["Full course requires subscription", "Less focus on complete test simulation"],
          },
        ].map((resource) => (
          <div key={resource.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  {resource.rank}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{resource.name}</h3>
                  <span className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mt-1 ${resource.badge}`}>
                    {resource.category}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Pros</p>
                <ul className="space-y-1">
                  {resource.pros.map((pro, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-green-500 font-bold shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Cons</p>
                <ul className="space-y-1">
                  {resource.cons.map((con, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-red-500 font-bold shrink-0">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 id="how-to-use">How to Get the Most from Practice Tests</h2>
      <p>
        Simply doing practice tests without reviewing them properly is one of the biggest preparation mistakes.
        Follow this review process:
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            phase: "During the test",
            steps: ["Set a strict timer — no pausing", "Work in test conditions (quiet room, no dictionary)", "Mark questions you were unsure about"],
          },
          {
            phase: "After the test",
            steps: ["Score your paper using the answer key", "For each wrong answer, understand WHY it is wrong", "For correct answers you guessed, understand why they are right"],
          },
          {
            phase: "Pattern review (weekly)",
            steps: ["Track which question types you consistently miss", "Identify vocabulary gaps that caused errors", "Review listening transcripts for missed audio clues"],
          },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-3">{item.phase}</h4>
            <ul className="space-y-1.5">
              {item.steps.map((step, j) => (
                <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-[#D32F2F] font-bold shrink-0">→</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📊</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">How Many Practice Tests Should You Do?</h4>
            <p className="text-gray-700 text-sm">
              Quality over quantity. Doing 30 tests without reviewing them is less effective than doing 10 tests
              with thorough review. Aim for 1 full mock test per week in the final 4 weeks before your exam.
              Use the OpenIELTS progress dashboard to track your band score trend across tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
