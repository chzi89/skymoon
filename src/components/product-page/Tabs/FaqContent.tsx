import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What product categories does Sky Moon Trading offer?",
    answer:
      "Rice, citrus and fresh fruits, cotton, natural oils, nuts, dry fruits and other agricultural products.",
  },
  {
    question: "How does Sky Moon Trading work with suppliers?",
    answer:
      "Sky Moon Trading focuses on reliable sourcing and long-term partnerships with suppliers and international buyers.",
  },
  {
    question: "Which rice products are available?",
    answer:
      "The catalog includes basmati, long grain, premium and parboiled rice.",
  },
  {
    question: "Which citrus and fruit products are available?",
    answer:
      "The catalog includes oranges, kinnow, mandarins, fresh citrus and seasonal fruits.",
  },
  {
    question: "Which other products are available?",
    answer:
      "Cotton, olive oil, natural cooking oils, almonds, cashews, walnuts, pistachios, dates, raisins, dried figs and dried apricots.",
  },
  {
    question: "Who leads Sky Moon Trading?",
    answer: "CEO: Liton Sen. Managing Director / Manager: MD Shafique.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
