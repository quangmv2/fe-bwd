import React, { memo, useState } from 'react'
import styles from './styles.module.scss'
import { Menu, Dropdown, Tag, Input, DatePicker } from 'antd';
import { DownOutlined, SearchOutlined, AppstoreTwoTone, MessageTwoTone, PushpinTwoTone } from '@ant-design/icons'
import './styles.scss'

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
            <Menu className={styles.menu}>
                {filteredOptions.map(item => (
                    <Menu.Item key={item} onClick={() => onSelect(item)} className='d-flex align-items-center justify-content-center'>
                       <p className='text-capitalize m-0'> {item}</p>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }
    const renderKindSelected = () => {
        return (
            <div className='d-flex align-items-center my-2' style={{ height: '30px'}}>
            {selectedItems.map(item => {
                return (
                    <Tag closable className={`p-2  d-flex align-items-center ${styles.tag} tag-wrap`}>{item}</Tag>
                )
            })}
            </div>
        )
    }
    const renderHow = () => {
        return (
            <>
                <p className={`m-0 ${styles.how}`}>How</p>
                <Menu className={`menu-how ${styles.menuHow}`}>
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
        <section className={`p-3  ${styles.wrap}`}>
            <div className='pt-5'>
                <p className={`m-0 ${styles.title}`}>Your Preferences</p>
                <p className={`m-0 ${styles.filterApplied}`}>6 filters applied - <span>Reset All</span></p>
            </div>
            <div className={`mt-5 ${styles.typeOption}`}>
                <Dropdown overlay={menu} trigger={['click']} className='test'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='m-0'>I want some help with...</p><DownOutlined className={styles.downIcon}/>
                    </div>
                </Dropdown>
                {renderKindSelected()}
            </div>
            <div>
                <DatePicker showTime={{ format: 'HH:mm' }}
                className='date-picker-wrap mt-3 p-0'
                bordered={false}
                    format="MMM DD HH:mm" />
            </div>
            <div className='pt-3 search-wrap'>
                <Input bordered={false} placeholder='Search name' className='bg-white border-radius-12 overflow-hidden' prefix={<SearchOutlined />} />
            </div>

            <div className='mt-3'>
                {renderHow()}
            </div>

        </section>

    )
})

export { PsychologistFilter }