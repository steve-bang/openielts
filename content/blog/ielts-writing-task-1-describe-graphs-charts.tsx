export default function WritingTask1GraphsChartsContent() {
  return (
    <div className="prose-content">

      {/* ── Lead ── */}
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        The first time I saw my Writing Task 1 score — Band 5.5 — I was genuinely confused. I had
        described everything in the graph. Every number. Every trend. I thought I had done a
        thorough job. What I didn&apos;t realise was that <em>describing everything</em> is exactly
        the wrong approach. IELTS Writing Task 1 is not a data transcription exercise. It&apos;s a{" "}
        <strong>summary writing task</strong> — and the moment I understood that distinction, my
        score jumped to Band 7.5 in the next sitting.
      </p>

      {/* ── What is Task 1 ── */}
      <h2 id="what-is-writing-task-1">What Is IELTS Writing Task 1?</h2>
      <p>
        IELTS Academic Writing Task 1 gives you a visual — a line graph, bar chart, pie chart,
        table, process diagram, or map — and asks you to summarise the main features and make
        comparisons where relevant. You have <strong>20 minutes</strong> and must write at least{" "}
        <strong>150 words</strong>.
      </p>
      <p>
        It accounts for one-third of your Writing band score, so a weak Task 1 drags down an
        otherwise strong Task 2 result. Most candidates underestimate it.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 my-6">
        <p className="font-bold text-amber-800 mb-1">The single most important sentence in the task instructions:</p>
        <p className="text-gray-700 italic">
          &ldquo;Summarise the information by selecting and reporting the main features, and make
          comparisons where relevant.&rdquo;
        </p>
        <p className="text-sm text-amber-700 mt-2">
          Notice it says <strong>select</strong> — not report every number. Examiners reward
          intelligent selection, not encyclopaedic coverage.
        </p>
      </div>

      {/* ── Four scoring criteria ── */}
      <h2 id="how-task-1-is-marked">How Task 1 Is Actually Marked</h2>
      <p>
        Your response is marked on four criteria, each worth 25% of the Task 1 score:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#D32F2F] text-white">
              <th className="text-left p-3 rounded-tl-xl">Criterion</th>
              <th className="text-left p-3">What Examiners Look For</th>
              <th className="text-left p-3 rounded-tr-xl">Common Mistake</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                criterion: "Task Achievement (TA)",
                looks: "Key trends identified, overview present, data accurately represented",
                mistake: "No overview paragraph; describing everything without selecting",
              },
              {
                criterion: "Coherence & Cohesion (CC)",
                looks: "Logical paragraph structure, appropriate linking words",
                mistake: "One giant paragraph; overusing 'firstly, secondly, thirdly'",
              },
              {
                criterion: "Lexical Resource (LR)",
                looks: "Precise vocabulary for trends, paraphrased task language",
                mistake: "Copying words directly from the task; using 'go up/go down' only",
              },
              {
                criterion: "Grammatical Range & Accuracy (GRA)",
                looks: "Mix of sentence structures, accurate tenses, passive voice",
                mistake: "Present tense for past-data graphs; same sentence structure repeated",
              },
            ].map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-semibold text-gray-900 border-b border-gray-100">{row.criterion}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.looks}</td>
                <td className="p-3 text-red-600 border-b border-gray-100">{row.mistake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── The structure ── */}
      <h2 id="4-paragraph-structure">The 4-Paragraph Structure That Works for Every Chart Type</h2>
      <p>
        After marking hundreds of Task 1 responses and coaching students from Band 5 to Band 8+,
        I&apos;ve found that the most reliable high-scoring structure is a simple four-paragraph
        format. Every graph type — line graphs, bar charts, pie charts, tables, and even process
        diagrams — can be written using this template.
      </p>

      <div className="grid gap-4 my-6">
        {[
          {
            num: "1",
            label: "Introduction (2–3 sentences)",
            color: "bg-blue-50 border-blue-200",
            numColor: "bg-blue-600",
            content: "Paraphrase the task description. State what the graph/chart shows, the time period (if applicable), and the units. Never copy the task wording word-for-word.",
            example: "Original: 'The graph below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.'\n\nParaphrased: 'The line graph illustrates how the proportion of owner-occupied and privately rented homes in England and Wales changed over roughly a century, from 1918 to 2011.'",
          },
          {
            num: "2",
            label: "Overview (2–3 sentences) — THE MOST IMPORTANT PARAGRAPH",
            color: "bg-red-50 border-[#D32F2F]",
            numColor: "bg-[#D32F2F]",
            content: "State the 2–3 most striking features WITHOUT any specific data. Think of it as a headline summary. This paragraph is what separates Band 6 responses from Band 7+. Many students skip it entirely — do not make that mistake.",
            example: "Overall, owner-occupation grew substantially over the period to become the dominant tenure type, while private renting fell sharply before recovering modestly towards the end of the period.",
          },
          {
            num: "3",
            label: "Body Paragraph 1 — Main Trend or Group",
            color: "bg-green-50 border-green-200",
            numColor: "bg-green-600",
            content: "Describe the most significant trend or the largest category with supporting data. Use specific figures, but select only key data points — not every number on the axis.",
            example: "Owner-occupation rose from just 23% in 1918 to a peak of 71% in 2001, with particularly rapid growth between 1951 and 1971. By the end of the period, it had dipped slightly to 65%.",
          },
          {
            num: "4",
            label: "Body Paragraph 2 — Second Trend or Comparison",
            color: "bg-purple-50 border-purple-200",
            numColor: "bg-purple-600",
            content: "Cover the remaining data, contrasting or comparing with Body 1 where relevant. Include any notable anomalies or turning points.",
            example: "In contrast, private renting, which stood at 76% in 1918, declined steeply to around 8% by 1991. Interestingly, this figure reversed course in the following two decades, climbing back to approximately 15% by 2011.",
          },
        ].map((para) => (
          <div key={para.num} className={`border-2 ${para.color} rounded-2xl p-5`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 ${para.numColor} text-white rounded-xl flex items-center justify-center font-extrabold text-lg shrink-0`}>
                {para.num}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{para.label}</h3>
                <p className="text-gray-700 text-sm mb-3">{para.content}</p>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Example</p>
                  <p className="text-sm text-gray-700 italic whitespace-pre-line">{para.example}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Vocabulary ── */}
      <h2 id="trend-vocabulary">The Vocabulary Toolkit: Words and Phrases for Every Trend</h2>
      <p>
        Lexical resource is one of the four marking criteria, and Task 1 vocabulary is very
        specific. Examiners see thousands of scripts that all use &ldquo;increased&rdquo; and
        &ldquo;decreased.&rdquo; Varying your language accurately — not just randomly — is what
        demonstrates real lexical range.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            category: "Upward Trends",
            color: "bg-green-50 border-green-200 text-green-800",
            headerColor: "text-green-700",
            words: [
              { verb: "rose / climbed / increased", note: "neutral; most common" },
              { verb: "surged / soared / skyrocketed", note: "rapid, dramatic rise" },
              { verb: "grew steadily / crept upward", note: "slow, gradual increase" },
              { verb: "reached a peak of / peaked at", note: "highest point" },
              { verb: "more than doubled / tripled", note: "relative change" },
            ],
          },
          {
            category: "Downward Trends",
            color: "bg-red-50 border-red-200 text-red-800",
            headerColor: "text-red-700",
            words: [
              { verb: "fell / dropped / declined", note: "neutral; most common" },
              { verb: "plummeted / plunged / slumped", note: "sharp, dramatic fall" },
              { verb: "dipped slightly / edged downward", note: "minor decrease" },
              { verb: "hit a low of / bottomed out at", note: "lowest point" },
              { verb: "halved / fell by half", note: "relative change" },
            ],
          },
          {
            category: "Stable / Flat Trends",
            color: "bg-blue-50 border-blue-200 text-blue-800",
            headerColor: "text-blue-700",
            words: [
              { verb: "remained stable / stayed constant", note: "no change" },
              { verb: "levelled off / plateaued at", note: "stopped changing" },
              { verb: "fluctuated around / hovered at", note: "minor ups and downs" },
              { verb: "showed little variation", note: "roughly flat" },
              { verb: "barely changed / was relatively unchanged", note: "negligible movement" },
            ],
          },
          {
            category: "Describing Degree & Speed",
            color: "bg-amber-50 border-amber-200 text-amber-800",
            headerColor: "text-amber-700",
            words: [
              { verb: "dramatically / sharply / steeply", note: "big, fast change" },
              { verb: "gradually / steadily / consistently", note: "slow, sustained change" },
              { verb: "marginally / slightly / modestly", note: "small change" },
              { verb: "significantly / considerably / notably", note: "important change" },
              { verb: "roughly / approximately / around", note: "approximate figures" },
            ],
          },
        ].map((group) => (
          <div key={group.category} className={`border-2 ${group.color} rounded-2xl p-4`}>
            <h3 className={`font-bold ${group.headerColor} mb-3 text-sm uppercase tracking-wide`}>
              {group.category}
            </h3>
            <div className="space-y-2">
              {group.words.map((w) => (
                <div key={w.verb} className="flex items-start gap-2">
                  <span className="font-semibold text-sm text-gray-900 min-w-0">{w.verb}</span>
                  <span className="text-xs text-gray-500 italic shrink-0">— {w.note}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Chart types ── */}
      <h2 id="chart-type-guide">Chart-by-Chart Tactics: What Changes and What Stays the Same</h2>
      <p>
        The four-paragraph structure works across all chart types, but each type has specific
        things examiners expect to see. Here&apos;s a quick-reference guide:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3 rounded-tl-xl">Chart Type</th>
              <th className="text-left p-3">Focus On</th>
              <th className="text-left p-3">Key Tense</th>
              <th className="text-left p-3 rounded-tr-xl">Band 7+ Tip</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                type: "Line Graph",
                focus: "Trends over time, peaks, troughs, turning points",
                tense: "Past simple (historical data)",
                tip: "Group lines by similar behaviour, not by individual line",
              },
              {
                type: "Bar Chart",
                focus: "Comparisons between categories at specific points",
                tense: "Past simple or present simple depending on data",
                tip: "Find the most striking contrast and lead with it in your overview",
              },
              {
                type: "Pie Chart",
                focus: "Proportions and how they relate to the whole",
                tense: "Present simple (percentages are static facts)",
                tip: "Group small slices together; don't list every segment separately",
              },
              {
                type: "Table",
                focus: "Highest/lowest values, patterns across rows and columns",
                tense: "Matches the time reference given",
                tip: "Never describe every cell — pick extremes and notable exceptions",
              },
              {
                type: "Process Diagram",
                focus: "Stages in sequence, inputs and outputs",
                tense: "Present simple + passive voice",
                tip: "Use sequencing language: first, then, subsequently, finally",
              },
              {
                type: "Map",
                focus: "Changes between two time periods, location descriptions",
                tense: "Past simple (comparing then vs now)",
                tip: "Use directional language: to the north of, adjacent to, opposite",
              },
            ].map((row, i) => (
              <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 font-semibold text-[#D32F2F] border-b border-gray-100">{row.type}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.focus}</td>
                <td className="p-3 text-gray-600 border-b border-gray-100">{row.tense}</td>
                <td className="p-3 text-gray-700 border-b border-gray-100">{row.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Sample response ── */}
      <h2 id="sample-responses">Three Sample Responses: Band 5.5, 7.0, and 8.0</h2>
      <p>
        The best way to understand the scoring criteria is to see the same task answered at
        different band levels. The graph below shows the percentage of households in England and
        Wales living in owner-occupied vs. rented accommodation from 1918 to 2011.
      </p>

      <div className="bg-gray-100 border border-gray-200 rounded-2xl p-5 my-4">
        <p className="text-sm text-gray-500 font-semibold mb-1">Task prompt (simulated):</p>
        <p className="text-sm text-gray-700 italic">
          The line graph below shows the percentage of households in owned and rented accommodation
          in England and Wales between 1918 and 2011. Summarise the information by selecting and
          reporting the main features, and make comparisons where relevant.
        </p>
      </div>

      {[
        {
          band: "Band 5.5",
          color: "border-red-300 bg-red-50",
          labelColor: "bg-red-500",
          notes: [
            "No overview paragraph — straight into data",
            "Copies task wording directly ('owned and rented accommodation')",
            "Mentions almost every data point without selection",
            "Limited vocabulary range ('increased', 'decreased' repeated)",
          ],
          text: "The graph shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.\n\nIn 1918, rented accommodation was 76% and owned accommodation was 23%. After that, owned accommodation increased and rented accommodation decreased. In 1939, owned was 31% and rented was 69%. In 1953, owned was 38% and rented was 62%. Owned accommodation continued to increase and reached 71% in 2001. Then it decreased a little to 65% in 2011. Rented accommodation decreased to 8% in 1991 and then increased to 15% in 2011. Overall, owned accommodation increased a lot during this period.",
        },
        {
          band: "Band 7.0",
          color: "border-amber-300 bg-amber-50",
          labelColor: "bg-amber-500",
          notes: [
            "Overview present but brief",
            "Good selection of key data points",
            "Paraphrased introduction (doesn't copy task)",
            "Some vocabulary variation — 'climbed', 'declined', 'reversed'",
          ],
          text: "The line graph illustrates changes in the proportion of households living in owner-occupied and rented homes in England and Wales over a period of almost 100 years.\n\nOverall, owner-occupation grew significantly to become the dominant form of housing tenure, while renting declined sharply before partially recovering towards the end of the period.\n\nIn 1918, only around 23% of households owned their homes, whereas 76% were renting. Owner-occupation climbed steadily throughout the following decades, reaching approximately 71% by 2001 — a rise of almost 50 percentage points. However, this figure fell slightly to 65% by 2011.\n\nMeanwhile, the proportion of rented households declined steeply from 76% in 1918 to a low of around 8% in 1991. Interestingly, this trend reversed in the final two decades, with renting rising to roughly 15% by 2011, suggesting a possible return towards renting in more recent years.",
        },
        {
          band: "Band 8.0",
          color: "border-green-300 bg-green-50",
          labelColor: "bg-green-600",
          notes: [
            "Strong overview that identifies the most striking overall trends",
            "Sophisticated grouping — discusses turning points, not just direction",
            "Precise vocabulary: 'dominated', 'plateaued', 'reversed course'",
            "Excellent cohesion using contrast and concessive language",
          ],
          text: "The line graph traces the shifting balance between owner-occupied and rented housing in England and Wales across nearly a century, from 1918 to 2011.\n\nOverall, the two tenures followed near-mirror trajectories: owner-occupation surged from a minority position to dominate the market, while renting, which began as the norm, fell dramatically before staging a modest but notable late-century recovery.\n\nIn 1918, owner-occupation stood at just 23%, with renting accounting for the vast majority at 76%. Over the following eight decades, these figures reversed almost entirely, as owner-occupation climbed steadily — with particularly steep growth between 1951 and 1971 — before peaking at 71% around 2001. A slight dip brought this figure to 65% by 2011.\n\nPrivate renting mirrored this decline, falling from 76% to a historic low of approximately 8% in 1991. However, the final twenty years saw a clear reversal: renting climbed back to around 15% by 2011, a shift that arguably reflects the housing affordability pressures that gained widespread attention during that period.",
        },
      ].map((sample) => (
        <div key={sample.band} className={`border-2 ${sample.color} rounded-2xl p-5 my-4`}>
          <div className="flex items-center gap-3 mb-3">
            <span className={`${sample.labelColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
              {sample.band} Response
            </span>
          </div>
          <div className="bg-white rounded-xl p-4 mb-3 border border-gray-200">
            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed italic">{sample.text}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Examiner Notes</p>
            <ul className="space-y-1">
              {sample.notes.map((note) => (
                <li key={note} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* ── 20-minute plan ── */}
      <h2 id="20-minute-plan">How to Use Your 20 Minutes Wisely</h2>
      <p>
        Most candidates either rush through Task 1 in 12 minutes or spend 30 minutes and run out
        of time for Task 2. Neither is acceptable. Here is the exact time allocation I recommend
        to every student:
      </p>

      <div className="grid sm:grid-cols-4 gap-3 my-6">
        {[
          { time: "2 min", step: "Analyse", desc: "Study the graph: what type is it, what do the axes show, what is the time period, what units are used?", color: "bg-blue-50 border-blue-200", timeColor: "text-blue-600" },
          { time: "3 min", step: "Plan", desc: "Identify 2–3 main features for your overview. Decide which data to include in each body paragraph. Do NOT skip this step.", color: "bg-purple-50 border-purple-200", timeColor: "text-purple-600" },
          { time: "13 min", step: "Write", desc: "Introduction (2 min) → Overview (3 min) → Body 1 (4 min) → Body 2 (4 min). Aim for 170–190 words.", color: "bg-green-50 border-green-200", timeColor: "text-green-600" },
          { time: "2 min", step: "Check", desc: "Read for tense consistency, subject-verb agreement, and ensure your overview doesn't contain raw numbers.", color: "bg-amber-50 border-amber-200", timeColor: "text-amber-600" },
        ].map((step) => (
          <div key={step.step} className={`border-2 ${step.color} rounded-2xl p-4 text-center`}>
            <div className={`text-2xl font-extrabold ${step.timeColor} mb-1`}>{step.time}</div>
            <div className="font-bold text-gray-900 text-sm mb-2">{step.step}</div>
            <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-5 my-6">
        <p className="font-bold text-blue-800 mb-1">Critical reminder about word count</p>
        <p className="text-sm text-gray-700">
          Writing fewer than 150 words results in a penalty to your Task Achievement score. Writing
          over 200 words rarely improves your score and wastes time you need for Task 2. Target the
          170–190 word range — precise enough to be thorough, concise enough to be well-controlled.
        </p>
      </div>

      {/* ── Common mistakes ── */}
      <h2 id="common-mistakes">6 Mistakes That Cost Candidates a Full Band</h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          {
            mistake: "No overview paragraph",
            impact: "Caps Task Achievement at Band 5 — the overview is explicitly assessed",
            fix: "Always write it as Paragraph 2, before your data paragraphs",
          },
          {
            mistake: "Describing everything",
            impact: "Produces unfocused writing; loses marks for Task Achievement selection",
            fix: "Choose the 3–4 most significant data points per body paragraph",
          },
          {
            mistake: "Wrong tense for the data",
            impact: "Repeated tense errors cap Grammatical Range at Band 5",
            fix: "Past simple for historical charts; present simple for static data",
          },
          {
            mistake: "Guessing reasons or causes",
            impact: "Task 1 is a summary task, not a discursive essay — speculation loses marks",
            fix: "Describe only what the data shows; never write 'this may be because...'",
          },
          {
            mistake: "Copying the task wording",
            impact: "Copied words are not assessed for Lexical Resource",
            fix: "Paraphrase every key term: 'shows' → 'illustrates', 'percentage' → 'proportion'",
          },
          {
            mistake: "Numbers in the overview",
            impact: "The overview should state general trends — specific figures belong in body paragraphs",
            fix: "Write 'owner-occupation dominated by the end of the period' not 'reached 65% by 2011'",
          },
        ].map((item) => (
          <div key={item.mistake} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-[#D32F2F] font-bold text-sm">✗</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{item.mistake}</p>
                <p className="text-xs text-red-600 mb-2"><strong>Impact:</strong> {item.impact}</p>
                <p className="text-xs text-green-700"><strong>Fix:</strong> {item.fix}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Practice routine ── */}
      <h2 id="practice-routine">The 3-Week Practice Routine to Reach Band 7+</h2>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        {[
          {
            week: "Week 1",
            focus: "Structure & Overview",
            color: "bg-blue-600",
            tasks: [
              "Daily: analyse 1 graph — identify the main trend without writing",
              "Write overviews only (2–3 sentences). No introduction, no data",
              "Check: does your overview mention numbers? Remove them",
              "Goal: write 5 overviews that your teacher or study partner would understand without seeing the chart",
            ],
          },
          {
            week: "Week 2",
            focus: "Vocabulary & Accuracy",
            color: "bg-[#D32F2F]",
            tasks: [
              "Build your trend vocabulary grid — 5 words for each direction",
              "Write one complete Task 1 per day (timed at 20 minutes)",
              "Underline every trend word you used — did you repeat any?",
              "Check tense: is it consistent with the time period shown?",
            ],
          },
          {
            week: "Week 3",
            focus: "Speed & Selection",
            color: "bg-green-600",
            tasks: [
              "Time yourself strictly: 2-3-13-2 minute plan",
              "Write 160–180 words maximum — practise cutting, not adding",
              "Compare your body paragraphs: did you select or transcribe?",
              "Try mixed chart types: one line graph, one pie chart, one table, one process",
            ],
          },
        ].map((w) => (
          <div key={w.week} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className={`${w.color} text-white p-4`}>
              <div className="font-extrabold text-lg">{w.week}</div>
              <div className="text-sm opacity-90">{w.focus}</div>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {w.tasks.map((task) => (
                  <li key={task} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── FAQ ── */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-4 my-6">
        {[
          {
            q: "Do I need to write an introduction AND an overview in IELTS Writing Task 1?",
            a: "Yes — these are two separate paragraphs with different purposes. The introduction paraphrases the task and describes what the graph shows. The overview summarises the 2–3 most significant trends without any specific data. Candidates who combine them into one paragraph typically lose marks on Task Achievement.",
          },
          {
            q: "How many words should I write for IELTS Writing Task 1?",
            a: "The minimum is 150 words. Writing under this limit results in a Task Achievement penalty. The recommended range is 170–190 words — enough to cover key features with sufficient detail, but concise enough to maintain control. Writing 250+ words wastes time you need for Task 2 and rarely improves your score.",
          },
          {
            q: "Should I give my opinion in IELTS Writing Task 1?",
            a: "No — never include your personal opinion or speculate about reasons for trends in Task 1. It is a factual summary task, not a discursive essay. Phrases like 'this may be due to' or 'I think this happened because' will lose you marks. Stick to describing what the data shows.",
          },
          {
            q: "What is the difference between a Band 6 and Band 7 Task 1 response?",
            a: "The most consistent difference is the presence and quality of the overview. Band 6 responses typically list data accurately but without an organised overview or clear selection of main features. Band 7 responses identify the most striking overall trends in an overview paragraph, then selectively support those trends with accurate data in body paragraphs.",
          },
          {
            q: "Can I use the same structure for process diagrams and maps as for graphs and charts?",
            a: "Partly. The four-paragraph structure still applies, but process diagrams and maps require different language. Process diagrams use present simple + passive voice and sequencing words (first, then, subsequently). Maps use directional and spatial language (to the north, adjacent to, in place of). The overview for both should summarise the overall transformation shown rather than list stages or locations.",
          },
          {
            q: "How do I practise IELTS Writing Task 1 without a teacher?",
            a: "The most effective solo method is the overview-first approach: look at a graph and write only the overview — two to three sentences that summarise the main trends without data. Then compare to a model answer. When your overview consistently matches the key trends identified in the model, move to writing full responses timed at 20 minutes. Aim for at least 5 complete timed responses per week during your final month of preparation.",
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
        <h2 className="text-2xl font-extrabold mb-3 text-white">Ready to put this into practice?</h2>
        <p className="text-red-100 mb-6 max-w-xl mx-auto">
          OpenIELTS has full Writing Task 1 practice sets with real graph types, instant feedback,
          and model answers. Track your progress from Band 5 to Band 7+ — all free.
        </p>
        <a
          href="/practice/writing"
          className="inline-block bg-white text-[#D32F2F] font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition shadow-md"
        >
          Try a Writing Task 1 Practice Now
        </a>
      </div>

    </div>
  );
}
