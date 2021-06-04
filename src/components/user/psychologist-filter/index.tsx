import React, { memo, useState } from 'react'
import styles from './styles.module.scss'
import { Menu, Dropdown, Tag, Input, DatePicker } from 'antd';
import { DownOutlined, SearchOutlined, AppstoreTwoTone, MessageTwoTone, PushpinTwoTone } from '@ant-design/icons';

interface PsychologistFilterProps {

}

const PsychologistFilter: React.FC<PsychologistFilterProps> = memo(() => {
    const [selectedItems, setSelectedItems] = useState([]);
    const kind = ['anxiety', 'eating disoder', 'abuse']
    const how = [
        {
            icon: <AppstoreTwoTone />,
            title: 'video call'
        },
        {
            icon: <MessageTwoTone />,
            title: 'live chat'
        },
        {
            icon: <PushpinTwoTone />,
            title: 'In person'
        },
    ]
    const filteredOptions = kind.filter(o => !selectedItems.includes(o));
    const onSelect = items => {
        setSelectedItems(selectedItems.concat(items))
    }


    const menu = () => {
        return (
            <Menu>
                {filteredOptions.map(item => (
                    <Menu.Item key={item} onClick={() => onSelect(item)}>
                        <p>{item}</p>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }
    const renderKindSelected = () => {
        return (
            selectedItems.map(item => {
                return (
                    <Tag closable >{item}</Tag>
                )

            })
        )
    }
    const renderHow = () => {
        return (
            <>
                <p className='m-0'>How</p>
                <Menu>
                    {how.map(item => (
                        <Menu.Item key={item.title} icon={item.icon}>
                            {item.title}
                        </Menu.Item>
                    ))}
                </Menu>
            </>
        )

    }

    return (
        <section className={`bg-white border-radius-12 ${styles.wrap}`}>
            <div>
                <p>Your Preferences</p>
                <p>6 filters applied - <span>Reset All</span></p>
            </div>
            <div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <div>
                        <p>I want some help with...</p>  <DownOutlined />
                    </div>
                </Dropdown>
                {renderKindSelected()}
            </div>
            <div>
                <DatePicker showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm" />
            </div>
            <div >
                <Input bordered={false} placeholder='name' className='bg-white border-radius-12 overflow-hidden shadow-css' prefix={<SearchOutlined />} />
            </div>

            <div>
                {renderHow()}
            </div>

        </section>

    )
})

export { PsychologistFilter }