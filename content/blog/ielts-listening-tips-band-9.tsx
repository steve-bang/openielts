export default function ListeningTipsBand9Content() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Achieving Band 9 in IELTS Listening requires more than just good English — it demands a strategic approach,
        sharp concentration, and specific test-taking techniques. This guide shares the exact methods used by
        top-scoring candidates.
      </p>

      <h2 id="understand-format">Understanding the IELTS Listening Format</h2>
      <p>
        Before diving into strategies, you must know exactly what you&apos;re up against. The IELTS Listening test
        consists of <strong>four sections</strong>, each progressively more difficult:
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Section</th>
              <th className="text-left px-4 py-3 font-semibold">Context</th>
              <th className="text-left px-4 py-3 font-semibold">Speakers</th>
              <th className="text-left px-4 py-3 font-semibold">Questions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Section 1", "Everyday social context", "2 speakers", "10 questions"],
              ["Section 2", "Everyday social monologue", "1 speaker", "10 questions"],
              ["Section 3", "Academic/training context", "Up to 4 speakers", "10 questions"],
              ["Section 4", "Academic lecture/monologue", "1 speaker", "10 questions"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700 border-b border-gray-100 font-medium">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Key Fact</h4>
            <p className="text-gray-700 text-sm">
              You only hear each recording <strong>once</strong>. This makes preparation and strategic listening
              absolutely critical. There are no second chances, so every technique in this guide is designed to
              help you capture the right information on the first listen.
            </p>
          </div>
        </div>
      </div>

      <h2 id="question-types">Mastering the Question Types</h2>
      <p>
        The IELTS Listening test uses a variety of question formats. Understanding each type lets you know exactly
        what to listen for:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            type: "Multiple Choice",
            tip: "Read all options before the audio. Eliminate obviously wrong answers. Watch out for distractors — the speakers often mention wrong answers before giving the correct one.",
          },
          {
            type: "Matching",
            tip: "Scan through all options first. The answers follow the order of the conversation, so track your position as you listen.",
          },
          {
            type: "Plan/Map/Diagram Labelling",
            tip: "Orient yourself on the visual before listening. Focus on the specific area being described. Directions like 'opposite', 'next to', and 'between' are key signal words.",
          },
          {
            type: "Form/Note/Table Completion",
            tip: "Predict the type of answer needed (number, name, date, place). Answers are usually single words or numbers. Spelling counts — write clearly.",
          },
          {
            type: "Sentence Completion",
            tip: "Read sentences carefully to predict grammar and word type. The answer fits grammatically into the sentence and comes from the audio — not paraphrased.",
          },
          {
            type: "Short-Answer Questions",
            tip: "Respect the word limit strictly (e.g., NO MORE THAN TWO WORDS). Check whether the answer needs a number, name, or description.",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#D32F2F] transition">
            <h4 className="font-bold text-gray-900 mb-2">{item.type}</h4>
            <p className="text-sm text-gray-600">{item.tip}</p>
          </div>
        ))}
      </div>

      <h2 id="before-listening">Before the Audio Starts: The Reading Window</h2>
      <p>
        You are given a short period to read the questions before the audio begins. This is arguably the most
        important time in the entire test. Use it wisely:
      </p>
      <ul>
        <li>Read the questions carefully to understand what information you need</li>
        <li>Underline key words in each question (names, dates, numbers, locations)</li>
        <li>Predict what type of answer is needed (noun, number, adjective)</li>
        <li>Look ahead to upcoming questions so you are not caught off guard</li>
        <li>Note any words in the questions that signal sequence (first, then, finally)</li>
      </ul>

      <h2 id="during-listening">During the Audio: Active Listening Strategies</h2>

      <div className="space-y-4 my-6">
        {[
          {
            n: "01",
            title: "Follow the conversation, not just answers",
            desc: "Understand the context of the whole conversation. This helps you anticipate what&apos;s coming and catch answers you might otherwise miss.",
          },
          {
            n: "02",
            title: "Listen for signpost language",
            desc: "Phrases like 'Actually, let me correct that...', 'What I mean is...', or 'On the other hand...' signal that the speaker is changing or correcting information — a common source of wrong answers.",
          },
          {
            n: "03",
            title: "Write as you listen",
            desc: "Don&apos;t wait until you&apos;re 100% sure. Write a tentative answer and refine it. Leaving blanks risks losing answers entirely when the audio moves on.",
          },
          {
            n: "04",
            title: "Don&apos;t panic if you miss an answer",
            desc: "Skip it and move to the next question. You cannot rewind the audio, and dwelling on a missed answer causes you to miss subsequent ones.",
          },
          {
            n: "05",
            title: "Watch for paraphrasing",
            desc: "The audio rarely uses the exact words from the question. Learn to match paraphrased expressions. 'Affordable' in the question might appear as 'doesn&apos;t cost much' in the audio.",
          },
        ].map((item) => (
          <div key={item.n} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">
              {item.n}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="after-listening">After the Audio: Transfer Time</h2>
      <p>
        At the end of the test, you are given <strong>10 minutes</strong> to transfer your answers to the answer
        sheet. Do not waste this time:
      </p>
      <ul>
        <li>Transfer carefully — one wrong box ruins the answer</li>
        <li>Check spelling for all written answers (wrong spelling = wrong answer)</li>
        <li>Ensure you follow the word limit on all completion tasks</li>
        <li>Convert abbreviations to full words where required</li>
        <li>Use the time to fill in any blanks with your best guess</li>
      </ul>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Spelling Warning</h4>
            <p className="text-gray-700 text-sm">
              Spelling errors are one of the most common reasons for losing marks in the Listening test. The
              answer must be spelled correctly to receive a mark — even if the word is clearly the intended
              answer. Practice spelling common IELTS words: accommodation, environment, laboratory, necessary.
            </p>
          </div>
        </div>
      </div>

      <h2 id="accent-practice">Practising with Different Accents</h2>
      <p>
        IELTS uses speakers with British, Australian, American, and New Zealand accents. Many candidates struggle
        particularly with Australian and British accents. Here is how to build familiarity:
      </p>
      <ul>
        <li>Watch BBC News, ABC Australia, and NPR regularly</li>
        <li>Listen to podcasts like BBC Learning English and Australia Network English</li>
        <li>Use authentic IELTS practice materials from Cambridge Assessment</li>
        <li>Focus especially on number pronunciation (thirteen vs. thirty) and vowel sounds</li>
        <li>Practice daily for 20–30 minutes, not just occasional long sessions</li>
      </ul>

      <h2 id="band-score-guide">Band Score Reference Guide</h2>
      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Correct Answers (out of 40)</th>
              <th className="text-left px-4 py-3 font-semibold">Band Score</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["39–40", "9.0"],
              ["37–38", "8.5"],
              ["35–36", "8.0"],
              ["32–34", "7.5"],
              ["30–31", "7.0"],
              ["26–29", "6.5"],
              ["23–25", "6.0"],
              ["18–22", "5.5"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 text-gray-700 border-b border-gray-100 font-semibold">{row[0]}</td>
                <td className="px-4 py-3 text-gray-700 border-b border-gray-100 font-bold text-[#D32F2F]">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Practice with OpenIELTS</h4>
            <p className="text-gray-700 text-sm">
              OpenIELTS offers full-length Listening practice tests with instant scoring, detailed answer
              explanations, and transcript review. Track your progress across all four sections and identify
              your weak question types.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
