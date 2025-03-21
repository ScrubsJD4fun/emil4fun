import React, { useState } from 'react';
import { Card, Avatar, Button, Form, Input, DatePicker, Row, Col, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ClientProfile = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const profile = useSelector((state) => state.profile.profile)

  const handleViewProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      history.push(`/app/home/clients`);
    }, 2000);
  };

  const [form] = Form.useForm();
  console.log(profile)
  const initialData = {
    name: profile.name,
    username: profile.username,
    email: profile.email,
    phone: profile.phone,
    address: `${profile.address.street}, ${profile.address.suite}`,
    city: profile.address.city ?? null,
    postCode: profile.address.zipcode ?? null,
    website: profile.website ?? null,
    dateOfBirth: profile.dateOfBirth && null,
  };

  const onFinish = () => {
    setIsEditing(false);
  };

  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '24px' }}>
        <div style={{ position: 'relative' }}>
          <Avatar size={100} src="https://i.pravatar.cc/150" />
        </div>
        
        <Button type="primary">
            Change Avatar
        </Button>

        <Button type="text" onClick={() => setIsEditing(true)} style={{ outline: '1px solid !important' }}>
            Remove
        </Button>
        
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={initialData}
        onFinish={onFinish}
        disabled={!isEditing}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              required
              rules={[{ required: true, message: 'Please input name!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              required
              rules={[{ required: true, message: 'Please input username!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Email"
          name="email"
          required
          rules={[
            { required: true, message: 'Please input email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Website"
              name="website"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Address"
          name="address"
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Post code"
              name="postCode"
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      </Form>
      {isLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      )}
        <Button type="primary" onClick={() => handleViewProfile()}>
             Save Change
        </Button>
    </Card>
  );
};

export default ClientProfile; 