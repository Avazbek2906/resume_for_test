import { Button } from "antd";
import React, { useState } from "react";
import AdditionalInforms from "../Components/AdditionalInforms";
import EducationInforms from "../Components/EducationInforms";
import LaborActivity from "../Components/LaborActivity";
import Personalnforms from "../Components/Personalnforms";
import "../Styles/Content.css";

function Content() {
  const [id, setId] = useState(3);
  const menu = [
    {
      id: 1,
      text: "Shaxsiy ma'lumotlar",
    },
    {
      id: 2,
      text: "Ta'lim ma’lumotlari",
    },
    {
      id: 3,
      text: "Qo‘shimcha ma’lumotlar",
    },
    {
      id: 4,
      text: "Mehnat faoliyati",
    },
  ];
  return (
    <div className="content_section">
      <div className="resume_content">
        <div className="content_header">Ma‘lumotnoma (rezyume) yaratish</div>
        <div className="content_menus">
          {menu.map((item) => {
            return (
              <div onClick={() => setId(item.id)} className="content_menu">
                <div className="content_menu_number">{item.id}</div>
                {item.text}
              </div>
            );
          })}
        </div>
        {id === 1 ? (
          <Personalnforms />
        ) : id === 2 ? (
          <EducationInforms />
        ) : id === 3 ? (
          <AdditionalInforms />
        ) : id === 4 ? (
          <LaborActivity />
        ) : (
          ""
        )}
        <div className="content_buttons">
          <Button type="primary" size="large" ghost>
            Keyingi qadam
          </Button>
          <Button type="link" size="large" style={{ marginLeft: 10 }}>
            Saqlash
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
