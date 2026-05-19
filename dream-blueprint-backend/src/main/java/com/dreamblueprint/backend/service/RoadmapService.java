package com.dreamblueprint.backend.service;

import com.dreamblueprint.backend.model.RoadmapStep;
import com.dreamblueprint.backend.repository.RoadmapStepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoadmapService {

    @Autowired
    private RoadmapStepRepository roadmapStepRepository;

    public List<RoadmapStep> getStepsByGoalId(Long goalId) {
        return roadmapStepRepository.findByGoalIdOrderByStepNumberAsc(goalId);
    }

    public List<RoadmapStep> saveSteps(List<RoadmapStep> steps) {
        return roadmapStepRepository.saveAll(steps);
    }

    public RoadmapStep updateStep(Long id, RoadmapStep updatedStep) {
        updatedStep.setId(id);
        return roadmapStepRepository.save(updatedStep);
    }
}