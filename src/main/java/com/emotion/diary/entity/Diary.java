package com.emotion.diary.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "diary")
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private int emotionId;

    private String content;

    private String createdDate;
}
