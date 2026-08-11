package com.courseval.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RatingResponse {
    private Long id;
    private Long courseId;
    private String courseName;
    private int stars;
    private String comment;
    private String createdAt;
}
