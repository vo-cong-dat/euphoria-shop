import logo from "@/assets/images/logo.svg";
import { routers } from "@/router/routers";
import { Link } from "react-router";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import SearchInput from "./search-input";
import { ArrowDownIcon } from "./icons";
import { useState } from "react";

const languages = [
  {
    value: "english",
    label: "English (United States)",
  },
  {
    value: "vietnamese",
    label: "Vietnamese (Viet Nam)",
  },
  {
    value: "chinese",
    label: "Chinese (China)",
  },
];

export default function Header() {
  const [languageSelected, setLanguageSelected] = useState<string>(
    languages[0].value,
  );

  const labelLanguageSelected = languages.find(
    (language) => language.value === languageSelected,
  );

  return (
    <div className="border-vapor-blue flex justify-center border bg-white pt-[34px] pb-[31px]">
      <div className="flex w-[var(--max-w-screen)] items-center justify-between">
        <div className="flex items-center justify-evenly gap-32">
          <Link to={routers.HOME}>
            <img src={logo} className="h-[45px] w-[92px]" />
          </Link>
          <SearchInput />
        </div>
        <div className="flex items-center gap-[60px]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-grey-300"
                endIcon={<ArrowDownIcon className="size-2.5" />}
              >
                {labelLanguageSelected?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup
                value={languageSelected}
                onValueChange={(value) => setLanguageSelected(value)}
              >
                {languages.map((language, index) => (
                  <DropdownMenuRadioItem key={index} value={language.value}>
                    {language.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="space-x-7">
            <Button size="small" data-slot="link" asChild>
              <Link to={routers.SIGN_IN}>Login</Link>
            </Button>
            <Button variant="secondary" size="small" asChild>
              <Link to={routers.SIGN_UP}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
