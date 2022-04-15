import React, { useState } from "react";
import "../Styles/LaborActivity.css";
import { Button, Modal } from "antd";
import stepDotSvg from "../Assets/Svg/stepDot.svg";
import editSvg from "../Assets/Svg/edit.svg";
import { ReactComponent as PlusIcon } from "../Assets/Svg/plus.svg";
import { ReactComponent as RefeshIcon } from "../Assets/Svg/refresh.svg";
import LaborModal from "./LaborModal";

function LaborActivity() {
  const [visible, setVisible] = useState(false);
  const [editId, setEditId] = useState(null);
  const data = [
    {
      duration: "1 yil 4 oy",
      to_time: "22.11.2022",
    },
    {
      duration: "4 oy",
      to_time: "hozirgacha",
    },
    {
      duration: "4 oy",
      to_time: "hozirgacha",
    },
    {
      duration: "4 oy",
      to_time: "hozirgacha",
    },
  ];
  const [menu, setMenu] = useState([
    {
      id: 0,
      text: "Barchasi",
      aktive: true,
    },
    {
      id: 1,
      text: "O‘zbekistonda mehnat faoliyati",
      aktive: false,
    },
    {
      id: 2,
      text: "Xorijda mehnat faoliyati",
      aktive: false,
    },
  ]);
  const changeMenu = (id) => {
    let arr = Object.assign([], menu);
    arr.forEach((item) => {
      if (item.id === id) item.aktive = true;
      else item.aktive = false;
    });
    setMenu([...arr]);
  };
  return (
    <div className="labor_activity_section">
      <div className="educational_header" style={{ flexWrap: "wrap" }}>
        <div className="content_title">Mehnat faoliyati</div>
        <div className="labor_refesh">
          <RefeshIcon />
          Ma‘lumotlarni yangilash
        </div>
        <div className="content_line"></div>
        <div className="labor_header_menu_div">
          {menu.map((item) => {
            return (
              <div
                onClick={() => changeMenu(item.id)}
                className={
                  item.aktive
                    ? "labor_header_menu labor_header_aktive"
                    : "labor_header_menu"
                }
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="educational_header">
        <div className="content_title">Mehnat faoliyati qo‘shish</div>
        <button
          onClick={() => {
            setVisible(true);
            setEditId(null);
          }}
          size="large"
          className="education_add_button"
        >
          <PlusIcon />
          Qo‘shish
        </button>
      </div>
      {data.map((item) => {
        return (
          <div className="educational_header">
            <div className="education_card_content">
              <div className="education_card_left">
                <span
                  className="education_steps_header"
                  style={{ color: "#76767A" }}
                >
                  {item.duration}
                </span>
                <div className="education_card_steps">
                  <div className="education_card_svg">
                    <img src={stepDotSvg} alt="error img" />
                  </div>
                  <div className="education_card_years">
                    <span>22.11.2021</span>
                    <span>{item.to_time}</span>
                  </div>
                </div>
              </div>
              <div className="education_card_right">
                <text>
                  TA'LIM MUASSASALARIDA ELEKTRON TA'LIMNI JORIY ETISH MARKAZI"
                  DAVLAT MUASSASASI
                </text>
                <text>O‘zbekiston, Toshkent shahri</text>
                <div>
                  Tizimlarni loyihalashtirish va dasturlashtirish bo`limi
                </div>
                <text>
                  <span>Mutaxasisslik:</span>
                  <span>Kompyuter injeneringi</span>
                </text>
              </div>
            </div>
            <img
              src={editSvg}
              alt="error img"
              style={{ height: "100%", cursor: "pointer" }}
              onClick={() => {
                setEditId(1);
                setVisible(true);
              }}
            />
          </div>
        );
      })}
      <Modal
        title={editId ? "Mehnat faoliyati" : "Mehnat faoliyati qo‘shish"}
        width={856}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer=""
      >
        <LaborModal edit={editId} closeModalProps={() => setVisible(false)} />
      </Modal>
    </div>
  );
}

export default LaborActivity;
