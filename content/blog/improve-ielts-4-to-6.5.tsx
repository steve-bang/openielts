export default function ImproveIelts4To65Content() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Moving from Band 4.0 to 6.5 is one of the most common — and most achievable — score improvements in IELTS
        preparation. This guide gives you a realistic, skill-by-skill roadmap to close the gap in 10–16 weeks.
      </p>

      <h2 id="honest-assessment">First: An Honest Assessment</h2>
      <p>
        Band 4.0 means your English communication is limited to familiar situations, with frequent misunderstandings
        and basic vocabulary. Band 6.5 means you have effective command of English, with occasional inaccuracies
        that do not prevent overall communication. That is a significant leap — but a very achievable one with the
        right approach.
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Realistic Timeline</h4>
            <p className="text-gray-700 text-sm">
              Most candidates moving from Band 4 to 6.5 require <strong>300–500 hours</strong> of focused study.
              If you study 3 hours per day, that is roughly 3–5 months. Consistent daily practice beats
              occasional marathon sessions every time.
            </p>
          </div>
        </div>
      </div>

      <h2 id="diagnose-weakness">Step 1: Diagnose Your Weaknesses</h2>
      <p>
        Before you can improve, you need to know exactly where your score is being lost. Take a full practice test
        and record your scores for each skill. Common patterns for Band 4 candidates:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            skill: "Writing",
            issues: ["Very short responses (under 200 words)", "Limited vocabulary", "Basic sentence structure", "Misunderstanding the question type"],
            color: "border-red-300 bg-red-50",
            badge: "bg-red-100 text-red-700",
          },
          {
            skill: "Speaking",
            issues: ["Long pauses and hesitations", "Very simple vocabulary", "Short answers with no elaboration", "Pronunciation difficulty"],
            color: "border-blue-300 bg-blue-50",
            badge: "bg-blue-100 text-blue-700",
          },
          {
            skill: "Reading",
            issues: ["Running out of time", "Reading every word instead of skimming", "Misreading True/False/Not Given", "Unknown vocabulary blocking comprehension"],
            color: "border-amber-300 bg-amber-50",
            badge: "bg-amber-100 text-amber-700",
          },
          {
            skill: "Listening",
            issues: ["Missing answers due to unfamiliar accents", "Falling behind during form-filling", "Confusing similar-sounding numbers/words", "Missing paraphrased answers"],
            color: "border-green-300 bg-green-50",
            badge: "bg-green-100 text-green-700",
          },
        ].map((item, i) => (
          <div key={i} className={`border-2 rounded-xl p-5 ${item.color}`}>
            <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3 ${item.badge}`}>
              {item.skill}
            </span>
            <ul className="space-y-1.5">
              {item.issues.map((issue, j) => (
                <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 id="vocabulary-grammar">Step 2: Build Your Core Vocabulary & Grammar</h2>
      <p>
        Vocabulary and grammar underpin all four skills. At Band 4, these are the root cause of most errors. Here
        is a focused approach:
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            title: "Learn 10 new words per day — in context",
            desc: "Do not use a random word list. Instead, learn words from IELTS practice materials. When you encounter an unknown word, look it up, write an example sentence, and review it the next day using spaced repetition (try Anki).",
          },
          {
            title: "Master academic collocations",
            desc: "IELTS rewards collocations — words that naturally go together. Examples: 'significant increase', 'raise awareness', 'address a problem'. Practise writing 3 sentences with each new collocation you learn.",
          },
          {
            title: "Fix your top 5 grammar errors",
            desc: "Identify your most frequent errors (subject-verb agreement, article use, tense consistency, plurals, prepositions) and focus on drilling those specific patterns. Grammar books like 'English Grammar in Use' (Raymond Murphy) are ideal.",
          },
          {
            title: "Build paraphrase skills",
            desc: "IELTS rewards paraphrasing in Reading, Listening, Writing, and Speaking. Practice rewriting sentences using synonyms and different grammar structures. This one skill will improve your score across all four sections.",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="skill-by-skill">Step 3: Skill-by-Skill Improvement Plan</h2>

      <h3 id="writing-plan">Writing: From Band 4 to 6.5</h3>
      <p>Writing is the skill most candidates can improve the fastest through deliberate practice.</p>
      <ul>
        <li><strong>Task 2 (essay):</strong> Write one essay per week. Focus first on structure (introduction, 2 body paragraphs, conclusion), then on task achievement (answering the question fully), then on language quality</li>
        <li><strong>Task 1 (report):</strong> Practice describing charts and graphs using basic overview and trend language</li>
        <li><strong>Word count:</strong> Always write 250+ for Task 2 and 150+ for Task 1. Under-length responses are automatically penalized</li>
        <li><strong>Get feedback:</strong> Use an IELTS writing correction service or AI tool to identify specific errors in each essay</li>
      </ul>

      <h3 id="speaking-plan">Speaking: From Band 4 to 6.5</h3>
      <p>Speaking improvement requires daily practice — ideally with a partner or tutor.</p>
      <ul>
        <li><strong>Part 1:</strong> Practise giving 2–3 sentence answers to personal questions. Record yourself and listen back for hesitations and errors</li>
        <li><strong>Part 2:</strong> Use the 1 minute preparation time to make notes with 4–5 key points. Speak for the full 2 minutes — this is required</li>
        <li><strong>Part 3:</strong> Practise abstract discussion by responding to &quot;why do you think...?&quot; questions. Use discourse markers: &quot;On the one hand..., However..., This suggests that...&quot;</li>
        <li><strong>Fluency:</strong> Do not stop to translate from your native language. Accept that you will make errors and keep speaking</li>
      </ul>

      <h3 id="reading-plan">Reading: From Band 4 to 6.5</h3>
      <p>Reading is often the quickest skill to improve because it is purely about technique, not accent or grammar.</p>
      <ul>
        <li><strong>Skim first:</strong> Read the title, headings, and first sentence of each paragraph before reading questions</li>
        <li><strong>Scan for answers:</strong> Do not re-read the whole passage. Use key words from questions to locate the relevant section</li>
        <li><strong>True/False/Not Given:</strong> &quot;Not Given&quot; means the text neither confirms nor denies the statement. If you cannot find evidence either way, it is &quot;Not Given&quot;</li>
        <li><strong>Vocabulary expansion:</strong> Every unknown word in practice passages is a lesson. Build your academic vocabulary systematically</li>
      </ul>

      <h3 id="listening-plan">Listening: From Band 4 to 6.5</h3>
      <ul>
        <li><strong>Daily exposure:</strong> Listen to English media (BBC, podcasts) for 30 minutes daily in addition to IELTS practice</li>
        <li><strong>Use transcripts:</strong> After listening to a recording, read the transcript to identify what you missed and why</li>
        <li><strong>Practice form completion:</strong> This is the most common low-score question type for Band 4 candidates. Drill it specifically</li>
        <li><strong>Number dictation:</strong> Practise writing numbers, dates, and prices accurately as you hear them</li>
      </ul>

      <h2 id="12-week-schedule">12-Week Study Schedule Overview</h2>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Weeks</th>
              <th className="text-left px-4 py-3 font-semibold">Focus</th>
              <th className="text-left px-4 py-3 font-semibold">Daily Target</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1–2", "Diagnostic + Foundation Grammar & Vocabulary", "2 hrs grammar/vocab, 30 min listening"],
              ["3–4", "Reading Technique (skimming, scanning, T/F/NG)", "1 passage per day with review"],
              ["5–6", "Writing Task 2 Structure", "1 essay per week + daily sentence writing"],
              ["7–8", "Speaking Fluency Building", "20 min speaking practice daily"],
              ["9–10", "Listening Strategies + Accent Exposure", "1 section per day + 30 min media"],
              ["11–12", "Full Mock Tests + Weak Skill Focus", "1 full test per week, review and repeat"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-bold text-[#D32F2F] border-b border-gray-100">{row[0]}</td>
                <td className="px-4 py-3 text-gray-800 border-b border-gray-100 font-medium">{row[1]}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Track Your Progress</h4>
            <p className="text-gray-700 text-sm">
              Take a full practice test at the end of every two weeks. Record your scores by skill and section.
              If a skill is not improving, change your study approach — more time alone will not fix a technique
              problem. OpenIELTS progress tracking shows you exactly where to focus next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
