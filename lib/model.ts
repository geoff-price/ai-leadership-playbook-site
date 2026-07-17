// The operating model: the through-line that connects the individual ideas.
// Each stage answers one question and maps to the essay that teaches it. The
// order is load-bearing (diagnose before you measure), so this is authored, not
// derived from the ideas list.

export type Stage = {
  no: string; // "01"
  verb: string; // one-word name of the move
  question: string; // the question this stage answers
  gist: string; // one line: what the move is
  slug: string; // the idea/essay that teaches it
};

export const stages: Stage[] = [
  {
    no: "01",
    verb: "Frame",
    question: "Is this a strategy, or an activity list?",
    gist: "Name the real obstacle in the way of value. With no diagnosis there is no strategy, only ambition with a target stapled on top.",
    slug: "good-strategy-bad-strategy",
  },
  {
    no: "02",
    verb: "Choose",
    question: "Which one problem is worth solving, and winnable?",
    gist: "Out of the whole tangle, forge the single problem that is both important and addressable, then concentrate your force there.",
    slug: "the-crux",
  },
  {
    no: "03",
    verb: "Locate",
    question: "Where in the flow does the problem actually bind?",
    gist: "Find the one step that governs output, and point AI at that, not at whatever happens to be easiest to automate.",
    slug: "the-goal",
  },
  {
    no: "04",
    verb: "Prove",
    question: "Is it moving real output, not just activity?",
    gist: "Measure the outcome the mission depends on, not the motion around it. If it has no number, it is not yet a result.",
    slug: "measure-what-matters",
  },
];
