import { Form, Input, Button, Checkbox } from 'antd'
import React from 'react'

const SupportModal = (props) => {
  const [form] = Form.useForm()
  const { status } = props
  console.log('status', status)

  const onSubmit = (values) => {
    console.log('values', values)
  }
  const closeModal = () => {}

  const styleButton = {
    background: 'red',
    border: 'none',
    outline: 'none',
    padding: '5px 20px',
    marginRight: '10px',
    display: 'inline-block'
  }

  return (
    <>
      <div className={status ? 'support-modal active' : 'support-modal'}>
        <div className={status ? 'body active' : 'body'}>
          <h3>Send booking information</h3>
          <p> Please enter your information below, and TourNest will get back to you shortly</p>
          <Form form={form} name='control-hooks' onFinish={onSubmit}>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Enter your name.'
                }
              ]}
            >
              <Input placeholder='Full name..' />
            </Form.Item>
            <Form.Item
              name='phone'
              rules={[
                {
                  required: true,
                  message: 'Enter your phone number.'
                }
              ]}
            >
              <Input placeholder='Phone number..' />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Enter your email.'
                }
              ]}
            >
              <Input placeholder='Email..' />
            </Form.Item>
            <Form.Item name='info'>
              <Input placeholder='More information..' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='button' style={styleButton} onClick={closeModal}>
                Close
              </Button>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SupportModal
