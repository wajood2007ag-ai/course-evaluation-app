package com.courseval.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RatingRequest {
    @NotNull
    private Long courseId;

    @Min(1) @Max(5)
    private int stars;

    @NotBlank
    private String comment;
}
