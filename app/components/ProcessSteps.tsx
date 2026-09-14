import type { ProcessStep } from "../data/project";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  const firstRow = steps.slice(0, 3);
  const secondRow = steps.slice(3);

  return (
    <section className="mx-auto max-w-[95%] px-6 py-10 md:px-10 ">
      <div className="text-center">
        <p className="text-[28px] font-medium tracking-wide text-black">Our Process</p>
        <h2 className="mt-3 font-serif text-[44px] text-black md:text-4xl">How We Get It Done</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {firstRow.map((step, i) => (
          <StepCard key={step.title} step={step} number={i + 1} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {secondRow.map((step, i) => (
          <StepCard key={step.title} step={step} number={i + 4} />
        ))}
      </div>
    </section>
  );
}

function StepCard({ step, number }: { step: ProcessStep; number: number }) {
  return (
    <div className="rounded-lg border border-[#F6C09C] bg-white p-7">
      <div className="flex h-[48px] w-[48px] bg-[#F9D9C8] items-center justify-center rounded-full bg-peach font-serif text-black">
        {number}
      </div>
      <h3 className="mt-5 font-medium text-[28px] text-black">{step.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-black">{step.description}</p>
    </div>
  );
}
