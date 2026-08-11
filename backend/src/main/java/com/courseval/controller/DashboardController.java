package com.courseval.controller;

import com.courseval.dto.CourseAverageResponse;
import com.courseval.dto.DashboardStatsResponse;
import com.courseval.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DashboardStatsResponse> getStats() {
        return ResponseEntity.ok(dashboardService.getStats());
    }

    @GetMapping("/averages")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<CourseAverageResponse>> getCourseAverages() {
        return ResponseEntity.ok(dashboardService.getCourseAverages());
    }
}
