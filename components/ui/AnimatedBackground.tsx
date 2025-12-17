"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0.3)" />
          </linearGradient>
        </defs>
        
        <path
          d="M 0 100 Q 250 150, 500 100 T 1000 100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw"
        />
        <path
          d="M 0 300 Q 300 250, 600 300 T 1200 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
}

