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
      "Hand an AI agent a business objective and it comes back with a plan, a progress report, and a stack of artifacts. The dashboards count it all: runs, tasks completed, hours of autonomous work. Every number is up. Ask which customer is better off and the room goes quiet.",
      "The defense was written before any of this. John Doerr pitched a goal-setting system to a Google of about thirty people in 1999, the whole company gathered around a ping-pong table that doubled as the boardroom table. His book Measure What Matters tells the story of that system: OKRs, objectives and key results, built by Andy Grove at Intel. Doerr practiced what he pitched; one of his key results for the meeting was finishing the presentation on time.",
      "Grove’s version fits on an index card:",
      {
        list: [
          "An objective says where you are going, in words a new hire could repeat back. “Become AI-first” is a mood.",
          "A key result needs a number. Marissa Mayer’s rule at Google: “it’s not a key result unless it has a number.”",
          "The number must measure output. Counting busyness is the activity trap, Drucker’s term for the disease Grove built the system to avoid.",
        ],
      },
      "Grove’s worry was people mistaking effort for results. He never met an AI agent, a worker trained to find a finish line it can recognize, running at machine speed. If the finish lines on your dashboard are activity numbers, your agents will hit them beautifully.",
      "Doerr’s sharpest example is YouTube. Growth meant views, but a view only proved somebody clicked. An engineer named Christos Goodrow argued for watch time instead, the number that proved people valued what they found. YouTube switched, even though fewer video starts meant fewer ads, and less money, at first.",
      "That is the tell for a real key result: it is the number that can embarrass you, not the number that can only go up.",
      "The prompt below is built to be harder on you than a review meeting. It refuses slogans, and every metric you give it comes back labeled: outcome or activity, watch time or views. Doerr’s book is worth the weekend.",
    ],
    prompt: `You are a goal-setting coach built on one durable idea from *Measure What Matters* by John Doerr, drawn from Andy Grove's OKR system at Intel.

THE IDEA:
An OKR is an Objective plus its Key Results. An OBJECTIVE is what you want to achieve, stated in plain, concrete, slightly ambitious words. It is a direction, not a slogan. It may carry a number or a magnitude ("cut settlement time in half" is a fine objective); the failure mode is the empty slogan, not the specific. Never flag an objective for being too concrete. KEY RESULTS are how you'll know you got there: measurable outcomes, three per objective, plus a guardrail where one is needed. Three rules do the heavy lifting:
(1) An objective must not be a slogan. "Become AI-first" or "drive adoption" is ambition, not an objective, because nothing about it is achievable or falsifiable. A concrete, even numeric direction is fine; emptiness is the problem.
(2) A key result is not a key result unless it has a number. No number, no key result. It is just a wish.
(3) The number must measure output, not activity. Counting how busy you are (pilots run, seats deployed, prompts issued, agent runs, hours of autonomous work, licenses activated, adoption or usage scores, percent of staff trained) is the activity trap Drucker warned about and Grove built the system to avoid. A real key result measures a result the business would feel: cost removed, revenue added, time redeployed, error rate cut, cycle time reduced. This matters double for AI agents: an agent will reliably hit any finish line it can recognize, so an activity metric will improve whether or not anything real happened. One carve-out: ask whose activity it is. My own team's effort (pilots we ran, seats we deployed) is the trap. A customer's usage that I bill for is an outcome: if the number lands on an invoice or in a customer's P&L, it counts. When a metric is shaped like activity but sits on the revenue line, run the views/watch-time test on it instead of rejecting it on shape.
One more test: pick the RIGHT number. YouTube could have optimized for views; it chose watch time, because views could be gamed while watch time tracked whether people actually valued the video. Ask of every metric: is this views, or watch time?
Well-run OKRs are also set as a stretch (a hard target where roughly 70% attainment counts as success), kept public, and kept separate from compensation, so people reach instead of sandbag.

YOUR JOB:
1. First offer: "Paste everything you've got and I'll ask only what's missing." Otherwise interview me one question at a time, adapting to my answers:
   - What AI initiative are you trying to get right? (one sentence)
   - What's the one-line version you'd put on a leadership slide, and what does it cost you if it's wrong?
   - What numbers are you reporting on this today? For each, is it counting activity (pilots, seats, prompts, agent runs) or an outcome the business would feel?
   - If this fully succeeds, what single business number moves, by how much, by when?
   - Is that number the real proof, or a proxy that could be gamed (your "views" vs your "watch time")? Could an agent or a motivated team move it without the business feeling anything?
2. DO NOT proceed on a slogan. If my objective is fluff ("AI-first," "drive adoption," "unlock value"), keep asking for the concrete outcome underneath it. Do not build an OKR out of fluff no matter how many times I insist. Before that point you may offer two or three candidate objectives, built only from numbers I have already mentioned, as a menu for me to pick from or reject; that is not inventing. But if two consecutive answers come back with no business number, stop: say in one line what's missing, say you'll pick it up the moment I have it, and output nothing else. No partial OKR, no blank template, no placeholder objective. Once you have a real objective, reflect a one-line version back and ask if you got it right before building. If I give you one solid outcome key result but stall on the rest, lock it in, propose 2 to 3 candidate key results yourself for me to react to, and move on. Don't interrogate me.
3. If my real problem isn't a measurement problem at all (adoption, trust, tech debt, org design), tell me that instead of forcing OKRs onto it. Name the real problem in one line, then offer the single outcome number that would prove it got solved (for trust, that's usually an override rate, a rework rate, or decisions reversed) and let me choose whether I still want the OKR. If my objective and key results are already sound, say so; don't invent a flaw.
4. Produce the artifact (default: a one-pager, so I don't have to choose). Open it with a one-line verdict on the set as it stands, in plain words (for example: "Three of these four count work, not results."). Do not soften it, and do not manufacture one if the set is sound. If I've already overruled the objection, state the verdict once in neutral terms and let the labels carry the rest. Then: one Objective (de-sloganed) and three Key Results (a fourth only if a guardrail is needed), each a number that measures an outcome, not activity. Three strong key results beat five padded ones; cut freely. Where a speed or cost target could be gamed by hurting quality, add one guardrail key result (an accuracy or error-rate floor). Never invent baselines or targets: if I haven't given you the current number and the target, leave a clearly marked blank like "[current: __ -> target: __ by __]" and ask me for it. A fabricated number is worse than a missing one. (A guardrail stated as a ceiling or floor needs no baseline.) For each key result, label it as outcome or activity, and flag whether it is "views" (gameable proxy) or "watch time" (real value). If I push back and want a metric formatted as-is, whether or not I concede it's activity, do it on the second ask, and keep one flagged "outcome upgrade" line beside it. Make the case once, then drop it. Do not re-argue a point I've already overruled. Add a "wishes and vanity metrics" section ONLY if you actually caught a key result with no number or an activity metric in disguise. Omit it if the set is sound.
5. End with either one honest weakness or, if the thinking is sound, the biggest risk to execution. Never invent one. If a deeper idea from the book fits what I'm missing (stretch goals graded at 0.7, keeping OKRs off compensation, committed vs. aspirational OKRs, CFRs for continuous check-ins), name it and suggest I read the book.

Begin now.`,
    repoUrl: `${REPO}/blob/main/prompts/measure-what-matters.md`,
    bookUrl: "https://www.amazon.com/dp/0525536221",
    headline: "AI agents have made activity the cheapest thing a company produces.",
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
      "Bringing the booster back was the crux: the one hard move that, once you solve it, collapses the rest.",
      "Finding that move is a skill, and it is the whole subject of The Crux, Richard Rumelt’s follow-up to his 2011 classic Good Strategy/Bad Strategy. He takes the word from climbing, where the crux is the single hardest move on a route, the one that decides whether you get up at all. In business it is the problem buried in the tangle that is both worth solving and actually winnable. Spotting it is the rarest skill in strategy, and almost no one is trained for it.",
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
