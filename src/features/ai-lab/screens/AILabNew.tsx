/**
 * AI Lab - Kid-Friendly Step-by-Step Wizard
 * Guided creation flow with mascot, celebrations, and immersive UX
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Wand2,
  MessageCircle,
  Rocket,
  Trash2,
  Download,
  Copy,
  Check,
  AlertCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  RotateCcw,
  X,
  History,
} from 'lucide-react';
import {
  aiLabFreeService,
  type CreationType,
  type CreationResult,
} from '../../../lib/services/ai-lab-free.service';

type WizardStep = 'choose' | 'prompt' | 'generating' | 'result';

// ─── Mascot Component ────────────────────────────────────────────────
function Mascot({ message, mood = 'happy' }: { message: string; mood?: 'happy' | 'thinking' | 'excited' | 'waving' }) {
  const faces: Record<string, string> = {
    happy: '\u{1F916}',
    thinking: '\u{1F914}',
    excited: '\u{1F929}',
    waving: '\u{1F44B}',
  };

  return (
    <motion.div
      className="flex items-start gap-3 max-w-md"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <motion.div
        className="text-5xl flex-shrink-0"
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {faces[mood]}
      </motion.div>
      <motion.div
        className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-lg border-2 border-purple-100 text-gray-700 font-medium text-base leading-relaxed"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {message}
      </motion.div>
    </motion.div>
  );
}

// ─── Step Indicator ──────────────────────────────────────────────────
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i < current ? 'bg-purple-500' : i === current ? 'bg-purple-400' : 'bg-purple-200'
          }`}
          animate={{ width: i === current ? 32 : 12 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      ))}
    </div>
  );
}

// ─── History Drawer ──────────────────────────────────────────────────
function HistoryDrawer({
  open,
  onClose,
  history,
  onSelect,
  onDelete,
  onClear,
}: {
  open: boolean;
  onClose: () => void;
  history: CreationResult[];
  onSelect: (item: CreationResult) => void;
  onDelete: (id: string) => void;
  onClear: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-5 border-b border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                My Creations
              </h3>
              <div className="flex items-center gap-2">
                {history.length > 0 && (
                  <button
                    onClick={onClear}
                    className="text-xs text-red-500 hover:text-red-600 font-medium px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {history.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <div className="text-5xl mb-4">{'\u{1F3A8}'}</div>
                  <p className="font-medium">No creations yet!</p>
                  <p className="text-sm mt-1">Your masterpieces will appear here</p>
                </div>
              ) : (
                history.map((item) => (
                  <motion.button
                    key={item.id}
                    className="w-full text-left p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onSelect(item);
                      onClose();
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{item.type === 'webapp' ? '\u{1F310}' : '\u{1F916}'}</span>
                          <span className="text-xs font-medium text-purple-500 bg-purple-100 px-2 py-0.5 rounded-full">
                            {item.type === 'webapp' ? 'Webapp' : 'Chat'}
                          </span>
                          <span className="text-xs text-gray-400">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 font-medium truncate">{item.prompt}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(item.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-red-100 rounded-lg ml-2"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main AI Lab Component ───────────────────────────────────────────
export function AILabNew() {
  const [step, setStep] = useState<WizardStep>('choose');
  const [selectedType, setSelectedType] = useState<CreationType | null>(null);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<CreationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<CreationResult[]>([]);
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [loadingTip, setLoadingTip] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isConfigured = aiLabFreeService.isConfigured();

  const loadingTips = [
    "ClayBot is thinking really hard...",
    "Mixing colors and code together...",
    "Adding extra sparkles...",
    "Almost there, hang tight!",
    "Making it extra awesome for you...",
    "Teaching the AI your cool idea...",
  ];

  useEffect(() => {
    setHistory(aiLabFreeService.getHistory());
  }, []);

  // Cycle loading tips
  useEffect(() => {
    if (step !== 'generating') return;
    const interval = setInterval(() => {
      setLoadingTip((prev) => (prev + 1) % loadingTips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [step]);

  // Focus textarea when entering prompt step
  useEffect(() => {
    if (step === 'prompt') {
      setTimeout(() => textareaRef.current?.focus(), 300);
    }
  }, [step]);

  const stepIndex = { choose: 0, prompt: 1, generating: 2, result: 3 }[step];

  const handleSelectType = (type: CreationType) => {
    setSelectedType(type);
    setPrompt('');
    setError(null);
    setResult(null);
    setStep('prompt');
  };

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || !selectedType) return;
    if (!isConfigured) {
      setError('API key not configured. Please check your setup.');
      return;
    }

    setStep('generating');
    setError(null);
    setResult(null);
    setLoadingTip(0);

    try {
      const creation = await aiLabFreeService.generate({
        prompt: prompt.trim(),
        type: selectedType,
      });
      setResult(creation);
      setHistory(aiLabFreeService.getHistory());
      setStep('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong!');
      setStep('prompt');
    }
  }, [prompt, selectedType, isConfigured]);

  const handleCopy = () => {
    if (result?.output) {
      navigator.clipboard.writeText(result.output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([result.output], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `claymind-creation-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleStartOver = () => {
    setStep('choose');
    setSelectedType(null);
    setPrompt('');
    setResult(null);
    setError(null);
    setIsFullscreen(false);
  };

  const handleRemix = () => {
    setStep('prompt');
    setResult(null);
    setIsFullscreen(false);
  };

  const handleHistorySelect = (item: CreationResult) => {
    setResult(item);
    setSelectedType(item.type);
    setPrompt(item.prompt);
    setStep('result');
  };

  const examplePrompts = selectedType ? aiLabFreeService.getExamplePrompts(selectedType) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          {step !== 'choose' && step !== 'generating' && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => {
                if (step === 'prompt') setStep('choose');
                else if (step === 'result') handleRemix();
              }}
              className="p-2.5 bg-white/80 backdrop-blur-sm hover:bg-white rounded-xl shadow-sm border border-purple-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-purple-600" />
            </motion.button>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
              AI Lab
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StepIndicator current={stepIndex} total={4} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHistoryOpen(true)}
            className="relative p-2.5 bg-white/80 backdrop-blur-sm hover:bg-white rounded-xl shadow-sm border border-purple-100 transition-colors"
          >
            <History className="w-5 h-5 text-purple-600" />
            {history.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {history.length}
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* API Key Warning */}
      {!isConfigured && (
        <div className="relative z-10 mx-4 md:mx-8 mb-4">
          <div className="p-3 bg-amber-50 border-2 border-amber-200 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <p className="text-sm text-amber-800 font-medium">Gemini API key missing. Add it to your .env file to start creating!</p>
          </div>
        </div>
      )}

      {/* Wizard Content */}
      <div className="relative z-10 px-4 md:px-8 pb-8">
        <AnimatePresence mode="wait">

          {/* ═══ STEP 1: Choose Mode ═══ */}
          {step === 'choose' && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="max-w-2xl mx-auto pt-8 md:pt-16"
            >
              <div className="mb-8">
                <Mascot
                  message="Hey there! I'm ClayBot. What do you want to create today?"
                  mood="waving"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {/* Webapp Card */}
                <motion.button
                  onClick={() => handleSelectType('webapp')}
                  className="group relative bg-white rounded-3xl p-8 border-3 border-purple-100 hover:border-blue-300 transition-all text-left overflow-hidden shadow-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full" />
                  <motion.div
                    className="text-7xl mb-5 relative z-10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {'\u{1F680}'}
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 relative z-10">Build a Webapp</h3>
                  <p className="text-gray-500 font-medium relative z-10">Make games, tools, and cool interactive stuff!</p>
                  <div className="mt-4 flex items-center gap-1.5 text-blue-500 font-bold text-sm relative z-10">
                    Let's build
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                {/* Chat Card */}
                <motion.button
                  onClick={() => handleSelectType('chat')}
                  className="group relative bg-white rounded-3xl p-8 border-3 border-purple-100 hover:border-green-300 transition-all text-left overflow-hidden shadow-lg hover:shadow-2xl"
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full" />
                  <motion.div
                    className="text-7xl mb-5 relative z-10"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {'\u{1F916}'}
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 relative z-10">Ask ClayBot</h3>
                  <p className="text-gray-500 font-medium relative z-10">Learn about AI, coding, and tech!</p>
                  <div className="mt-4 flex items-center gap-1.5 text-green-500 font-bold text-sm relative z-10">
                    Start chatting
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ═══ STEP 2: Prompt Input ═══ */}
          {step === 'prompt' && selectedType && (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="max-w-2xl mx-auto pt-6"
            >
              <div className="mb-6">
                <Mascot
                  message={
                    selectedType === 'webapp'
                      ? "Describe your dream app! The more detail, the cooler it'll be."
                      : "What would you like to learn about? Ask me anything!"
                  }
                  mood="happy"
                />
              </div>

              {/* Suggestion Chips */}
              <div className="mt-8 mb-4">
                <p className="text-sm font-bold text-purple-400 uppercase tracking-wide mb-3">Try one of these:</p>
                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((example, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setPrompt(example)}
                      className={`px-4 py-2.5 text-sm rounded-full font-semibold transition-all border-2 ${
                        prompt === example
                          ? 'bg-purple-500 text-white border-purple-500 shadow-lg'
                          : 'bg-white text-purple-700 border-purple-200 hover:border-purple-400 hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {example}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Prompt Textarea */}
              <div className="mt-6">
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={
                      selectedType === 'webapp'
                        ? 'A memory matching game with cute animals...'
                        : 'How do self-driving cars work?...'
                    }
                    className="w-full p-5 pr-14 border-3 border-purple-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none resize-none text-lg bg-white shadow-sm transition-all placeholder:text-gray-300"
                    rows={4}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                        handleGenerate();
                      }
                    }}
                  />
                  {prompt.trim() && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-3 bottom-3 p-2 text-gray-300 hover:text-gray-500 transition-colors"
                      onClick={() => setPrompt('')}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 ml-1">
                  Ctrl/Cmd + Enter to generate
                </p>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Generate Button */}
              <motion.button
                onClick={handleGenerate}
                disabled={!prompt.trim() || !isConfigured}
                className={`mt-6 w-full py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-3 transition-all shadow-lg ${
                  prompt.trim() && isConfigured
                    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:shadow-2xl hover:brightness-110 active:scale-[0.98]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={prompt.trim() ? { scale: 1.01 } : undefined}
                whileTap={prompt.trim() ? { scale: 0.98 } : undefined}
                animate={
                  prompt.trim() && isConfigured
                    ? { boxShadow: ['0 4px 20px rgba(147,51,234,0.3)', '0 4px 30px rgba(147,51,234,0.5)', '0 4px 20px rgba(147,51,234,0.3)'] }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-6 h-6" />
                {selectedType === 'webapp' ? 'Build My App!' : 'Ask ClayBot!'}
              </motion.button>
            </motion.div>
          )}

          {/* ═══ STEP 3: Generating (Immersive Loading) ═══ */}
          {step === 'generating' && (
            <motion.div
              key="generating"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-lg mx-auto pt-16 md:pt-24 text-center"
            >
              {/* Orbiting particles */}
              <div className="relative w-40 h-40 mx-auto mb-10">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-purple-200"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border-4 border-pink-200"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-blue-200"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Center emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-6xl"
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {selectedType === 'webapp' ? '\u{2728}' : '\u{1F4AD}'}
                  </motion.div>
                </div>

                {/* Orbiting dots */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-purple-400"
                    style={{ top: '50%', left: '50%' }}
                    animate={{
                      x: [0, Math.cos((i * Math.PI) / 2) * 70, 0],
                      y: [0, Math.sin((i * Math.PI) / 2) * 70, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <motion.p
                key={loadingTip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-3"
              >
                {loadingTips[loadingTip]}
              </motion.p>

              <p className="text-gray-400 font-medium text-sm">
                Creating: "{prompt.length > 50 ? prompt.slice(0, 50) + '...' : prompt}"
              </p>
            </motion.div>
          )}

          {/* ═══ STEP 4: Result ═══ */}
          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className={isFullscreen ? 'fixed inset-0 z-30 bg-white flex flex-col' : 'max-w-4xl mx-auto pt-4'}
            >
              {/* Celebration header */}
              {!isFullscreen && (
                <motion.div
                  className="mb-5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Mascot
                    message={
                      result.type === 'webapp'
                        ? "WOW! Look what you built! You're a real developer now!"
                        : "Great question! Here's what I found out for you!"
                    }
                    mood="excited"
                  />
                </motion.div>
              )}

              {/* Action Bar */}
              <motion.div
                className={`flex items-center justify-between mb-3 ${isFullscreen ? 'px-4 pt-3' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold"
                  >
                    <Check className="w-4 h-4" />
                    {result.type === 'webapp' ? 'App Ready!' : 'Answer Ready!'}
                  </motion.div>
                </div>

                <div className="flex items-center gap-1.5">
                  <motion.button
                    onClick={handleCopy}
                    className="p-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shadow-sm"
                    title="Copy code"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-500" />}
                  </motion.button>

                  {result.type === 'webapp' && (
                    <>
                      <motion.button
                        onClick={handleDownload}
                        className="p-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shadow-sm"
                        title="Download"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-4 h-4 text-gray-500" />
                      </motion.button>
                      <motion.button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shadow-sm"
                        title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isFullscreen ? <Minimize2 className="w-4 h-4 text-gray-500" /> : <Maximize2 className="w-4 h-4 text-gray-500" />}
                      </motion.button>
                    </>
                  )}

                  {isFullscreen && (
                    <motion.button
                      onClick={() => setIsFullscreen(false)}
                      className="p-2.5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </motion.button>
                  )}
                </div>
              </motion.div>

              {/* Result Content */}
              <motion.div
                className={`${isFullscreen ? 'flex-1 px-4 pb-4' : ''}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {result.type === 'webapp' ? (
                  <div className={`border-3 border-purple-200 rounded-2xl overflow-hidden bg-white shadow-xl ${isFullscreen ? 'h-full' : ''}`}>
                    <iframe
                      srcDoc={result.output}
                      className={`w-full ${isFullscreen ? 'h-full' : 'h-[500px] md:h-[600px]'}`}
                      sandbox="allow-scripts allow-forms allow-modals allow-popups"
                      title="Your Creation"
                    />
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border-2 border-purple-100 shadow-lg p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-3xl flex-shrink-0">{'\u{1F916}'}</div>
                      <div>
                        <p className="text-sm font-bold text-purple-500 mb-1">ClayBot says:</p>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {result.output}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Bottom Actions */}
              {!isFullscreen && (
                <motion.div
                  className="flex items-center gap-3 mt-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={handleRemix}
                    className="flex-1 py-4 rounded-2xl bg-white border-2 border-purple-200 text-purple-600 font-bold text-lg flex items-center justify-center gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-sm"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Remix It
                  </button>
                  <button
                    onClick={handleStartOver}
                    className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    Create Something New
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* History Drawer */}
      <HistoryDrawer
        open={historyOpen}
        onClose={() => setHistoryOpen(false)}
        history={history}
        onSelect={handleHistorySelect}
        onDelete={(id) => {
          aiLabFreeService.deleteHistoryItem(id);
          setHistory(aiLabFreeService.getHistory());
        }}
        onClear={() => {
          aiLabFreeService.clearHistory();
          setHistory([]);
        }}
      />
    </div>
  );
}
