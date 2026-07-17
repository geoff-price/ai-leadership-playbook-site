// The operating model as a cycle: Frame -> Choose -> Locate -> Prove -> repeat.
// Pure inline SVG so it stays crisp at any size, themes with the site colors, and
// is easy to screenshot for sharing. Labels are short by design; the detail lives
// in the list below it.

import { stages } from "@/lib/model";

const C = 180; // center of the 360x360 viewBox
const R = 118; // radius the nodes sit on
const NODE_R = 40;
const GAP = 24; // degrees of clear space around each node, so arrows don't touch

// nodes at 12, 3, 6, 9 o'clock, clockwise
const ANGLES = [-90, 0, 90, 180];

function pt(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
}

export default function LoopDiagram() {
  const nodes = stages.map((s, i) => ({ ...s, angle: ANGLES[i] }));

  // one clockwise arc in each gap between consecutive nodes
  const arcs = ANGLES.map((a, i) => {
    const from = a + GAP;
    const to = ANGLES[(i + 1) % 4] + (i === 3 ? 360 : 0) - GAP;
    const p1 = pt(from, R);
    const p2 = pt(to, R);
    return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${R} ${R} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  });

  return (
    <svg
      viewBox="0 0 360 360"
      role="img"
      aria-label="The operating model as a loop: Frame, Choose, Locate, Prove, then repeat."
      className="mx-auto block h-auto w-full max-w-[360px]"
    >
      <defs>
        <marker
          id="loop-arrow"
          viewBox="0 0 10 10"
          refX="7"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* faint full ring, the cycle underneath */}
      <circle cx={C} cy={C} r={R} fill="none" stroke="var(--line)" strokeWidth={1} />

      {/* the flow arrows */}
      {arcs.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={1.5}
          markerEnd="url(#loop-arrow)"
        />
      ))}

      {/* center label: it never really ends */}
      <text
        x={C}
        y={C - 6}
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), monospace", letterSpacing: "0.18em" }}
        fontSize={9}
        fill="var(--faint)"
      >
        REPEAT
      </text>
      <text
        x={C}
        y={C + 12}
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono), monospace", letterSpacing: "0.14em" }}
        fontSize={8}
        fill="var(--faint)"
      >
        NEVER DONE
      </text>

      {/* nodes */}
      {nodes.map((n) => {
        const c = pt(n.angle, R);
        return (
          <g key={n.no}>
            <circle
              cx={c.x}
              cy={c.y}
              r={NODE_R}
              fill="rgba(236,233,225,0.03)"
              stroke="var(--line)"
              strokeWidth={1}
            />
            <text
              x={c.x}
              y={c.y - 8}
              textAnchor="middle"
              style={{ fontFamily: "var(--font-mono), monospace", letterSpacing: "0.16em" }}
              fontSize={8.5}
              fill="var(--accent)"
            >
              {n.no}
            </text>
            <text
              x={c.x}
              y={c.y + 11}
              textAnchor="middle"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
              fontSize={15}
              fill="var(--text)"
            >
              {n.verb}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
