export default function IeltsVocabularyBand7Content() {
  return (
    <div className="prose-content">

      {/* ── Lead ── */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        I spent three months before my IELTS test memorising vocabulary lists — hundreds of
        &ldquo;advanced&rdquo; words I found on random websites. When I got my results back, my
        Lexical Resource score was Band 5.5. Not because I didn&apos;t know enough words. Because I
        was learning the <em>wrong</em> words, and I was learning them the wrong way. What I
        needed wasn&apos;t a longer list. I needed to understand how IELTS actually tests
        vocabulary — and once I did, everything changed.
      </p>

      {/* ── How IELTS tests vocabulary ── */}
      <h2 id="how-ielts-tests-vocabulary">How IELTS Actually Tests Your Vocabulary</h2>
      <p>
        Most candidates think vocabulary means &ldquo;knowing lots of big words.&rdquo; IELTS
        examiners think about it very differently. The official marking criterion is called{" "}
        <strong>Lexical Resource</strong>, and it is assessed across four modules — but it means
        something specific in each one:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#D32F2F] text-white">
              <th className="text-left p-3 rounded-tl-xl">Module</th>
              <th className="text-left p-3">What &ldquo;Lexical Resource&rdquo; Means</th>
              <th className="text-left p-3 rounded-tr-xl">What Gets You to Band 7</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                module: "Writing Task 1",
                means: "Accurate vocabulary for describing trends and data",
                band7: "Varied trend verbs, precise quantifiers, paraphrasing of task language",
              },
              {
                module: "Writing Task 2",
                means: "Topic-specific vocabulary, collocations, idiomatic range",
                band7: "Topic-relevant word families, accurate collocations, minimal repetition",
              },
              {
                module: "Speaking",
                means: "Fluent use of a wide range without hesitation or paraphrasing to cover gaps",
                band7: "Discusses abstract topics without noticeably searching for words",
              },
              {
                module: "Reading & Listening",
                means: "Understanding paraphrase — the same idea expressed in different words",
                band7: "Recognises synonyms and paraphrases at speed; not thrown by unfamiliar words",
              },
            ].map((row, i) => (
              <tr key={row.module} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-semibold text-[#D32F2F] border-b border-gray-100">{row.module}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.means}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.band7}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-5 my-6">
        <p className="font-bold text-purple-800 mb-1">The key insight that changed everything for me</p>
        <p className="text-sm text-gray-700">
          Band 7 vocabulary is not about impressing the examiner with rare or obscure words. It is
          about using a <strong>wider range of everyday academic vocabulary accurately</strong> —
          the right word in the right context, with the right collocation. A common word used
          correctly outscores a rare word used wrongly every time.
        </p>
      </div>

      {/* ── Word families ── */}
      <h2 id="word-families">Master Word Families, Not Word Lists</h2>
      <p>
        The single most efficient vocabulary strategy for IELTS is learning{" "}
        <strong>word families</strong> — the noun, verb, adjective, and adverb forms of one root
        word. This multiplies your effective vocabulary four times for the same learning effort,
        and it directly feeds the Grammatical Range criterion by giving you flexibility in sentence
        construction.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3 rounded-tl-xl">Noun</th>
              <th className="text-left p-3">Verb</th>
              <th className="text-left p-3">Adjective</th>
              <th className="text-left p-3 rounded-tr-xl">Adverb / Other form</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["environment", "affect / pollute / sustain", "environmental / sustainable", "environmentally"],
              ["economy", "economise / develop", "economic / economical", "economically"],
              ["technology", "modernise / innovate", "technological / innovative", "technologically"],
              ["education", "educate / instruct", "educational / academic", "educationally"],
              ["society", "socialise / integrate", "social / societal", "socially"],
              ["significance", "signify / contribute", "significant / considerable", "significantly"],
              ["development", "develop / progress", "developed / developing", "progressively"],
              ["employment", "employ / recruit", "employed / unemployed", "employable"],
            ].map((row, i) => (
              <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td key={j} className={`p-3 border-b border-gray-100 ${j === 0 ? "font-semibold text-purple-700" : "text-gray-700"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Each row in that table represents one &ldquo;vocabulary point&rdquo; — but it gives you
        four or more usable forms. In a Task 2 essay about education, you might write:{" "}
        <em>&ldquo;Governments should invest in educational infrastructure because access to{" "}
        quality education determines social mobility.&rdquo;</em> That one sentence uses three
        forms from the same family.
      </p>

      {/* ── Topic vocabulary ── */}
      <h2 id="topic-vocabulary">Essential Vocabulary by IELTS Topic Area</h2>
      <p>
        IELTS uses a recurring set of about 12 core topic areas. Knowing 20–30 high-quality words
        and collocations per topic is far more valuable than knowing 200 random words. Here are
        the most frequently tested topics with key vocabulary and the collocations examiners
        actually reward:
      </p>

      <div className="grid gap-5 my-6">
        {[
          {
            topic: "Environment & Climate",
            color: "bg-green-50 border-green-200",
            headerColor: "text-green-700",
            tagColor: "bg-green-100 text-green-700",
            words: [
              { word: "carbon footprint", use: "noun phrase — your personal CO₂ contribution" },
              { word: "renewable energy", use: "noun phrase — collocates with 'source', 'transition to'" },
              { word: "biodiversity", use: "noun — use with 'loss of', 'protect', 'threaten'" },
              { word: "mitigate", use: "verb — 'mitigate the effects of climate change'" },
              { word: "unsustainable", use: "adj — 'unsustainable levels of consumption'" },
              { word: "ecological", use: "adj — 'ecological damage', 'ecological balance'" },
              { word: "greenhouse gas emissions", use: "noun phrase — the key collocation in this topic" },
            ],
          },
          {
            topic: "Technology & Innovation",
            color: "bg-blue-50 border-blue-200",
            headerColor: "text-blue-700",
            tagColor: "bg-blue-100 text-blue-700",
            words: [
              { word: "artificial intelligence", use: "noun phrase — use with 'driven by', 'powered by'" },
              { word: "automate", use: "verb — 'automate routine tasks', 'automated system'" },
              { word: "digital divide", use: "noun phrase — inequality in technology access" },
              { word: "disruptive", use: "adj — 'disruptive technology', 'disruptive innovation'" },
              { word: "surveillance", use: "noun — 'government surveillance', 'surveillance capitalism'" },
              { word: "dependency", use: "noun — 'over-dependency on technology'" },
              { word: "accelerate", use: "verb — 'accelerate development', 'rapidly accelerating'" },
            ],
          },
          {
            topic: "Health & Medicine",
            color: "bg-red-50 border-red-200",
            headerColor: "text-red-700",
            tagColor: "bg-red-100 text-red-700",
            words: [
              { word: "sedentary lifestyle", use: "noun phrase — key collocation for obesity/health topics" },
              { word: "preventable", use: "adj — 'preventable diseases', 'entirely preventable'" },
              { word: "obesity epidemic", use: "noun phrase — very common IELTS collocation" },
              { word: "mental health", use: "noun phrase — use with 'awareness', 'crisis', 'stigma'" },
              { word: "life expectancy", use: "noun phrase — 'increase/reduce life expectancy'" },
              { word: "accessible", use: "adj — 'accessible healthcare', 'universally accessible'" },
              { word: "chronic", use: "adj — 'chronic disease', 'chronic stress'" },
            ],
          },
          {
            topic: "Education",
            color: "bg-amber-50 border-amber-200",
            headerColor: "text-amber-700",
            tagColor: "bg-amber-100 text-amber-700",
            words: [
              { word: "curriculum", use: "noun — 'national curriculum', 'broaden the curriculum'" },
              { word: "extracurricular", use: "adj — 'extracurricular activities', key for this topic" },
              { word: "literacy", use: "noun — 'digital literacy', 'financial literacy'" },
              { word: "tuition", use: "noun — 'tuition fees', 'private tuition'" },
              { word: "rote learning", use: "noun phrase — memorisation without understanding" },
              { word: "holistic", use: "adj — 'holistic education', 'holistic approach'" },
              { word: "employability", use: "noun — 'improve graduate employability'" },
            ],
          },
          {
            topic: "Society & Urbanisation",
            color: "bg-purple-50 border-purple-200",
            headerColor: "text-purple-700",
            tagColor: "bg-purple-100 text-purple-700",
            words: [
              { word: "urbanisation", use: "noun — 'rapid urbanisation', 'urban sprawl'" },
              { word: "infrastructure", use: "noun — 'strain on infrastructure', 'public infrastructure'" },
              { word: "inequality", use: "noun — 'income inequality', 'widen/narrow the gap'" },
              { word: "social cohesion", use: "noun phrase — community bonds" },
              { word: "gentrification", use: "noun — displacement of lower-income residents by rising costs" },
              { word: "migration", use: "noun — 'rural-urban migration', 'economic migration'" },
              { word: "ageing population", use: "noun phrase — very common IELTS collocation" },
            ],
          },
          {
            topic: "Work & Economy",
            color: "bg-indigo-50 border-indigo-200",
            headerColor: "text-indigo-700",
            tagColor: "bg-indigo-100 text-indigo-700",
            words: [
              { word: "gig economy", use: "noun phrase — freelance / short-term contract work" },
              { word: "productivity", use: "noun — 'boost/reduce productivity', 'workforce productivity'" },
              { word: "remote working", use: "noun phrase — use with 'trend toward', 'shift to'" },
              { word: "entrepreneurship", use: "noun — 'encourage entrepreneurship', 'startup culture'" },
              { word: "wage gap", use: "noun phrase — difference in earnings between groups" },
              { word: "automation", use: "noun — 'job displacement through automation'" },
              { word: "sustainable growth", use: "noun phrase — economic expansion without harm" },
            ],
          },
        ].map((topic) => (
          <div key={topic.topic} className={`border-2 ${topic.color} rounded-2xl p-5`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${topic.tagColor}`}>
                {topic.topic}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {topic.words.map((w) => (
                <div key={w.word} className="bg-white rounded-xl p-3 border border-gray-100">
                  <p className={`font-bold text-sm ${topic.headerColor} mb-0.5`}>{w.word}</p>
                  <p className="text-xs text-gray-600">{w.use}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Collocations ── */}
      <h2 id="collocations">Why Collocations Are More Important Than Single Words</h2>
      <p>
        A <strong>collocation</strong> is a pair or group of words that native speakers naturally
        use together. Getting collocations right is one of the fastest ways to push from Band 6 to
        Band 7 in Lexical Resource — because correct collocations signal genuine fluency, while
        wrong ones (even with correct grammar) signal a gap in your language exposure.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-3">Common collocation errors vs. natural English:</p>
        <div className="space-y-3">
          {[
            { wrong: "make a crime", right: "commit a crime" },
            { wrong: "do a decision", right: "make a decision" },
            { wrong: "a strong rain", right: "heavy rain" },
            { wrong: "solve a problem deeply", right: "address / tackle a problem effectively" },
            { wrong: "the technology is very advanced", right: "cutting-edge / state-of-the-art technology" },
            { wrong: "raise awareness about the problem", right: "raise awareness of the issue (not 'about')" },
          ].map(({ wrong, right }) => (
            <div key={wrong} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="text-sm text-red-600 line-through">{wrong}</span>
              <span className="hidden sm:inline text-gray-400">→</span>
              <span className="text-sm text-green-700 font-semibold">{right}</span>
            </div>
          ))}
        </div>
      </div>

      <p>
        The best way to learn collocations is not from a list — it is from reading. When you
        encounter a new word, search for it in context: what verb does it go with? What adjective
        typically precedes it? What preposition follows it? Write down the full phrase, not just
        the word.
      </p>

      {/* ── Paraphrase ── */}
      <h2 id="paraphrase-power">The Paraphrase Skill That Boosts All Four Modules</h2>
      <p>
        Paraphrasing — expressing the same idea in different words — is tested in every single
        IELTS module. In Reading and Listening, answers are usually paraphrases of the question
        language. In Writing, paraphrasing the task prompt is mandatory. In Speaking, being able
        to rephrase when the examiner asks you to clarify signals strong Lexical Resource.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            label: "Replace the noun",
            original: "The number of people using smartphones has increased.",
            paraphrase: "The proportion of individuals owning mobile devices has grown.",
          },
          {
            label: "Change the sentence structure",
            original: "Many experts believe technology causes social isolation.",
            paraphrase: "Social isolation is widely attributed to technological overuse by leading researchers.",
          },
          {
            label: "Use a synonym phrase",
            original: "The government should invest in education.",
            paraphrase: "Authorities have a responsibility to allocate funding toward the education sector.",
          },
          {
            label: "Use a different word family form",
            original: "We need to solve this environmental problem.",
            paraphrase: "Effective environmental solutions require urgent prioritisation.",
          },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">{item.label}</p>
            <p className="text-sm text-gray-500 italic mb-1">&ldquo;{item.original}&rdquo;</p>
            <p className="text-sm text-gray-800">&ldquo;{item.paraphrase}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* ── Academic vocab ── */}
      <h2 id="academic-word-list">The 30 Most Useful Academic Words for IELTS Writing</h2>
      <p>
        The Academic Word List (AWL) was developed at Victoria University of Wellington and
        identifies the most frequently used words across academic texts. These words appear
        constantly in IELTS Writing and Reading. Master these 30 and their collocations — they
        appear in almost every academic essay topic:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-6">
        {[
          { word: "albeit", note: "although — formal contrast" },
          { word: "attribute (to)", note: "link a cause to an effect" },
          { word: "constitute", note: "make up / form" },
          { word: "controversial", note: "sparks debate" },
          { word: "convention", note: "accepted practice or norm" },
          { word: "diverse", note: "varied; 'diverse range of'" },
          { word: "fluctuate", note: "rise and fall irregularly" },
          { word: "fundamental", note: "basic and essential" },
          { word: "generate", note: "produce / create" },
          { word: "implications", note: "possible consequences" },
          { word: "incentive", note: "motivation or reward" },
          { word: "inherent", note: "naturally existing within" },
          { word: "integral", note: "essential to the whole" },
          { word: "justify", note: "give reasons to support" },
          { word: "marginalise", note: "exclude from mainstream" },
          { word: "mitigate", note: "reduce the severity of" },
          { word: "monitor", note: "observe and check over time" },
          { word: "notion", note: "concept or idea" },
          { word: "persist", note: "continue despite difficulty" },
          { word: "prevalent", note: "widespread; common" },
          { word: "prioritise", note: "treat as most important" },
          { word: "prohibit", note: "officially ban or forbid" },
          { word: "reinforce", note: "strengthen an idea or structure" },
          { word: "sector", note: "part of an economy or society" },
          { word: "substantial", note: "large in size or importance" },
          { word: "tackle", note: "deal with a problem actively" },
          { word: "undermine", note: "weaken gradually" },
          { word: "unprecedented", note: "never seen before" },
          { word: "urban", note: "relating to cities" },
          { word: "viable", note: "practical and workable" },
        ].map(({ word, note }) => (
          <div key={word} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
            <p className="font-bold text-sm text-[#D32F2F]">{word}</p>
            <p className="text-xs text-gray-500 mt-0.5">{note}</p>
          </div>
        ))}
      </div>

      {/* ── Mistakes ── */}
      <h2 id="vocabulary-mistakes">5 Vocabulary Mistakes That Kill Your Lexical Resource Score</h2>

      <div className="grid sm:grid-cols-1 gap-4 my-6">
        {[
          {
            num: "1",
            mistake: "Using impressive-sounding words you don't fully understand",
            detail: "Examiners see this constantly. A student writes 'the ubiquitous phenomenon of technological proliferation has engendered a paradigmatic shift' — using four big words, all slightly wrong. This scores lower than 'technology has fundamentally changed the way we live.' Accuracy always beats ambition.",
            fix: "Only use a word if you know its meaning, its collocations, and its register. If in doubt, use a simpler word correctly.",
          },
          {
            num: "2",
            mistake: "Repeating the same 5–10 words throughout your essay",
            detail: "If 'important', 'big', 'good', and 'problem' appear six times each in your Task 2 essay, your Lexical Resource score is capped. Examiners look for range. Synonyms aren't just stylistic — they are a marking criterion.",
            fix: "For each of your go-to words, prepare three alternatives. 'Important' → 'crucial / vital / fundamental'. 'Problem' → 'challenge / issue / concern'. Rotate them.",
          },
          {
            num: "3",
            mistake: "Translating idioms from your first language",
            detail: "Every language has idioms that don't translate. When candidates write 'the government should kill two birds with one stone' or 'this issue is the tip of the iceberg' — these exist in English but often feel forced in academic writing. More problematic are expressions that simply don't exist in English at all.",
            fix: "Stick to Academic English idioms and phrases you've read in IELTS model answers or academic texts. Avoid translating your native idioms.",
          },
          {
            num: "4",
            mistake: "Using informal vocabulary in Writing",
            detail: "'Kids', 'a lot of', 'really', 'stuff', 'things', 'get' — these are perfectly natural in Speaking, but they cap your Lexical Resource in Writing at around Band 5–6. Academic writing requires a different register.",
            fix: "'Kids' → 'children / young people'. 'A lot of' → 'a significant number of / the majority of'. 'Really important' → 'critically important / of paramount importance'.",
          },
          {
            num: "5",
            mistake: "Memorising and recycling fixed phrases",
            detail: "Many test preparation courses teach fixed openers like 'In today's modern society, it is widely believed that...' or 'It goes without saying that...'. Examiners recognise these immediately. They are not paraphrases — they are templates. And they do not demonstrate Lexical Resource.",
            fix: "Write your own introduction from the prompt. Practise expressing the same idea in multiple different ways rather than memorising one fixed version.",
          },
        ].map((item) => (
          <div key={item.num} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D32F2F] text-white rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0">
                {item.num}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">{item.mistake}</p>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{item.detail}</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-xs font-bold text-green-700 mb-1">Fix:</p>
                  <p className="text-sm text-gray-700">{item.fix}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Learning method ── */}
      <h2 id="how-to-learn-vocabulary">The Most Effective Way to Learn and Remember IELTS Vocabulary</h2>
      <p>
        Learning a word once means forgetting it within 24 hours. Research on spaced repetition
        shows you need to encounter a word in context at least 6–7 times before it becomes part
        of your active vocabulary — the vocabulary you can actually <em>produce</em> under exam
        pressure, not just recognise when you see it.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        {[
          {
            step: "Step 1",
            title: "Learn in context, not in isolation",
            color: "bg-blue-600",
            desc: "When you encounter a new word in a reading passage or listening transcript, record the full sentence it appeared in — not just the word. Context tells you how the word is actually used.",
            example: "Don't record: 'prevalent = common'\nRecord: 'Obesity is increasingly prevalent in developed countries' (prevalent + in/among + noun group)",
          },
          {
            step: "Step 2",
            title: "Build a 'Use it or lose it' notebook",
            color: "bg-[#D32F2F]",
            desc: "Each week, choose 10 new words. Write one original sentence for each using an IELTS topic. On Friday, try to write all 10 sentences again from memory. If you can't use a word in a sentence you write yourself, you don't know it yet.",
            example: "Word: mitigate\nYour sentence: 'Stricter regulations could mitigate the environmental impact of industrial waste.'",
          },
          {
            step: "Step 3",
            title: "Use spaced repetition (actively)",
            color: "bg-green-600",
            desc: "Review words on Day 1, Day 3, Day 7, and Day 14. Apps like Anki are excellent for this. But the most important thing is active recall — try to produce the word before checking, rather than just reading it again.",
            example: "Front of card: a situation that has never happened before\nBack of card: unprecedented (adj) — 'an unprecedented rise in prices'",
          },
        ].map((s) => (
          <div key={s.step} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className={`${s.color} text-white p-4`}>
              <p className="text-xs font-bold opacity-80 uppercase tracking-wide">{s.step}</p>
              <p className="font-bold mt-0.5">{s.title}</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{s.desc}</p>
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-bold text-gray-500 mb-1">Example</p>
                <p className="text-xs text-gray-700 whitespace-pre-line italic">{s.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── 4-week plan ── */}
      <h2 id="vocabulary-study-plan">4-Week Vocabulary Study Plan</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3 rounded-tl-xl">Week</th>
              <th className="text-left p-3">Focus</th>
              <th className="text-left p-3">Daily Task (20 min)</th>
              <th className="text-left p-3 rounded-tr-xl">Weekly Goal</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                week: "Week 1",
                focus: "Word families",
                daily: "Take 3 words from a topic area. Find all their word family forms. Write one sentence per form.",
                goal: "Know 20 words in full word families (80+ usable forms)",
              },
              {
                week: "Week 2",
                focus: "Collocations",
                daily: "For each new word, find 2–3 collocations. Check in Google or a collocation dictionary.",
                goal: "Build a collocation list of 40+ high-frequency IELTS phrases",
              },
              {
                week: "Week 3",
                focus: "Topic vocabulary",
                daily: "Pick one IELTS topic. Read a short article. Extract 5 topic-specific words and learn their contexts.",
                goal: "Cover 4 topic areas — have 20+ words ready per topic",
              },
              {
                week: "Week 4",
                focus: "Active production",
                daily: "Write one Task 2 paragraph using 5 words from your notebook. Check: did you use them correctly?",
                goal: "Use your vocabulary naturally in timed writing — no notes, no looking up",
              },
            ].map((row, i) => (
              <tr key={row.week} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-bold text-[#D32F2F] border-b border-gray-100">{row.week}</td>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.daily}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── FAQ ── */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-4 my-6">
        {[
          {
            q: "How many words do I need to know for IELTS Band 7?",
            a: "Research suggests a recognition vocabulary of around 8,000–10,000 word families is needed for comfortable academic reading. But for productive use in IELTS Writing and Speaking, the priority is knowing 2,000–3,000 high-frequency academic words deeply — with collocations, correct usage, and multiple forms — rather than having a shallow knowledge of 10,000 words. Quality of vocabulary knowledge matters more than quantity in the IELTS exam.",
          },
          {
            q: "Should I use a thesaurus to find synonyms for IELTS?",
            a: "Only with caution. A thesaurus gives you words with similar meanings, but words listed as synonyms often have different connotations, collocations, and registers. 'Slim', 'thin', and 'emaciated' are all thesaurus synonyms for 'lean' — but they have very different meanings and tones. Only use a synonym you can verify in a real academic context. A collocation dictionary (like Oxford Collocations Dictionary) is more useful than a thesaurus.",
          },
          {
            q: "Is it better to learn vocabulary by topic or by frequency?",
            a: "For IELTS, by topic is more immediately useful. IELTS essays and discussions cluster around 12 recurring topics, so learning 25–30 strong words per topic gives you targeted preparation. After you've covered the key topics, supplementing with the Academic Word List (AWL) by frequency rounds out your range. Don't treat these as either/or — do topic vocabulary first, then frequency-based review.",
          },
          {
            q: "What is the difference between Lexical Resource Band 6 and Band 7?",
            a: "Band 6: uses an adequate range of vocabulary; some errors in word choice and collocation, but meaning is generally clear. Band 7: uses a sufficient range of vocabulary to allow some flexibility and precision; uses less common lexical items with some awareness of style and collocation; occasional errors in word choice and collocation. The key jump is from 'adequate' to 'flexibility and precision' — Band 7 writers clearly choose words deliberately, not just acceptably.",
          },
          {
            q: "Can I improve my vocabulary score without learning new words?",
            a: "Yes — by improving how you use the vocabulary you already have. The most common Lexical Resource errors are wrong collocations, wrong register (informal in formal writing), and repetition. Fixing those three issues can raise your LR score by half a band without learning a single new word. But long-term, vocabulary breadth is necessary to move from Band 6 to Band 7 and above.",
          },
          {
            q: "What apps or resources are best for IELTS vocabulary?",
            a: "For spaced repetition: Anki (free, highly customisable) or Quizlet. For learning in context: the BBC Learning English website and The Guardian have IELTS-level academic language throughout. For collocations: Oxford Collocations Dictionary (available as a book or app). For word family mapping: Vocabulary.com. For topic word lists: the Cambridge IELTS Vocabulary in Use series (Upper-Intermediate and Advanced).",
          },
        ].map(({ q, a }) => (
          <div key={q} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">{q}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-purple-600 to-[#D32F2F] rounded-2xl p-8 text-white text-center my-8">
        <h2 className="text-2xl font-extrabold mb-3 text-white">Put your vocabulary to the test</h2>
        <p className="text-purple-100 mb-6 max-w-xl mx-auto">
          OpenIELTS practice tests use real IELTS-style language across all four modules. Spot the
          gaps in your vocabulary in a real exam context — then come back and fill them.
        </p>
        <a
          href="/practice"
          className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition shadow-md"
        >
          Start Practising Free
        </a>
      </div>

    </div>
  );
}
