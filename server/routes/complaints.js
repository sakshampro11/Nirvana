const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Create a new complaint
router.post('/', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ timestamp: -1 });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific complaint
router.get('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a complaint
router.patch('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    
    Object.assign(complaint, req.body);
    await complaint.save();
    res.json(complaint);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a complaint
router.delete('/:id', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    
    await complaint.remove();
    res.json({ message: 'Complaint deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 