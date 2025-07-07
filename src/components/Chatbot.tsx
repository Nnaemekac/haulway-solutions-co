import { ChevronLeft } from "@carbon/icons-react";
import { useState, useRef, useEffect } from "react";

const BOT_COLOR = "#00FFD1";

type Message = {
  from: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[];
};
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: any;
  }
}

const initialMessages: Message[] = [
  {
    from: "bot",
    text: "Hi there! 👋 What do you need help with today?",
    options: [
      { label: "🛠 IT Solutions", value: "it" },
      { label: "👥 BPO Outsourcing", value: "bpo" },
      { label: "🤝 Book a Consultation", value: "book" },
      { label: "❓ Something else", value: "else" },
    ],
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [awaitingEscalation, setAwaitingEscalation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function handleOption(value: string) {
    if (value === "it") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "🛠 IT Solutions" },
        {
          from: "bot",
          text: `Got it! Here's everything you need to know about our IT builds.`,
        },
      ]);
      setTimeout(() => window.open("/it-services", "_blank"), 1200);
    } else if (value === "bpo") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "👥 BPO Outsourcing" },
        {
          from: "bot",
          text: `Great! Here's how we help companies scale their teams.`,
        },
      ]);
      setTimeout(() => window.open("/bpo-solutions", "_blank"), 1200);
    } else if (value === "book") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "🤝 Book a Consultation" },
        {
          from: "bot",
          text: `Let’s get that booked for you.`,
        },
      ]);
      setTimeout(() => window.open("https://calendly.com/grascope", "_blank"), 1200);
    } else if (value === "else") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "❓ Something else" },
        {
          from: "bot",
          text: `No problem. Let me connect you to someone from our team.`,
        },
      ]);
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "bot",
            text: "Would you like to chat with a team member?",
            options: [
              { label: "Yes", value: "escalate" },
              { label: "No", value: "noescalate" },
            ],
          },
        ]);
        setAwaitingEscalation(true);
      }, 1200);
    } else if (value === "escalate") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "Yes" },
        {
          from: "bot",
          text: "Connecting you to a team member...",
        },
      ]);
      setTimeout(() => {
    // Open a new tab with a dedicated Tawk.to chat page
    window.open("https://wa.me/2348182931756", "_blank");
  }, 1200);
    } else if (value === "noescalate") {
      setMessages((msgs) => [
        ...msgs,
        { from: "user", text: "No" },
        {
          from: "bot",
          text: `No worries! You can also email us at <a href="mailto:contact@grascope.com" style="color:${BOT_COLOR}">contact@grascope.com</a>`,
        },
      ]);
    }
  }

  function handleSend() {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      {
        from: "bot",
        text: "Would you like to chat with a team member?",
        options: [
          { label: "Yes", value: "escalate" },
          { label: "No", value: "noescalate" },
        ],
      },
    ]);
    setInput("");
    setAwaitingEscalation(true);
  }
  function handleRestart() {
    setMessages(initialMessages);
    setInput("");
    setAwaitingEscalation(false);
  }

  function handleClose() {
    setOpen(false);
    handleRestart();
  }

  const notAtStart = messages.length > 1 || messages[0] !== initialMessages[0];

  return (
    <>
      {/* Sticky Bubble */}
      <button
        className="fixed z-[9999] bottom-6 right-6 shadow-lg rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold text-[#141416] hover:scale-105 transition text-white border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-full before:opacity-20 before:mix-blend-overlay"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,255,209,0.25)" }}
      >
        💬
      </button>
      {/* Chatbot Window */}
      {open && (
        <div className="fixed z-[9999] bottom-28 right-6 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#00FFD1]">
          <div className="flex items-center justify-between px-4 py-3 bg-[#141416]">
            <div className="flex items-center gap-2">
              {notAtStart && (
                <button
                  className="text-lg font-bold px-2 py-1 rounded hover:bg-[#00FFD1] border border-[#00FFD1] transition"
                  onClick={handleRestart}
                  aria-label="Back to Start"
                  style={{ marginRight: 4 }}
                >
                  <ChevronLeft />
                </button>
              )}
              <span className="font-bold text-[#FFF]">Askcope</span>
            </div>
            <button
              className="text-[#FFF] text-xl font-bold"
              onClick={handleClose}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div className="flex-1 px-4 py-3 overflow-y-auto bg-[#1E1E1E]" style={{ maxHeight: 350 }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-xl px-3 py-2 text-sm max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-[#F7F8FA] text-[#141416]"
                      : "bg-[#00FFD1] text-[#141416] font-semibold"
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
            {/* Show options if available */}
            {messages[messages.length - 1]?.options && (
              <div className="flex flex-wrap gap-2 mt-2">
                {messages[messages.length - 1].options!.map((opt) => (
                  <button
                    key={opt.value}
                    className="relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay px-3 py-1 rounded-full font-semibold text-xs hover:bg-[#00e6b8] transition"
                    onClick={() => handleOption(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Input for custom messages */}
          <div className="flex items-center border-t border-gray-200 px-2 py-2 bg-[#222222]">
            <input
              className="flex-1 bg-transparent outline-none text-sm text-[#FFF] px-2"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              disabled={awaitingEscalation && !!messages[messages.length - 1]?.options}
            />
            <button
              className="ml-2 px-3 py-1 cursor-pointer text-[#FFF] rounded-full font-semibold text-xs hover:bg-[#00e6b8] transition relative text-white z-[1] rounded-[.5rem] border-none bg-[linear-gradient(111.85deg,rgba(253,253,253,0.3)_5.74%,rgba(253,253,253,0.2)_68.32%)] shadow-[0_4px_24px_-3px_rgba(0,0,0,0.2)] backdrop-blur-[20px] before:absolute before:inset-0 before:z-[-1] before:bg-[#159B48] before:rounded-[.5rem] before:opacity-20 before:mix-blend-overlay"
              onClick={handleSend}
              disabled={!input.trim() || (awaitingEscalation && !!messages[messages.length - 1]?.options)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}