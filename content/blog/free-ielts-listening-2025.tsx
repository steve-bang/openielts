export default function FreeListeningTest2025Content() {
  return (
    <div className="prose-content">
      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        This free IELTS Listening practice test mirrors the format and difficulty of the real exam. Complete all
        four sections, then check your answers and read the full audio transcript below.
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Test Instructions</h4>
            <ul className="text-gray-700 text-sm space-y-1 mt-2">
              <li>• Set a timer for 30 minutes (plus 10 minutes for answer transfer)</li>
              <li>• Do not stop or rewind the audio — in the real test you hear it once</li>
              <li>• Write answers as you listen, then transfer to this answer sheet</li>
              <li>• For fill-in-blank questions: spelling counts and you may write no more than specified words</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="section-1">Section 1 — Social Conversation</h2>
      <p className="text-gray-600 text-sm mb-4">
        <strong>Context:</strong> A conversation between a new student and a university housing officer.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 my-4">
        <h3 className="font-bold text-gray-900 mb-4 text-base">Questions 1–10: Form Completion</h3>
        <p className="text-sm text-gray-500 mb-4 italic">Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th colSpan={2} className="text-left px-4 py-3 font-bold text-gray-900 border-b">UNIVERSITY STUDENT ACCOMMODATION FORM</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Student Name:", "Zhang Wei"],
                ["Student ID Number:", "(1) ________"],
                ["Course:", "(2) ________ Engineering"],
                ["Preferred Accommodation Type:", "(3) ________"],
                ["Maximum Weekly Budget:", "£(4) ________"],
                ["Move-in Date:", "(5) ________ September"],
                ["Length of Stay:", "(6) ________ months"],
                ["Special Dietary Requirements:", "(7) ________"],
                ["Emergency Contact:", "Mother — (8) ________ Zhang"],
                ["Contact Phone:", "(9) +44 ________"],
                ["Preferred Room Floor:", "(10) ________ floor or above"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-2.5 text-gray-700 font-medium border-b border-gray-100 w-1/2">{row[0]}</td>
                  <td className="px-4 py-2.5 text-gray-600 border-b border-gray-100">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="section-2">Section 2 — Information Monologue</h2>
      <p className="text-gray-600 text-sm mb-4">
        <strong>Context:</strong> A guide giving a tour of a new community library.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 my-4 space-y-4">
        <h3 className="font-bold text-gray-900 text-base">Questions 11–15: Multiple Choice</h3>
        <p className="text-sm text-gray-500 italic">Choose the correct letter, A, B, or C.</p>

        {[
          {
            n: 11,
            q: "The library's new digital section opens at what time on weekdays?",
            options: ["A. 7:30 am", "B. 8:00 am", "C. 9:00 am"],
            answer: "B",
          },
          {
            n: 12,
            q: "Which service is available on the ground floor only?",
            options: ["A. Printing and scanning", "B. Language learning pods", "C. Meeting room booking"],
            answer: "A",
          },
          {
            n: 13,
            q: "The children's story time session takes place on:",
            options: ["A. Monday and Friday mornings", "B. Tuesday and Thursday afternoons", "C. Saturday mornings only"],
            answer: "C",
          },
        ].map((item) => (
          <div key={item.n} className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-800 mb-2 text-sm"><span className="font-bold text-[#D32F2F] mr-1">{item.n}.</span>{item.q}</p>
            <div className="space-y-1">
              {item.options.map((opt, i) => (
                <p key={i} className="text-sm text-gray-600 pl-4">{opt}</p>
              ))}
            </div>
          </div>
        ))}

        <h3 className="font-bold text-gray-900 text-base pt-2">Questions 16–20: Matching</h3>
        <p className="text-sm text-gray-500 italic">Match each library section (16–20) with the correct description (A–G). There are more descriptions than sections.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Sections</p>
            {["16. Fiction Collection", "17. Research Hub", "18. Maker Space", "19. Quiet Study Zone", "20. Community Board"].map((s, i) => (
              <p key={i} className="text-sm text-gray-700 py-1">{s} — ________</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Descriptions</p>
            {["A. Recently reorganized by genre", "B. Open 24 hours to members", "C. Requires advance booking", "D. No electronic devices allowed", "E. Free community use", "F. New equipment added last month", "G. Located on the second floor only"].map((d, i) => (
              <p key={i} className="text-sm text-gray-700 py-1">{d}</p>
            ))}
          </div>
        </div>
      </div>

      <h2 id="section-3">Section 3 — Academic Discussion</h2>
      <p className="text-gray-600 text-sm mb-4">
        <strong>Context:</strong> A tutor and two students discussing a research assignment on renewable energy.
      </p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 my-4">
        <p className="text-sm text-gray-500 italic mb-4">Questions 21–30: Answer the questions. Write NO MORE THAN THREE WORDS for each answer.</p>
        {[
          { n: 21, q: "What is the main focus of the assignment?" },
          { n: 22, q: "Which energy source does the tutor suggest they include as a case study?" },
          { n: 23, q: "The submission deadline is which date in March?" },
          { n: 24, q: "What formatting style should references follow?" },
          { n: 25, q: "The tutor suggests the word count should be no more than how many words?" },
        ].map((item) => (
          <div key={item.n} className="py-2 border-b border-gray-100 last:border-0">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-[#D32F2F] mr-2">{item.n}.</span>
              {item.q} <span className="text-gray-400">__________</span>
            </p>
          </div>
        ))}
      </div>

      <h2 id="answer-key">Answer Key & Audio Transcript</h2>

      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 my-6">
        <h3 className="font-bold text-green-900 mb-4">Answer Key</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Section 1</p>
            {["1. 20194883", "2. Mechanical", "3. En-suite single", "4. 150", "5. 3rd", "6. 9", "7. Vegetarian", "8. Mei-Lin", "9. 7891 234 567", "10. Third"].map((a, i) => (
              <p key={i} className="text-sm text-gray-700 py-0.5">{a}</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Sections 2–3</p>
            {["11. B", "12. A", "13. C", "16. A", "17. G", "18. F", "19. D", "20. E", "21. Solar energy costs", "22. Iceland (geothermal)"].map((a, i) => (
              <p key={i} className="text-sm text-gray-700 py-0.5">{a}</p>
            ))}
          </div>
        </div>
      </div>

      <h2 id="band-estimate">Band Score Estimator</h2>
      <div className="overflow-x-auto my-6 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="gradient-bg text-white">
              <th className="text-left px-4 py-3 font-semibold">Correct (out of 40)</th>
              <th className="text-left px-4 py-3 font-semibold">Band Score</th>
              <th className="text-left px-4 py-3 font-semibold">Level</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["39–40", "9.0", "Expert"],
              ["37–38", "8.5", "Very Good"],
              ["35–36", "8.0", "Very Good"],
              ["32–34", "7.5", "Good"],
              ["30–31", "7.0", "Good"],
              ["26–29", "6.5", "Competent"],
              ["23–25", "6.0", "Competent"],
              ["18–22", "5.5", "Modest"],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{row[0]}</td>
                <td className="px-4 py-3 font-bold text-[#D32F2F] border-b border-gray-100">{row[1]}</td>
                <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-lg p-5 my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Want More Practice Tests?</h4>
            <p className="text-gray-700 text-sm">
              OpenIELTS offers a full library of IELTS Listening practice tests with real-time scoring, audio
              transcripts, and question-level explanations. Create your free account to track your progress and
              identify your weak areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
