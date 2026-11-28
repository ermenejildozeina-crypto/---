import { MessageSquare, RotateCcw, Send, X } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import type { Language, TranslationDictionary } from '../data/i18n';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

interface ChatWidgetProps {
  language: Language;
  currency: 'USD' | 'KGS';
  t: TranslationDictionary['chat'];
  onGoToBooking: () => void;
}

export function ChatWidget({
  language,
  currency,
  t,
  onGoToBooking,
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const listEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  const sendMessage = async (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInputValue('');
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          currency,
          messages: nextHistory.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string; errorCode?: string };

      if (!response.ok || !data.reply) {
        if (data.errorCode === 'MISSING_API_KEY') {
          throw new Error(t.errorMissingKey);
        }
        throw new Error(t.errorGeneric);
      }

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: data.reply,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : t.errorGeneric);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(inputValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(inputValue);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setErrorMessage(null);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={t.launcherAria}
          className="inline-flex items-center gap-2.5 h-12 px-5 bg-[#181715] text-[#F7F6F3] border border-[#F7F6F3]/18 rounded-sm shadow-lg hover:bg-[#2A2723] transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A]"
        >
          <MessageSquare className="w-4 h-4 text-[#D4B88C]" aria-hidden="true" />
          <span className="text-sm font-medium">{t.launcherLabel}</span>
        </button>
      ) : (
        <section
          aria-label={t.panelTitle}
          className="w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[82vh] bg-[#F7F6F3] text-[#181715] border border-[#181715]/18 rounded-sm shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#181715] text-[#F7F6F3] flex items-center justify-between gap-3 shrink-0">
            <div className="min-w-0">
              <h2 className="font-display text-xl font-semibold leading-tight truncate">
                {t.panelTitle}
              </h2>
              <p className="text-xs text-[#C9C3B8] truncate">{t.panelSubtitle}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleReset}
                aria-label={t.resetAria}
                title={t.resetAria}
                className="inline-flex items-center justify-center w-9 h-9 text-[#C9C3B8] hover:text-[#F7F6F3] hover:bg-[#F7F6F3]/10 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A]"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t.closeAria}
                className="inline-flex items-center justify-center w-9 h-9 text-[#C9C3B8] hover:text-[#F7F6F3] hover:bg-[#F7F6F3]/10 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Message Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F6F3]">
            {/* Initial Concierge Greeting */}
            <div className="bg-[#EEECE7] border border-[#181715]/10 rounded-sm p-3.5 text-sm text-[#292622] leading-relaxed">
              {t.welcomeMessage}
            </div>

            {/* Quick Prompt Suggestions when conversation hasn't started */}
            {messages.length === 0 && (
              <div className="space-y-2 pt-1">
                <div className="text-xs font-medium text-[#6B645A]">{t.suggestionsLabel}</div>
                <div className="flex flex-col gap-2">
                  {t.suggestions.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => void sendMessage(prompt)}
                      className="text-left px-3.5 py-2.5 text-xs font-medium text-[#181715] bg-[#EEECE7]/70 hover:bg-[#EEECE7] border border-[#181715]/12 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    message.role === 'user'
                      ? 'bg-[#181715] text-[#F7F6F3]'
                      : 'bg-[#EEECE7] text-[#181715] border border-[#181715]/10'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#EEECE7] border border-[#181715]/10 rounded-sm px-3.5 py-2.5 text-xs text-[#5E584F]">
                  {t.thinkingLabel}
                </div>
              </div>
            )}

            {errorMessage && (
              <div
                role="alert"
                className="p-3 bg-[#F3E7E4] border border-[#9E4234]/25 rounded-sm text-xs text-[#6B271D]"
              >
                {errorMessage}
              </div>
            )}

            <div ref={listEndRef} />
          </div>

          {/* Footer Booking Link + Input Composer */}
          <div className="border-t border-[#181715]/10 bg-[#EEECE7] p-3 space-y-2.5 shrink-0">
            <div className="flex items-center justify-between text-xs text-[#5E584F]">
              <span>{t.bookingHint}</span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onGoToBooking();
                }}
                className="font-medium text-[#785A34] hover:text-[#181715] underline underline-offset-2 cursor-pointer whitespace-nowrap"
              >
                {t.bookingLink}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.inputPlaceholder}
                aria-label={t.inputPlaceholder}
                disabled={isLoading}
                className="flex-1 px-3 py-2.5 text-sm bg-[#F7F6F3] border border-[#181715]/18 text-[#181715] placeholder-[#7C766D] rounded-sm focus:outline-none focus:border-[#8C6D46] resize-none max-h-24 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label={t.sendAria}
                className="inline-flex items-center justify-center w-10 h-10 bg-[#181715] text-[#F7F6F3] hover:bg-[#2F2C27] disabled:opacity-40 disabled:cursor-not-allowed rounded-sm transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
