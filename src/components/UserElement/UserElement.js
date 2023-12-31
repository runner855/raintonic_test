import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const UserElement = ({ item }) => {

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={item.image}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={item.first_name}
        description="This is the description"
      />
    </Card>
  );
}

export default UserElement;