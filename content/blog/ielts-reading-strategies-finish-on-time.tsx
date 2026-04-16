export default function ReadingStrategiesFinishOnTimeContent() {
  return (
    <div className="prose-content">

      {/* ── Lead ── */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        I still remember the moment I realised I had eight questions left and four minutes on the
        clock. I wasn&apos;t struggling to understand the passage — I understood it perfectly. I
        was just too slow. That one test taught me something I now tell every student I work with:
        IELTS Reading is not a comprehension test. It&apos;s a <em>speed-comprehension</em> test.
        And the two require completely different preparation strategies.
      </p>

      {/* ── The real problem ── */}
      <h2 id="why-time-runs-out">Why Smart Students Still Run Out of Time</h2>
      <p>
        Most candidates who struggle with IELTS Reading are actually good readers in everyday life.
        They read books, articles, emails — no problem. So why does the test feel so different?
      </p>
      <p>
        The answer is almost always one of three things:
      </p>
      <ul>
        <li>
          <strong>They read every passage fully before looking at questions</strong> — this wastes
          5 to 8 minutes per passage on information they will never be tested on.
        </li>
        <li>
          <strong>They spend too long on hard questions</strong> — two minutes on a single question
          means another question goes unanswered, and both score the same: one mark.
        </li>
        <li>
          <strong>They re-read paragraphs they&apos;ve already scanned</strong> — they don&apos;t
          trust their first skim, so they read the same section three times instead of moving on
          and coming back.
        </li>
      </ul>
      <p>
        None of these are intelligence problems. They are <strong>strategy problems</strong> —
        and every single one can be trained out in two to three weeks of deliberate practice.
      </p>

      {/* ── The math ── */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 my-6">
        <h3 className="font-bold text-gray-900 mb-4 text-center">The Reading Test by the Numbers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
          {[
            { number: "60", unit: "minutes total", color: "text-[#D32F2F]" },
            { number: "40", unit: "questions", color: "text-amber-600" },
            { number: "3", unit: "passages", color: "text-green-600" },
            { number: "90", unit: "seconds per question", color: "text-blue-600" },
          ].map((item) => (
            <div key={item.unit} className="bg-white rounded-xl p-4 shadow-sm">
              <div className={`text-3xl font-extrabold ${item.color}`}>{item.number}</div>
              <div className="text-xs text-gray-500 mt-1">{item.unit}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          That&apos;s <strong>90 seconds average per question</strong> — but some questions take 30
          seconds and some take 3 minutes. Your strategy is how you manage that variance.
        </p>
      </div>

      {/* ── Timing breakdown ── */}
      <h2 id="timing-per-passage">The 20-20-20 Timing Rule</h2>
      <p>
        Before anything else, accept this as a non-negotiable constraint: <strong>20 minutes per
        passage</strong>. Not 25 on the first one because it felt easy. Not 15 on the second
        because you were in a rhythm. A strict 20-minute budget per passage, enforced by
        your watch.
      </p>
      <p>
        Here is exactly how those 20 minutes break down inside each passage:
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Phase</th>
              <th className="text-left px-4 py-3 font-semibold">Time</th>
              <th className="text-left px-4 py-3 font-semibold">What you&apos;re doing</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                phase: "1. Question preview",
                time: "1–2 min",
                what: "Read the questions (not the passage). Underline keywords in each question. This primes your brain to notice relevant sections.",
              },
              {
                phase: "2. Skim the passage",
                time: "2–3 min",
                what: "First sentence of each paragraph only. Build a mental map of where topics live. Do NOT try to understand everything.",
              },
              {
                phase: "3. Targeted reading & answering",
                time: "12–14 min",
                what: "Go question by question. For each one, scan for the keyword location you identified, read that section closely, answer, and move on.",
              },
              {
                phase: "4. Review & guesses",
                time: "1–2 min",
                what: "Any skipped questions get a best-guess answer. Never leave a blank — there is no penalty for wrong answers in IELTS Reading.",
              },
            ].map((row, i) => (
              <tr key={row.phase} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100 whitespace-nowrap">{row.phase}</td>
                <td className="px-4 py-3 font-mono font-bold text-[#D32F2F] border-b border-gray-100 whitespace-nowrap">{row.time}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⏱️</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Set checkpoint alarms during practice</h4>
            <p className="text-gray-700 text-sm mb-0">
              During every timed practice session, set a phone alarm at the 20-minute and 40-minute
              marks. If you&apos;re not starting Passage 2 at 20 minutes, you have a timing problem —
              not a reading problem. Address it before the test day, not on it.
            </p>
          </div>
        </div>
      </div>

      {/* ── 8 strategies ── */}
      <h2 id="8-strategies">8 Strategies That Actually Move Your Score</h2>
      <p>
        These are not general study tips. Each one targets a specific reason why candidates lose
        marks or time. Apply them in order — the first three alone can add 3 to 5 correct answers
        in your next practice test.
      </p>

      {[
        {
          n: 1,
          tag: "Skimming",
          title: "Read the First Sentence of Every Paragraph — Nothing Else",
          body: "Most IELTS passages are academic texts that follow a rigid structure: topic sentence → supporting detail → example. If you read only the first sentence of each paragraph during your initial skim, you get 80% of the passage map in 20% of the time. The detail doesn't matter yet. What matters is knowing 'paragraph 3 is about the economic impact' so when question 7 asks about economic impact, you go straight to paragraph 3.",
          example: null,
        },
        {
          n: 2,
          tag: "Keyword Hunting",
          title: "Underline Three Keywords in Every Question Before Reading",
          body: "Before you look at the passage, read each question and underline the two or three most specific, searchable words. Proper nouns (names, places, dates), numbers, and unusual vocabulary are ideal — they are easy to spot in a dense passage. Generic words like 'people', 'study', or 'important' are useless anchors. Specific words like 'magnetite crystals', '1987', or 'Professor Lundqvist' will jump off the page immediately.",
          example: {
            label: "Example",
            bad: "Question: 'According to the passage, why did researchers change their approach?' → Underlined: 'researchers', 'approach' (both common — hard to scan for)",
            good: "Question: 'According to the passage, why did the Stanford team change their methodology in 1994?' → Underlined: 'Stanford', '1994' (unique — will stand out instantly)",
          },
        },
        {
          n: 3,
          tag: "Time Boxing",
          title: "The 90-Second Rule: Move On, Come Back",
          body: "Every question gets a maximum of 90 seconds. If you haven't found the answer, circle the question number, write your best guess in the margin, and move on. Hard questions and easy questions are worth exactly one mark each. Spending four minutes on a difficult True/False/Not Given when you could answer three easier questions in the same time is the most expensive mistake in IELTS Reading.",
          example: null,
        },
        {
          n: 4,
          tag: "Question Types",
          title: "Know Which Question Types Are Sequential (and Which Aren't)",
          body: "This is one of the most under-taught strategies in IELTS preparation. Most question types follow the order of the passage — meaning question 3 refers to information that appears before question 4 in the text. If you know this, you can scan forward confidently instead of searching the entire passage each time. The exceptions are Matching Headings, Matching Features, and Global questions — these don't follow text order and should be answered last within a passage.",
          example: null,
        },
        {
          n: 5,
          tag: "True/False/NG",
          title: "For True/False/Not Given: Stop Looking When You Find the Relevant Section",
          body: "True/False/Not Given questions trip up even strong readers because they keep searching for confirmation when they've already found the answer. The rule is: once you've located the relevant sentence in the passage, make your decision based on that sentence alone. 'Not Given' doesn't mean 'I couldn't find it' — it means 'the passage does not confirm or deny this statement'. If you're re-reading the whole passage for one T/F/NG question, you're doing it wrong.",
          example: {
            label: "The key distinction",
            bad: "FALSE means the passage directly contradicts the statement.",
            good: "NOT GIVEN means the passage simply doesn't address it. Neither confirms nor denies.",
          },
        },
        {
          n: 6,
          tag: "Paraphrasing",
          title: "Expect Paraphrasing — The Passage Never Uses the Question's Exact Words",
          body: "IELTS test-writers are specifically trained to avoid using the same words in the question and the passage. If a question says 'children benefited from outdoor activities', the passage will say something like 'young people showed improvements through recreational time in natural environments'. Knowing this stops you from word-matching and trains you to look for meaning instead. When you skim for keywords, also think: what synonym might the passage use for this concept?",
          example: null,
        },
        {
          n: 7,
          tag: "Answering Order",
          title: "Do the Easier Question Types First Within Each Passage",
          body: "Not all question types take the same amount of time. Within each 20-minute passage block, do Short Answer and Multiple Choice questions first — these are typically faster and more straightforward. Save Matching Headings and Matching Information for last, since they require a broader understanding of the full passage that you'll have built up by then. Doing them first, when you barely know the passage, wastes two to three minutes.",
          example: null,
        },
        {
          n: 8,
          tag: "Mistake Log",
          title: "Keep a Mistake Log — But Only Analyse Three Types of Errors",
          body: "After every practice test, don't just check your score. Categorise every wrong answer into one of three buckets: (1) vocabulary — I didn't know a key word; (2) misread — I misunderstood what the question was asking; (3) timing — I guessed because I ran out of time. Over two weeks, you'll see a clear pattern. Most candidates have one dominant error type. Fixing that single type tends to unlock 3 to 6 additional correct answers per test — far more than vague 'reading more' practice would achieve.",
          example: null,
        },
      ].map((strategy) => (
        <div
          key={strategy.n}
          className="bg-white border-2 border-gray-200 hover:border-[#D32F2F] rounded-2xl p-6 mb-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <div className="flex items-start gap-4 mb-3">
            <span className="w-10 h-10 rounded-full bg-red-100 text-[#D32F2F] flex items-center justify-center font-extrabold text-lg shrink-0">
              {strategy.n}
            </span>
            <div className="flex-1 min-w-0">
              <span className="inline-block text-xs font-bold uppercase tracking-wide bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mb-2">
                {strategy.tag}
              </span>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{strategy.title}</h3>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{strategy.body}</p>
          {strategy.example && (
            <div className="bg-slate-50 rounded-xl p-4 border-l-4 border-blue-400 space-y-2">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">{strategy.example.label}</p>
              <p className="text-sm text-red-600 flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>{strategy.example.bad}</span>
              </p>
              <p className="text-sm text-green-700 flex items-start gap-2">
                <span className="font-bold shrink-0">✓</span>
                <span>{strategy.example.good}</span>
              </p>
            </div>
          )}
        </div>
      ))}

      {/* ── Question type guide ── */}
      <h2 id="question-type-cheatsheet">Quick Cheat Sheet: Time and Tactic per Question Type</h2>
      <p>
        Different question types demand different approaches. Treating them all the same is one of
        the most common causes of wasted time.
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Question Type</th>
              <th className="text-left px-4 py-3 font-semibold">Follows Text Order?</th>
              <th className="text-left px-4 py-3 font-semibold">Avg Time</th>
              <th className="text-left px-4 py-3 font-semibold">Key Tactic</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                type: "Multiple Choice",
                sequential: "Yes",
                time: "60–90 sec",
                tactic: "Eliminate wrong options; don't be distracted by 'partially true' answers",
              },
              {
                type: "True / False / Not Given",
                sequential: "Yes",
                time: "60–90 sec",
                tactic: "Find the relevant sentence; decide on that sentence alone; move on",
              },
              {
                type: "Short Answer",
                sequential: "Yes",
                time: "45–75 sec",
                tactic: "Answer must come directly from the text; word limit is strict — don't paraphrase",
              },
              {
                type: "Sentence Completion",
                sequential: "Yes",
                time: "60–90 sec",
                tactic: "Predict the grammatical form needed before scanning for the answer",
              },
              {
                type: "Matching Headings",
                sequential: "No",
                time: "2–3 min total",
                tactic: "Do last; skim each paragraph; the heading matches the paragraph's main idea, not a single detail",
              },
              {
                type: "Matching Features",
                sequential: "No",
                time: "2–3 min total",
                tactic: "Find all instances of the features (usually people/organisations) first, then answer",
              },
              {
                type: "Summary Completion",
                sequential: "Usually",
                time: "90–120 sec",
                tactic: "Read the summary for context first; gaps usually cluster in one part of the passage",
              },
              {
                type: "Diagram / Flow Chart",
                sequential: "Usually",
                time: "90–120 sec",
                tactic: "Study the diagram before the passage; it tells you exactly which section to focus on",
              },
            ].map((row, i) => (
              <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100">{row.type}</td>
                <td className={`px-4 py-3 border-b border-gray-100 font-semibold text-xs ${row.sequential === "Yes" ? "text-green-600" : row.sequential === "No" ? "text-red-600" : "text-amber-600"}`}>
                  {row.sequential}
                </td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100 font-mono text-xs">{row.time}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{row.tactic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Score to band ── */}
      <h2 id="score-to-band">How Many Correct Answers Do You Actually Need?</h2>
      <p>
        This is the table that changes everything for a lot of my students. Many people think they
        need to get nearly everything right to reach Band 7. They don&apos;t. Knowing the real
        target makes the whole test feel less overwhelming — and stops the panic spiral when you
        get stuck on a hard question.
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Correct Answers (out of 40)</th>
              <th className="text-left px-4 py-3 font-semibold">Approximate Band Score</th>
              <th className="text-left px-4 py-3 font-semibold">What this looks like</th>
            </tr>
          </thead>
          <tbody>
            {[
              { score: "39–40", band: "Band 9.0", note: "Near-perfect; extremely rare", highlight: false },
              { score: "37–38", band: "Band 8.5", note: "1–2 wrong across the entire test", highlight: false },
              { score: "35–36", band: "Band 8.0", note: "Roughly 1 wrong per passage", highlight: false },
              { score: "32–34", band: "Band 7.5", note: "About 2 wrong per passage", highlight: false },
              { score: "30–31", band: "Band 7.0", note: "10 wrong — that's still Band 7", highlight: true },
              { score: "26–29", band: "Band 6.5", note: "11–14 wrong", highlight: false },
              { score: "23–25", band: "Band 6.0", note: "15–17 wrong", highlight: false },
              { score: "18–22", band: "Band 5.5", note: "18–22 wrong", highlight: false },
            ].map((row, i) => (
              <tr
                key={row.score}
                className={row.highlight ? "bg-green-50 font-semibold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 border-b border-gray-100 font-mono">{row.score}</td>
                <td className={`px-4 py-3 border-b border-gray-100 font-bold ${row.highlight ? "text-green-700" : "text-gray-800"}`}>
                  {row.band}
                  {row.highlight && <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full font-semibold">Most common target</span>}
                </td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100 text-xs">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">The real mindset shift</h4>
            <p className="text-gray-700 text-sm mb-0">
              If you need Band 7, you can get <strong>10 questions wrong</strong> and still hit your
              target. That means on a hard question, skipping and guessing is often the rational
              choice — not a failure. The candidates who run out of time are usually the ones who
              refuse to leave any question behind.
            </p>
          </div>
        </div>
      </div>

      {/* ── Practice routine ── */}
      <h2 id="practice-routine">A 3-Week Practice Routine That Actually Works</h2>
      <p>
        Doing practice tests without a structured approach to improvement is one of the biggest
        time-wasters in IELTS preparation. Here is the exact routine I give students who need to
        improve their Reading score in three weeks or less.
      </p>

      <div className="space-y-4 my-6">
        {[
          {
            week: "Week 1",
            title: "Diagnose — find your actual problem",
            color: "bg-red-50 border-red-200",
            badge: "bg-red-100 text-[#D32F2F]",
            steps: [
              "Do one full timed Reading test (60 min, all 3 passages) without any strategies.",
              "Mark it honestly. Write down your score and total time per passage.",
              "Categorise every wrong answer: vocabulary gap / misread question / ran out of time.",
              "The largest category is your priority for weeks 2 and 3.",
            ],
          },
          {
            week: "Week 2",
            title: "Drill — fix your specific weakness",
            color: "bg-amber-50 border-amber-200",
            badge: "bg-amber-100 text-amber-700",
            steps: [
              "If vocabulary: spend 20 min daily learning academic word families (AWL) in context, not lists.",
              "If misread questions: practise paraphrasing — take a question, write three versions of it, then find the answer.",
              "If timing: do single-passage drills with a strict 20-minute timer, stopping when it rings regardless of whether you've finished.",
              "End each session by re-reading the sections you got wrong — find the sentence that contained the answer and ask yourself why you missed it.",
            ],
          },
          {
            week: "Week 3",
            title: "Consolidate — apply strategies under pressure",
            color: "bg-green-50 border-green-200",
            badge: "bg-green-100 text-green-700",
            steps: [
              "Do a full timed test every two days, now applying the 20-20-20 rule and the question-type tactics from this guide.",
              "After each test, update your mistake log — are the same error types recurring?",
              "On non-test days, do one focused 20-minute passage drill on your weakest question type.",
              "Final two days: review your strongest passages, not your weakest — build confidence, not just awareness of mistakes.",
            ],
          },
        ].map((week) => (
          <div key={week.week} className={`border-2 rounded-2xl p-5 ${week.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${week.badge}`}>{week.week}</span>
              <h3 className="font-bold text-gray-900">{week.title}</h3>
            </div>
            <ul className="space-y-2">
              {week.steps.map((step, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="font-bold text-gray-400 shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Common mistakes ── */}
      <h2 id="common-mistakes">Habits That Keep Candidates Stuck at Band 6</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            mistake: "Reading the whole passage first",
            fix: "Read questions first, skim first sentences of paragraphs, then search for answers. You don't need to understand the whole text — just the sections being tested.",
          },
          {
            mistake: "Doing practice tests but not analysing them",
            fix: "A wrong answer you understand is worth more than a right answer you got lucky on. Spend as long analysing a test as taking it.",
          },
          {
            mistake: "Translating sentences into your first language",
            fix: "This doubles processing time. Train yourself to judge the meaning of sentences directly in English — even if it feels uncertain at first.",
          },
          {
            mistake: "Spending more time on harder passages",
            fix: "Passage 3 is harder by design. You will likely lose 1–2 more marks there regardless. Don't sacrifice Passage 1 or 2 accuracy by rushing them to leave time for Passage 3.",
          },
          {
            mistake: "Leaving blanks at the end",
            fix: "There is no negative marking in IELTS Reading. A guess is always better than a blank. Write something — even an educated guess based on the passage topic.",
          },
          {
            mistake: "Practising with non-IELTS reading material",
            fix: "IELTS Academic passages use a specific academic register, text length, and question format. Practise exclusively with Cambridge IELTS practice tests for accuracy of preparation.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="font-bold text-red-700 text-sm mb-1.5">✗ {item.mistake}</p>
            <p className="text-gray-700 text-sm">✓ {item.fix}</p>
          </div>
        ))}
      </div>

      {/* ── FAQ — AI Overview ── */}
      <h2 id="faq">Frequently Asked Questions About IELTS Reading</h2>
      <div className="space-y-4 my-6">
        {[
          {
            q: "How long should I spend on each IELTS Reading passage?",
            a: "Exactly 20 minutes per passage. Set a watch or phone alarm and move to the next passage when time is up, regardless of whether you've finished. Consistently practising this constraint is the fastest way to improve your timing.",
          },
          {
            q: "Should I read the passage or the questions first?",
            a: "Read the questions first. Skim the questions for 1–2 minutes before reading anything in the passage. This primes your brain to spot relevant information and prevents you from reading sections you'll never be tested on.",
          },
          {
            q: "Is there a difference between IELTS Academic and General Training Reading?",
            a: "Yes. Academic Reading uses three long, complex academic texts and is generally considered harder. General Training uses shorter texts (notices, workplace documents, longer general texts) and tends to be slightly more accessible, but the scoring is calibrated to reflect this difference.",
          },
          {
            q: "Can I write in the question booklet during the test?",
            a: "Yes. You can underline, circle, and annotate the passage and questions as much as you want. Most high-scoring candidates actively mark up their booklets. Your answers only go on the answer sheet.",
          },
          {
            q: "Why do I get the answer right but still transfer it wrong onto the answer sheet?",
            a: "Answer transfer errors are more common than most candidates realise. Allocate the last 2 minutes of each passage block to checking your transfer — not answering more questions. Spelling errors on the answer sheet are also marked wrong, so check carefully.",
          },
          {
            q: "How many practice tests should I do per week?",
            a: "Quality over quantity. Two or three full timed tests per week, analysed thoroughly, will improve your score faster than doing one test every day without reflection. If you're pressed for time, single-passage drills are a faster way to build specific skills.",
          },
        ].map((item) => (
          <div key={item.q} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-gray-50 font-semibold text-gray-900 text-sm">{item.q}</div>
            <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📖</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Practice reading with immediate scoring</h4>
            <p className="text-gray-700 text-sm">
              OpenIELTS Reading Practice gives you real IELTS-style passages with auto-grading and
              a band score estimate the moment you submit. Use it to apply the 20-20-20 rule and
              the question-type tactics in this guide — with instant feedback on where your time
              and accuracy are leaking.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
