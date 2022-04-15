import { Button, Modal } from "antd";
import React, { useState } from "react";
import AdditionalInforms from "../Components/AdditionalInforms";
import EducationInforms from "../Components/EducationInforms";
import LaborActivity from "../Components/LaborActivity";
import Personalnforms from "../Components/Personalnforms";
import "../Styles/Content.css";
import bg1 from "../Assets/Svg/1.svg";
import bg1done from "../Assets/Svg/1done.svg";
import bg2 from "../Assets/Svg/2.svg";
import bg2current from "../Assets/Svg/2current.svg";
import bg2done from "../Assets/Svg/2done.svg";
import bg3 from "../Assets/Svg/3.svg";
import bg3current from "../Assets/Svg/3current.svg";
import bg3done from "../Assets/Svg/3done.svg";
import { ReactComponent as SuccessIcon } from "../Assets/Svg/success.svg";

function Content() {
  const [id, setId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState([
    {
      id: 1,
      text: "Shaxsiy ma'lumotlar",
      default: bg1,
      done: bg1done,
      isDone: false,
      current: false,
    },
    {
      id: 2,
      text: "Ta'lim ma’lumotlari",
      default: bg2,
      now: bg2current,
      done: bg2done,
      isDone: false,
      current: false,
    },
    {
      id: 3,
      text: "Qo‘shimcha ma’lumotlar",
      default: bg2,
      now: bg2current,
      done: bg2done,
      isDone: false,
      current: false,
    },
    {
      id: 4,
      text: "Mehnat faoliyati",
      default: bg3,
      now: bg3current,
      done: bg3done,
      isDone: false,
      current: false,
    },
  ]);
  const changeMenu = (id) => {
    setId(id);
    let arr = Object.assign([], menu);
    arr.forEach((item) => {
      if (item.id < id) item.isDone = true;
      else if (item.id === id) {
        item.current = item.id !== 1;
        item.isDone = false;
      } else {
        item.current = false;
        item.isDone = false;
      }
    });
    setMenu([...arr]);
  };
  return (
    <div className="content_section">
      <div className="resume_content">
        <div className="content_header">Ma‘lumotnoma (rezyume) yaratish</div>
        <div className="content_menus">
          {menu.map((item) => {
            return (
              <div onClick={() => changeMenu(item.id)} className="content_menu">
                {!item.isDone ? (
                  <div
                    className={
                      item.current
                        ? "content_menu_number content_menu_number_current"
                        : "content_menu_number"
                    }
                  >
                    {item.id}
                  </div>
                ) : (
                  <div className="content_menu_badge">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="15.5"
                        fill="#2BB76B"
                        stroke="#2BB76B"
                      />
                      <path
                        d="M8 16.3137L13.6569 21.9706L24.9706 10.6569"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                )}
                <span className="content_menu_title">{item.text}</span>
                {item.isDone ? (
                  <img src={item.done} className="content_menu_bg" />
                ) : item.current ? (
                  <img src={item.now} className="content_menu_bg" />
                ) : (
                  <img src={item.default} className="content_menu_bg" />
                )}
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
          {id === 4 ? (
            <Button
              onClick={() => setVisible(true)}
              type="primary"
              size="large"
              ghost
            >
              Saqlash
            </Button>
          ) : (
            <>
              <Button
                onClick={() => changeMenu(id + 1)}
                type="primary"
                size="large"
                ghost
              >
                Keyingi qadam
              </Button>
              <Button
                onClick={() => setVisible(true)}
                type="link"
                size="large"
                style={{ marginLeft: 10 }}
              >
                Saqlash
              </Button>
            </>
          )}
        </div>
      </div>
      <Modal
        title=""
        width={856}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer=""
      >
        <div className="content_saved_modal">
          <SuccessIcon />
          <text>
            Hammasi tayyor, sizning ma’lumotnoma (rezyumein)giz chop etildi.
          </text>
        </div>
      </Modal>
    </div>
  );
}

export default Content;
