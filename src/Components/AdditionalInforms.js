import { Checkbox, Form, Input, Radio, Select, Space, Upload } from "antd";
import React from "react";
import "../Styles/AdditionalInforms.css";
import { ReactComponent as PdfIcon } from "../Assets/Svg/pdf.svg";
import { ReactComponent as UploadIcon } from "../Assets/Svg/upload.svg";

function AdditionalInforms() {
  return (
    <div className="additional_informs_section">
      <Form layout="vertical" className="content_form">
        {/* Lavozim va daromad */}
        <div className="educational_header">
          <div className="content_title">Lavozim va daromad</div>
          <div className="content_line"></div>
          <Form.Item
            name="country"
            label="Qaysi lavozimni egallamoqchisiz"
            className="contect_half_width"
          >
            <Select size="large" placeholder="Lavozimni tanlang">
              <Select.Option value="0">Software enginer</Select.Option>
              <Select.Option value="1">Data scients</Select.Option>
              <Select.Option value="2">Marketolog</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="diplom"
            label="Ish haqqi"
            className="contect_half_width"
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="radio-group"
            label="Bandlik turi"
            className="contect_half_width"
          >
            <Radio.Group defaultValue={"0"}>
              <Space direction="vertical">
                <Radio value="0">To‘liq ish kuni</Radio>
                <Radio value="1">Smenali ish</Radio>
                <Radio value="2">Moslashuvchan jadval asosida</Radio>
                <Radio value="3">Masofaviy ish</Radio>
                <Radio value="4">Amaliyotchi</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="radio-group" className="contect_half_width">
            <Checkbox.Group defaultValue={"0"}>
              <Space direction="vertical">
                <Checkbox value="0">Xizmat safarlariga tayyorman</Checkbox>
                <Checkbox value="1">Ko‘chishga tayyorman</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </div>
        {/* Ilmiy unvon va ilmiy daraja */}
        <div className="educational_header">
          <div className="content_title">Ilmiy unvon va ilmiy daraja</div>
          <div className="form_special_label">
            Ilmiy unvon
            <div className="form_spacial_right">
              <span></span>
              <div className="form_special_line"></div>
            </div>
          </div>
          <Form.Item
            name="country"
            label="Ilmiy unvon"
            className="contect_half_width"
          >
            <Select size="large" placeholder="Ilmiy unvonni tanlang">
              <Select.Option value="0">Doktor</Select.Option>
              <Select.Option value="1">Phd</Select.Option>
              <Select.Option value="2">Fan nomzodi</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Diplom ma’lumotini yuklang*"
            className="contect_half_width"
            tooltip="Diplom ma’lumotini yuklang"
          >
            <Upload className="contect_full">
              <div
                style={{ height: 41 }}
                size="large"
                className="education_upload"
              >
                <UploadIcon />
                Click to Upload
              </div>
            </Upload>
          </Form.Item>

          <div className="form_special_label">
            Ilmiy daraja
            <div className="form_spacial_right">
              <span></span>
              <div className="form_special_line"></div>
            </div>
          </div>
          <Form.Item
            name="country"
            label="Ilmiy daraja"
            className="contect_half_width"
          >
            <Select size="large" placeholder="Ilmiy darajani tanlang">
              <Select.Option value="0">Doktor</Select.Option>
              <Select.Option value="1">Phd</Select.Option>
              <Select.Option value="2">Fan nomzodi</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="contect_half_width"
            tooltip="Diplom ma’lumotini yuklang"
          >
            <span
              style={{ marginBottom: 10 }}
              className="education_edit_upload_delete "
            >
              O‘chirish
            </span>
            <Upload>
              <div
                size="large"
                className="education_upload"
                style={{ height: 41 }}
              >
                <PdfIcon />
                Информаци...pdf
                <span>Yuklash</span>
              </div>
            </Upload>
          </Form.Item>
        </div>
        {/* Til bilish darajasi */}
        <div className="educational_header">
          <div className="content_title">Til bilish darajasi</div>
          <div className="content_line"></div>
          <Form.Item label="Til*" className="contect_half_width">
            <Select
              mode="multiple"
              size="large"
              placeholder="Tilni tanlang"
              showArrow
            >
              <Select.Option value="0">O'zbek tili</Select.Option>
              <Select.Option value="1">Rus tili</Select.Option>
              <Select.Option value="2">Inglis tili</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Bilish darajasi*" className="contect_half_width">
            <Select size="large" placeholder="Tilni tanlang">
              <Select.Option value="0">Beginner</Select.Option>
              <Select.Option value="1">Intermediate</Select.Option>
              <Select.Option value="2">Advanced</Select.Option>
            </Select>
          </Form.Item>

          <button className="additional_language_button">
            Chet tilini qo'shing
          </button>
        </div>
        {/* O‘zim haqimda */}
        <div className="educational_header">
          <div className="content_title">O‘zim haqimda</div>
          <div className="content_line"></div>
          <Form.Item label="O‘zim haqimda" className="contect_full">
            <Input.TextArea rows={8} placeholder="_ _ _ _ _ _ _ _ _" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default AdditionalInforms;
