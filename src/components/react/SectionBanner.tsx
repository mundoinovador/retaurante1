import { useEffect, useState, type ReactNode } from "react";

interface SectionBannerProps {
  children?: ReactNode;
}

export default function SectionBanner({ children }: SectionBannerProps) {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center bg-[var(--color-light)] pb-6 sm:pb-10 px-[.4rem] md:px-[1rem] overflow-hidden">
      <div className="flex flex-col mb-4 sm:mb-8 rounded-[2rem] items-center w-full px-[5%] md:max-h-[60vh] lg:w-[900px] md:w-[700px] sm:w-[630px] h-[74vw] sm:h-[400px] lg:h-[620px] border bg-[var(--second-bg)] relative overflow-hidden">
        {/* Imagem principal (fixa) */}
        <img
          className="absolute w-[90%] sm:w-[74%] top-[20%] lg:top-[74px] left-1/2 transform -translate-x-1/2"
          src="/banner-title.png"
          alt="Banner principal"
        />
        {/* Imagem animada (vem da esquerda girando até o centro) */}
        <img
          className={`absolute top-[50%] md:top-[190px] lg:top-[214px] w-[90%] sm:w-[74%] ${
            animate ? "spinFromLeft" : "invisible-left"
          }`}
          src="https://design.penpot.app/assets/by-file-media-id/6ac113cd-51c8-8126-8006-e265211b45db"
          alt="Banner girando"
        />
      </div>
      {children}
      {/* Keyframes da animação */}
      <style>{`
        @keyframes spinFromLeft {
          0% {
            left: -100%;
            transform: translateX(0) rotate(-720deg);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            left: 50%;
            transform: translateX(-50%) rotate(0deg);
            opacity: 1;
          }
        }
        .spinFromLeft {
          animation: spinFromLeft 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          position: absolute;
        }
        .invisible-left {
          left: -100%;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
