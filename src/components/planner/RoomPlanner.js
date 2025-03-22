import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { saveAs } from 'file-saver';
import './RoomPlanner.css';

// Объекты мебели
const furnitureItems = [
  { id: 'table-4', name: 'Стол на 4 места', type: 'table', image: '/img/furniture/table-4.svg' },
  { id: 'table-6', name: 'Стол на 6 мест', type: 'table', image: '/img/furniture/table-6.svg' },
  { id: 'partition', name: 'Перегородка', type: 'partition', image: '/img/furniture/partition.svg' },
  { id: 'partition-vertical', name: 'Перегородка вертикальная', type: 'partition', image: '/img/furniture/partition-vertical.svg' },
];

const RoomPlanner = () => {
  const [placedItems, setPlacedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const boardRef = useRef(null);

  // Добавление нового элемента на доску
  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      uniqueId: `${item.id}-${Date.now()}`,
      position: { x: 0, y: 0 }
    };
    setPlacedItems([...placedItems, newItem]);
  };

  // Обработка перемещения элемента
  const handleDrag = (uniqueId, e, data) => {
    setPlacedItems(placedItems.map(item => 
      item.uniqueId === uniqueId 
        ? { ...item, position: { x: data.x, y: data.y } }
        : item
    ));
  };

  // Сохранение расстановки в файл
  const handleSave = () => {
    const saveData = {
      items: placedItems.map(({ uniqueId, id, position }) => ({
        uniqueId,
        id,
        position
      }))
    };
    const blob = new Blob([JSON.stringify(saveData)], { type: 'application/json' });
    saveAs(blob, 'room-layout.json');
  };

  // Загрузка расстановки из файла
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          const importedItems = importedData.items.map(item => {
            const originalItem = furnitureItems.find(f => f.id === item.id);
            return {
              ...originalItem,
              uniqueId: item.uniqueId,
              position: item.position
            };
          });
          setPlacedItems(importedItems);
        } catch (error) {
          console.error('Ошибка при импорте файла:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="room-planner">
      <div className="furniture-list">
        <h3>Элементы мебели</h3>
        <div className="furniture-items">
          {furnitureItems.map(item => (
            <div
              key={item.id}
              className="furniture-item"
              onClick={() => handleAddItem(item)}
            >
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="planner-controls">
          <button onClick={handleSave}>Сохранить расстановку</button>
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            style={{ display: 'none' }}
            id="import-file"
          />
          <label htmlFor="import-file" className="import-button">
            Загрузить расстановку
          </label>
        </div>
      </div>
      
      <div className="planning-board" ref={boardRef}>
        {placedItems.map(item => (
          <Draggable
            key={item.uniqueId}
            position={item.position}
            onDrag={(e, data) => handleDrag(item.uniqueId, e, data)}
            bounds="parent"
          >
            <div className="placed-item">
              <img src={item.image} alt={item.name} />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default RoomPlanner; 