import { FilterFilled } from "@ant-design/icons"
import { Button, Typography } from "antd"

interface Props {
    title?: string
    onClickFilter?: () => void
    children?: JSX.Element

}

const HeaderTable = ({ onClickFilter, title, children }: Props) => {
    return (
        <div className="flex justify-between">
            <Typography.Title level={2} className="m-0">{title}</Typography.Title>

            <div className="flex space-x-4px">
                {children}
                {
                    onClickFilter && <Button onClick={onClickFilter} icon={<FilterFilled />} type='primary'>Filter</Button>
                }
            </div>
        </div>
    )
}

export default HeaderTable