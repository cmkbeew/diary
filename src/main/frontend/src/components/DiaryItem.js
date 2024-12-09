import React, { useEffect, useState } from 'react';
import './DiaryItem.css';
import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import axios from 'axios';

const DiaryItem = ({ id, emotionId, date, content }) => {

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} alt="emotion"/>
      </div>
      <div className="info_section">
        <div className="created_date">{date}</div>
        <div className="content">{content}, {id}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;