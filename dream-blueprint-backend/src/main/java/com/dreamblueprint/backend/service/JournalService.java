package com.dreamblueprint.backend.service;

import com.dreamblueprint.backend.model.JournalEntry;
import com.dreamblueprint.backend.repository.JournalEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JournalService {

    @Autowired
    private JournalEntryRepository journalEntryRepository;

    public List<JournalEntry> getAllEntries() {
        return journalEntryRepository.findAll();
    }

    public JournalEntry createEntry(JournalEntry entry) {
        return journalEntryRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        journalEntryRepository.deleteById(id);
    }
}