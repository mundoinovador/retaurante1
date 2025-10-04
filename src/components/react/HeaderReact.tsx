import { SlashIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";

function HeaderReact() {
  return (
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
              <a href="#" className="link-second-header">
                História
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator /> */}

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" className="link-second-header">
                Endereço e História
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator /> */}

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" className="link-second-header">
                História
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/*  <BreadcrumbSeparator /> */}

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" className="link-second-header">
                Cardápio
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator /> */}

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" className="link-second-header">
                Festa em Casa
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* <BreadcrumbSeparator /> */}

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#" className="link-second-header">
                Seja um Revendedor
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export { HeaderReact };
