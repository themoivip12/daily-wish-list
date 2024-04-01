
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { FilterParams, IUseFilter } from '../../../types/index';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useEffect } from 'react';

const { Option } = Select;

interface Props<T> extends IUseFilter<T> {
    children: JSX.Element
    title?: string
    size?: 'sm' | 'md' | 'lg'
}

const convertSizeToWidth = (size?: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'lg':
            return 1080;
        case 'md':
            return 720;
        case 'sm':
        default:
            return 360;
    }
}

const WrapFilter = <T extends FilterParams>({ filter, onFilter, onClose, visible, title = 'Filter', size = 'sm', children }: Props<T>) => {
    const methods = useForm<T>({ mode: 'all' })
    const { handleSubmit } = methods


    const onSubmit = async (value: T) => {
        onFilter(value)
    }


    return (
        <>
            <Drawer
                title={title}
                width={convertSizeToWidth(size)}
                onClose={onClose}
                open={visible}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSubmit(onSubmit)} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <FormProvider {...methods}>
                    {React.cloneElement(children, { filter })}
                </FormProvider>
            </Drawer>
        </>
    );
};

export default WrapFilter;