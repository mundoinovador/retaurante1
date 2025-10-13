import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@components/ui/breadcrumb";
import React from "react";
import { useSmoothScroll } from "@hooks/useSmoothScroll";
import HumburgerMenu from "./HumburgerMenu";

function HeaderReact() {
  useSmoothScroll();
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isLargeScreen ? (
        <Breadcrumb>
          <BreadcrumbList>
            <div className="flex gap-4">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="/" className="link-second-header-check">
                    Inicio
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* <BreadcrumbSeparator /> */}

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a
                    href="#visite-presencialmente"
                    className="link-second-header"
                  >
                    História
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* <BreadcrumbSeparator /> */}

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a
                    href="#fabrica-de-congelados"
                    className="link-second-header"
                  >
                    Endereço e Horários
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/*  <BreadcrumbSeparator /> */}

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="#festa-em-casa" className="link-second-header">
                    Cardápio
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* <BreadcrumbSeparator /> */}

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="#contato" className="link-second-header">
                    Festa em Casa
                  </a>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          </BreadcrumbList>
        </Breadcrumb>
      ) : (
        <HumburgerMenu />
      )}
    </div>
  );
}

export { HeaderReact };
