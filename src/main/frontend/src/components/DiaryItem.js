import React from 'react';
import './DiaryItem.css';
import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';

const DiaryItem = () => {
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_1`}>
        <img src={getEmotionImage(1)} alt="emotion"/>
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 내용</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;