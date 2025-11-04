import { useEffect, useState, type ReactNode } from "react";

interface SectionBannerProps {
  children?: ReactNode;
}

const images = [
  "https://design.penpot.app/assets/by-file-media-id/6ac113cd-51c8-8126-8006-e265211b45db",
  "https://design.penpot.app/assets/by-file-media-id/6ac113cd-51c8-8126-8006-e265211b45db",
  "https://design.penpot.app/assets/by-file-media-id/6ac113cd-51c8-8126-8006-e265211b45db",
];

export default function SectionBanner({ children }: SectionBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center bg-[var(--color-light)] pb-6 sm:pb-10 px-[.4rem] md:px-[1rem] overflow-hidden">
      <div className="flex flex-col mb-4 sm:mb-8 rounded-[2rem] items-center w-full px-[5%] md:max-h-[64vh] lg:w-[900px] md:w-[700px] sm:w-[630px] h-[74vw] sm:h-[400px] lg:h-[620px] border bg-[var(--second-bg)] relative overflow-hidden">
        <img
          className="absolute w-[90%] sm:w-[74%] top-[20%] lg:top-[74px] left-1/2 transform -translate-x-1/2"
          src="/banner-title.png"
          alt="Banner principal"
        />
        <img
          key={currentIndex}
          className={`absolute top-[50%] md:top-[190px] lg:top-[214px] w-[90%] sm:w-[74%] ${
            animate ? "spinFromLeft" : "spinToRight"
          }`}
          src={images[currentIndex]}
          alt="Banner girando"
        />
      </div>

      {children}

      <style>{`
        @keyframes spinFromLeft {
          0% {
            left: -100%;
            transform: translateX(0);
            opacity: 0;
          }
          50% {
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
          }
          80% {
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
          }
          100% {
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
          }
        }

        @keyframes spinToRight {
          0% {
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          100% {
            left: 180%;
            transform: translateX(0);
            opacity: 0;
          }
        }

        .spinFromLeft {
          animation: spinFromLeft 3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          position: absolute;
        }

        .spinToRight {
          animation: spinToRight 5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
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
