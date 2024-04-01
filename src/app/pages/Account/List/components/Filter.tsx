
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { FilterParams, IUseFilter, IFilterProps } from '../../../types/index';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import ControllerItem from 'app/components/HOC/ControllerItem';

const { Option } = Select;


const Filter = <T extends {}>({ filter }: IFilterProps<T>) => {
    const { reset, control } = useFormContext()
    useEffect(() => {
        console.log(888, filter);

        reset(filter)
    }, [filter])
    return (
        <>
            <Row gutter={16}>
                <Col span={24}>
                    <ControllerItem
                        title='User'
                        name='user'
                        control={control}
                        render={({ field }) => <Input {...field} placeholder="Please enter user name" />}
                    />

                </Col>
                <Col span={24}>
                    <ControllerItem
                        title='Url'
                        name='url'
                        control={control}
                        render={({ field }) => <Input {...field}
                            style={{ width: '100%' }}
                            addonBefore="http://"
                            addonAfter=".com"
                            placeholder="Please enter url"
                        />}
                    />
                </Col>

                <Col span={24}>
                    <ControllerItem
                        title='Owner'
                        name='owner'
                        control={control}
                        render={({ field }) => <Select {...field} mode='multiple' className='w-full' placeholder="Please select an owner">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                        </Select>}
                    />

                </Col>
                <Col span={24}>
                    <ControllerItem
                        title='Type'
                        name='type'
                        control={control}
                        render={() => <Select className='w-full' placeholder="Please choose the type">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                        </Select>}
                    />
                </Col>

                <Col span={24}>
                    <ControllerItem
                        title='Approver'
                        name='approver'
                        control={control}
                        render={() => <Select className='w-full' placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                        </Select>}
                    />

                </Col>
                <Col span={24}>
                    <ControllerItem
                        title='DateTime'
                        name='dateTime'
                        control={control}
                        render={() => <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            getPopupContainer={(trigger) => trigger.parentElement!}
                        />}
                    />

                </Col>

                <Col span={24}>
                    <ControllerItem
                        title='DateTime'
                        name='dateTime'
                        control={control}
                        render={() => <Input.TextArea rows={4} placeholder="please enter url description" />}
                    />
                </Col>
            </Row>
        </ >
    );
};

export default Filter;