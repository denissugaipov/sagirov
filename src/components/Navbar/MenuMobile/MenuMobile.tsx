import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import routes from "../routes";
import s from "./MenuMobile.module.scss";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MenuMobile = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={s.MenuButton}>
          <AiOutlineMenu size={24} style={{ border: "none" }} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={s.ItemsContainer}>
          {routes.map((e, i) => {
            return (
              <Menu.Item key={i}>
                {({ active }) => (
                  <a
                    href={e.href}
                    className={classNames(
                      active ? "bg-gray-900 text-white" : "bg-black text-white",
                      "block px-4 py-2 text-sm transition-colors"
                    )}
                  >
                    {e.name}
                  </a>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuMobile;
