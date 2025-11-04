import { Field, FieldGroup, FieldSet } from "@components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Input } from "@components/ui/input";

import React, { useState } from "react";

interface TypeChildren {
  children?: React.ReactNode;
  foodSelect?: string;
}

function FormRegister({
  children,
  foodSelect = "Fruta",
}: TypeChildren): React.ReactElement {
  const [listSelectFood] = useState<Record<string, string[]>>({
    Fruta: ["Banana", "Maçã", "Melancia"],
    Proteina: ["Bisteca", "Frango", "Bovina"],
    Refrigerante: ["Coca-Cola", "Tubaina", "Doly"],
  });

  function getFoodSelect(category: keyof typeof listSelectFood): string[] {
    return listSelectFood[category];
  }

  return (
    <form className="w-full max-w-md">
      <FieldSet className="mb-[2rem]">
        <FieldGroup>
          <Field>
            <Input
              id="username"
              type="text"
              placeholder="Nome"
              className="style-input-form"
            />
          </Field>

          <Field>
            <Input
              id="password"
              type="tel"
              placeholder="Telefone para contato"
              className="style-input-form"
            />
          </Field>

          <Field>
            <Select>
              <SelectTrigger className="style-input-form">
                <SelectValue placeholder="Motivo do contato" />
              </SelectTrigger>

              <SelectContent className="style-input-form">
                {getFoodSelect(foodSelect).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex w-full justify-center">{children}</div>
    </form>
  );
}

interface Props {
  title?: string;
  colorBg?: string;
  pathClick?: string;
  onClick?: () => void;
}

function ButtonDefault({ title, colorBg, pathClick = "#", onClick }: Props) {
  return (
    <a
      href={pathClick}
      onClick={onClick}
      className={`flex items-center justify-center h-[2.4rem] bg-[${
        colorBg || "var(--bg-color-green)"
      }] text-[#f5f1e3] text-xs text-center px-4 sm:px-8 py-2 rounded-sm font-semibold`}
    >
      {title}
    </a>
  );
}

export { FormRegister, ButtonDefault };
