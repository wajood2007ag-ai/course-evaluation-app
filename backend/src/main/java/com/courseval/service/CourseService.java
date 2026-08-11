package com.courseval.service;

import com.courseval.dto.CourseResponse;
import com.courseval.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<CourseResponse> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(c -> new CourseResponse(c.getId(), c.getName(), c.getDescription(), c.getSemester()))
                .collect(Collectors.toList());
    }
}
