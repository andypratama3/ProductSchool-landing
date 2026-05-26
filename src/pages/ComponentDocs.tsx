import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Cpu, Pointer, Type, 
  ChevronRight, ArrowLeft, 
  Copy, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Aurora from '../components/reactbits/Aurora';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import BlurText from '../components/reactbits/BlurText';

const components = [
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Animated gradient background with organic blob-like motion. Creates a dreamy, atmospheric backdrop using canvas-rendered radial gradients.',
    icon: Sparkles,
    props: [
      { name: 'colorStops', type: 'string[]', default: "['#00ff99', '#00d4ff', '#8b5cf6', '#00ff99']", description: 'Array of hex color values for gradient blobs' },
      { name: 'speed', type: 'number', default: '4', description: 'Animation speed multiplier' },
      { name: 'blur', type: 'number', default: '100', description: 'Blur radius in pixels for the gradient blobs' },
      { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes for the canvas element' },
    ],
    usage: `// Hero.tsx — digunakan sebagai background hero section
<Aurora
  colorStops={["#0ea5e9", "#10b981", "#6366f1", "#0ea5e9"]}
  speed={3}
  blur={80}
  className="opacity-30 dark:opacity-20"
/>`,
    location: 'src/components/Hero.tsx',
  },
  {
    id: 'splash-cursor',
    name: 'SplashCursor',
    description: 'WebGL-based fluid dynamics cursor effect. Renders a realistic fluid simulation that reacts to mouse movement and clicks with colorful splashes.',
    icon: Cpu,
    props: [
      { name: 'SIM_RESOLUTION', type: 'number', default: '128', description: 'Simulation grid resolution' },
      { name: 'DYE_RESOLUTION', type: 'number', default: '1440', description: 'Render/dye resolution for visual quality' },
      { name: 'DENSITY_DISSIPATION', type: 'number', default: '3.5', description: 'How quickly the fluid density fades' },
      { name: 'VELOCITY_DISSIPATION', type: 'number', default: '2', description: 'How quickly velocity dissipates' },
      { name: 'SPLAT_FORCE', type: 'number', default: '6000', description: 'Force applied on mouse move splats' },
      { name: 'CURL', type: 'number', default: '3', description: 'Vorticity/curl strength for turbulent flow' },
      { name: 'TRANSPARENT', type: 'boolean', default: 'true', description: 'Whether the background is transparent' },
      { name: 'COLOR_UPDATE_SPEED', type: 'number', default: '10', description: 'Speed of color cycling' },
    ],
    usage: `// App.tsx — ditempatkan secara global
// Peringatan: komponen ini cukup berat, disarankan
// hanya diaktifkan untuk perangkat dengan GPU memadai

// Import:
import SplashCursor from './components/reactbits/SplashCursor';

// Usage:
<SplashCursor />`,
    location: 'src/App.tsx (sementara di-comment)',
  },
  {
    id: 'spotlight-card',
    name: 'SpotlightCard',
    description: 'Card wrapper with mouse-tracking radial gradient spotlight effect. As the mouse moves over the card, a luminous highlight follows the cursor position.',
    icon: Pointer,
    props: [
      { name: 'children', type: 'ReactNode', default: '—', description: 'Card content to render inside the spotlight wrapper' },
      { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes for the card container' },
      { name: 'spotlightColor', type: 'string', default: "'rgba(0, 255, 153, 0.15)'", description: 'RGBA color string for the spotlight gradient' },
    ],
    usage: `// Contoh penggunaan di BentoFeatures.tsx & Features.tsx
<SpotlightCard spotlightColor="rgba(14, 165, 233, 0.15)"
  className="rounded-xl border ..."
>
  {/* Card content */}
</SpotlightCard>

// Catatan: Menggunakan backgroundImage (bukan background)
// agar tidak menimpa background card yang sudah ada:
// backgroundImage: radial-gradient(
//   400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
//   \${spotlightColor},
//   transparent 60%
// )`,
    location: 'src/components/BentoFeatures.tsx, src/components/Features.tsx',
  },
  {
    id: 'blur-text',
    name: 'BlurText',
    description: 'Text animation component that blurs in each word/character on scroll using Intersection Observer. Supports custom animation keyframes and easing.',
    icon: Type,
    props: [
      { name: 'text', type: 'string', default: "''", description: 'The text content to animate' },
      { name: 'delay', type: 'number', default: '200', description: 'Delay between each word/character animation (ms)' },
      { name: 'direction', type: "'top' | 'bottom'", default: "'top'", description: 'Direction of entrance animation' },
      { name: 'animateBy', type: "'words' | 'characters'", default: "'words'", description: 'Whether to animate by words or individual characters' },
      { name: 'threshold', type: 'number', default: '0.1', description: 'Intersection Observer threshold (0-1)' },
      { name: 'rootMargin', type: 'string', default: "'0px'", description: 'Intersection Observer root margin' },
      { name: 'stepDuration', type: 'number', default: '0.35', description: 'Duration of each animation step (seconds)' },
      { name: 'easing', type: 'function', default: 't => t', description: 'Custom easing function (linear by default)' },
      { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes (use justify-center for centering)' },
      { name: 'animationFrom', type: 'object', default: '—', description: 'Custom starting keyframe (overrides direction)' },
      { name: 'animationTo', type: 'array', default: '—', description: 'Custom animation steps (overrides direction)' },
    ],
    usage: `// Contoh penggunaan di BentoFeatures.tsx
<BlurText
  text="Lebih dari sekadar aplikasi Rapor. Ini adalah ekosistem OS Sekolah."
  className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl tracking-tight leading-tight justify-center"
  delay={150}
  direction="top"
/>`,
    location: 'src/components/BentoFeatures.tsx, src/components/Features.tsx, src/components/Integrations.tsx',
  },
];

function PropTable({ props }: { props: typeof components[0]['props'] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="text-left py-3 px-4 font-bold text-slate-900 dark:text-white">Prop</th>
            <th className="text-left py-3 px-4 font-bold text-slate-900 dark:text-white">Type</th>
            <th className="text-left py-3 px-4 font-bold text-slate-900 dark:text-white">Default</th>
            <th className="text-left py-3 px-4 font-bold text-slate-900 dark:text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
              <td className="py-3 px-4">
                <code className="text-primary dark:text-blue-400 font-mono text-xs bg-primary/5 dark:bg-blue-500/10 px-2 py-1 rounded">{prop.name}</code>
              </td>
              <td className="py-3 px-4">
                <code className="text-purple-600 dark:text-purple-400 font-mono text-xs">{prop.type}</code>
              </td>
              <td className="py-3 px-4">
                <code className="text-slate-500 dark:text-slate-400 font-mono text-xs">{prop.default}</code>
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400 text-xs">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <span className="text-xs text-slate-500 font-mono hidden sm:block">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-xl p-5 pt-10 overflow-x-auto text-xs leading-relaxed font-mono border border-slate-800">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LivePreview({ id }: { id: string }) {
  switch (id) {
    case 'aurora':
      return (
        <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
          <Aurora
            colorStops={["#0ea5e9", "#10b981", "#6366f1"]}
            speed={2}
            blur={60}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/80 text-lg font-bold tracking-tight drop-shadow-lg">Aurora Background</span>
          </div>
        </div>
      );
    case 'spotlight-card':
      return (
        <SpotlightCard
          spotlightColor="rgba(14, 165, 233, 0.3)"
          className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Pointer className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Gerakkan Mouse</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Lihat efek spotlight mengikuti kursor</p>
          </div>
        </SpotlightCard>
      );
    case 'blur-text':
      return (
        <div className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <BlurText
            text="Scroll untuk melihat efek blur text"
            className="text-xl font-bold text-slate-900 dark:text-white justify-center text-center"
            delay={100}
            direction="top"
          />
        </div>
      );
    default:
      return (
        <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
          <span className="text-slate-500 dark:text-slate-400 text-sm">Preview tidak tersedia untuk komponen ini</span>
        </div>
      );
  }
}

export function ComponentDocs() {
  const [activeTab, setActiveTab] = useState(components[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeComponent = components.find(c => c.id === activeTab) || components[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Home</span>
            </Link>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <Link
              to="/docs"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <span className="text-sm font-bold text-primary dark:text-blue-400">Components</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary dark:text-blue-400 font-bold uppercase tracking-wider text-xs mb-6">
            React Bits Components
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Component Library
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Dokumentasi interaktif untuk komponen React Bits yang digunakan di landing page ProductSchool.
            Setiap komponen dilengkapi preview langsung, tabel props, dan contoh kode.
          </p>
        </div>

        {/* Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <nav className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-1">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-3 px-3">
                Komponen
              </p>
              {components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setActiveTab(comp.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    activeTab === comp.id
                      ? 'bg-primary/10 text-primary dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <comp.icon className={`w-4 h-4 ${activeTab === comp.id ? 'text-primary dark:text-blue-400' : ''}`} />
                  {comp.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              key={activeComponent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Component Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center">
                    <activeComponent.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{activeComponent.name}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">@reactbits/{activeComponent.id}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{activeComponent.description}</p>
              </div>

              {/* Live Preview */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Live Preview</h3>
                <LivePreview id={activeComponent.id} />
              </div>

              {/* Props Table */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Props API</h3>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <PropTable props={activeComponent.props} />
                </div>
              </div>

              {/* Usage */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Usage</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Location: <code className="font-mono text-primary dark:text-blue-400">{activeComponent.location}</code>
                  </div>
                  <CodeBlock code={activeComponent.usage} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Nav */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between">
          <Link
            to="/docs"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Docs
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary-dark transition-colors text-sm font-medium"
          >
            Home
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
