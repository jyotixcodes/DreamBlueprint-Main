package com.dreamblueprint.backend.controller;

import com.dreamblueprint.backend.model.RoadmapStep;
import com.dreamblueprint.backend.service.RoadmapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/roadmap")
@CrossOrigin(origins = "http://localhost:5173")
public class RoadmapController {

    @Autowired
    private RoadmapService roadmapService;

    @GetMapping("/{goalId}")
    public List<RoadmapStep> getStepsByGoalId(@PathVariable Long goalId) {
        return roadmapService.getStepsByGoalId(goalId);
    }

    @PostMapping
    public List<RoadmapStep> saveSteps(@RequestBody List<RoadmapStep> steps) {
        return roadmapService.saveSteps(steps);
    }

    @PutMapping("/{id}")
    public RoadmapStep updateStep(@PathVariable Long id, @RequestBody RoadmapStep step) {
        return roadmapService.updateStep(id, step);
    }
}