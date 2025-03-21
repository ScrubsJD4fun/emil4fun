import React, { useEffect, useState } from 'react';
import { Card, Spin, Table, Tag, Avatar, Button, Tooltip } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfileData } from 'redux/actions/Profile';
const ClientsList = () => {
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  
  const handleViewProfile = (userId) => {
    dispatch(setProfileData(clients.find(client => client.id === userId)));
    history.push(`/app/home/clients/profile/${userId}`);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const transformedData = data.map(user => ({
          ...user,
          role: Math.random() > 0.7 ? 'Admin' : 'User',
          lastOnline: moment().subtract(Math.floor(Math.random() * 30), 'days').format('MM/DD/YYYY'),
          status: Math.random() > 0.7 ? 'Blocked' : 'Active'
        }));
        setClients(transformedData);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchClients();
    return () => {
      setClients([]);
    }
  }, []);

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={() => handleViewProfile(record.id)}
        >
          <Avatar src={`https://i.pravatar.cc/150?u=${record.id}`} />
          <div>
            <div>{record.name}</div>
            <div style={{ color: '#888', fontSize: '12px' }}>{record.email}</div>
          </div>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: {
        compare: (a, b) => a.role.length - b.role.length,
      },
    },
    {
      title: 'Last online',
      dataIndex: 'lastOnline',
      key: 'lastOnline',
      sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Active', value: 'Active' },
        { text: 'Blocked', value: 'Blocked' },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <Tag color={status === 'Active' ? '#87d068' : '#f50'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, record) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button 
              type="primary" 
              className="mr-2" 
              icon={<EyeOutlined />}  
              size="small"
              onClick={() => handleViewProfile(record.id)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button danger icon={<DeleteOutlined />} size="small"/>
          </Tooltip>
        </div>
      )
    }
  ];

  return (
    <Card >
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table 
          columns={columns} 
          dataSource={clients}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </Card>
  );
};

export default ClientsList; 