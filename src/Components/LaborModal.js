import { Button, Checkbox, Form, Input, Select } from "antd";
import React from "react";
import "../Styles/LaborActivity.css";
import { ReactComponent as DeleteIcon } from "../Assets/Svg/delete.svg";

function LaborModal(props) {
  const [form] = Form.useForm();
  console.log(props.edit);
  if (props.edit) {
    form.setFieldsValue({
      country: "0",
      region: "0",
      name: "'Ta'lim muassasalarida elektron ta'limni joriy etish markazi' davlat muassasasi ",
      staf: "Yetakchi muahandis",
      working: true,
    });
  } else form.resetFields();
  return (
    <div>
      <Form form={form} layout="vertical" className="content_form">
        <Form.Item
          name="country"
          label="Tashkilot joylashgan davlat*"
          className="contect_half_width"
        >
          <Select
            size="large"
            placeholder="Tashkilot joylashgan davlatni tanlang"
          >
            <Select.Option value="0">O'zbekiston</Select.Option>
            <Select.Option value="1">Tojikiston</Select.Option>
            <Select.Option value="2">Qirg'iziston</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="region"
          label="Tashkilot joylashgan viloayat (shahar)*"
          className="contect_half_width"
        >
          <Select
            size="large"
            placeholder="Tashkilot joylashgan viloyat (shahar)ni tanlang"
          >
            <Select.Option value="0">Toshkent shahri</Select.Option>
            <Select.Option value="1">Farg'ona viloyati</Select.Option>
            <Select.Option value="2">Andijon viloyati</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="name"
          label="Tashkilot nomini kiriting*"
          className="contect_full"
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item name="staf" label="Lavozim*" className="contect_full">
          <Input size="large" />
        </Form.Item>

        <div className="contect_half_width ">
          <span>Ishga kirgan sana*</span>
          <div className="content_img_right">
            <Form.Item>
              <Select style={{ width: 84 }} size="large" defaultValue="3">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select style={{ width: 212 }} size="large" defaultValue="Dekabr">
                <Select.Option value="Dekabr">Dekabr</Select.Option>
                <Select.Option value="Yanvar">Yanvar</Select.Option>
                <Select.Option value="Fevral">Fevral</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select style={{ width: 88 }} size="large" defaultValue="2021">
                <Select.Option value="2020">2020</Select.Option>
                <Select.Option value="2021">2021</Select.Option>
                <Select.Option value="2022">2022</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="contect_half_width">
          <span>Ishdan ketgan sana*</span>
          <div className="content_img_right">
            <Form.Item>
              <Select style={{ width: 84 }} size="large" defaultValue="3">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select style={{ width: 212 }} size="large" defaultValue="Dekabr">
                <Select.Option value="Dekabr">Dekabr</Select.Option>
                <Select.Option value="Yanvar">Yanvar</Select.Option>
                <Select.Option value="Fevral">Fevral</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select style={{ width: 88 }} size="large" defaultValue="2021">
                <Select.Option value="2020">2020</Select.Option>
                <Select.Option value="2021">2021</Select.Option>
                <Select.Option value="2022">2022</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="working"
            valuePropName="checked"
            className="education_form_checkbox"
          >
            <Checkbox>Hozirgacha shu yerda ishlayman</Checkbox>
          </Form.Item>
        </div>
      </Form>
      <br />
      <br />
      <div className="education_modal_footer">
        <button
          onClick={() => props.closeModalProps()}
          size="large"
          className="education_add_button"
        >
          Saqlash
        </button>
        {props.edit ? (
          <>
            <Button
              onClick={() => props.closeModalProps()}
              className="eduaction_cancel_button"
              type="link"
              size="large"
            >
              Bekor qilish
            </Button>
            <Button
              onClick={() => props.closeModalProps()}
              icon={<DeleteIcon />}
              className="eduaction_delete_button"
              type="link"
              size="large"
            >
              O‘chirish
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default LaborModal;
