package com.courseval.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseAverageResponse {
    private Long courseId;
    private String courseName;
    private String semester;
    private double averageStars;
    private long totalRatings;
}
