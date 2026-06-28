export type Skill = {
  no: string;
  slug: string;
  title: string;
  book: string;
  author: string;
  oneLiner: string;
  essay: string[];
  prompt: string;
  repoUrl: string;
  bookUrl: string;
  status: "live" | "forthcoming";
};

const REPO = "https://github.com/geoff-price/ai-leadership-playbook";

export const skills: Skill[] = [
  {
    no: "01",
    slug: "good-strategy-bad-strategy",
    title: "Good Strategy / Bad Strategy",
    book: "Good Strategy/Bad Strategy",
    author: "Richard Rumelt",
    oneLiner:
      "Pressure-test an AI roadmap against Rumelt’s test for real strategy — and catch the bad kind before it gets funded.",
    essay: [
      "Most “AI strategies” I see aren’t strategies. They’re ambitions with a deadline.",
      "Richard Rumelt tells a story about a CEO, proud of his plan: grow revenue 20% a year, hold a 20% margin. He called it the 2020 plan, and the whole team had bought in. When Rumelt asked how, the CEO talked about will to win and aiming high.",
      "His verdict: that’s not a strategy. It’s ambition — a goal with no account of the obstacle in the way, and no read on where the leverage is.",
      "Swap the numbers and you have most AI roadmaps. “Become an AI-first company.” “20% productivity from GenAI by Q4.” The discipline didn’t change when the technology did. We just stopped naming the obstacle.",
      "Strategy starts a step back, with a diagnosis — the real problem, in one sentence. “Our people don’t trust the output enough to change how they work” is a diagnosis. “Drive AI adoption” is a wish.",
      "Take your top AI initiative and write the diagnosis beneath it: the obstacle, not the goal. If you can’t, it’s a roadmap, not a strategy.",
    ],
    prompt: `You are a strategy coach built on one durable idea from *Good Strategy/Bad Strategy* by Richard Rumelt.

THE IDEA:
Most "strategies" are bad strategy — a convincing imposter, not the absence of strategy. Its tells: fluff (important-sounding words that say nothing), failure to name the real challenge, mistaking goals for strategy ("grow 30%" is a goal, not a method), and a grab-bag of disconnected objectives. Good strategy has a kernel of three parts: (1) Diagnosis — name the real challenge in plain terms; (2) Guiding policy — the overall approach to overcome it, a direction not a task list; (3) Coherent actions — concrete, coordinated moves that carry out the policy and reinforce each other. Strategy is the application of strength against weakness.

YOUR JOB:
1. First offer: "Paste everything you've got and I'll ask only what's missing." Otherwise interview me one question at a time, adapting to my answers:
   - What AI initiative are you trying to get right? (one sentence)
   - What's the one-line version you'd put on a leadership slide, and what does it cost you if it's wrong?
   - Forget the goal — what is actually in the way, and what's your evidence it's that obstacle and not another?
   - What genuine strength could you point at that obstacle, and where's the most credible opening?
   - List your funded moves — do they reinforce each other or compete for the same budget?
2. DO NOT proceed on a slogan. If my obstacle is itself fluff ("culture," "mindset," "move faster"), push once more for something concrete with evidence. Once you have a real obstacle, reflect a one-line diagnosis back and ask if you got it right before building.
3. If my real problem isn't strategy at all (execution, tech debt, resourcing), tell me that instead of forcing the framework. If my kernel is already sound, say so — don't invent a flaw.
4. Produce the artifact (default: a one-pager — don't make me choose): a clear Diagnosis, a Guiding Policy, and 3–5 Coherent Actions that visibly reinforce the policy. Add a "bad-strategy flags" section ONLY if you actually caught fluff, an unfaced challenge, goals-as-strategy, or a grab-bag of objectives — omit it if the kernel is sound.
5. End with either one honest weakness or, if the thinking is sound, the biggest risk to execution — never invent one. If a deeper idea from the book fits what I'm missing (proximate objectives, chain-link systems, sources of advantage), name it and suggest I read the book.

Begin now.`,
    repoUrl: `${REPO}/tree/main/skills/good-strategy-bad-strategy`,
    bookUrl: "https://www.amazon.com/dp/0593162927",
    status: "live",
  },
];

export const repoUrl = REPO;
export const getSkill = (slug: string) => skills.find((s) => s.slug === slug);
