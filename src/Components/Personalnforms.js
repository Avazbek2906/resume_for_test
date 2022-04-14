import React from "react";
import { Form, Input, Radio, Select } from "antd";
import "../Styles/PersonalInforms.css";
import personImg from "../Assets/Img/person.png";
import manSvg from "../Assets/Svg/man.svg";
import womanSvg from "../Assets/Svg/woman.svg";
function Personalnforms() {
  const { Search } = Input;
  return (
    <div className="personal_informs_section">
      <div className="content_title">Shaxsiy ma'lumotlar</div>
      <div className="content_line"></div>
      <Form
        layout="vertical"
        initialValues={{
          passport_data: "AB1234567",
          name: "Abror",
          lastname: "Askarov",
          fathername: "Akmal O‘g‘li",
          birth_address: "Pirmast qfy , Bozorjoyi qishlog’i",
          gender: "man",
          email: "abrorreal2017@gmail.com",
          number: "+99890 371 88 91",
        }}
        className="content_form"
      >
        <Form.Item label="Fuqaroligi*" className="contect_half_width">
          <Select size="large" defaultValue="O'zbekiston">
            <Select.Option value="O'zbekiston">O'zbekiston</Select.Option>
            <Select.Option value="Tojik">Tojik</Select.Option>
            <Select.Option value="Qirg'iz">Qirg'iz</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Hozirda yashayotgan viloyat (shahar)*"
          className="contect_half_width"
        >
          <Select size="large" defaultValue="Toshkent shahar">
            <Select.Option value="Toshkent shahar">
              Toshkent shahar
            </Select.Option>
            <Select.Option value="Farg'ona">Farg'ona</Select.Option>
            <Select.Option value="Andijon">Andijon</Select.Option>
          </Select>
        </Form.Item>
        <div className="content_line"></div>
        <Form.Item
          name="passport_data"
          label="Pasport seriya va raqami*"
          className="contect_half_width"
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="passport_data"
          label="JSH SHIR*"
          className="contect_half_width"
          tooltip="JSH SHIR ni kiriting"
        >
          <Search size="large" />
        </Form.Item>
        <div className="content_line"></div>
        <div className="content_img_section">
          <img src={personImg} alt="error img" />
          <div className="content_img_form">
            <Form.Item name="name" label="Ism*" className="contect_half_width">
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="Familiya*"
              className="contect_half_width"
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="fathername"
              label="Otasini ismi*"
              className="contect_half_width"
            >
              <Input size="large" />
            </Form.Item>
            <div className="contect_half_width content_img_right">
              <Form.Item label="Tug’ilgan yili*">
                <Select size="large" defaultValue="3">
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label=".">
                <Select
                  style={{ width: 120 }}
                  size="large"
                  defaultValue="Dekabr"
                >
                  <Select.Option value="Dekabr">Dekabr</Select.Option>
                  <Select.Option value="Yanvar">Yanvar</Select.Option>
                  <Select.Option value="Fevral">Fevral</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label=".">
                <Select style={{ width: 86 }} size="large" defaultValue="2021">
                  <Select.Option value="2020">2020</Select.Option>
                  <Select.Option value="2021">2021</Select.Option>
                  <Select.Option value="2022">2022</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="content_line"></div>
        <Form.Item label="Tug’ilgan viloyati*" className="contect_half_width">
          <Select size="large" defaultValue="Buxoro viloyati">
            <Select.Option value="Buxoro viloyati">
              Buxoro viloyati
            </Select.Option>
            <Select.Option value="Samarqand viloyati">
              Samarqand viloyati
            </Select.Option>
            <Select.Option value="Jizzax viloyati">
              Jizzax viloyati
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tug’ilgan tumani*" className="contect_half_width">
          <Select size="large" defaultValue="Vobkent tumani">
            <Select.Option value="Vobkent tumani">Vobkent tumani</Select.Option>
            <Select.Option value="Quva tumani">Quva tumani</Select.Option>
            <Select.Option value="Oltiariq tumani">
              Oltiariq tumani
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="birth_address"
          label="Tug’ilgan manzili*"
          className="contect_full"
        >
          <Input size="large" />
        </Form.Item>
        <div className="content_line"></div>
        <Form.Item
          name="gender"
          label="Jinsni tanlash*"
          className="contect_half_width personal_gender"
        >
          <Radio.Group>
            <Radio value="man" style={{ width: 150 }}>
              <img src={manSvg} alt="error img" /> Erkak
            </Radio>
            <Radio value="woman">
              <img src={womanSvg} alt="error img" /> Ayol
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Millati*" className="contect_half_width">
          <Select size="large" defaultValue="O‘zbek">
            <Select.Option value="O‘zbek">O‘zbek</Select.Option>
            <Select.Option value="Tojik">Tojik</Select.Option>
            <Select.Option value="Rus">Rus</Select.Option>
          </Select>
        </Form.Item>
        <div className="content_line"></div>
        <Form.Item
          name="number"
          label="Telefon*"
          className="contect_half_width"
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Elektron pochta"
          className="contect_half_width"
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Personalnforms;
