import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './GeometricNetwork.css';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Edge {
  from: number;
  to: number;
}

export function GeometricNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const edgesRef = useRef<Edge[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 8;
    const nodes: Node[] = [];
    const rect = canvas.getBoundingClientRect();
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: i,
        x: Math.random() * rect.width * 0.6 + rect.width * 0.2,
        y: Math.random() * rect.height * 0.6 + rect.height * 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 20 + Math.random() * 25,
      });
    }
    nodesRef.current = nodes;

    // Create edges (connections between nodes)
    const edges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        // Connect nodes that are relatively close
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 || Math.random() < 0.3) {
          edges.push({ from: i, to: j });
        }
      }
    }
    edgesRef.current = edges;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update node positions
      nodesRef.current.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Soft boundaries
        const padding = 60;
        if (node.x < padding || node.x > rect.width - padding) {
          node.vx *= -1;
          node.x = Math.max(padding, Math.min(rect.width - padding, node.x));
        }
        if (node.y < padding || node.y > rect.height - padding) {
          node.vy *= -1;
          node.y = Math.max(padding, Math.min(rect.height - padding, node.y));
        }
      });

      // Draw edges
      ctx.strokeStyle = '#1A1A1A';
      ctx.lineWidth = 1;
      edgesRef.current.forEach((edge) => {
        const from = nodesRef.current[edge.from];
        const to = nodesRef.current[edge.to];
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#F06449';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      className="geometric-network"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <canvas ref={canvasRef} className="network-canvas" />
    </motion.div>
  );
}

