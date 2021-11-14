import React from 'react'
import { Form, Input, Button } from 'antd'
import axios from '../config/axios';

export function SignUp() {

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 24,
          },
          md: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 24,
          },
          md: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 24,
            offset: 0,
          },
          md: {
            span: 16,
            offset: 8,
          },
        },
      };

      const createSignUp= async (values) => {
          try {
            const respone = await axios.post('/signup',{
                email: values.email,
                password: values.password})
            console.log(respone)  
          } catch (err) {
              console.err(err)
          }
      }

    return (
        <div style={{width:'50vw', margin:'50px auto'}}>
            <h1>ลงทะเบียน</h1>
            <Form 
            {...formItemLayout} 
            onFinish={createSignUp}>
                <Form.Item
                    name='email'
                    label='Email'
                    rules={[
                        {
                            required: true,
                            message: 'กรุณากรอกอีเมล'
                        },
                        {
                            type : 'email',
                            message : 'กรุณากรอกข้อมูลในรูปแบบอีเมล เช่น example123@mail.com'
                        }
                    ]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                        {
                            required: true,
                            message: 'กรุณากรอกรหัสผ่าน'
                        },
                        {
                            min: 10,
                            message: 'รหัสผ่านอย่างน้อย 10 ตัวอักษร'
                        },
                    ]}
                    hasFeedback>
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name='confirm'
                    label='Confirm Password'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาทำการยืนยันรหัสผ่าน'
                        },
                        ({ getFieldValue }) =>({
                            validator(_, value){
                               if (!value || getFieldValue('password') === value){
                                    return Promise.resolve();
                               }
                               return Promise.reject(new Error('รหัสผ่านที่ยืนยันไม่ตรงกัน'))
                            }
                        }) 
                    ]}>
                    <Input.Password/>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button htmlType='submit'>Sign Up</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
