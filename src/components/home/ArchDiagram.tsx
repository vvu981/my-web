import type { PortfolioDictionary } from '../../i18n/portfolio';

type ArchDiagramProps = {
  copy: PortfolioDictionary['diagram'];
};

type Node = { id: string; x: number; y: number; label: string; col: string };
type Edge = { from: string; to: string; delay: string; dur: string };

export function ArchDiagram({ copy }: Readonly<ArchDiagramProps>) {
  const nodes: Node[] = [
    { id: 'browser', x: 56, y: 190, label: copy.nodes.browser, col: '#3fffd2' },
    { id: 'cdn', x: 56, y: 295, label: copy.nodes.cdn, col: '#8b7cff' },
    { id: 'gw', x: 200, y: 240, label: copy.nodes.gateway, col: '#8b7cff' },
    { id: 'auth', x: 345, y: 120, label: copy.nodes.auth, col: '#3fffd2' },
    { id: 'core', x: 345, y: 240, label: copy.nodes.core, col: '#8b7cff' },
    { id: 'worker', x: 345, y: 355, label: copy.nodes.workers, col: '#3fffd2' },
    { id: 'db', x: 490, y: 175, label: copy.nodes.database, col: '#ff6b8a' },
    { id: 'cache', x: 490, y: 305, label: copy.nodes.cache, col: '#ffc46b' },
  ];

  const edges: Edge[] = [
    { from: 'browser', to: 'gw', delay: '0s', dur: '2.2s' },
    { from: 'cdn', to: 'gw', delay: '0.8s', dur: '2.5s' },
    { from: 'gw', to: 'auth', delay: '0.4s', dur: '2.8s' },
    { from: 'gw', to: 'core', delay: '0s', dur: '1.9s' },
    { from: 'gw', to: 'worker', delay: '1.2s', dur: '3.1s' },
    { from: 'core', to: 'db', delay: '0.6s', dur: '2.0s' },
    { from: 'core', to: 'cache', delay: '0.2s', dur: '1.7s' },
    { from: 'worker', to: 'db', delay: '1.5s', dur: '2.4s' },
  ];

  const nodeMap: Record<string, Node> = {};
  nodes.forEach((node) => {
    nodeMap[node.id] = node;
  });

  const edgePath = (edge: Edge): string => {
    const fromNode = nodeMap[edge.from];
    const toNode = nodeMap[edge.to];
    const fromX = fromNode.x + 30;
    const fromY = fromNode.y;
    const toX = toNode.x - 28;
    const toY = toNode.y;
    const midX = (fromX + toX) / 2;
    const midY = Math.min(fromY, toY) - 20;
    return `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
  };

  return (
    <svg viewBox="0 0 580 430" style={{ width: '100%', height: '100%' }}>
      <defs>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r=".8" fill="rgba(63,255,210,0.07)" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L5,2.5 z" fill="rgba(63,255,210,0.3)" />
        </marker>
      </defs>

      <rect width="580" height="430" rx="14" fill="#0d0d1c" />
      <rect width="580" height="430" rx="14" fill="url(#dots)" />

      {[
        { x: 20, y: 14, text: copy.regions[0] },
        { x: 172, y: 14, text: copy.regions[1] },
        { x: 310, y: 14, text: copy.regions[2] },
        { x: 460, y: 14, text: copy.regions[3] },
      ].map((label) => (
        <text
          key={label.text}
          x={label.x}
          y={label.y + 16}
          fontSize="8"
          fill="rgba(63,255,210,0.25)"
          fontFamily="DM Mono, monospace"
          letterSpacing="1.5"
        >
          {label.text}
        </text>
      ))}

      {[156, 298, 440].map((x) => (
        <line
          key={x}
          x1={x}
          y1="10"
          x2={x}
          y2="420"
          stroke="rgba(63,255,210,0.05)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      ))}

      {edges.map((edge) => (
        <path
          key={`edge-${edge.from}-${edge.to}`}
          d={edgePath(edge)}
          fill="none"
          stroke="rgba(63,255,210,0.1)"
          strokeWidth="1.5"
          markerEnd="url(#arr)"
        />
      ))}

      {edges.map((edge) => (
        <circle key={`packet-${edge.from}-${edge.to}`} r="3.5" filter="url(#glow)">
          <animate attributeName="opacity" values="0;1;1;0" dur={edge.dur} begin={edge.delay} repeatCount="indefinite" />
          <animateMotion path={edgePath(edge)} dur={edge.dur} begin={edge.delay} repeatCount="indefinite" />
          <animate
            attributeName="fill"
            values={`${nodeMap[edge.from].col};${nodeMap[edge.to].col}`}
            dur={edge.dur}
            begin={edge.delay}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {nodes.map((node, index) => (
        <g key={node.id} transform={`translate(${node.x - 30},${node.y - 22})`}>
          <ellipse cx="30" cy="22" rx="26" ry="18" fill={node.col} opacity="0.04">
            <animate attributeName="opacity" values="0.04;0.11;0.04" dur={`${3.5 + index * 0.25}s`} repeatCount="indefinite" />
          </ellipse>
          <rect width="60" height="44" rx="9" fill="#13132a" stroke={node.col} strokeWidth="0.8" opacity="0.95" />

          <text x="30" y="28" textAnchor="middle" fill={node.col} fontSize="8.5" fontFamily="DM Mono, monospace" fontWeight="500">
            {node.label}
          </text>
          <circle cx="53" cy="8" r="3" fill={node.col}>
            <animate attributeName="opacity" values="1;0.2;1" dur={`${1.4 + index * 0.15}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      <text x="290" y="416" textAnchor="middle" fontSize="9" fill="rgba(78,90,114,0.7)" fontFamily="DM Mono, monospace">
        {copy.footerLabel}
      </text>
    </svg>
  );
}
