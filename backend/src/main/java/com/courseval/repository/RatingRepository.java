package com.courseval.repository;

import com.courseval.entity.Rating;
import com.courseval.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {

    List<Rating> findByUser(User user);

    @Query("SELECT r.course.id, r.course.name, r.course.semester, AVG(r.stars), COUNT(r) " +
           "FROM Rating r GROUP BY r.course.id, r.course.name, r.course.semester")
    List<Object[]> findCourseAverages();
}
