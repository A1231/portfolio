import Image from "../components/Image"
import useTypewriter from "../components/useTypewriter";

const phrases = [
    "Software Developer",
    "Backend Engineer", 
    "Security Buff",
    "Systems Explorer",
    "Cyber Sleuth"
  ];
function LandingPage() {
    const text = useTypewriter(phrases);
    return (
        <div className="mb-40 flex flex-row items-center justify-center gap-8 flex-wrap flex-1 sm:mb-16">
            <Image />
            <div className="text-2xl font-semibold text-accent font-mono p-3">
            <div className="text-4xl font-bold font-mono text-text mb-16">Hi, I'm Apoorva.</div>

     
       I'm a{" "} 
       <span className="ml-1 inline-block min-w-[19ch]">
        {text}
        <span className="animate-[blink_0.9s_step-end_infinite]">|</span>
      </span>
      <p className="text-muted text-sm font-normal mt-4 max-w-md">
        I enjoy building systems where performance, correctness, and security intersect.
        Interested in distributed systems, real-time communication, caching, and secure auth.
      </p>
    </div>
  



            
        </div>
    )
}

export default LandingPage