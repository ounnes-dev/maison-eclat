import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { FaqItem } from '../types/studio';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="border-t border-[#2B211C]/15">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-[#2B211C]/15">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
              onClick={() => handleToggle(item.id)}
              className="flex w-full min-h-[56px] items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#8C4B55]"
            >
              <span className="font-serif text-lg md:text-[20px] leading-snug text-[#2B211C]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center text-[#8A7A6B]"
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 text-[#2B211C]" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4 text-[#2B211C]" strokeWidth={1.5} />
                )}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                className="pb-6 pr-8 md:pr-14 text-[15px] leading-[1.7] text-[#4E4541]"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
