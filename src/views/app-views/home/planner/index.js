import React from 'react';
import RoomPlanner from '../../../../components/planner/RoomPlanner';
import { Card } from 'antd';

const PlannerPage = () => {
  return (
    <div>
      <h2>Планировщик помещения</h2>
      <Card>
        <RoomPlanner />
      </Card>
    </div>
  );
};

export default PlannerPage; 