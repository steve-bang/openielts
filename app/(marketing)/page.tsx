import Image from "next/image";
import { BookOpen, Bot, ChartLine, Check, PenBox, PlayCircle, Presentation, Rocket, Smartphone, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div
                className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold glass-effect">
                <i className="fas fa-sparkles mr-2"></i>AI-Powered Learning Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master IELTS with <span className="text-yellow-300">AI-Powered</span> Precision
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Join thousands of students worldwide achieving their dream IELTS scores. Get personalized
                feedback, expert guidance, and community support—all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-white text-white hover:bg-gray-100">
                  <Rocket className="mr-2" /> <span>Start Free Trial</span>
                </button>
                <button className="btn-secondary border-white text-[#D32F2F] hover:bg-white hover:text-[#D32F2F]">
                  <PlayCircle className="mr-2" /> Watch Demo
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-gray-200">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-gray-200">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-gray-200">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="Students learning IELTS" width={600} height={400} className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Band 8.0 Achieved!</div>
                      <div className="text-sm text-gray-600">Writing Module</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white scroll-indicator">
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="stat-number">50K+</div>
              <div className="text-gray-600 font-medium">Global Students</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}

            >
              <div className="stat-number">150+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="stat-number">1M+</div>
              <div className="text-gray-600 font-medium">Essays Reviewed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="stat-number">24/7</div>
              <div className="text-gray-600 font-medium">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full text-[#D32F2F] text-sm font-semibold">
              Why Choose OpenIELTS
            </div>
            <h2 className="section-title">Powerful Features for Your Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to excel in IELTS, powered by cutting-edge AI technology and expert human
              guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg">
              <div className="feature-icon">
                <Bot />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Powered Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant, detailed feedback on your writing with our advanced AI that understands IELTS
                criteria and provides actionable improvements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg"
              style={{ animationDelay: "0.1s" }}>
              <div className="feature-icon">
                <Presentation />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Teachers</h3>
              <p className="text-gray-600 leading-relaxed">
                Access certified IELTS instructors for personalized guidance, detailed reviews, and live
                tutoring sessions whenever you need them.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg"
              style={{ animationDelay: "0.2s" }}>
              <div className="feature-icon">
                <i className="fas fa-users"></i>
                <Users />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow learners worldwide, share experiences, exchange tips, and motivate each
                other towards success.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg"
              style={{ animationDelay: "0.3s" }}>
              <div className="feature-icon">
                <ChartLine />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your improvement with detailed analytics, performance graphs, and personalized insights
                to optimize your learning path.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg"
              style={{ animationDelay: "0.4s" }}>
              <div className="feature-icon">
                <BookOpen />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Extensive Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access thousands of practice questions, sample essays, video tutorials, and study materials for
                all IELTS modules.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 card-hover animate-fade-in shadow-lg"
              style={{ animationDelay: "0.5s" }}>
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
                <Smartphone />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Learn Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Study on any device with our responsive platform. Practice on-the-go with our mobile-optimized
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full text-[#D32F2F] text-sm font-semibold">
              Complete IELTS Preparation
            </div>
            <h2 className="section-title">Master All Four Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training for every aspect of the IELTS exam, starting with our flagship Writing
              module.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-3xl p-8 text-white animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4"><PenBox /></div>
                <h3 className="text-3xl font-bold mb-4">Writing</h3>
                <p className="text-lg mb-6 opacity-90">
                  Our flagship module with AI-powered essay analysis, task 1 & 2 practice, band score
                  prediction, and detailed improvement suggestions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center"><i className="fas fa-check-circle mr-3"></i>Instant AI feedback
                  </li>
                  <li className="flex items-center"><i className="fas fa-check-circle mr-3"></i>Expert teacher reviews
                  </li>
                  <li className="flex items-center"><i className="fas fa-check-circle mr-3"></i>1000+ practice prompts
                  </li>
                  <li className="flex items-center"><i className="fas fa-check-circle mr-3"></i>Sample band 9 essays
                  </li>
                </ul>
                <button
                  className="bg-white text-[#D32F2F] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                  Start Writing Practice
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 card-hover animate-fade-in border border-gray-200"
                style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl mb-3 text-[#D32F2F]"><i className="fas fa-book-reader"></i></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Reading</h3>
                <p className="text-gray-600 mb-4">Practice with authentic passages, timed tests, and strategy guides
                  for all question types.</p>
                <div className="inline-flex items-center
    rounded-full
    px-4 py-1.5
    text-sm font-semibold
    text-[#D32F2F]
    bg-[rgba(211,47,47,0.1)]">Coming Soon</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 card-hover animate-fade-in border border-gray-200"
                style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl mb-3 text-[#D32F2F]"><i className="fas fa-headphones"></i></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Listening</h3>
                <p className="text-gray-600 mb-4">Train with real exam recordings, transcripts, and accent
                  familiarization exercises.</p>
                <div className="inline-flex items-center
    rounded-full
    px-4 py-1.5
    text-sm font-semibold
    text-[#D32F2F]
    bg-[rgba(211,47,47,0.1)]">Coming Soon</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 card-hover animate-fade-in border border-gray-200"
                style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl mb-3 text-[#D32F2F]"><i className="fas fa-microphone"></i></div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Speaking</h3>
                <p className="text-gray-600 mb-4">Record responses, get pronunciation feedback, and practice with AI
                  conversation partners.</p>
                <div className="inline-flex items-center
    rounded-full
    px-4 py-1.5
    text-sm font-semibold
    text-[#D32F2F]
    bg-[rgba(211,47,47,0.1)]">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full text-[#D32F2F] text-sm font-semibold">
              Simple Process
            </div>
            <h2 className="section-title">How OpenIELTS Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to start your journey towards IELTS success
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div
                className="w-20 h-20 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                1</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sign Up Free</h3>
              <p className="text-gray-600">Create your account in seconds and get immediate access to our platform.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div
                className="w-20 h-20 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                2</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Take Assessment</h3>
              <p className="text-gray-600">Complete a quick diagnostic test to determine your current level and goals.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div
                className="w-20 h-20 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                3</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Practice & Learn</h3>
              <p className="text-gray-600">Follow your personalized learning path with AI guidance and expert support.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div
                className="w-20 h-20 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                4</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ace Your Exam</h3>
              <p className="text-gray-600">Achieve your target band score with confidence and proven strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-red-50 rounded-full text-[#D32F2F] text-sm font-semibold">
              Success Stories
            </div>
            <h2 className="section-title">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful students who achieved their dream IELTS scores
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Band 8.5 - Writing</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                  className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;OpenIELTS transformed my writing skills! The AI feedback was incredibly detailed, and having
                access to expert teachers made all the difference. I jumped from band 6.0 to 8.5 in just 3
                months!&rdquo;
              </p>
            </div>
            <div className="testimonial-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-800">Mohammed Al-Rashid</div>
                  <div className="text-sm text-gray-500">Band 9.0 - Writing</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                  className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;The community support was amazing! I could practice with students from around the world and get
                instant feedback. The platform is intuitive and the resources are comprehensive.&rdquo;
              </p>
            </div>
            <div className="testimonial-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-gray-800">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Band 7.5 - Overall</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                  className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;As a working professional, I needed flexible learning. OpenIELTS let me study at my own pace.
                The progress tracking kept me motivated, and I achieved my target score on the first attempt!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Achieve Your Dream IELTS Score?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Join 50,000+ students worldwide who are mastering IELTS with OpenIELTS. Start your free trial
              today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-white hover:bg-gray-100 text-lg">
                <i className="fas fa-rocket mr-2"></i>Start Free Trial Now
              </button>
              <button
                className="btn-secondary border-white text-[#D32F2F] hover:bg-white hover:text-[#D32F2F] text-lg">
                <i className="fas fa-calendar mr-2"></i>Schedule a Demo
              </button>
            </div>
            <div className="mt-8 text-white text-sm">
              <i className="fas fa-shield-alt mr-2"></i>No credit card required • Cancel anytime • 14-day free trial
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
