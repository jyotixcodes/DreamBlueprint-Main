package com.dreamblueprint.backend.controller;

import com.dreamblueprint.backend.model.JournalEntry;
import com.dreamblueprint.backend.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/journal")
@CrossOrigin(origins = "http://localhost:5173")
public class JournalController {

    @Autowired
    private JournalService journalService;

    @GetMapping
    public List<JournalEntry> getAllEntries() {
        return journalService.getAllEntries();
    }

    @PostMapping
    public JournalEntry createEntry(@RequestBody JournalEntry entry) {
        return journalService.createEntry(entry);
    }

    @DeleteMapping("/{id}")
    public void deleteEntry(@PathVariable Long id) {
        journalService.deleteEntry(id);
    }
}