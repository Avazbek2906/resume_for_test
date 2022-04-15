import React from "react";
import { Button, Checkbox, Form, Input, Modal, Select, Upload } from "antd";
import "../Styles/EducationalInforms.css";
import { ReactComponent as UploadIcon } from "../Assets/Svg/upload.svg";
import { ReactComponent as DeleteIcon } from "../Assets/Svg/delete.svg";
import { ReactComponent as PdfIcon } from "../Assets/Svg/pdf.svg";

function EducationModal(props) {
  const [form] = Form.useForm();
  console.log(props.edit);
  if (props.edit) {
    form.setFieldsValue({
      country: "0",
      educationName: "1",
      entireYear: "2017",
      finishedYear: "2021",
      speciality: "0",
      diplom: "BB1234567",
      level: "0",
    });
  } else form.resetFields();
  return (
    <div>
      <Form form={form} layout="vertical" className="content_form">
        <Form.Item
          name="country"
          label="O‘quv muassasi joylashgan davlat*"
          className="contect_full"
        >
          <Select
            size="large"
            placeholder="O‘quv muassasi joylashgan davlatni tanlang"
          >
            <Select.Option value="0">O'zbekiston</Select.Option>
            <Select.Option value="1">Tojikiston</Select.Option>
            <Select.Option value="2">Qirg'iziston</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="educationName"
          label="O‘quv muassasi nomi*"
          className="contect_full"
        >
          <Select size="large">
            <Select.Option value="0">Toshkent moliya instituti</Select.Option>
            <Select.Option value="1">
              Muhammad al xorazmiy nomidagi toshkent axborot texnologiya
              universitetiti
            </Select.Option>
            <Select.Option value="2">
              Toshkent milliy universitetiti
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="entireYear"
          label="Kirgan yili*"
          className="contect_half_width"
        >
          <Select size="large" placeholder="Kirgan yilni tanlang">
            <Select.Option value="2016">2016</Select.Option>
            <Select.Option value="2017">2017</Select.Option>
            <Select.Option value="2018">2018</Select.Option>
            <Select.Option value="2019">2019</Select.Option>
            <Select.Option value="2020">2020</Select.Option>
            <Select.Option value="2021">2021</Select.Option>
            <Select.Option value="2022">2022</Select.Option>
          </Select>
        </Form.Item>

        <span className="contect_half_width">
          <Form.Item
            name="finishedYear"
            label="Tamomlagan yili*"
            className="contect_full"
          >
            <Select size="large" placeholder="Tamomlagan yili">
              <Select.Option value="2020">2020</Select.Option>
              <Select.Option value="2021">2021</Select.Option>
              <Select.Option value="2022">2022</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="studing"
            valuePropName="checked"
            className="education_form_checkbox"
          >
            <Checkbox>Hozir ham o‘qiyapman</Checkbox>
          </Form.Item>
        </span>

        <Form.Item
          name="speciality"
          label="Mutaxasisslik*"
          className="contect_full"
        >
          <Select size="large">
            <Select.Option value="0">Kompyuter injeneringi</Select.Option>
            <Select.Option value="1">Dasturiy ta'minot</Select.Option>
            <Select.Option value="2">Kiberxavfsizlik</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="diplom"
          label="Diplom seriyasi va raqamini kiriting*"
          className="contect_full"
        >
          <Input size="large" />
        </Form.Item>

        <div className="contect_half_width">
          <span>Tug’ilgan yili*</span>
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

        <Form.Item name="level" label="Daraja*" className="contect_half_width">
          <Select size="large" placeholder="Darajani tanlang">
            <Select.Option value="0">Bakalavr</Select.Option>
            <Select.Option value="1">Magistr</Select.Option>
            <Select.Option value="2">Mutaxasis</Select.Option>
          </Select>
        </Form.Item>
        {props.edit ? (
          <Form.Item
            className="contect_half_width"
            tooltip="Diplom ma’lumotini yuklang"
          >
            <span className="education_edit_upload_delete">O‘chirish</span>
            <Upload>
              <div size="large" className="education_upload">
                <PdfIcon />
                Информаци...pdf
                <span>Yuklash</span>
              </div>
            </Upload>
          </Form.Item>
        ) : (
          <Form.Item
            label="Diplom ma’lumotini yuklang*"
            className="contect_half_width"
            tooltip="Diplom ma’lumotini yuklang"
          >
            <Upload className="contect_full">
              <div size="large" className="education_upload">
                <UploadIcon />
                Click to Upload
              </div>
            </Upload>
          </Form.Item>
        )}
      </Form>
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

export default EducationModal;
