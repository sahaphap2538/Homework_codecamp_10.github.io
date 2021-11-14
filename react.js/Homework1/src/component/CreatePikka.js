import React from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { InboxOutlined } from  '@ant-design/icons';
import axios from '../config/axios'; 

   
export function CreatePikka() {
    const { Item } = Form
    const { TextArea } = Input
    const { Dragger } = Upload

    const InputPictureProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };
    
    const toCreate= async (values) => {
        console.log(values)
    //     try {
    //       const respone = await axios.post('/signup',{
    //           email: values.email,
    //           password: values.password})
    //       console.log(respone)  
    //     } catch (err) {
    //         console.err(err)
    //     }
    }

    return (
        <div style={{width:'50vw', margin:'50px auto',border:'1px solid gray',textAlign:'center'}}>
            <h1>Create Pikka</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Form  
                onFinish={toCreate}
                style={{width:'80%'}}>
                    <Item>
                        <TextArea
                        placeholder='Write something for your pikka'
                        autoSize={{minRows: 2, maxRows: 5 }}/>
                    </Item>
                    <Item>
                        <Dragger {...InputPictureProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>   
                            <p className="ant-upload-text">Add picture</p>
                            <p className="ant-upload-hint">Click or drag file to this area </p>
                        </Dragger>
                    </Item>
                    <Item>
                        <Button type='primary' htmlType='submit'>Create</Button>
                    </Item>
                </Form>
            </div>
        </div>
    )
}
