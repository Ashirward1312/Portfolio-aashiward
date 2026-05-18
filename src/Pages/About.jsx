// AboutSection.jsx - ENHANCED SCI-FI DESIGN
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Code2, Cpu } from 'lucide-react';

function Model3D() {
  const { scene } = useGLTF('/t.glb');
  scene.position.set(0, -0.6, 0);
  scene.rotation.set(0, Math.PI, 0);
  const scale = 0.6;
  return <primitive object={scene} scale={scale} />;
}

function FloatingModel() {
  const group = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.position.x = Math.sin(t * 0.5) * 0.4;
    group.current.position.y = Math.sin(t * 0.9) * 0.04 - 0.6;
    group.current.rotation.y = t * 0.3;
  });
  return (
    <group ref={group}>
      <Model3D />
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="text-cyan-400 text-sm font-medium tracking-widest animate-pulse uppercase drop-shadow-lg font-mono flex items-center gap-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        INITIALIZING SYSTEMS...
      </div>
    </Html>
  );
}

// 🛡️ ENHANCED CHAMFER CARD WITH ANIMATED BORDERS
function ChamferCard({ className = "", children }) {
  return (
    <div
      className={[
        "relative border border-cyan-400/30 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-black/90",
        "shadow-[0_0_40px_rgba(34,211,238,0.15),inset_0_0_60px_rgba(0,0,0,0.5)]",
        "backdrop-blur-sm transition-all duration-500 overflow-hidden group",
        "hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]",
        className,
      ].join(" ")}
      style={{
        clipPath:
          "polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px))",
      }}
    >
      {/* Animated corner accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-cyan-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-cyan-300" />
        <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-purple-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-purple-300" />
        <div className="absolute left-0 bottom-0 h-12 w-12 border-l-2 border-b-2 border-blue-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-blue-300" />
        <div className="absolute right-0 bottom-0 h-12 w-12 border-r-2 border-b-2 border-cyan-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-cyan-300" />
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-scan"></div>
      </div>

      {/* Glowing edges */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      </div>

      {children}
    </div>
  );
}

export default function AboutSection() {
  const skills = [
    { name: "React.js", category: "frontend", icon: "⚛️" },
    { name: "Vite", category: "frontend", icon: "⚡" },
    { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
    { name: "Python", category: "backend", icon: "🐍" },
    { name: "Django", category: "backend", icon: "🎯" },
    { name: "Git/GitHub", category: "tool", icon: "📦" }
  ];

  return (
    <section
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-24 sm:py-32 overflow-hidden"
      id="about"
    >
      {/* Enhanced Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Multiple glowing orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Advanced Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.15) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(34,211,238,0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(34,211,238,0.1) 35px, rgba(34,211,238,0.1) 37px)"
          }}
        />
      </div>

      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-12 lg:gap-20 items-center">

        {/* 🔥 ENHANCED CONTENT CARD */}
        <ChamferCard className="w-full">
          <div className="p-10 sm:p-12 space-y-8">

            {/* Status Badge with Animation */}
            <div className="inline-flex items-center gap-3 border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-purple-500/10 px-5 py-2.5 text-[0.7rem] font-black uppercase tracking-[0.35em] text-cyan-300 font-mono relative overflow-hidden group/badge">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-1000"></div>
              <Cpu size={16} className="animate-spin-slow relative z-10" />
              <span className="relative z-10">DEVELOPER // ACTIVE</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute right-3"></div>
            </div>

            {/* Enhanced Name Title */}
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                <span className="block text-white leading-none">
                  Ashirwad Sharma
                </span>
                
              </h2>
              <div className="h-1 w-16 bg-cyan-400 rounded-full"></div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="relative pl-4 border-l-2 border-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-300">
                <p className="drop-shadow-sm">
                  I am a <span className="text-cyan-300 font-bold relative">
                    Full Stack Web Developer
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
                  </span> with <span className="text-purple-300 font-bold">1.5+ years of experience</span> building modern, responsive, and high-performance web applications. Proficient in <span className="text-white font-bold">React.js</span>, <span className="text-white font-bold">Vite</span>, <span className="text-white font-bold">Tailwind CSS</span>, <span className="text-white font-bold">Python</span>, and <span className="text-white font-bold">Django</span>.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-purple-400/30 hover:border-purple-400/60 transition-colors duration-300">
                <p className="drop-shadow-sm">
                  Specialized in developing <span className="text-cyan-300 font-semibold">portfolio websites</span>, <span className="text-cyan-300 font-semibold">business platforms</span>, and <span className="text-cyan-300 font-semibold">custom web applications</span> with clean UI design, responsive layouts, optimized performance, and seamless user experience across all devices.
                </p>
              </div>

              <div className="relative pl-4 border-l-2 border-blue-400/30 hover:border-blue-400/60 transition-colors duration-300">
                <p className="drop-shadow-sm">
                  Expert in modern web development with <span className="text-cyan-300 font-semibold">Google Analytics</span>, <span className="text-cyan-300 font-semibold">SEO optimization</span>, cloud hosting, and <span className="text-purple-300 font-semibold">Git/GitHub</span> for efficient project management and deployment.
                </p>
              </div>

              {/* Enhanced Quote Box */}
              <div className="relative p-5 bg-gradient-to-br from-cyan-950/30 to-purple-950/20 border-l-4 border-cyan-400 ml-1 mt-6 group/quote overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover/quote:opacity-100 transition-opacity duration-500"></div>
                <Zap size={24} className="absolute top-3 right-3 text-cyan-400/20 group-hover/quote:text-cyan-400/40 transition-colors" />
                <p className="text-sm font-semibold italic text-slate-300 relative z-10 leading-relaxed">
                  "Transforming creative visions into <span className="text-cyan-300 font-bold">professional digital experiences</span> through clean code, cutting-edge technologies, and user-focused design excellence."
                </p>
              </div>
            </div>

            

            {/* Enhanced CTA Button */}
            <div className="pt-6 flex items-center gap-4">
              <a
                href="#contact"
                className="group/btn relative inline-flex items-center gap-3 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-10 py-4 text-xs font-black uppercase tracking-[0.25em] text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  clipPath: "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                <Sparkles size={16} className="animate-pulse relative z-10" />
                <span className="relative z-10">ESTABLISH CONNECTION</span>
              </a>

              <div className="flex gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

          </div>
        </ChamferCard>

        {/* 🎛 ENHANCED 3D CANVAS */}
        <div className="relative w-full h-[450px] lg:h-[550px] group/canvas">
          {/* Glow effects */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-purple-500/20 to-blue-500/20 opacity-30 group-hover/canvas:opacity-50 blur-2xl transition-opacity duration-700 pointer-events-none animate-pulse"></div>

          {/* Corner frame elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/40 group-hover/canvas:border-cyan-400/80 transition-colors duration-500 z-20"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400/40 group-hover/canvas:border-purple-400/80 transition-colors duration-500 z-20"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-blue-400/40 group-hover/canvas:border-blue-400/80 transition-colors duration-500 z-20"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400/40 group-hover/canvas:border-cyan-400/80 transition-colors duration-500 z-20"></div>

          <Canvas
            camera={{ position: [4.5, 3.2, 7], fov: 30 }}
            className="w-full h-full relative z-10 rounded-2xl"
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.9} />
            <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
            <pointLight position={[-10, -5, -10]} color="#a855f7" intensity={1.2} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#22d3ee" />

            <Suspense fallback={<Loader />}>
              <FloatingModel />
              <Environment preset="city" />
            </Suspense>

            <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          </Canvas>

          {/* Status indicators */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded border border-cyan-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">ONLINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}