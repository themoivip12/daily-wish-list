import { Avatar, Badge, Card, Col, List, Row, Typography } from "antd";
import dayjs from "dayjs";

function DailyWishList() {
  const data = [
    { id: "MAH1", title: "Wake up Bubby", shortDiscription: "Wake up at 6:00am, don't drowsy", time: '6:00am' },
    { id: "MAH2", title: "Wake up Bubby", shortDiscription: "Wake up at 6:00am, don't drowsy", time: '6:00am' },
    { id: "MAH3", title: "Wake up Bubby", shortDiscription: "Wake up at 6:00am, don't drowsy", time: '6:00am' },
    { id: "MAH5", title: "Wake up Bubby", shortDiscription: "Wake up at 6:00am, don't drowsy", time: '6:00am' },
    { id: "MAH4", title: "Wake up Bubby", shortDiscription: "Wake up at 6:00am, don't drowsy", time: '6:00am' }
  ]
  return (
    <Row gutter={4}>
      <Col span={16}>
        <Typography.Title level={2} className="!mt-0">
          Today's
        </Typography.Title>
        <List
          dataSource={data}
          renderItem={(item) => (
            <Badge.Ribbon text="Hippies">
              <List.Item key={item.id} className="border !border-#514D9E border-solid b-rd-3 !p-2 !mb-3 !bg-#EDE6F8 !bg-opacity-30 cursor-pointer !hover-bg-opacity-70 duration-300" >
                <List.Item.Meta
                  avatar={<Avatar size={40} style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}>USER</Avatar>}
                  title={
                    <><a className="!text-#514D9E" href="https://ant.design">{item.title}</a>
                      <small className="!mt-0 block text-gray">
                        Schedule: road to GOAT
                      </small></>
                  }
                  description={item.shortDiscription}

                >



                </List.Item.Meta>

                <div className="mt-4 font-500">{item.time}</div>
              </List.Item>
            </Badge.Ribbon>
          )}
        />
      </Col>

    </Row>
  );
}

export default DailyWishList;
