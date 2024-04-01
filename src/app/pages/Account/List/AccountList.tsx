import { SearchOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnsType, Typography } from "antd";
import HeaderTable from "app/components/Table/HeaderTable";
import { useFilter } from "app/hooks";
import Filter from "./components/Filter";
import WrapFilter from "app/components/WrapFilter";
import { useLocation, useNavigate } from "react-router";
import { path } from "app/routes/path";

export const AccountList = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns: TableColumnsType<any> = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>action</a>,
        },
    ];

    const handleFilter = (data: any) => {
        console.log(data);
        filter.onClose()
    }

    const nagative = useNavigate()
    const location = useLocation()
    const filter = useFilter({ size: "lg", onSubmit: handleFilter })
    return (<div>
        {location.state}
        <button onClick={() => nagative({ pathname: path.account }, { state: '333' })}> 123  </button>
        <HeaderTable title="Account Management" onClickFilter={filter.onOpen}>
            <>
                <Button icon={<SearchOutlined />} type='default'>Active All</Button>
                <Button icon={<SearchOutlined />} >Inactive All</Button>
                <Button icon={<SearchOutlined />} >Delete All</Button>
            </>
        </HeaderTable>
        < Table dataSource={dataSource} columns={columns} />
        <WrapFilter {...filter} size="sm">
            <Filter />
        </WrapFilter>
    </div >);
}