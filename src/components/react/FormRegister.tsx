/* export function FormRegister(): React.ReactNode {
  return (
    <form>
      <input type="text" placeholder="Nome" />
      <input type="tel" placeholder="Telefone para contato" />
      <input type="text" placeholder="Motivo do contato" />
    </form>
  );
} */
import { Field, FieldGroup, FieldSet } from "@components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

import { Input } from "@components/ui/input";

import type React from "react";

interface TypeChildren {
  children: React.ReactNode;
}

function FormRegister({ children }: TypeChildren): React.ReactNode {
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
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex w-full justify-center">{children}</div>
    </form>
  );
}

export { FormRegister };
