import React, { useState } from "react";
import "../Styles/EducationalInforms.css";
import stepDotSvg from "../Assets/Svg/stepDot.svg";
import editSvg from "../Assets/Svg/edit.svg";
import { Modal } from "antd";
import EducationModal from "./EducationModal";

function EducationInforms() {
  const [visible, setVisible] = useState(false);
  const [editId, setEditId] = useState(null);
  return (
    <div className="educational_informs_section">
      <div className="educational_header">
        <div className="content_title">Ta'lim ma’lumotlari</div>
        <button
          onClick={() => {
            setVisible(true);
            setEditId(null);
          }}
          size="large"
          className="education_add_button"
        >
          Qo‘shish
        </button>
      </div>
      <div className="educational_header">
        <div className="education_card_content">
          <div className="education_card_left">
            <span className="education_steps_header"> Bakalavr</span>
            <div className="education_card_steps">
              <div className="education_card_svg">
                <img src={stepDotSvg} alt="error img" />
              </div>
              <div className="education_card_years">
                <span>2017 yil</span>
                <span>2021 yil</span>
              </div>
            </div>
          </div>
          <div className="education_card_right">
            <text>
              Muhammad al xorazmiy nomidagi toshkent axborot texnologiya
              universitetiti
            </text>
            <text>O‘zbekiston</text>
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
      <div className="educational_header">
        <div className="education_card_content">
          <div className="education_card_left">
            <span className="education_steps_header"> Bakalavr</span>
            <div className="education_card_steps">
              <div className="education_card_svg">
                <img src={stepDotSvg} alt="error img" />
              </div>
              <div className="education_card_years">
                <span>2017 yil</span>
                <span>2021 yil</span>
              </div>
            </div>
          </div>
          <div className="education_card_right">
            <text>
              Muhammad al xorazmiy nomidagi toshkent axborot texnologiya
              universitetiti
            </text>
            <text>O‘zbekiston</text>
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
      <div className="educational_header">
        <div className="education_card_content">
          <div className="education_card_left">
            <span className="education_steps_header"> Bakalavr</span>
            <div className="education_card_steps">
              <div className="education_card_svg">
                <img src={stepDotSvg} alt="error img" />
              </div>
              <div className="education_card_years">
                <span>2017 yil</span>
                <span>2021 yil</span>
              </div>
            </div>
          </div>
          <div className="education_card_right">
            <text>
              Muhammad al xorazmiy nomidagi toshkent axborot texnologiya
              universitetiti
            </text>
            <text>O‘zbekiston</text>
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
      <Modal
        title={
          editId ? "Ta'lim ma’lumotlari" : "Ta'lim ma’lumotlarini qo‘shish"
        }
        width={856}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer=""
      >
        <EducationModal
          edit={editId}
          closeModalProps={() => setVisible(false)}
        />
      </Modal>
    </div>
  );
}

export default EducationInforms;
