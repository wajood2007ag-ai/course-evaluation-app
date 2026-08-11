package com.courseval.service;

import com.courseval.dto.CourseAverageResponse;
import com.courseval.dto.DashboardStatsResponse;
import com.courseval.repository.CourseRepository;
import com.courseval.repository.RatingRepository;
import com.courseval.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RatingRepository ratingRepository;

    public DashboardStatsResponse getStats() {
        long totalCourses = courseRepository.count();
        long totalStudents = userRepository.countByRole("STUDENT");
        long totalRatings = ratingRepository.count();
        return new DashboardStatsResponse(totalCourses, totalStudents, totalRatings);
    }

    public List<CourseAverageResponse> getCourseAverages() {
        return ratingRepository.findCourseAverages().stream()
                .map(row -> new CourseAverageResponse(
                        ((Number) row[0]).longValue(),
                        (String) row[1],
                        (String) row[2],
                        row[3] != null ? ((Number) row[3]).doubleValue() : 0.0,
                        ((Number) row[4]).longValue()
                ))
                .collect(Collectors.toList());
    }
}
