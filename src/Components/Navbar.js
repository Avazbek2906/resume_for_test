import React from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/Svg/logo.svg";
import { Select, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Navbar() {
  const { Option } = Select;
  return (
    <div className="navbar_section">
      <div className="navbar_content">
        {/* Navbar header section */}
        <div className="navbar_header">
          <div className="navbar_header__left">
            <img src={logo} alt="error logo" />
            Vakansiya.edu.uz
          </div>
          <div className="navbar_header__right">
            <Select
              defaultValue="O'zbek"
              style={{ width: 105, color: "white", fontSize: 16 }}
              bordered={false}
            >
              <Option value="uz">O'zbek</Option>
              <Option value="ru">Русский</Option>
              <Option value="eng">English</Option>
            </Select>
            <button className="navbar_button_enter">OneID bilan kirish</button>
            {/* <Button ghost style={{ marginLeft: 30 }}>
              OneID bilan kirish
            </Button> */}
          </div>
        </div>
        {/* Navbar search section */}
        <div className="navbar_search">
          <div className="navbar_search__content">
            <div className="navbat_search_input">
              <SearchOutlined style={{ color: "#A3A3A3", fontSize: "20px" }} />
              <Input
                style={{ width: "100%" }}
                placeholder="Kasb, lavozim yoki ta’lim muassasi"
                bordered={false}
              />
            </div>
            <Select
              defaultValue="Toshkent"
              style={{ width: 307 }}
              bordered={false}
            >
              <Option value="Toshkent">Toshkent</Option>
              <Option value="Farg'ona">Farg'ona</Option>
              <Option value="Andijon">Andijon</Option>
              <Option value="Namangan">Namangan</Option>
            </Select>
          </div>
          <Button className="navbar_search__button">Qidirish</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
