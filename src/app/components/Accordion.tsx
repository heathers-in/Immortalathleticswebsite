import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-white/20 hover:border-immortal-red/40 transition-colors">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-xl">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                openIndex === index ? "rotate-180 text-immortal-red" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-zinc-200 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
