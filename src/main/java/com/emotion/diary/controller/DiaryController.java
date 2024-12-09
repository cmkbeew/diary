package com.emotion.diary.controller;

import com.emotion.diary.entity.Diary;
import com.emotion.diary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/diary")
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService diaryService;

    @GetMapping("/list")
    public List<Diary> getAllDiary() {
        List<Diary> diaryList = new ArrayList<>();
        diaryList.add(Diary.builder()
                .id(1L)
                .emotionId(3)
                .content("테스트")
                .date("2024-12-09")
                .build()
        );

        diaryList.add(Diary.builder()
                .id(2L)
                .emotionId(5)
                .content("테스트2222")
                .date("2024-12-12")
                .build()
        );

        return diaryList;
    }
}
