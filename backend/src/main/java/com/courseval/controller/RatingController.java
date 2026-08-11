package com.courseval.controller;

import com.courseval.dto.RatingRequest;
import com.courseval.dto.RatingResponse;
import com.courseval.service.RatingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/ratings")
@CrossOrigin(origins = "http://localhost:4200")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    @PreAuthorize("hasRole('STUDENT')")
    public ResponseEntity<?> submitRating(@Valid @RequestBody RatingRequest request,
                                          Principal principal) {
        try {
            RatingResponse response = ratingService.submitRating(principal.getName(), request);
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(409)
                    .body(Map.of("error", "You have already rated this course"));
        }
    }

    @GetMapping("/my")
    @PreAuthorize("hasRole('STUDENT')")
    public ResponseEntity<List<RatingResponse>> getMyRatings(Principal principal) {
        return ResponseEntity.ok(ratingService.getMyRatings(principal.getName()));
    }
}
