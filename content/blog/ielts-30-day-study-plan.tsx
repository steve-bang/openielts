import Link from "next/link";

export default function Ielts30DayStudyPlanContent() {
  return (
    <div className="prose-content">

      {/* ── Lead ── */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        My student Rania booked her IELTS test with exactly 31 days left on the calendar. She needed
        Band 6.5 for a nursing registration in Australia and had been putting off the exam for almost
        two years. When she messaged me in a panic, I told her the same thing I now tell everyone in
        that situation: <strong>30 days is enough time to move one full band — if you use every day
        correctly.</strong> She sat the test 31 days later. She got 7.0. This is the exact plan we
        followed.
      </p>

      {/* ── Is 30 days realistic? ── */}
      <h2 id="is-30-days-enough">Is 30 Days Really Enough to Prepare for IELTS?</h2>
      <p>
        The honest answer is: it depends on where you&apos;re starting from. Here&apos;s a realistic
        expectation based on starting band score and a commitment of two hours per day:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#D32F2F] text-white">
              <th className="text-left p-3 rounded-tl-xl">Starting Band</th>
              <th className="text-left p-3">Realistic 30-Day Target</th>
              <th className="text-left p-3 rounded-tr-xl">What 30 Days Can Do</th>
            </tr>
          </thead>
          <tbody>
            {[
              { start: "Below 4.5", target: "5.0–5.5", what: "Build core grammar and vocabulary foundations; significant gains in Listening" },
              { start: "4.5–5.5", target: "6.0–6.5", what: "Strongest zone for rapid improvement — strategy and practice combine well" },
              { start: "5.5–6.5", target: "7.0–7.5", what: "Refine weak modules, sharpen exam technique, push LR and GRA scores" },
              { start: "6.5–7.5", target: "7.5–8.0", what: "Fine-tuning only — gains are possible but require very focused work on specific criteria" },
            ].map((row, i) => (
              <tr key={row.start} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-semibold text-[#D32F2F] border-b border-gray-100">{row.start}</td>
                <td className="p-3 font-bold text-gray-900 border-b border-gray-100">{row.target}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-1">The non-negotiable commitment</p>
        <p className="text-sm text-gray-700">
          This plan requires <strong>2 hours every day for 30 days</strong>. Not &ldquo;most
          days.&rdquo; Not &ldquo;when I have time.&rdquo; The consistency is what creates the
          improvement. If you can only commit to five days a week, spread the plan across 6 weeks
          instead and protect the structure.
        </p>
      </div>

      {/* ── Before you start ── */}
      <h2 id="before-you-start">Before Day 1: The 3 Things You Must Do First</h2>
      <p>
        The biggest mistake I see candidates make is starting to study before they know their
        actual weaknesses. You end up practising what you&apos;re already good at because it feels
        comfortable. These three steps take a total of about three hours and will save you weeks
        of wasted effort.
      </p>

      <div className="grid gap-4 my-6">
        {[
          {
            num: "1",
            title: "Take a full diagnostic test under real conditions",
            color: "bg-blue-50 border-blue-200",
            numBg: "bg-blue-600",
            desc: "Sit a complete IELTS practice test — all four modules, strict timing, no pausing, no looking things up. Use an official Cambridge IELTS book or a reliable free source. This is your baseline. Write down your estimated band for each module.",
            tip: "Don't panic about the results. A low score now means more room to grow. The point is to know exactly where you stand before you spend 30 days improving.",
          },
          {
            num: "2",
            title: "Identify your two weakest modules",
            color: "bg-purple-50 border-purple-200",
            numBg: "bg-purple-600",
            desc: "Look at your diagnostic scores and rank the four modules. Your two lowest scores will get the most attention in this plan. For most candidates, Writing is the hardest module to improve quickly, while Listening and Reading respond fastest to strategy practice.",
            tip: "Write this down: 'My weakest module is ___. My second weakest is ___.' Keep this visible during your 30 days.",
          },
          {
            num: "3",
            title: "Book your test now if you haven't already",
            color: "bg-green-50 border-green-200",
            numBg: "bg-green-600",
            desc: "Having a fixed exam date creates urgency that makes every study session feel purposeful. Candidates who prepare without a booked test tend to drift — they always have 'a bit more time.' The deadline is the motivator.",
            tip: "IELTS on Computer tests are available more frequently than paper-based tests in most countries. If your target date is in 30 days, check availability now.",
          },
        ].map((step) => (
          <div key={step.num} className={`border-2 ${step.color} rounded-2xl p-5`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 ${step.numBg} text-white rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0`}>
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{step.desc}</p>
                <div className="bg-white rounded-xl p-3 border border-gray-200">
                  <p className="text-xs font-bold text-gray-500 mb-1">Note</p>
                  <p className="text-xs text-gray-700 italic">{step.tip}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── The 4-week structure ── */}
      <h2 id="30-day-structure">The 30-Day Structure: Four Focused Weeks</h2>
      <p>
        Rather than studying all four modules every single day (which spreads your effort too thin),
        this plan uses a <strong>rotating weekly focus</strong>. Each week has a primary skill target
        while still maintaining daily exposure to all modules. This is how Rania went from Band 5.5
        to 7.0 — concentrated improvement, not scattered revision.
      </p>

      <div className="grid sm:grid-cols-4 gap-3 my-6">
        {[
          { week: "Week 1", focus: "Reading & Listening", color: "bg-blue-600", sub: "Strategy foundation — learn how to read the test, not just the content" },
          { week: "Week 2", focus: "Writing Deep Dive", color: "bg-[#D32F2F]", sub: "Task 1 + Task 2 structure, scoring criteria, timed practice" },
          { week: "Week 3", focus: "Speaking & Vocabulary", color: "bg-green-600", sub: "Build fluency, reduce hesitation, expand lexical range" },
          { week: "Week 4", focus: "Full Mock Tests & Refinement", color: "bg-purple-600", sub: "Simulate real exam conditions, identify remaining weak spots, sharpen timing" },
        ].map((w) => (
          <div key={w.week} className={`${w.color} text-white rounded-2xl p-4 text-center`}>
            <p className="text-xs font-bold opacity-75 uppercase tracking-wide">{w.week}</p>
            <p className="font-extrabold text-lg mt-1 mb-2">{w.focus}</p>
            <p className="text-xs opacity-90 leading-relaxed">{w.sub}</p>
          </div>
        ))}
      </div>

      {/* ── Week 1 ── */}
      <h2 id="week-1">Week 1: Reading & Listening Strategy (Days 1–7)</h2>
      <p>
        Most candidates approach Reading and Listening the same way they read for pleasure —
        absorbing every word. That is the wrong approach for IELTS. Week 1 is about building the
        specific test-taking habits that change your score immediately, before any new knowledge is
        added.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-left p-3 rounded-tl-xl">Day</th>
              <th className="text-left p-3">Focus</th>
              <th className="text-left p-3 rounded-tr-xl">Task (2 hours)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Day 1", focus: "Reading: Skimming & Scanning", task: "Study the difference between skimming (gist) and scanning (specific info). Practise on 1 Reading passage — skim first, then answer questions using only scanning. Check answers and analyse where you went wrong." },
              { day: "Day 2", focus: "Listening: Prediction Technique", task: "Before each section starts, spend the 30 seconds of reading time predicting the type of answer needed (number, name, noun, adjective). Practise 1 full Listening test. Review transcript for every wrong answer." },
              { day: "Day 3", focus: "Reading: Question Types", task: "Study True/False/Not Given and Matching Headings — the two types most candidates get wrong. Practise with 1 passage focusing only on these types. Review the logic of TFNG with a model explanation." },
              { day: "Day 4", focus: "Listening: Note Completion & Forms", task: "Practise Section 1 and Section 2 (most accessible). Focus on spelling — one spelling error means no mark. Practise writing while listening simultaneously." },
              { day: "Day 5", focus: "Reading: Timing", task: "Do a full 3-passage Reading test, timed at 60 minutes. Apply the 20-minute-per-passage rule. Do not spend more than 90 seconds on any single question. Review scores and identify which passage lost you the most time." },
              { day: "Day 6", focus: "Listening: Sections 3 & 4", task: "These are the harder sections — academic discussion and lecture. Focus on recognising when an answer is coming by listening for signpost language ('on the other hand', 'the main reason is'). Practise one full test." },
              { day: "Day 7", focus: "Review + Mini-mock", task: "30-minute Reading section (1 passage, timed). 30-minute Listening (1 section, timed). 60 minutes: review all errors from Days 1–6. Write down the 3 question types you are weakest on — target these in Week 3." },
            ].map((row, i) => (
              <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                <td className="p-3 font-bold text-blue-700 border-b border-gray-100 whitespace-nowrap">{row.day}</td>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Week 2 ── */}
      <h2 id="week-2">Week 2: Writing Deep Dive (Days 8–14)</h2>
      <p>
        Writing is the module where most candidates lose the most marks — and also the module where
        structured practice produces the most visible improvement in a short time. Week 2 is
        entirely writing-focused, but with specific daily goals rather than &ldquo;just write an
        essay.&rdquo;
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#D32F2F] text-white">
              <th className="text-left p-3 rounded-tl-xl">Day</th>
              <th className="text-left p-3">Focus</th>
              <th className="text-left p-3 rounded-tr-xl">Task (2 hours)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Day 8", focus: "Task 1: Understanding the criteria", task: "Read the official Band 7 descriptors for Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range. Analyse one Band 7 model answer and identify where each criterion is met." },
              { day: "Day 9", focus: "Task 1: The overview paragraph", task: "Practise writing overviews only — for 5 different graphs. No introduction, no data. Just 2–3 sentences that capture the main trend. Compare to model overviews. The overview is the single biggest difference between Band 6 and Band 7." },
              { day: "Day 10", focus: "Task 1: Full response, timed", task: "Write a complete Task 1 in 20 minutes. Introduction → Overview → Body 1 → Body 2. 170–190 words. Compare to a model answer. Mark your own response against the four criteria honestly." },
              { day: "Day 11", focus: "Task 2: Understanding question types", task: "Study the 5 main Task 2 question types: Opinion, Discussion, Problem-Solution, Advantage-Disadvantage, Two-part. For each, practise identifying the type and stating the correct essay structure (you should not write the essay yet)." },
              { day: "Day 12", focus: "Task 2: Introduction and thesis", task: "The introduction and the thesis sentence determine your Task Response score. Practise writing 6 introductions for 6 different prompts (10 minutes each). Focus: paraphrase the prompt, then state your position clearly." },
              { day: "Day 13", focus: "Task 2: Full essay, timed", task: "Write a complete Task 2 essay in 40 minutes. 270–290 words minimum. Introduction → Body 1 → Body 2 → Conclusion. Compare to a model answer. Identify: did you answer the specific question asked?" },
              { day: "Day 14", focus: "Full Writing test, timed", task: "Task 1 (20 min) + Task 2 (40 min) back to back. No breaks. This is the real exam format. Review both responses against the marking criteria. Write down 1 specific improvement target for Task 1 and 1 for Task 2." },
            ].map((row, i) => (
              <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-red-50"}>
                <td className="p-3 font-bold text-[#D32F2F] border-b border-gray-100 whitespace-nowrap">{row.day}</td>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Week 3 ── */}
      <h2 id="week-3">Week 3: Speaking & Vocabulary (Days 15–21)</h2>
      <p>
        Speaking is the module that improves most dramatically when you actually open your mouth
        and practise — yet it&apos;s the one most candidates do entirely in their head. Week 3 is
        loud. You will speak out loud every single day, even if it feels uncomfortable.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="text-left p-3 rounded-tl-xl">Day</th>
              <th className="text-left p-3">Focus</th>
              <th className="text-left p-3 rounded-tr-xl">Task (2 hours)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Day 15", focus: "Speaking Part 1: Fluency", task: "Record yourself answering 10 Part 1 questions. Listen back. Count how many times you hesitate with 'um', 'uh', or long pauses. These are your fluency gaps. Prepare extended answers (3–4 sentences) for 10 common topics: work, study, hometown, hobbies, family." },
              { day: "Day 16", focus: "Speaking Part 2: Structure", task: "Practise the 1-minute preparation technique. For each cue card: use the 1 minute to jot 4 bullet points (one per bullet point on the card + one extra detail). Speak for the full 2 minutes. Practise 3 different cue cards." },
              { day: "Day 17", focus: "Speaking Part 3: Abstract Discussion", task: "Part 3 requires opinions on complex social topics. Practise giving 3-part answers: position + reason + example. Record 5 Part 3 questions on topics like technology, education, environment. Are your answers specific and extended?" },
              { day: "Day 18", focus: "Vocabulary: Topic word banks", task: "Build a spoken vocabulary bank for 3 IELTS topics (e.g. environment, technology, education). For each topic: 5 nouns, 5 verbs, 5 adjectives. Practise saying them aloud, then use each in a spoken sentence." },
              { day: "Day 19", focus: "Full mock Speaking test", task: "Simulate all 3 Parts back to back, timed: Part 1 (4–5 min), Part 2 (3–4 min), Part 3 (4–5 min). Record yourself. Listen back with the examiner's criteria in mind: fluency, vocabulary, grammar, pronunciation." },
              { day: "Day 20", focus: "Pronunciation & Linking", task: "IELTS doesn't test accent — it tests clarity and connected speech. Practise linking words in sentences ('turn it off' → 'turnit off'). Shadow a native English podcast or video for 30 minutes, then continue Speaking practice." },
              { day: "Day 21", focus: "Weak module catch-up", task: "Return to your weakest module from your Week 1 diagnostic. Spend the full 2 hours on your lowest-scoring area only. This is where targeted preparation pays off most in the final two weeks." },
            ].map((row, i) => (
              <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                <td className="p-3 font-bold text-green-700 border-b border-gray-100 whitespace-nowrap">{row.day}</td>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Week 4 ── */}
      <h2 id="week-4">Week 4: Mock Tests & Final Preparation (Days 22–30)</h2>
      <p>
        Week 4 is about one thing: performing under exam conditions. The worst thing you can do in
        the final week is keep studying new content. Your job now is to consolidate what you know
        and make sure your exam-day execution matches your preparation.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="text-left p-3 rounded-tl-xl">Days</th>
              <th className="text-left p-3">Focus</th>
              <th className="text-left p-3 rounded-tr-xl">Task</th>
            </tr>
          </thead>
          <tbody>
            {[
              { day: "Days 22–23", focus: "Full Mock Test #1", task: "Complete a full 4-module mock test in one sitting (approx. 3 hours). Strict conditions: no phone, no breaks beyond the real exam schedule. Score everything and identify your top 3 remaining weak points." },
              { day: "Days 24–25", focus: "Targeted Fix Sessions", task: "Focus exclusively on the 3 weak points you identified in Mock Test #1. If it was Reading timing — do 5 timed single-passage drills. If it was Writing Task 2 coherence — write 3 focused body paragraphs. Targeted repair, not general revision." },
              { day: "Days 26–27", focus: "Full Mock Test #2", task: "Second full mock test under exam conditions. Compare your scores to Mock Test #1. Are you improving in your target areas? If scores dropped, revisit days 24–25 material. If scores improved, note what changed and keep doing it." },
              { day: "Day 28", focus: "Light Review", task: "No new material. Review your vocabulary notebook and key strategy notes only. 90 minutes maximum. Rest is part of preparation." },
              { day: "Day 29", focus: "Exam Day Simulation", task: "Wake up at the same time your exam will start. Eat the same meal. Sit quietly for 30 minutes to simulate the exam waiting period. Do one short practice activity (15 min) for each module to stay warm — not to exhaust yourself." },
              { day: "Day 30", focus: "Exam Day", task: "Arrive early. Bring your ID and registration confirmation. You have done the work. Trust your preparation. The score you trained for is within reach." },
            ].map((row, i) => (
              <tr key={row.day} className={i % 2 === 0 ? "bg-white" : "bg-purple-50"}>
                <td className="p-3 font-bold text-purple-700 border-b border-gray-100 whitespace-nowrap">{row.day}</td>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Daily schedule ── */}
      <h2 id="daily-schedule">The Optimal Daily 2-Hour Schedule</h2>
      <p>
        How you structure your 2 hours matters almost as much as what you study. The brain retains
        information better with short, intense sessions than long, unfocused ones. Here is the daily
        structure I recommend to all my students:
      </p>

      <div className="grid sm:grid-cols-4 gap-3 my-6">
        {[
          { time: "0–15 min", label: "Warm-up", desc: "Review vocabulary from the day before. Try to recall without looking. This spaced repetition is the fastest way to retain new words.", color: "bg-blue-50 border-blue-200", timeColor: "text-blue-600" },
          { time: "15–75 min", label: "Main Practice", desc: "The week's primary focus (Reading, Listening, Writing, or Speaking). Timed, focused, no distractions.", color: "bg-red-50 border-[#D32F2F]", timeColor: "text-[#D32F2F]" },
          { time: "75–100 min", label: "Error Analysis", desc: "Go through every wrong answer. Don't just note what was wrong — understand why. This is where real improvement happens.", color: "bg-green-50 border-green-200", timeColor: "text-green-600" },
          { time: "100–120 min", label: "Vocabulary", desc: "Add 5 new words to your notebook with collocations and example sentences. Review 10 words from earlier in the week.", color: "bg-purple-50 border-purple-200", timeColor: "text-purple-600" },
        ].map((block) => (
          <div key={block.label} className={`border-2 ${block.color} rounded-2xl p-4`}>
            <div className={`text-sm font-extrabold ${block.timeColor} mb-1`}>{block.time}</div>
            <div className="font-bold text-gray-900 text-sm mb-2">{block.label}</div>
            <p className="text-xs text-gray-600 leading-relaxed">{block.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Mistakes ── */}
      <h2 id="common-mistakes">The 5 Mistakes That Waste Your 30 Days</h2>

      <div className="grid sm:grid-cols-1 gap-4 my-6">
        {[
          {
            mistake: "Studying for 4 hours on weekends instead of 2 hours daily",
            why: "Language learning requires consistent daily exposure. A 4-hour weekend session does not replace five 2-hour weekday sessions. Fatigue after hour 2 drops your retention sharply, and the two-day gap between sessions means your brain partially resets.",
            fix: "2 hours every day, including weekends. If you miss a day, do not try to 'make it up' the next day — just continue the plan.",
          },
          {
            mistake: "Doing practice tests without reviewing errors",
            why: "Completing 10 Reading tests without understanding why you got answers wrong just reinforces the same mistakes. I have seen candidates score Band 5.5 in week 1 and still score Band 5.5 after 30 tests because they never analysed their errors.",
            fix: "Spend at least 30% of every practice session on error analysis. 'What did I get wrong? Why? What should I have done?'",
          },
          {
            mistake: "Avoiding your weakest module",
            why: "It is human nature to practise what we are already good at — it feels productive and feels good. But your overall IELTS band is limited by your weakest module. If you score Band 8 in Listening and Band 5 in Writing, your overall is around Band 6.5.",
            fix: "Your weakest module gets the most time, not the least. That is where your next half-band is hiding.",
          },
          {
            mistake: "Using only one resource or method",
            why: "Relying on a single coursebook means you adapt to its style, not to the variety of real IELTS content. I have seen candidates who scored brilliantly on Cambridge Book 14 tests but fell apart in the actual exam because the content felt unfamiliar.",
            fix: "Use at least 2–3 different sources: official Cambridge books, reliable online tests, and ideally AI-based platforms that provide instant feedback.",
          },
          {
            mistake: "Cramming new content the week before the exam",
            why: "The final week is not for learning new things. It is for consolidating what you already know. Cramming new grammar rules or vocabulary lists 3 days before the exam adds anxiety without adding meaningful fluency.",
            fix: "From Day 22 onwards, no new content — only mock tests and targeted error review. Trust the 30 days of preparation you have done.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-[#D32F2F] font-bold text-sm">✗</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">{item.mistake}</p>
                <p className="text-sm text-gray-700 mb-2 leading-relaxed"><strong>Why this hurts:</strong> {item.why}</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-sm text-green-800"><strong>Fix:</strong> {item.fix}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Rania's results ── */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 my-8 text-white">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Student Story</p>
        <p className="text-lg font-bold mb-3">
          &ldquo;I went from 5.5 to 7.0 in 31 days. Here is what actually made the difference.&rdquo;
        </p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Rania followed this exact plan. Her weakest module was Writing — she had been getting
          Band 5.0 consistently. In Week 2, she wrote a Task 2 essay every day and compared every
          single one to a model answer. By Day 14, she could identify her own mistakes before
          checking. In the exam, she scored Band 7.0 in Writing — her biggest improvement of any
          module. &ldquo;The daily comparison was the thing,&rdquo; she told me afterwards.
          &ldquo;I stopped just writing and started actually understanding why some essays work and
          mine didn&apos;t.&rdquo;
        </p>
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { module: "Listening", before: "6.0", after: "6.5" },
            { module: "Reading", before: "6.5", after: "7.0" },
            { module: "Writing", before: "5.0", after: "7.0" },
            { module: "Speaking", before: "5.5", after: "7.0" },
          ].map((m) => (
            <div key={m.module} className="bg-white/10 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">{m.module}</p>
              <p className="text-sm"><span className="text-gray-400 line-through">{m.before}</span> → <span className="text-green-400 font-bold">{m.after}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-4 my-6">
        {[
          {
            q: "Can I prepare for IELTS in 30 days with no prior preparation?",
            a: "Yes, but your realistic target depends heavily on your current English level. If you are already using English regularly at work or study, 30 days of focused IELTS preparation can yield a full band improvement. If you are at beginner or elementary level, 30 days is likely insufficient — you would need longer to build the language foundation before IELTS strategy can be effectively applied. The plan above is most effective for candidates currently at Band 4.5 or above.",
          },
          {
            q: "How many hours a day should I study for IELTS in 30 days?",
            a: "Two hours per day of focused, structured practice is the recommended minimum for this plan. Research on language learning shows that quality and consistency matter more than sheer volume — four hours of distracted studying is less effective than two hours of concentrated error analysis and deliberate practice. If you have three hours available, add a 30-minute reading session in English (news articles, academic texts) as a passive supplement.",
          },
          {
            q: "Which IELTS module is easiest to improve in 30 days?",
            a: "Listening typically shows the fastest score gains in a short preparation period, because improvements in test strategy (prediction, note-taking, understanding the question format) produce immediate results. Reading also improves quickly once timing strategies are applied. Writing is the slowest to improve because it requires developing skills in multiple criteria simultaneously — but focused daily practice in Week 2 can produce a significant jump, especially if your baseline weakness is structural.",
          },
          {
            q: "Should I study all four modules every day or focus on one at a time?",
            a: "This plan uses a rotating weekly focus rather than studying all four modules every day. The reasoning: concentrated effort on one skill produces faster gains than spreading attention across four. However, you should touch the other modules lightly throughout the week — the daily vocabulary review and the weekly mini-mock keep all four active. In Week 4, switch to full mock tests that cover all modules equally.",
          },
          {
            q: "What is the best way to practise IELTS Speaking when studying alone?",
            a: "Record yourself. This is non-negotiable. Most candidates who study alone think they are speaking fluently until they hear a recording of themselves and realise they are hesitating every three words or repeating the same vocabulary. Record your Part 1, 2, and 3 answers, listen back critically, and identify: fluency gaps (hesitation, repetition), vocabulary limitations (do you reach for the same 20 words?), and pronunciation clarity (can someone who doesn't know you understand every word?). Aim to record at least one full mock Speaking test per week.",
          },
          {
            q: "Can I use IELTS preparation apps instead of books for a 30-day plan?",
            a: "Apps can supplement this plan effectively, but should not replace timed, exam-condition practice with official materials. The IELTS exam has a very specific format and question logic that is best learned through official Cambridge IELTS books (available as PDFs or physical books). Apps are excellent for daily vocabulary review, speaking practice tools, and grammar exercises. For mock tests in Weeks 1 and 4, use official or highly reliable sources — not app-generated questions, which can differ significantly from real exam difficulty.",
          },
        ].map(({ q, a }) => (
          <div key={q} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">{q}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-2xl p-8 text-white text-center my-8">
        <h2 className="text-2xl font-extrabold mb-3 text-white">Your 30 days start now</h2>
        <p className="text-red-100 mb-6 max-w-xl mx-auto">
          OpenIELTS has free practice tests for all four modules — Reading, Listening, Writing,
          and Speaking. Use them for your Week 1 diagnostic and your Week 4 mock tests. No sign-up
          required to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/practice"
            className="inline-block bg-white text-[#D32F2F] font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition shadow-md"
          >
            Start Your Diagnostic Test
          </Link>
          <Link
            href="/blog"
            className="inline-block bg-white/20 border border-white/40 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/30 transition"
          >
            Read More IELTS Guides
          </Link>
        </div>
      </div>

    </div>
  );
}
