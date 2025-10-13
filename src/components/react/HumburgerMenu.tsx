import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function HumburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer] = useState(() => {
    const el = document.createElement("div");
    el.id = "menu-portal";
    return el;
  });

  useEffect(() => {
    document.body.appendChild(portalContainer);
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);

  // 🔹 Adiciona fechamento suave ao rolar
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        // aplica fade-out antes de fechar
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const menuContent = (
    <div
      className={`fixed inset-0 top-[9rem] w-screen h-[84vh] bg-[var(--color-light)] flex flex-col items-center justify-center z-[20]`}
      style={{
        animation: isOpen
          ? "fadeInMenu 0.4s ease forwards"
          : "fadeOutMenu 0.5s ease forwards",
      }}
    >
      <nav className="flex flex-col items-center space-y-8 text-center">
        {[
          { label: "Início", href: "/" },
          { label: "História", href: "#visite-presencialmente" },
          { label: "Endereço e Horários", href: "#fabrica-de-congelados" },
          { label: "Cardápio", href: "#festa-em-casa" },
          { label: "Festa em Casa", href: "#contato" },
        ].map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-green-900 hover:text-red-700 transition-all duration-300"
            style={{
              animation: "fadeInItem 0.4s ease forwards",
              animationDelay: `${0.1 * (index + 1)}s`,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes fadeInMenu {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes fadeOutMenu {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.98); }
          }

          @keyframes fadeInItem {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* 🔹 Animação para o botão */
          .menu-button {
            transition: transform 0.4s ease, opacity 0.4s ease;
          }

          .menu-button.closing {
            transform: scale(0.95);
            opacity: 0.5;
          }
        `}
      </style>

      {/* Botão do menu fixo no header */}
      <div className="flex items-center justify-end h-12 px-4">
        <button
          aria-label="Abrir menu"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex flex-col justify-center items-end gap-1 cursor-pointer menu-button ${
            isOpen ? "closing" : ""
          }`}
        >
          <span
            className={`block w-6 h-0.5 bg-green-900 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-green-900 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-green-900 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Renderização via portal */}
      {isOpen && ReactDOM.createPortal(menuContent, portalContainer)}
    </>
  );
}
