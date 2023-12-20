import React from 'react';
import './Statistic.css'

const getRandomColor = () => {
  // Рядок, що містить всі можливі цифри та літери HEX
  const letters = '0123456789ABCDEF';
  let color = '#';

  // Генерація шістнадцяткового представлення кольору
  for (let i = 0; i < 6; i++) {
    // Вибираємо випадковий символ зі строкового рядка
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item" style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export{ Statistics};
