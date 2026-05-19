package com.dreamblueprint.backend.repository;

import com.dreamblueprint.backend.model.RoadmapStep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RoadmapStepRepository extends JpaRepository<RoadmapStep, Long> {
    List<RoadmapStep> findByGoalIdOrderByStepNumberAsc(Long goalId);
}