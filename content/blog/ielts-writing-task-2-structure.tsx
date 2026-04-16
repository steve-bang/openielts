export default function WritingTask2StructureContent() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Mastering the structure of your IELTS Writing Task 2 essay is the single most effective way to boost your
        score. This comprehensive guide reveals the proven 7-step essay structure that has helped thousands of
        students achieve Band 7 and higher.
      </p>

      <h2 id="why-structure-matters">Why Essay Structure Matters for IELTS Writing</h2>
      <p>
        Many IELTS test-takers focus solely on vocabulary and grammar, overlooking the critical importance of essay
        structure. However, structure accounts for 25% of your Task 2 score through the{" "}
        <strong>Coherence and Cohesion</strong> criterion. A well-structured essay:
      </p>
      <ul>
        <li>Helps the examiner follow your argument easily</li>
        <li>Demonstrates your ability to organize ideas logically</li>
        <li>Ensures you address all parts of the question</li>
        <li>Makes your writing appear more academic and sophisticated</li>
        <li>Helps you write faster under time pressure</li>
      </ul>

      {/* Tip Box */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Pro Tip from OpenIELTS</h4>
            <p className="text-gray-700 text-sm mb-0">
              Students who master essay structure before focusing on vocabulary and grammar typically see faster
              score increases. Structure provides the framework that makes your advanced language features more
              effective and noticeable to examiners.
            </p>
          </div>
        </div>
      </div>

      <h2 id="time-management">Time Management for Writing Task 2</h2>
      <p>
        With only 40 minutes for Writing Task 2, efficient time allocation is crucial. Follow this breakdown to
        ensure you complete all parts of your essay:
      </p>

      {/* Time Allocation */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-green-300 rounded-2xl p-6 my-6">
        <h3 className="font-bold text-center text-gray-900 mb-4">40-Minute Time Allocation</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          {[
            { time: "5 min", label: "Steps 1–2: Analyze & Plan" },
            { time: "5 min", label: "Step 3: Write Introduction" },
            { time: "20 min", label: "Steps 4–5: Body Paragraphs" },
            { time: "5 min", label: "Step 6: Write Conclusion" },
            { time: "5 min", label: "Step 7: Review & Edit" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-3 shadow-sm">
              <div className="text-2xl font-extrabold text-[#D32F2F]">{item.time}</div>
              <div className="text-xs text-gray-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 id="7-step-structure">The 7-Step Essay Structure for Band 7+</h2>
      <p>
        Follow these seven steps systematically for every Writing Task 2 question. With practice, this process
        will become second nature.
      </p>

      {/* Step Cards */}
      {[
        {
          n: 1,
          title: "Analyze the Question (2 minutes)",
          desc: "Identify the question type, key instructions, and topic focus.",
          bullets: [
            "Underline instruction words (discuss, agree/disagree, advantages/disadvantages)",
            "Circle the topic and specific aspects you need to address",
            "Identify any limitations or conditions in the question",
          ],
          example: {
            heading: "Example Question Analysis",
            body: (
              <div>
                <p className="mb-2 italic text-gray-600">
                  &ldquo;Some people believe that <u>technology has made our lives too complex</u> and the solution is to
                  lead simpler lives without technology. To what extent do you{" "}
                  <u>agree or disagree</u>?&rdquo;
                </p>
                <p className="text-sm">
                  <strong>Question Type:</strong> Opinion (Agree/Disagree)<br />
                  <strong>Topic:</strong> Technology complexity and simpler lives<br />
                  <strong>Instruction:</strong> State your opinion and support it
                </p>
              </div>
            ),
          },
        },
        {
          n: 2,
          title: "Brainstorm and Plan (3 minutes)",
          desc: "Generate ideas and create a paragraph outline.",
          bullets: [
            "Jot down 2–3 main ideas for each side of the argument",
            "Select your strongest points that directly answer the question",
            "Plan your paragraph structure: which ideas go in which paragraph",
            "Note down relevant examples or evidence for each point",
          ],
          example: {
            heading: "Planning Example",
            body: (
              <div className="text-sm space-y-1">
                <p><strong>Position:</strong> Partially agree — technology adds complexity but also benefits</p>
                <p><strong>Paragraph 1 (Complexity):</strong> Information overload, constant connectivity, privacy concerns</p>
                <p><strong>Paragraph 2 (Benefits):</strong> Efficiency, access to information, healthcare advances</p>
                <p><strong>Paragraph 3 (Balance):</strong> Need for digital literacy and mindful use, not complete rejection</p>
              </div>
            ),
          },
        },
        {
          n: 3,
          title: "Write the Introduction (5 minutes)",
          desc: "Write a 3-sentence introduction that sets up your essay.",
          bullets: [
            "Sentence 1: Paraphrase the question topic",
            "Sentence 2: State your thesis/position clearly",
            "Sentence 3: Outline what you will discuss in the essay",
          ],
          example: {
            heading: "Introduction Example",
            body: (
              <div className="text-sm space-y-2 font-serif">
                <p><strong>1. Paraphrase:</strong> &ldquo;In contemporary society, technological advancements have significantly transformed how people live and work.&rdquo;</p>
                <p><strong>2. Thesis:</strong> &ldquo;While some argue that these developments have unnecessarily complicated modern life, I believe that technology ultimately provides more benefits than drawbacks.&rdquo;</p>
                <p><strong>3. Outline:</strong> &ldquo;This essay will examine both perspectives before concluding that a balanced approach to technology use is most advisable.&rdquo;</p>
              </div>
            ),
          },
        },
        {
          n: 4,
          title: "Develop Body Paragraph 1 (10 minutes)",
          desc: "Present your first main argument with supporting details.",
          bullets: [
            "Topic Sentence: Clearly state the paragraph's main idea",
            "Explanation: Expand on your topic sentence",
            "Example: Provide a specific example or evidence",
            "Analysis: Explain how the example supports your point",
            "Linking Sentence: Connect to the next paragraph",
          ],
          example: {
            heading: "Body Paragraph 1 Example",
            body: (
              <div className="text-sm space-y-2 font-serif">
                <p><strong>Topic Sentence:</strong> &ldquo;Admittedly, technology has introduced certain complexities into daily life.&rdquo;</p>
                <p><strong>Explanation:</strong> &ldquo;The constant connectivity enabled by smartphones means many people feel pressured to be available around the clock, leading to increased stress and blurred boundaries between work and personal life.&rdquo;</p>
                <p><strong>Example:</strong> &ldquo;For instance, a recent study found that digital overload contributes to burnout in 40% of professionals in developed countries.&rdquo;</p>
                <p><strong>Analysis:</strong> &ldquo;This demonstrates how technological conveniences can paradoxically create new sources of anxiety and complication.&rdquo;</p>
              </div>
            ),
          },
        },
        {
          n: 5,
          title: "Develop Body Paragraph 2 (10 minutes)",
          desc: "Present your second main argument with a different perspective or additional evidence.",
          bullets: [
            "Follow the same structure as Body Paragraph 1",
            "Ensure this paragraph presents a distinct idea, not just repetition",
            "Use transition words to show the relationship (however, on the other hand, conversely)",
            "Maintain a consistent position throughout",
          ],
          example: {
            heading: "Body Paragraph 2 Example",
            body: (
              <div className="text-sm space-y-2 font-serif">
                <p><strong>Topic Sentence:</strong> &ldquo;Despite these challenges, technology has overwhelmingly improved efficiency and access to information.&rdquo;</p>
                <p><strong>Explanation:</strong> &ldquo;Digital tools have automated tedious tasks, while the internet provides instant access to knowledge that was previously difficult to obtain.&rdquo;</p>
                <p><strong>Example:</strong> &ldquo;For example, online banking saves countless hours that people can redirect to more meaningful activities, and educational platforms like Khan Academy offer free learning resources to millions worldwide.&rdquo;</p>
                <p><strong>Analysis:</strong> &ldquo;These advancements demonstrate technology&apos;s capacity to simplify rather than complicate important aspects of life.&rdquo;</p>
              </div>
            ),
          },
        },
        {
          n: 6,
          title: "Write the Conclusion (5 minutes)",
          desc: "Summarize your main points and restate your position.",
          bullets: [
            "Sentence 1: Paraphrase your thesis statement",
            "Sentence 2: Summarize your main arguments",
            "Sentence 3: Offer a final thought or recommendation",
            "DO NOT introduce new ideas in the conclusion",
          ],
          example: {
            heading: "Conclusion Example",
            body: (
              <div className="text-sm space-y-2 font-serif">
                <p><strong>1. Restate Thesis:</strong> &ldquo;In conclusion, while technology undoubtedly introduces certain complexities to modern living, its benefits substantially outweigh these drawbacks.&rdquo;</p>
                <p><strong>2. Summary:</strong> &ldquo;The efficiency gains and access to information that technology enables far surpass the challenges of digital overload.&rdquo;</p>
                <p><strong>3. Final Thought:</strong> &ldquo;Rather than rejecting technology entirely, individuals and societies would benefit from developing digital literacy and mindful usage habits.&rdquo;</p>
              </div>
            ),
          },
        },
        {
          n: 7,
          title: "Review and Edit (5 minutes)",
          desc: "Check for errors and improve clarity.",
          bullets: [
            "Read through your entire essay once",
            "Check for spelling, punctuation, and grammar errors",
            "Ensure you've answered all parts of the question",
            "Verify that your essay has a clear position throughout",
            "Count your words to ensure you've written at least 250",
          ],
          example: null,
        },
      ].map((step) => (
        <div
          key={step.n}
          className="bg-white border-2 border-gray-200 hover:border-[#D32F2F] rounded-2xl p-6 mb-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-red-100 text-[#D32F2F] flex items-center justify-center font-extrabold text-lg shrink-0">
              {step.n}
            </span>
            {step.title}
          </h3>
          <p className="text-gray-600 mb-3 text-sm">
            <strong>Key Actions:</strong> {step.desc}
          </p>
          <ul className="space-y-1 mb-4">
            {step.bullets.map((b, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-[#D32F2F] font-bold shrink-0 mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
          {step.example && (
            <div className="bg-slate-50 border-l-4 border-blue-400 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">{step.example.heading}:</h4>
              {step.example.body}
            </div>
          )}
        </div>
      ))}

      <h2 id="question-types">Adapting the Structure for Different Question Types</h2>
      <p>
        While the 7-step structure works for all Task 2 questions, you need to adapt your approach slightly based
        on the question type.
      </p>

      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Question Type</th>
              <th className="text-left px-4 py-3 font-semibold">Structure Adaptation</th>
              <th className="text-left px-4 py-3 font-semibold">Body Paragraph Focus</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                type: "Opinion (Agree/Disagree)",
                structure: "Clear position in introduction; maintain throughout",
                body: "P1: Reasons for your position\nP2: Counterargument + refutation OR Additional reasons",
              },
              {
                type: "Discussion (Discuss both views)",
                structure: "Neutral introduction; balanced discussion",
                body: "P1: One perspective with examples\nP2: Other perspective with examples",
              },
              {
                type: "Advantages/Disadvantages",
                structure: "Neutral introduction presenting the topic",
                body: "P1: Advantages with examples\nP2: Disadvantages with examples",
              },
              {
                type: "Problem/Solution",
                structure: "Introduction identifies the problem",
                body: "P1: Causes/effects of problem\nP2: Solutions with implementation",
              },
              {
                type: "Two-part Question",
                structure: "Introduction addresses both questions",
                body: "P1: Answer to first question\nP2: Answer to second question",
              },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100">{row.type}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.structure}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100 whitespace-pre-line">{row.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="band-9-example">Complete Band 9 Essay Example</h2>
      <p>
        Here is a full essay demonstrating the 7-step structure in practice. Study how each paragraph fulfils a
        specific purpose.
      </p>

      <div className="bg-slate-50 border-l-4 border-blue-500 rounded-lg p-6 my-6 font-serif leading-relaxed">
        <h3 className="font-bold text-lg text-gray-900 mb-4 font-sans">
          Question: &quot;Some people believe that unpaid community service should be a compulsory part of high school
          programmes. To what extent do you agree or disagree?&quot;
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>[Introduction]</strong> The question of whether community service should be made mandatory for
            high school students has generated considerable debate in recent years. While some oppose compulsory
            volunteering on philosophical grounds, I strongly believe that requiring students to participate in
            unpaid community work would be enormously beneficial for both individuals and society as a whole. This
            essay will argue that the personal development and civic benefits outweigh any drawbacks.
          </p>
          <p>
            <strong>[Body 1 — Personal Development]</strong> Firstly, compulsory community service equips students
            with practical life skills that formal education often neglects. Working with elderly residents,
            environmental projects, or local charities exposes young people to diverse social realities and fosters
            empathy. For example, research by the University of California found that students who completed 50
            hours of community service demonstrated significantly higher levels of civic responsibility and emotional
            intelligence than their peers. These qualities are increasingly valued by universities and employers
            alike, making community service a powerful supplement to academic qualifications.
          </p>
          <p>
            <strong>[Body 2 — Societal Benefit]</strong> Furthermore, mandatory volunteerism addresses a growing
            shortage of community support that governments struggle to fund. Schools could partner with local
            charities, hospitals, and conservation groups to direct student efforts where they are most needed.
            Japan&apos;s long-standing tradition of obligatory school community activities has demonstrably
            strengthened social cohesion, and studies suggest similar programmes in Western countries could reduce
            youth alienation and antisocial behaviour. The economic value of student volunteer hours would also
            represent a substantial contribution to the social sector.
          </p>
          <p>
            <strong>[Conclusion]</strong> In conclusion, making community service a compulsory component of high
            school education would produce well-rounded graduates while addressing real community needs. The
            personal growth students gain and the tangible value they provide to society make this a policy worth
            implementing widely. Schools and governments should collaborate to design meaningful programmes that
            benefit all stakeholders.
          </p>
        </div>
      </div>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          { mistake: "Off-topic response", fix: "Always re-read the question before writing each paragraph" },
          { mistake: "No clear thesis", fix: "State your position explicitly in the introduction" },
          { mistake: "One mega-paragraph", fix: "Use 4–5 paragraphs with clear topic sentences" },
          { mistake: "Under 250 words", fix: "Aim for 260–290 words to avoid automatic penalties" },
          { mistake: "Introducing new ideas in conclusion", fix: "Only summarize what you've already argued" },
          { mistake: "Informal language", fix: "Avoid contractions, slang, and first-person casual phrases" },
        ].map((item, i) => (
          <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
            <p className="font-bold text-red-700 text-sm mb-1">✗ {item.mistake}</p>
            <p className="text-gray-700 text-sm">✓ {item.fix}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Ready to Practice?</h4>
            <p className="text-gray-700 text-sm">
              Use OpenIELTS&apos; AI writing coach to get instant feedback on your essays. Our AI evaluates all four
              IELTS criteria and provides specific suggestions to push your band score higher.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
