import React from 'react'
import { Space, Input, Card } from 'antd'

export function SearchBar() {
    const { Search } = Input
    const { Meta } = Card

    const onSearch = (value) => console.log(value);

    return (
        <Space direction='vertical' style={{display:'flex',alignItems:'center'}}>
            <Search 
                placeholder='ค้นหา pikka'
                enterButton='ค้นหา'
                size='large'
                onSearch={onSearch}/>
            <Card
                hoverable
                style={{width:240}}
                cover={<img alt='pikka' src='https://cdn.pixabay.com/photo/2021/02/07/19/52/pikachu-5992504_960_720.png'/>}
                >
                <Meta title='Pikka' description='caption'/>
            </Card>
        </Space>      
    )
}
