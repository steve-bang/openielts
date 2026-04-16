export default function SpeakingPart2CueCardContent() {
  return (
    <div className="prose-content">

      {/* ── Lead ── */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        The examiner hands you a card. You have 60 seconds to prepare a two-minute talk on a topic
        you&apos;ve never thought about before. Your mind goes blank. Sound familiar? I&apos;ve sat
        across from hundreds of candidates in that exact moment — and I&apos;ve also been that
        candidate myself. In this guide I&apos;m going to show you exactly what to do with that
        one minute, how to structure a talk that keeps flowing even when your brain wants to stop,
        and what separates a Band 7 answer from a Band 5.
      </p>

      {/* ── What is Speaking Part 2 ── */}
      <h2 id="what-is-speaking-part-2">What Exactly Happens in IELTS Speaking Part 2?</h2>
      <p>
        Speaking Part 2 — officially called the <strong>Long Turn</strong> — lasts around
        3 to 4 minutes in total. The examiner gives you a <strong>cue card</strong> with a topic
        and three or four bullet-point prompts. You get one minute to prepare (you can make notes
        on the paper they provide), and then you speak for <strong>one to two minutes</strong>.
        The examiner will stop you at two minutes if you&apos;re still going.
      </p>
      <p>
        After your talk, the examiner asks one or two short follow-up questions to round off the
        section. These are not scored separately — they&apos;re just a bridge into Part 3.
      </p>

      {/* Quick-facts box */}
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Part 2 at a Glance</h4>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                { label: "Prep time", value: "1 minute (notes allowed)" },
                { label: "Speaking time", value: "1–2 minutes" },
                { label: "Follow-up questions", value: "1–2 (not scored separately)" },
                { label: "Total section length", value: ~"3–4 minutes" },
                { label: "Cue card prompts", value: "3–4 bullet points" },
                { label: "Examiner interruptions", value: "None during your talk" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">→</span>
                  <span><strong>{item.label}:</strong> {item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scoring ── */}
      <h2 id="how-examiners-score-you">The 4 Things Examiners Are Actually Listening For</h2>
      <p>
        Before you practise, you need to understand what you&apos;re being marked on. IELTS Speaking
        is graded across four equally weighted criteria. Knowing them changes <em>how</em> you
        practise.
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Criterion (25% each)</th>
              <th className="text-left px-4 py-3 font-semibold">What it means in plain English</th>
              <th className="text-left px-4 py-3 font-semibold">Common mistake</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                criterion: "Fluency & Coherence",
                meaning: "Do you speak smoothly, without long pauses? Do your ideas connect logically?",
                mistake: "Stopping mid-sentence, repeating yourself, using 'um… um… um' as filler",
              },
              {
                criterion: "Lexical Resource",
                meaning: "Do you use a wide, accurate range of vocabulary — including less common words?",
                mistake: "Using only basic words ('nice', 'good', 'bad') when richer options exist",
              },
              {
                criterion: "Grammatical Range & Accuracy",
                meaning: "Do you use a mix of sentence structures correctly?",
                mistake: "Only using simple present tense, avoiding complex grammar to stay safe",
              },
              {
                criterion: "Pronunciation",
                meaning: "Can the examiner understand you clearly? Do you use natural stress and rhythm?",
                mistake: "Confusing clarity with accent — you are NOT penalised for having an accent",
              },
            ].map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100">{row.criterion}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.meaning}</td>
                <td className="px-4 py-3 text-red-600 border-b border-gray-100 text-xs">{row.mistake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">The insight most students miss</h4>
            <p className="text-gray-700 text-sm mb-0">
              Fluency is scored on <em>how</em> you speak, not on <em>what</em> you say. A
              grammatically imperfect sentence spoken confidently scores higher than a correct
              sentence delivered with constant hesitation. Build content confidence first —
              language accuracy will follow with practice.
            </p>
          </div>
        </div>
      </div>

      {/* ── 1-Minute Prep ── */}
      <h2 id="prep-minute-technique">How to Use Your 1-Minute Prep Time (Most Candidates Waste It)</h2>
      <p>
        I used to think the prep minute was just time to &ldquo;calm down.&rdquo; It&apos;s not. It&apos;s
        the most valuable 60 seconds in the whole test. Here is the exact system I teach my
        students — it takes about 20 seconds to execute and the rest of the time is for rehearsing.
      </p>

      {[
        {
          n: 1,
          time: "0–5 sec",
          title: "Read every word on the cue card",
          desc: "Don't just read the topic. Read every bullet point. The bullets are scaffolding — use them all.",
        },
        {
          n: 2,
          time: "5–15 sec",
          title: "Choose ONE specific memory or example",
          desc: "The biggest difference between a Band 5 and a Band 7 talk is specificity. Don't say 'a time I travelled'. Say 'when I was 19 and flew to Hanoi for the first time on my own.' Concrete details make you sound fluent because you stop searching for what to say.",
        },
        {
          n: 3,
          time: "15–20 sec",
          title: "Jot 3–4 one-word triggers on your notepaper",
          desc: "These are not full sentences. They are memory anchors. For example: 'Hanoi / street food / lost / met local family.' Each word maps to a full paragraph in your head.",
        },
        {
          n: 4,
          time: "20–60 sec",
          title: "Mentally rehearse your opening sentence out loud (silently)",
          desc: "Your opening sentence is your anchor. If you know exactly how you will begin, fluency follows naturally. Practice it twice in your head before the examiner says 'please start'.",
        },
      ].map((step) => (
        <div
          key={step.n}
          className="bg-white border-2 border-gray-200 hover:border-[#D32F2F] rounded-2xl p-5 mb-4 transition-all hover:shadow-md flex gap-4"
        >
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-full bg-red-100 text-[#D32F2F] flex items-center justify-center font-extrabold text-lg">
              {step.n}
            </div>
            <p className="text-center text-xs text-gray-400 mt-1 font-mono">{step.time}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        </div>
      ))}

      {/* ── 5-Point Talk Structure ── */}
      <h2 id="talk-structure">The 5-Part Structure That Fills 2 Minutes Naturally</h2>
      <p>
        Most candidates run out of things to say around the 45-second mark. Not because they
        don&apos;t have ideas — because they don&apos;t have a <em>structure</em>. This framework
        works for any cue card topic, whether it&apos;s a person, a place, an object, or an event.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6">
        <h3 className="font-bold text-gray-900 mb-5 text-center text-lg">The P-D-E-F-R Framework</h3>
        <div className="space-y-3">
          {[
            {
              letter: "P",
              name: "Position (10–15 sec)",
              color: "bg-red-100 text-[#D32F2F]",
              desc: "State what you're going to talk about. Paraphrase the cue card topic — don't just read it aloud.",
              example: "\"I'd like to talk about a journey I took when I was nineteen, travelling alone to Vietnam for the very first time.\"",
            },
            {
              letter: "D",
              name: "Description (25–30 sec)",
              color: "bg-orange-100 text-orange-700",
              desc: "Answer the first bullet point with rich detail. Use sensory language — what you saw, heard, felt. This is where most of your Lexical Resource score is earned.",
              example: "\"It was a sweltering August evening when my plane landed in Hanoi. The moment I stepped outside the terminal, I was completely overwhelmed — the noise of the motorbikes, the street vendors, the smell of pho drifting through the night air.\"",
            },
            {
              letter: "E",
              name: "Experience (25–30 sec)",
              color: "bg-amber-100 text-amber-700",
              desc: "Cover the remaining bullet points by narrating what actually happened. Use past tenses naturally. Include one specific, memorable moment — something that would only happen to you.",
              example: "\"On my second day I got completely lost trying to find the Old Quarter. I ended up sitting on a kerb looking confused when an elderly man waved me over to share tea with his family. We couldn't speak a word of each other's language, but his wife kept refilling my cup and laughing at my attempt to sit cross-legged on the tiny plastic stool.\"",
            },
            {
              letter: "F",
              name: "Feeling (15–20 sec)",
              color: "bg-green-100 text-green-700",
              desc: "Describe how you felt — and use varied emotion vocabulary. Avoid 'happy' and 'excited'. This signals Lexical Resource to the examiner.",
              example: "\"I felt a mix of relief and genuine warmth — a kind of humbling gratitude that a stranger would take in a lost tourist without expecting anything in return. It's a feeling I find difficult to put into words even now.\"",
            },
            {
              letter: "R",
              name: "Reflection (15–20 sec)",
              color: "bg-blue-100 text-blue-700",
              desc: "End with why it was significant, what you learnt, or how it changed you. This is what separates a Band 8 talk — it shows depth and higher-order thinking.",
              example: "\"That trip genuinely changed the way I travel. I stopped trying to plan every detail and started leaving room for the unexpected. In a way, getting lost was the best thing that could have happened to me.\"",
            },
          ].map((part) => (
            <div key={part.letter} className="flex gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0 ${part.color}`}>
                {part.letter}
              </div>
              <div className="flex-1 border-b border-gray-100 pb-3">
                <p className="font-bold text-gray-900 text-sm mb-1">{part.name}</p>
                <p className="text-sm text-gray-600 mb-2">{part.desc}</p>
                <p className="text-xs text-gray-500 italic bg-white rounded-lg px-3 py-2 border-l-2 border-blue-300">
                  {part.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sample Answers ── */}
      <h2 id="sample-answers">3 Real Sample Answers: Band 5.5 vs Band 7 vs Band 8.5</h2>
      <p>
        The same cue card topic. Three very different scores. Read these carefully — the
        differences are not about intelligence. They&apos;re about vocabulary range, sentence
        variety, and willingness to be specific.
      </p>
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6 text-sm text-blue-800">
        <strong>Cue Card:</strong> &ldquo;Describe a memorable journey you have taken. You should say: where you went, who you went with, what you did there, and explain why this journey was memorable.&rdquo;
      </div>

      {/* Band 5.5 */}
      <div className="border-2 border-gray-200 rounded-2xl overflow-hidden mb-5">
        <div className="bg-gray-100 px-5 py-3 flex items-center justify-between">
          <span className="font-bold text-gray-700">Band 5.5 Response</span>
          <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full border">Band 5.5</span>
        </div>
        <div className="px-5 py-4 bg-slate-50 font-serif text-gray-700 text-sm leading-relaxed space-y-2">
          <p>
            &ldquo;I want to talk about a journey I went to... um... I went to Vietnam. I went with my family.
            It was very... um... a good trip. We visited many places. We saw a lot of things in Vietnam.
            The food was good. I liked the food very much. We went to a market and we bought some things.
            I was very happy. My family was also happy. It was memorable because it was our first trip
            abroad together. I think it was a good experience for all of us. I... um... I don&apos;t know
            what else to say. Yes, it was a memorable journey.&rdquo;
          </p>
        </div>
        <div className="px-5 py-3 bg-red-50 border-t border-red-100">
          <p className="text-xs text-red-700 font-semibold mb-1">Why it scores Band 5.5:</p>
          <ul className="text-xs text-red-600 space-y-0.5">
            <li>• Vocabulary is repetitive and basic: &ldquo;good&rdquo; used 3 times, &ldquo;very&rdquo; used 4 times</li>
            <li>• No specific details — no names, no sensory descriptions, no unique moment</li>
            <li>• Frequent hesitation (&ldquo;um&rdquo;) interrupts fluency</li>
            <li>• Sentence structure is almost entirely simple subject-verb-object</li>
          </ul>
        </div>
      </div>

      {/* Band 7 */}
      <div className="border-2 border-green-200 rounded-2xl overflow-hidden mb-5">
        <div className="bg-green-50 px-5 py-3 flex items-center justify-between">
          <span className="font-bold text-green-800">Band 7.0 Response</span>
          <span className="text-sm font-semibold text-green-700 bg-white px-3 py-1 rounded-full border border-green-200">Band 7.0</span>
        </div>
        <div className="px-5 py-4 bg-slate-50 font-serif text-gray-700 text-sm leading-relaxed space-y-2">
          <p>
            &ldquo;I&apos;d like to describe a trip I took to Vietnam about three years ago — it was actually
            my first solo trip abroad, which made it particularly significant for me.
          </p>
          <p>
            I flew into Hanoi and spent a week exploring the city before taking the overnight train down
            to Hội An. I travelled alone, which was quite daunting at first, but ended up being one of
            the best decisions I&apos;ve ever made.
          </p>
          <p>
            What I remember most vividly is getting lost in the Old Quarter on my second evening. I
            wandered into a side street and found myself sitting with a local family, sharing tea even
            though we had no common language. It was a surprisingly heartwarming experience.
          </p>
          <p>
            The journey was memorable for a few reasons. Obviously, the scenery and the food were
            incredible — the street food in particular was unlike anything I&apos;d had before. But more
            than that, travelling alone forced me to be more confident and open to unexpected situations.
            I came home feeling much more independent than when I left.&rdquo;
          </p>
        </div>
        <div className="px-5 py-3 bg-green-50 border-t border-green-100">
          <p className="text-xs text-green-700 font-semibold mb-1">Why it scores Band 7.0:</p>
          <ul className="text-xs text-green-600 space-y-0.5">
            <li>• Good range of vocabulary: &ldquo;particularly significant&rdquo;, &ldquo;daunting&rdquo;, &ldquo;heartwarming&rdquo;, &ldquo;vividly&rdquo;</li>
            <li>• Specific details (Old Quarter, overnight train, Hội An) — not generic</li>
            <li>• Varied sentence structure including complex clauses</li>
            <li>• Reflects on the experience with genuine insight</li>
          </ul>
        </div>
      </div>

      {/* Band 8.5 */}
      <div className="border-2 border-blue-200 rounded-2xl overflow-hidden mb-6">
        <div className="bg-blue-50 px-5 py-3 flex items-center justify-between">
          <span className="font-bold text-blue-800">Band 8.5 Response</span>
          <span className="text-sm font-semibold text-blue-700 bg-white px-3 py-1 rounded-full border border-blue-200">Band 8.5</span>
        </div>
        <div className="px-5 py-4 bg-slate-50 font-serif text-gray-700 text-sm leading-relaxed space-y-2">
          <p>
            &ldquo;The journey that comes to mind immediately is one I took at nineteen — a solo trip to
            Vietnam that I&apos;d planned for months and that ended up being nothing like I&apos;d
            imagined, in the very best way.
          </p>
          <p>
            I landed in Hanoi on a sweltering August evening, and the moment I stepped outside the
            terminal, this wall of heat and noise just hit me — the relentless buzz of motorbikes, the
            vendors calling out, the smell of street food drifting through the humid air. It was
            simultaneously thrilling and mildly terrifying, if I&apos;m honest.
          </p>
          <p>
            On the second day I got hopelessly lost trying to navigate the Old Quarter. I&apos;d
            given up on my map and was sitting on a kerb looking thoroughly confused when an elderly
            man gestured for me to follow him. He brought me back to his family home, sat me down on
            one of those tiny plastic stools, and his wife just kept refilling my tea while they
            laughed — warmly, not unkindly — at my attempts to communicate. We didn&apos;t share a
            single word of a common language, but I stayed for nearly two hours.
          </p>
          <p>
            What makes it memorable isn&apos;t the temples or the lanterns in Hội An, as breathtaking
            as those were. It&apos;s that moment of realising that genuine human kindness requires no
            translation. I travel very differently now — with far less agenda and a genuine openness
            to being derailed. That family didn&apos;t just give me tea. They gave me a completely
            different way of moving through the world.&rdquo;
          </p>
        </div>
        <div className="px-5 py-3 bg-blue-50 border-t border-blue-100">
          <p className="text-xs text-blue-700 font-semibold mb-1">Why it scores Band 8.5:</p>
          <ul className="text-xs text-blue-600 space-y-0.5">
            <li>• Sophisticated vocabulary: &ldquo;simultaneously&rdquo;, &ldquo;relentless&rdquo;, &ldquo;hopelessly lost&rdquo;, &ldquo;thoroughly confused&rdquo;, &ldquo;derailed&rdquo;</li>
            <li>• Rich sensory language creates a genuine scene for the listener</li>
            <li>• Natural idiomatic expressions: &ldquo;wall of heat&rdquo;, &ldquo;if I&apos;m honest&rdquo;</li>
            <li>• Complex mixed tenses (past perfect, past continuous) used accurately and naturally</li>
            <li>• Reflection is insightful and original — not a generic conclusion</li>
          </ul>
        </div>
      </div>

      {/* ── Language Toolkit ── */}
      <h2 id="language-toolkit">Useful Phrases That Signal Higher Bands</h2>
      <p>
        These phrases are not scripts. They are patterns that fluent speakers use naturally — and
        that examiners recognise as markers of a higher band. Absorb them through repeated use,
        not memorisation.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            category: "Opening your talk",
            color: "border-red-200 bg-red-50",
            heading: "text-[#D32F2F]",
            phrases: [
              "The one that immediately springs to mind is…",
              "I'd like to talk about a time when…",
              "What stands out most when I think about this is…",
              "This is actually something I feel quite strongly about…",
            ],
          },
          {
            category: "Adding detail",
            color: "border-amber-200 bg-amber-50",
            heading: "text-amber-700",
            phrases: [
              "What struck me most was…",
              "To give you a bit of context…",
              "I distinctly remember…",
              "What made it particularly [adj] was…",
            ],
          },
          {
            category: "Expressing feeling",
            color: "border-green-200 bg-green-50",
            heading: "text-green-700",
            phrases: [
              "I felt a real sense of… (achievement / relief / connection)",
              "It was simultaneously [adj] and [adj]",
              "I found it genuinely [adj], if I'm honest",
              "It's a feeling that's hard to put into words",
            ],
          },
          {
            category: "Reflecting at the end",
            color: "border-blue-200 bg-blue-50",
            heading: "text-blue-700",
            phrases: [
              "Looking back on it now, I think…",
              "It changed the way I think about…",
              "I came away with a completely different perspective on…",
              "In hindsight, what I value most is…",
            ],
          },
        ].map((group) => (
          <div key={group.category} className={`border-2 rounded-xl p-4 ${group.color}`}>
            <p className={`font-bold text-sm mb-3 ${group.heading}`}>{group.category}</p>
            <ul className="space-y-1.5">
              {group.phrases.map((phrase) => (
                <li key={phrase} className="text-xs text-gray-700 flex items-start gap-1.5">
                  <span className="shrink-0 mt-0.5">✦</span>
                  <span className="italic">{phrase}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Common Mistakes ── */}
      <h2 id="common-mistakes">7 Mistakes That Cap You at Band 6 (And How to Fix Them)</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            mistake: "Reading the cue card aloud",
            fix: "Paraphrase the topic in your own words. Repeating the card verbatim adds nothing and wastes your first 10 seconds.",
          },
          {
            mistake: "Stopping to say 'I don't know what to say'",
            fix: "Use stalling phrases that sound natural: 'That's an interesting one…' or 'Let me think about this for a second.' Never announce the pause.",
          },
          {
            mistake: "Answering all 4 bullets in 30 seconds then stopping",
            fix: "Each bullet is a paragraph prompt, not a one-sentence answer. Expand every point with a specific detail, a feeling, or an example.",
          },
          {
            mistake: "Using the same adjectives (good, nice, interesting)",
            fix: "Prepare 3 synonyms for your most common adjectives before the test. 'Fascinating', 'striking', 'humbling' are free band points.",
          },
          {
            mistake: "Only using simple past tense",
            fix: "Mix in past continuous ('I was walking when…'), past perfect ('I had never felt…'), and conditionals ('It made me realise I should…').",
          },
          {
            mistake: "Talking about something generic",
            fix: "The more specific and personal your story, the more fluent you will sound. 'A holiday in Europe' is harder to talk about than 'a train journey from Kraków to Warsaw at 4am'.",
          },
          {
            mistake: "Stopping at exactly one minute",
            fix: "Aim for the full two minutes. Examiners cannot award Band 7+ for Fluency if your talk is under 90 seconds. Use the P-D-E-F-R structure to fill the time naturally.",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="font-bold text-red-700 text-sm mb-1.5">✗ {item.mistake}</p>
            <p className="text-gray-700 text-sm">✓ {item.fix}</p>
          </div>
        ))}
      </div>

      {/* ── Practice Tips ── */}
      <h2 id="how-to-practise">How to Actually Practise Part 2 (Without Wasting Time)</h2>
      <p>
        Knowing the structure is not the same as being able to deliver it under pressure. Here is
        a practice routine that genuinely works — I built it based on what I saw transform
        candidates&apos; scores in real test conditions.
      </p>

      <div className="space-y-3 my-6">
        {[
          {
            week: "Days 1–3",
            title: "Shadow and absorb",
            desc: "Read the Band 8.5 sample answer above out loud, slowly, three times a day. You are training your mouth to produce complex sentences — not memorising the content. Focus on the rhythm and phrasing.",
          },
          {
            week: "Days 4–7",
            title: "One timed talk per day",
            desc: "Pick a random cue card topic (there are hundreds online). Set a 60-second prep timer. Then record yourself speaking for 2 minutes on your phone. Listen back and count how many times you use a word from the language toolkit above.",
          },
          {
            week: "Week 2",
            title: "Focus on your weakest criterion",
            desc: "Listen to your recordings and identify which of the four criteria sounds weakest. Spend your practice sessions deliberately targeting that one area — don't try to fix everything at once.",
          },
          {
            week: "Week 3+",
            title: "Full-test simulation",
            desc: "Do a complete timed Part 2 practice with a partner or using an AI speaking tool. The goal is to feel relaxed and familiar with the format so the real test feels routine, not frightening.",
          },
        ].map((item) => (
          <div key={item.week} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#D32F2F] hover:shadow-sm transition">
            <div className="shrink-0">
              <span className="inline-block bg-red-100 text-[#D32F2F] text-xs font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap">
                {item.week}
              </span>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── FAQ — AI Overview bait ── */}
      <h2 id="faq">Frequently Asked Questions About IELTS Speaking Part 2</h2>

      <div className="space-y-4 my-6">
        {[
          {
            q: "What happens if I stop speaking before 2 minutes?",
            a: "The examiner will wait briefly, then ask a follow-up question to close the section. Stopping early limits your Fluency score since there is simply less evidence for the examiner to work with. Use the P-D-E-F-R structure and you should consistently reach 90 seconds minimum.",
          },
          {
            q: "Can I ask the examiner to repeat the cue card?",
            a: "Yes. You can ask once, politely. However, it is better to ask during your prep time rather than after you start speaking, since asking mid-talk interrupts your fluency.",
          },
          {
            q: "Should I memorise sample answers?",
            a: "No. Examiners are trained to identify memorised responses and will lower your score if they suspect the content is rehearsed. Instead, memorise structures and phrases, and apply them to your own genuine experiences.",
          },
          {
            q: "Does my accent affect my Pronunciation score?",
            a: "Having an accent does not reduce your Pronunciation score. The criterion assesses whether the listener can understand you clearly, and whether you use natural English stress and rhythm — not whether you sound like a native speaker from a specific country.",
          },
          {
            q: "What if I don't have a real personal experience for the topic?",
            a: "Make one up — or adapt a real one. IELTS is a language test, not a lie-detector test. The examiner is not checking the facts; they are assessing your ability to express ideas fluently and accurately. What matters is that your story sounds specific and convincing.",
          },
        ].map((item) => (
          <div key={item.q} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-gray-50 font-semibold text-gray-900 text-sm">
              {item.q}
            </div>
            <div className="px-5 py-3 text-sm text-gray-600 leading-relaxed">
              {item.a}
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Put it into practice right now</h4>
            <p className="text-gray-700 text-sm">
              OpenIELTS has a Speaking Practice module where you can work through all three parts of
              the speaking test, track your session durations, and build the speaking habit that
              makes the difference on test day. No special equipment needed — just you and your voice.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
