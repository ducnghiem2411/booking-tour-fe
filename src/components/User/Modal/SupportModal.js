import { Form, Input, Button, Checkbox } from "antd";
import React from "react";

const SupportModal = (props) => {
  const [form] = Form.useForm();
  const {status} = props
  console.log('status', status)



  const onSubmit = (values) => {
    console.log("values", values);
  };
  const closeModal = () => {
  }

  const styleButton = {
    background: "red",
    border: "none",
    outline: "none",
    padding: "5px 20px",
    marginRight: "10px",
    display: "inline-block",
  };

  return (
    <>
      <div className={ status ?  'support-modal active' : 'support-modal'}>
        <div className={ status ?  "body active" : 'body'}>
          <h3>gửi thông tin tư vấn</h3>
          <p>
            Quý khách vui lòng nhập thông tin bên dưới, Tournest sẽ liên hệ lại
            sau ít phút
          </p>
          <Form form={form} name="control-hooks" onFinish={onSubmit}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên của bạn.",
                },
              ]}
            >
              <Input placeholder="Họ tên.." />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng số điện thoại của bạn.",
                },
              ]}
            >
              <Input placeholder="Điện thoại.." />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email của bạn.",
                },
              ]}
            >
              <Input placeholder="Email.." />
            </Form.Item>
            <Form.Item name="info">
              <Input placeholder="Thông tin cần tư vấn.." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="button" style={styleButton} onClick={closeModal}>
                CLose
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SupportModal;
