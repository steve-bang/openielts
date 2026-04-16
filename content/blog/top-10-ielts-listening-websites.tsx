export default function Top10ListeningWebsitesContent() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Regular listening practice is the single fastest way to improve your IELTS Listening score. But not all
        practice resources are equal. Here are the 10 best websites for IELTS Listening practice — tested,
        reviewed, and ranked by quality and usefulness.
      </p>

      <h2 id="why-websites">Why Use Online Resources for Listening Practice?</h2>
      <p>
        The best IELTS candidates practice every day, not just when they sit down with a textbook. Online resources
        let you practise anywhere — on your commute, during lunch breaks, or before bed. The key is variety:
        exposure to different accents, topics, and question types all build the listening resilience you need on
        test day.
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Practice Strategy</h4>
            <p className="text-gray-700 text-sm">
              Use <strong>official materials</strong> for test simulation, and <strong>general English media</strong>
              (podcasts, YouTube, BBC) for daily exposure. Both serve different purposes and both are essential
              for reaching Band 7 and above.
            </p>
          </div>
        </div>
      </div>

      <h2 id="top-10">Top 10 Websites for IELTS Listening Practice</h2>

      <div className="space-y-6 my-6">
        {[
          {
            rank: 1,
            name: "Cambridge IELTS Online",
            url: "cambridgeenglish.org",
            tag: "Official",
            badge: "bg-green-100 text-green-800",
            rating: 5,
            desc: "The most authoritative source for IELTS listening practice. Cambridge publishes the official test and offers free sample listening tests with answer keys and audio transcripts.",
            features: ["Official test format", "Real exam audio quality", "Full transcripts", "Band score tables"],
            best: "Final exam preparation",
          },
          {
            rank: 2,
            name: "OpenIELTS",
            url: "openielts.com",
            tag: "AI-Powered",
            badge: "bg-purple-100 text-purple-800",
            rating: 5,
            desc: "Full listening tests with instant automated scoring, question-level explanations, and progress tracking. Unique in offering AI feedback that identifies your specific weak question types.",
            features: ["Instant scoring", "Question-type analysis", "Progress dashboard", "Section-by-section breakdown"],
            best: "Targeted improvement with tracking",
          },
          {
            rank: 3,
            name: "IELTS.org (IDP Official)",
            url: "ielts.org",
            tag: "Official",
            badge: "bg-green-100 text-green-800",
            rating: 4,
            desc: "IDP&apos;s official preparation hub includes free sample questions for all sections, including Listening. Examiner video tips are particularly valuable for understanding what graders look for.",
            features: ["Official materials", "Examiner video guidance", "Format explanation", "Free sample audio"],
            best: "Format familiarisation",
          },
          {
            rank: 4,
            name: "IELTS Liz",
            url: "ieltsliz.com",
            tag: "Expert Blog",
            badge: "bg-blue-100 text-blue-800",
            rating: 4,
            desc: "Former IELTS examiner Liz provides high-quality listening tips, free lessons by question type, and detailed explanations. One of the most trusted independent resources.",
            features: ["Examiner tips", "Question type guides", "Common mistake analysis", "Free lessons"],
            best: "Strategy and technique learning",
          },
          {
            rank: 5,
            name: "British Council IELTS Preparation",
            url: "britishcouncil.org",
            tag: "Official",
            badge: "bg-green-100 text-green-800",
            rating: 4,
            desc: "The British Council offers a free preparation course and sample tests. Their listening samples are authentic and the site is well-organized for systematic study.",
            features: ["Free preparation course", "Authentic audio samples", "Skills-based structure", "Mobile-friendly"],
            best: "Structured beginner preparation",
          },
          {
            rank: 6,
            name: "IELTS Simon",
            url: "ielts-simon.com",
            tag: "Expert Blog",
            badge: "bg-blue-100 text-blue-800",
            rating: 4,
            desc: "Former IELTS examiner Simon offers daily lessons and listening tips. His approach is practical and concise — ideal for busy candidates who need focused guidance.",
            features: ["Daily lessons", "Concise tips", "Example answers", "Regular updates"],
            best: "Daily short practice sessions",
          },
          {
            rank: 7,
            name: "BBC Learning English",
            url: "bbc.co.uk/learningenglish",
            tag: "General English",
            badge: "bg-orange-100 text-orange-800",
            rating: 4,
            desc: "While not IELTS-specific, BBC Learning English provides authentic British English audio content at a range of difficulty levels. Essential for accent familiarization and vocabulary building.",
            features: ["Native British speakers", "Transcripts available", "Wide topic range", "Regular new content"],
            best: "Accent practice and vocabulary",
          },
          {
            rank: 8,
            name: "TED Talks (ted.com)",
            url: "ted.com",
            tag: "Academic Content",
            badge: "bg-indigo-100 text-indigo-800",
            rating: 3,
            desc: "TED Talks expose you to academic English on complex topics — similar to IELTS Section 4 lectures. With subtitles available for checking, they are ideal for advanced listening practice.",
            features: ["Academic topics", "Full transcripts", "Multiple speakers", "Variable accents"],
            best: "Section 4 (academic lecture) preparation",
          },
          {
            rank: 9,
            name: "English Central",
            url: "englishcentral.com",
            tag: "Interactive",
            badge: "bg-teal-100 text-teal-800",
            rating: 3,
            desc: "English Central uses video content with interactive dictation exercises. Particularly useful for improving your ability to catch individual words and phrases — a core listening skill.",
            features: ["Interactive dictation", "Video-based lessons", "Instant feedback", "Vocabulary tracking"],
            best: "Dictation and word-level accuracy",
          },
          {
            rank: 10,
            name: "Podcasts (BBC Global News, 6 Minute English)",
            url: "bbc.co.uk",
            tag: "Podcast",
            badge: "bg-gray-100 text-gray-700",
            rating: 3,
            desc: "Daily podcast listening builds listening stamina and exposes you to varied accents and topics. BBC&apos;s 6 Minute English is particularly IELTS-relevant as it covers academic vocabulary in short episodes.",
            features: ["Daily content", "Varied topics", "British & international accents", "Completely free"],
            best: "Daily fluency and stamina building",
          },
        ].map((site) => (
          <div key={site.rank} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  {site.rank}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{site.name}</h3>
                  <p className="text-xs text-gray-500">{site.url}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full ${site.badge}`}>
                  {site.tag}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < site.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{site.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {site.features.map((f, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{f}</span>
              ))}
            </div>
            <p className="text-xs font-semibold text-[#D32F2F]">Best for: {site.best}</p>
          </div>
        ))}
      </div>

      <h2 id="study-plan">Using These Resources: A Weekly Plan</h2>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Day</th>
              <th className="text-left px-4 py-3 font-semibold">Activity</th>
              <th className="text-left px-4 py-3 font-semibold">Resource</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monday", "1 IELTS Listening section (timed)", "Cambridge / OpenIELTS"],
              ["Tuesday", "20 min BBC Learning English + transcript review", "BBC Learning English"],
              ["Wednesday", "Question type drill (focus on weakest type)", "IELTS Liz / IELTS Simon"],
              ["Thursday", "TED Talk with subtitles (take notes while watching)", "TED.com"],
              ["Friday", "Full Listening test (all 4 sections)", "Cambridge / OpenIELTS"],
              ["Weekend", "Podcast exposure + vocabulary review", "6 Minute English / BBC Global News"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-bold text-gray-800 border-b border-gray-100">{row[0]}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row[1]}</td>
                <td className="px-4 py-3 text-[#D32F2F] font-medium border-b border-gray-100">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">The Key Habit</h4>
            <p className="text-gray-700 text-sm">
              Consistency beats intensity. 30 minutes of daily listening practice will improve your score
              faster than 5 hours on Saturdays alone. Your brain builds listening circuits through repeated
              daily exposure — treat it like going to the gym.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
