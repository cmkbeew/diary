package com.emotion.diary.service;

import com.emotion.diary.entity.Diary;
import com.emotion.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DiaryServiceImpl implements DiaryService {

    private final DiaryRepository diaryRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Diary> getAllList() {
        List<Diary> list = diaryRepository.findAll(Sort.by("id").descending());

        return list;
    }
}
