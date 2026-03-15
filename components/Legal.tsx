"use client";
import { useEffect, useRef } from "react";

export default function Legal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 100));
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#020802]">
      <div className="max-w-4xl mx-auto">
        {/* Mascot section */}
        <div className="reveal card-cyber p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 border border-[var(--green)]/30 flex items-center justify-center flex-shrink-0">
            <span className="font-display text-4xl text-[var(--green)]/30">◈</span>
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--cyan)] tracking-widest mb-2">// CSMT MASCOT</div>
            <h3 className="font-display text-xl tracking-wider text-[var(--text)] mb-2 uppercase">
              Cybersecurity and Media tec
            </h3>
            <p className="font-body text-sm text-[var(--muted)] leading-relaxed">
              The Anonymous-inspired mascot represents the ethos of ethical hacking — knowledge,
              anonymity, and responsibility in the digital world.
            </p>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="reveal card-cyber p-8 mb-6">
          <h3 className="font-display text-xl tracking-wider neon-text mb-6 uppercase">
            Legal Disclaimer & Terms of Use
          </h3>
          <div className="space-y-4 font-body text-sm text-[var(--text)] opacity-75 leading-relaxed">
            <p>
              Joining the group should be based on your genuine interest. By providing your details, you confirm
              that you are the person applying. If you encounter any issues related to the group, CSMT cannot be
              held legally responsible; however, you are encouraged to report concerns to us.
            </p>
            <p>
              This group is not intended to cause harm to the public or to any country. Our activities focus only
              on teaching cybersecurity and media technology skills. We provide information and awareness about
              illegal software or tools so members can learn to recognise and protect against them; we do not
              endorse, promote, or assist in any illegal activity.
            </p>
            <p>
              Please note that Cybersecurity and Media tec (CSMT) is an educational group focused on ethical
              hacking simulations and media technology training. The group uses its own resources and other
              authorised materials for training and simulation purposes.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="reveal card-cyber p-8">
          <h3 className="font-display text-xl tracking-wider text-[var(--cyan)] mb-4 uppercase">
            Copyright Notice
          </h3>
          <p className="font-body text-sm text-[var(--text)] opacity-75 leading-relaxed mb-4">
            All designs, content, and elements featured on this website are the original creations of group
            member Faizaan and are protected by copyright law. The registration form is powered by JotForm.
          </p>
          <p className="font-mono text-xs text-[var(--muted)] italic leading-6">
            For comprehensive information regarding legal documents and any inquiries about the group, please
            contact the Head Member, Faizaan. Contact details on the &ldquo;Join Us&rdquo; page.
          </p>
          <div className="mt-4 font-mono text-[10px] text-[var(--muted)] tracking-widest border-t border-[var(--green)]/10 pt-4">
            SECTIONS CREATED WITH THE GUIDANCE OF THE ASSISTANT PROFESSOR AT VELTECH LAW COLLEGE, AVADI.
            THE ASSISTANT PROFESSOR IS ASSOCIATED WITH THE LAW ENFORCEMENT DEPARTMENT, ENSURING LEGAL
            COMPLIANCE AND AUTHORIZATION.
          </div>
        </div>
      </div>
    </section>
  );
}
