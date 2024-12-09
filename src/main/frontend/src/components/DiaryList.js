import React, { useState } from 'react';
import Button from './Button';
import './DiaryList.css';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';

const DiaryList = () => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button onClick={() => nav("/new")} text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>

      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;