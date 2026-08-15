import React from 'react';
import { Sparkles, ArrowRight, Brain, Zap, CheckCircle2, Award, Laptop, MessageSquare, Layers } from 'lucide-react';

export const GuidedPracticeCaseStudy: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Slide 01: Hero Product Showcase */}
      <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111218] via-[#0d0e12] to-[#09090c] border border-neutral-800 p-6 sm:p-10 shadow-2xl relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
                SLIDE 01 / 05
              </span>
              <span className="text-xs text-neutral-400">SchoolAI Core Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Adaptive Guided Practice Canvas
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <Laptop className="w-3.5 h-3.5 text-blue-400" />
              <span>Tablet & Web App</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Real-time AI Co-pilot</span>
            </div>
          </div>
        </div>

        {/* High-Fidelity UI Interface Simulation */}
        <div className="bg-[#0b0c10] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
          {/* Top App Bar */}
          <div className="h-12 bg-neutral-900/90 border-b border-neutral-800 px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-amber-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
              <span className="text-xs font-mono text-neutral-400 ml-2 border-l border-neutral-800 pl-3">
                Grade 8 • Quadratic Equations • Step 2 of 4
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                AI Active Session
              </span>
            </div>
          </div>

          {/* Main 2-Pane Work Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left: Problem & Workpad */}
            <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-neutral-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Active Problem</span>
                  <span className="text-xs text-neutral-400">Time elapsed: 03:42</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  Solve for <span className="text-blue-400 italic">x</span>: 2x² + 5x - 12 = 0
                </h3>
                
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 mb-6">
                  <span className="text-xs text-neutral-400 block mb-2 font-mono">Your Step:</span>
                  <div className="p-3 bg-black/50 rounded-lg border border-neutral-700 font-mono text-sm text-green-400 flex items-center justify-between">
                    <span>(2x - 3)(x + 4) = 0</span>
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-neutral-400">Next Action:</span>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs text-white">
                      Set each factor to zero
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                      Apply quadratic formula
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span>Progress: 50% Mastery</span>
                <span className="text-emerald-400 font-medium">+15 XP earned</span>
              </div>
            </div>

            {/* Right: AI Socratic Tutor Sidebar */}
            <div className="lg:col-span-5 p-6 bg-[#0e1017] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">SchoolAI Socratic Tutor</span>
                    <span className="text-[10px] text-neutral-400">Observing student reasoning</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                    <span className="text-[10px] uppercase font-semibold text-blue-400 block mb-1">Observation</span>
                    Great job factoring the trinomial! Now recall: if the product of two expressions is zero, what must be true about at least one factor?
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
                    <span>Hint Tier 1: Zero-Product Property</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>Ask tutor for guidance...</span>
                  <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 02: Research & Interaction Flow */}
      <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111218] via-[#0d0e12] to-[#09090c] border border-neutral-800 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
                SLIDE 02 / 05
              </span>
              <span className="text-xs text-neutral-400">Interaction Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Scaffolded AI Feedback Loops
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">1. Friction Detection</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Monitors pause duration, backspacing frequency, and wrong attempts without immediately giving away the answer.
              </p>
            </div>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300">
              Trigger: 3 failed factor attempts
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">2. Socratic Scaffolding</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Progressively unrolls 3 tiers of hints: Conceptual reminder → Visual diagram → Step decomposition.
              </p>
            </div>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300">
              Tiered Hint: 1 → 2 → 3
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">3. Mastery Reinforcement</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Synthesizes the key takeaway upon completion and updates the student’s adaptive mastery model.
              </p>
            </div>
            <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300">
              Mastery delta: +12% accuracy
            </div>
          </div>
        </div>
      </div>

      {/* Slide 03: Design System & Micro-Interactions */}
      <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111218] via-[#0d0e12] to-[#09090c] border border-neutral-800 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
                SLIDE 03 / 05
              </span>
              <span className="text-xs text-neutral-400">Design System & Patterns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Conversational UI & Surface Tokens
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              Tutor Message States
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#141722] border border-blue-500/30 text-xs text-neutral-200">
                <span className="text-[10px] text-blue-400 font-mono block mb-1">State: Guiding / Prompt</span>
                "What factors of -24 add up to +5?"
              </div>
              <div className="p-3.5 rounded-xl bg-[#191512] border border-amber-500/30 text-xs text-neutral-200">
                <span className="text-[10px] text-amber-400 font-mono block mb-1">State: Misconception Correction</span>
                "Remember to check the sign: (-3)(8) = -24, and (-3) + 8 = +5."
              </div>
              <div className="p-3.5 rounded-xl bg-[#111c16] border border-emerald-500/30 text-xs text-neutral-200">
                <span className="text-[10px] text-emerald-400 font-mono block mb-1">State: Step Validation</span>
                "Exact solution verified! x = 1.5 or x = -4."
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Visual Foundation Tokens
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-500 block">Primary Blue</span>
                <span className="text-xs font-mono text-blue-400">#3B82F6</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-500 block">Canvas Dark</span>
                <span className="text-xs font-mono text-neutral-300">#0A0A0E</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-500 block">Success Mint</span>
                <span className="text-xs font-mono text-emerald-400">#10B981</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-500 block">Surface Border</span>
                <span className="text-xs font-mono text-neutral-400">#262626</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Engineered with accessible WCAG AAA contrast ratios across interactive input surfaces, math keypads, and chat bubbles.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 04: Usability & Impact Results */}
      <div className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111218] via-[#0d0e12] to-[#09090c] border border-neutral-800 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
                SLIDE 04 / 05
              </span>
              <span className="text-xs text-neutral-400">Measurable Outcomes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Validated Impact & Results
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-3xl sm:text-4xl font-semibold text-white block mb-2">60%</span>
            <h4 className="text-sm font-medium text-blue-400 mb-1">Task Success Rate</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Measured through usability testing and reduction of drop-off points during multi-step problem solving.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-3xl sm:text-4xl font-semibold text-white block mb-2">80%</span>
            <h4 className="text-sm font-medium text-emerald-400 mb-1">Learning Goal Completion</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Redesigned primary learning path reached 80% completion of defined learning goals per student session.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-3xl sm:text-4xl font-semibold text-white block mb-2">8.5</span>
            <h4 className="text-sm font-medium text-indigo-400 mb-1">Heuristic Evaluation Score</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Improved from 5.5 to 8.5 through end-to-end restructuring of the teacher & student feedback channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
