import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import { Button, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: <a href="#">Главная</a> },
  { key: "2", label: <a href="#">O гостинице</a> },
  { key: "3", label: <a href="#">Преимущества</a> },
  { key: "4", label: <a href="#">Номера</a> },
  { key: "5", label: <a href="#">Отзывы</a> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <img src={logo2} alt="Image" className="w-[160px] h-[40px]"/>

        <nav className="hidden md:flex gap-6 text-blue-800 font-medium">
          <a href="#" className="hover:underline">
            Главная
          </a>
          <a href="#" className="hover:underline">
            O гостинице
          </a>
          <a href="#" className="hover:underline">
            Преимущества
          </a>
          <a href="#" className="hover:underline">
            Номера
          </a>
          <a href="#" className="hover:underline">
            Отзывы
          </a>
        </nav>

        <Button
          className="hidden md:inline-flex"
          type="default"
          style={{ color: "#1D4ED8", borderColor: "#1D4ED8" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1D4ED8";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "#1D4ED8";
          }}
        >
          Обратный звонок
        </Button>

        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          open={menuOpen}
          onOpenChange={(open) => setMenuOpen(open)}
        >
          <Button
            className="md:hidden"
            type="text"
            icon={
              <MenuOutlined style={{ fontSize: "24px", color: "#1D4ED8" }} />
            }
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
