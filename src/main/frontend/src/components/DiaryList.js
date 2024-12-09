import React, { useEffect, useState } from 'react';
import Button from './Button';
import './DiaryList.css';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DiaryList = () => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    axios.get("/diary/list")
      .then(res => {
        setDiaries(res.data);
      })
      .catch(err => console.log(err));
  }, []);

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
        {diaries.map((diary) => (
          <DiaryItem key={diary.id} {...diary} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;