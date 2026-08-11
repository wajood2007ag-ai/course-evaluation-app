package com.courseval.service;

import com.courseval.dto.RatingRequest;
import com.courseval.dto.RatingResponse;
import com.courseval.entity.Course;
import com.courseval.entity.Rating;
import com.courseval.entity.User;
import com.courseval.repository.CourseRepository;
import com.courseval.repository.RatingRepository;
import com.courseval.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    public RatingResponse submitRating(String username, RatingRequest request) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Course course = courseRepository.findById(request.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Rating rating = new Rating();
        rating.setUser(user);
        rating.setCourse(course);
        rating.setStars(request.getStars());
        rating.setComment(request.getComment());

        Rating saved = ratingRepository.save(rating);
        return toResponse(saved);
    }

    public List<RatingResponse> getMyRatings(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ratingRepository.findByUser(user).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private RatingResponse toResponse(Rating r) {
        return new RatingResponse(
                r.getId(),
                r.getCourse().getId(),
                r.getCourse().getName(),
                r.getStars(),
                r.getComment(),
                r.getCreatedAt() != null ? r.getCreatedAt().toString() : null
        );
    }
}
