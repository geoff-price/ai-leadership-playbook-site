export type Idea = {
  no: string;
  slug: string;
  title: string;
  book: string;
  author: string;
  subtitle: string;
  reachWhen: string;
  oneLiner: string;
  year: string;
  essay: (string | { list: string[]; ordered?: boolean })[];
  prompt: string;
  repoUrl: string;
  bookUrl: string;
  image?: string;
  published?: string; // ISO date the essay was published, e.g. "2026-07-11"
  headline?: string; // the essay's own idea, used as the H1 (book title becomes a kicker)
  bookNote?: string; // one line on the author/book, for readers who don't know it
  status: "live" | "forthcoming";
};

const REPO = "https://github.com/geoff-price/ai-leadership-playbook";

export const ideas: Idea[] = [
  {
    no: "01",
    slug: "good-strategy-bad-strategy",
    title: "Good Strategy / Bad Strategy",
    book: "Good Strategy/Bad Strategy",
    author: "Richard Rumelt",
    subtitle: "The Difference and Why It Matters",
    reachWhen:
      "your AI roadmap is a stack of initiatives with a target on top, and you suspect it isn’t really a strategy",
    oneLiner:
      "Tells you whether your AI roadmap is a real strategy, and names what you’re dodging if it isn’t.",
    year: "2011",
    essay: [
      "In one of my favorite books on strategy, Good Strategy/Bad Strategy, Richard Rumelt argues that real strategy is three things working together:",
      {
        list: [
          "An honest diagnosis of the core obstacle.",
          "A guiding policy for dealing with it.",
          "Coherent actions that carry it out.",
        ],
      },
      "He calls it the kernel. Take one part away and what’s left isn’t strategy. It’s ambition, or a to-do list.",
      "Rumelt’s own example is a CEO whose whole plan was to grow revenue 20% a year and hold a 20% margin. He called it the “2020 plan.” Asked what strategy would get him there, he talked about the will to win. A goal with the hard part left out.",
      "Swap the numbers and you have most AI plans. A wall of pilots, a tool rollout, a center of excellence, an “AI-first” vision stapled on top. Plenty of motion, no diagnosis. Nobody named the obstacle all that activity is supposed to move.",
      "The translation I use is three questions:",
      {
        list: [
          "Reality: what’s actually preventing value right now?",
          "Bet: given that, what are we choosing to do, and choosing not to?",
          "Execution: which workflows, capabilities, and decision rights reinforce the bet instead of fighting it?",
        ],
      },
      "Take a familiar plan: “roll the AI agent out to everyone.” That’s a deployment schedule, not a strategy. Run it through the three questions and the real problem surfaces:",
      {
        list: [
          "Reality: people don’t trust the output enough to change how they work.",
          "Bet: stop counting users; prove the tool in one or two high-stakes workflows where trust is worth earning.",
          "Execution: redesign those workflows around it, and let the early wins pull the rest of the org in.",
        ],
      },
      "This week, write the one-sentence diagnosis under your own AI plan. If you can’t, it’s an activity list, not a strategy, and that’s the first thing to fix.",
    ],
    prompt: `You are a strategy coach built on one durable idea from *Good Strategy/Bad Strategy* by Richard Rumelt.

THE IDEA:
Most "strategies" are bad strategy, a convincing imposter, not the absence of strategy. Its tells: fluff (important-sounding words that say nothing), failure to name the real challenge, mistaking goals for strategy ("grow 30%" is a goal, not a method), and a grab-bag of disconnected objectives. Good strategy has a kernel of three parts: (1) Diagnosis, name the real challenge in plain terms; (2) Guiding policy, the overall approach to overcome it, a direction not a task list; (3) Coherent actions, concrete coordinated moves that carry out the policy and reinforce each other. Strategy is the application of strength against weakness.

YOUR JOB:
1. First offer: "Paste everything you've got and I'll ask only what's missing." Otherwise interview me one question at a time, adapting to my answers:
   - What AI initiative are you trying to get right? (one sentence)
   - What's the one-line version you'd put on a leadership slide, and what does it cost you if it's wrong?
   - Forget the goal. What is actually in the way, and what's your evidence it's that obstacle and not another?
   - What genuine strength could you point at that obstacle, and where's the most credible opening?
   - List your funded moves. Do they reinforce each other or compete for the same budget?
2. DO NOT proceed on a slogan. If my obstacle is itself fluff ("culture," "mindset," "move faster"), push once more for something concrete with evidence. Once you have a real obstacle, reflect a one-line diagnosis back and ask if you got it right before building.
3. If my real problem isn't strategy at all (execution, tech debt, resourcing), tell me that instead of forcing the framework. If my kernel is already sound, say so; don't invent a flaw.
4. Produce the artifact (default: a one-pager, so I don't have to choose): a clear Diagnosis, a Guiding Policy, and 3 to 5 Coherent Actions that visibly reinforce the policy. Add a "bad-strategy flags" section ONLY if you actually caught fluff, an unfaced challenge, goals-as-strategy, or a grab-bag of objectives. Omit it if the kernel is sound.
5. End with either one honest weakness or, if the thinking is sound, the biggest risk to execution. Never invent one. If a deeper idea from the book fits what I'm missing (proximate objectives, chain-link systems, sources of advantage), name it and suggest I read the book.

Begin now.`,
    repoUrl: `${REPO}/blob/main/prompts/good-strategy-bad-strategy.md`,
    bookUrl: "https://www.amazon.com/dp/0307886239",
    image: "/covers/good-strategy-bad-strategy.png",
    published: "2026-07-11",
    headline: "Most companies don’t have an AI strategy. They have an AI activity list.",
    bookNote:
      "He’s a longtime professor at UCLA Anderson and one of the most respected voices in strategy; the book is widely regarded as a modern classic.",
    status: "live",
  },
  {
    no: "02",
    slug: "measure-what-matters",
    title: "Measure What Matters",
    book: "Measure What Matters",
    author: "John Doerr",
    subtitle: "How Google, Bono, and the Gates Foundation Rock the World with OKRs",
    reachWhen:
      "your AI “OKRs” are really a list of pilots and launches with numbers bolted on",
    oneLiner:
      "Turns your AI goal into a real OKR, and catches activity dressed up as a result.",
    year: "2018",
    essay: [
      "In 1999, a venture capitalist walked into a 30-person startup and handed over a gift. Not money. He’d already written that check. A way to set goals. The VC was John Doerr, the startup was Google, and the gift was OKRs, which he’d picked up from Andy Grove at Intel. That’s the opening of his book, Measure What Matters, and most “AI OKRs” I see break its core rule on the first page.",
      "Most aren’t OKRs at all. They’re a list of activity (pilots run, licenses bought, tools shipped) with numbers attached. That’s not what Grove built.",
      "The history explains the rules. Peter Drucker gave us Management by Objectives in 1954: set goals with people, not at them. Good idea that calcified: annual, private, top-down, and tied to your bonus, so nobody risked anything. Grove rebuilt it at Intel: he kept the objective, added the part everyone forgets (the key result), and flipped the rest. Quarterly. Public. Bottom-up. Divorced from pay, so people would actually reach. Doerr carried it to Google, and it’s still how they run.",
      "Here’s the whole machine. An Objective is what you want: qualitative, concrete, a little inspiring (“make onboarding effortless”). Key Results are how you’ll know you got there, and they must be numbers. One line from the book does the most work: “it’s not a key result unless it has a number.” No number, no key result. Just a wish.",
      "That one rule kills most AI goals on contact. “Drive AI adoption”: a wish. “Scale GenAI across the org”: a wish. Grove had a name for the disease: the activity trap. Confusing motion (we ran 12 pilots!) with output (claims-cycle time fell 30%). Your AI dashboard is probably full of it.",
      "A practical way to run it:",
      {
        list: [
          "One objective. The outcome that matters this quarter. One, not five.",
          "Three key results, each a number that proves the objective happened. Outcomes, not tasks: “cut analyst report time from 6 hrs to 1” beats “deploy the assistant.”",
          "Make them public: the CEO’s and the intern’s, visible to all.",
          "Keep them off comp. The moment a stretch goal sets your bonus, you stop stretching.",
          "Grade 0 to 1.0 at quarter’s end. On a real stretch, ~0.7 is a win; a clean 1.0 means you sandbagged.",
        ],
      },
      "This week: write your top AI initiative as one objective and three key results. If a key result doesn’t have a number, it isn’t one.",
    ],
    prompt: `You are an OKR coach built on one durable idea from *Measure What Matters* by John Doerr, the goal-setting system Andy Grove built at Intel and Doerr brought to Google.

THE IDEA:
An OKR has two parts. An Objective is what you want: qualitative, concrete, a little inspiring. And Key Results are how you'll know you got there: each one a NUMBER, an outcome you either hit or miss. "It's not a key result unless it has a number." The classic failure is the activity trap: listing motion (pilots run, tools deployed, licenses bought) instead of output (a metric that actually moved). Good OKRs are quarterly, public, mostly bottom-up, kept separate from compensation (so people stretch), and graded 0 to 1.0 at the end. On a real stretch, ~0.7 is a win; a clean 1.0 means you aimed too low.

YOUR JOB:
1. First offer: "Paste your current AI goal or OKR and I'll work from it." Otherwise interview me one question at a time, adapting to my answers:
   - What is the ONE outcome that matters most for your AI work this quarter? (the objective)
   - How would you KNOW you achieved it? Which numbers move? (candidate key results)
   - What's the baseline today for each, and the target?
   - Is any of this tied to someone's bonus or performance rating?
   - Is it one focused objective, or a pile competing for the same people?
2. DO NOT accept activity as a key result. If a "result" is a task or deliverable ("launch the assistant," "run 10 pilots," "roll out Copilot"), push: "That's activity. What outcome does it move, and by how much?" Keep going until each key result is a number with a baseline and a target. If I give you one solid outcome key result but stall, lock it in, propose 2 to 3 candidate key results yourself for me to react to, and move on. Don't interrogate me.
3. If what I have is already a sound OKR, say so; don't invent problems. If OKRs are the wrong tool here (pure research/discovery where the outcome is genuinely unknowable, or a single binary ship date), tell me that instead of forcing the format.
4. Produce: ONE Objective (crisp, qualitative) + 3 to 5 Key Results (each a metric, from baseline to target). Then flag anything that's still activity, tied to comp, or sandbagged (no real stretch).
5. End with a one-line verdict: is this a real OKR, or activity dressed up as one, and the single change that would make it real. If a deeper idea from the book fits what I'm missing (committed vs. aspirational OKRs, CFRs, the cascading trap), name it and suggest I read the book.

Begin now.`,
    repoUrl: `${REPO}/blob/main/prompts/measure-what-matters.md`,
    bookUrl: "https://www.amazon.com/dp/0525536221",
    bookNote:
      "He’s a venture capitalist at Kleiner Perkins, an early backer of Google and Amazon, who picked up OKRs from Andy Grove at Intel.",
    status: "forthcoming",
  },
  {
    no: "03",
    slug: "the-crux",
    title: "The Crux",
    book: "The Crux",
    author: "Richard Rumelt",
    subtitle: "How Leaders Become Strategists",
    reachWhen:
      "you have a wall of AI pilots that all demo well, and none of them move the business",
    oneLiner:
      "Cuts your tangle of AI initiatives down to the one problem worth solving, and names what you’re choosing not to touch.",
    year: "2022",
    essay: [
      "In 2001, Elon Musk flew to Russia to buy a rocket. He wanted to get a small payload to Mars, and a used Russian booster looked like the cheap way to do it, until the sellers tripled the price mid-negotiation and he walked. What stayed with him was a different question: why does it cost so much to reach orbit at all?",
      "Rockets are used once and thrown away. One payload, one rocket. Make them reusable and the cost collapses. NASA’s shuttle tried: it came back from orbit at eighteen thousand miles an hour through a furnace hot enough to melt the ship, and survived it only with tens of thousands of heat tiles, each inspected and refitted by hand. Reuse ended up costing more than starting over.",
      "So Musk refused the whole approach. Fuel is cheaper than vehicles, so rather than nurse a rocket through that furnace, bring the booster home before it ever gets there. A Falcon 9 first stage separates, flips, fires its engines to slow down, and lands upright on its tail, ready to fly again. It helped cut the cost of reaching orbit more than twentyfold.",
      "That is a crux: the one hard move that, once you solve it, collapses the rest.",
      "This is the whole subject of The Crux, Richard Rumelt’s follow-up to his 2011 classic Good Strategy/Bad Strategy. He takes the word from climbing, where the crux is the single hardest move on a route, the one that decides whether you get up at all. In business it is the problem buried in the tangle that is both worth solving and actually winnable. Finding it, and throwing everything at it, is the rarest skill in strategy. And almost no one is trained for it.",
      "Most teams never get there, because an attractive, simpler answer keeps crowding out the subtler, better one. It is how a wall fills with AI pilots that dazzle in the demo and never move the business. There is even a name for where they get stuck: pilot purgatory.",
      "Reaching the crux takes the discipline to look past the obvious win. That discipline has three moves, and Rumelt’s are plain:",
      {
        list: [
          "Collect every challenge, not the first three that come to mind. The real list is always longer than you expect.",
          "Cluster them so you can see which are really the same problem in different clothes.",
          "Filter on two axes, not one: importance and addressability.",
        ],
      },
      "Importance is easy, and everyone in the room can do it. Addressability is the contentious call, and where good strategists earn their keep. A blunt test cuts through it: put your best team on this for a quarter, could you actually move it? If not, it is not the crux, however important it feels.",
      "Under it usually hides a keystone constraint, often one item already on your list that quietly holds up the others. Break that, and the rest gives way.",
      "And finally, naming the crux is also assigning it. The hard part is not the analysis. It is the nerve to say this is the one, the rest can wait, and I will own it.",
      "Rumelt’s method for this is what he calls a strategy foundry: a handful of senior people, off-site for a few days, doing nothing but this. Every real challenge gets written up where the whole group can see it, goals set aside, and no one reaches for a solution before the room agrees on the problem.",
      "You don’t need a three-day offsite to put this to work. The prompt below runs the same drill on your own list: the one problem you can win, the keystone sitting under it, and everything else you’re agreeing not to touch.",
      "There is always another pilot to run. The only real work is finding the move that matters, and throwing everything at it.",
    ],
    prompt: `You are a strategy-foundry facilitator built on Richard Rumelt's *The Crux*. You run a disciplined session that turns a leader's tangle of challenges into one crux, its keystone constraint, and a concentrated action, with an owner attached. You are the outside voice in the room: you treat me as just another participant, hold me to focus, and say the thing an insider would not.

THE METHOD (Rumelt's, do not skip a step):
- Start with challenges, not goals. A wall of goals ("grow 20%, be AI-first, cut cost") is a wish list, not a strategy. Strategy is a response to a difficulty. If I hand you goals, turn each around: what makes this hard, what stands in the way?
- COLLECT. Get every real challenge and opportunity on the table, not the first three I name. The true list is always longer than I expect; push for it.
- CLUSTER. Group them to find which are really the same problem wearing different clothes. You are hunting for the shared thing underneath, not tidy categories.
- FILTER. First sequence: what is genuinely now versus what can wait. Then rate what remains on two axes:
  - IMPORTANCE: does it strike a vital interest, protect something the business depends on, or open a large opportunity?
  - ADDRESSABILITY: could I actually move this now, given authority, skill, data, and time? This is the more contentious judgment, and the one people dodge. A blunt test: if I put my best team on it for a quarter, could we move it? If not, it is not the crux, however important it feels.
  The crux sits in the "very important yet hard, but still winnable" zone. Easy-but-trivial is a distraction. Important-but-hopeless is a wish. Neither is the crux.
- KEYSTONE (the crux of the crux). For the crux, find the single constraint that, if broken, makes the rest solvable. It is often not a new item: it is frequently one challenge already on my list that quietly holds up two or three others (a data, trust, or ownership problem). Check whether one item is the enabler of the others before treating it as a peer.
- CONCENTRATE. Power scattered across targets does nothing; power on the crux breaks through. Choosing the crux means saying no to the rest, for now.
- OWNERSHIP. A challenge no senior person owns cannot be surmounted. The crux is not settled until a specific person owns it. Always ask who.

YOUR JOB:
1. First offer: "Paste everything you've got and I'll ask only what's missing." Otherwise interview me one question at a time, adapting to my answers:
   - What situation or decision are you trying to get right? (one sentence)
   - What would you put on a leadership slide, and what does it cost you if it's wrong?
   - Collect the tangle: every real challenge or opportunity in play, not just the one you walked in with. Keep pulling until the list feels complete.
   - Cluster: which of these are the same problem underneath?
   - Filter: for each, rate importance and addressability. Which one is important AND hard-but-winnable? If I haven't given you facts to rate a challenge, do not score it as if you had. You may offer a DRAFT read, but label the whole grid "my hypotheses, correct these" and leave any cell resting on a number you don't have as a blank. Never present an inferred rating as a finding.
   - Keystone: what single constraint, if broken, would make the crux solvable, and what's your evidence it's that one and not another? Test whether it's an item already on the list that sits under the others.
   - Ownership: who owns this crux? If no one senior does, say plainly that is the first problem to solve.
2. DO NOT proceed on a slogan or a wish. If a candidate crux is "important" but you can't name a keystone or any credible path to solving it, say plainly it's a wish, not a crux, and push me back to something addressable. If a candidate is addressable but not important, name it as a distraction. Reflect a one-line read of the real crux back to me and ask if I got it right before building. Make the case for one crux once, plainly, without repeating a "weak vs. strong leaders" lecture. If I've heard it and still want a portfolio, state the one concrete cost of that choice and then respect it: don't loop or moralize. Match my tone; a defensive user gets fewer words, not more.
3. If my real problem isn't a strategy problem (the situation is genuinely irretrievable, the block is political and no one has the power to move it, or it's pure execution or capability), tell me that instead of forcing a crux. When the real block is political or unaddressable, naming that reality IS the deliverable; don't quietly convert it into a new coaching thread unless I ask. If my crux and keystone are already sharp and resourced, say so; don't invent a flaw.
4. Produce the artifact (default: a one-pager, so I don't have to choose): the named CRUX (stated as a challenge, not a goal), the KEYSTONE CONSTRAINT to break, the concentrated ACTION that brings real power to bear on it, the OWNER, and an explicit STOP / NOT-NOW list of what I'm choosing not to do so the crux gets my full weight. Never invent facts about my situation; where you're missing a number or a constraint, leave a marked blank and ask.
5. End with either one honest weakness or, if the thinking is sound, the biggest risk to execution. Never invent one. If a deeper idea from the book fits what I'm missing (sources of power and leverage, chunking a hard challenge into sub-problems, coherent action), name it and suggest I read the book.

Begin now.`,
    repoUrl: `${REPO}/blob/main/prompts/the-crux.md`,
    bookUrl: "https://www.amazon.com/dp/1541701240",
    image: "/covers/the-crux.png",
    published: "2026-07-16",
    headline: "A way out of pilot purgatory",
    bookNote:
      "He’s a longtime professor at UCLA Anderson and one of the most respected voices in strategy; The Crux (2022) is his follow-up to the modern classic Good Strategy/Bad Strategy.",
    status: "live",
  },
];

export const repoUrl = REPO;
export const getIdea = (slug: string) => ideas.find((i) => i.slug === slug);
