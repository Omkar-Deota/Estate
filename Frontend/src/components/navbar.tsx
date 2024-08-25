import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles, navbar } from "@nextui-org/theme";
import clsx from "clsx";
import {Button} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import Logo from "@/components/graphics/logo.jpeg";
import Login from "./LoginPage/Login";
import Modal from "./LoginPage/modal";
import { useState } from "react";



export const Navbar = () => {
  
  const [showModal, setShowModal] = useState(false);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );


  return (
    <>
    <NextUINavbar maxWidth="full" position="sticky" className=" h-24">
      <NavbarContent className="basis-1/5 sm:basis-full w-full mt-1">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
           > 
           {/* //logo here */}
            <img
              alt="Logo.jpeg"
              style={{ height: "50px", width: "50px", borderRadius:"100%"}}
              src="src/components/graphics/logo.png"
            />
            <p className="font-bold text-inherit">myPROPERTY</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
              <Link className="bg-white">
            </Link>

            </NavbarItem>
            
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
             

            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      <Button color="danger" variant="ghost" className="border-1 border-white h-7" onClick={() => setShowModal(true)}>
        Sign up
      </Button>
      <Modal  isVisible={showModal} onClose={() => setShowModal(false)}>
        <Login/>
      </Modal>
    </NextUINavbar>
     </>
  );
};
    export default navbar;