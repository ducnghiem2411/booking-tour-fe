import React from "react";
import { Form, Input, Button, Select } from 'antd';

const Setting = (props) => {

    const [form] = Form.useForm();

    const onSubmit = (values) => {
        console.log(values);
      };
    
  return (
    <>
      <div className="account">
        <div className="body">
          <div className="container container-account">
            <div className="row" style={{height: '100%'}}>
              <div className="col-md-4 col-navi">
                <div className="navigate">
                  <header>
                    <div className="img">
                      <img src="https://via.placeholder.com/75x75" />
                    </div>
                    <p className="name">Lauren Clifford</p>
                    <p className="bio">
                      Adding an image file extension will render the image in
                      the correct format.
                    </p>
                  </header>
                  <div className="list">
                    <ul>
                      <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-setting">
                <div className="body-setting">
                  <p className="title"> Account Settings </p>
                  <div className="form">
                    <Form form={form} name="control-hooks" onFinish={onSubmit}>
                      <Form.Item
                        name="name"
                        label="Name"
                       
                      >
                        <Input placeholder="Your name..." />
                      </Form.Item>
                      <Form.Item
                        name="emai"
                        label="Email"
                       
                      >
                        <Input/>
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Phone"
                       
                      >
                        <Input/>
                      </Form.Item>
                      <Form.Item
                        name="website"
                        label="Webiste"
                       
                      >
                        <Input/>
                      </Form.Item>

                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="btn-ant-modal-submit"
                        >
                          Save
                        </Button>
                       
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
