const express = require("express");
const app = express();
app.use(express.json()); // To parse JSON bodies

const students = [
  { id: 1, last: "Last1", first: "First1" },
  { id: 2, last: "Last2", first: "First2" },
  { id: 3, last: "Last3", first: "First3" },
];

// GET all students
app.get("/cit/student", (req, res) => {
  res.status(200).json(students);
});

// GET student by id
app.get("/cit/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;
  for (const student of students) {
    if (student.id === id) {
      found = true;
      return res.status(200).json(student);
    }
  }
  if (!found) {
    res.status(404).json({ error: "Not Found" });
  }
});

// POST new student
app.post("/cit/student", (req, res) => {
  const { first, last } = req.body;
  if (!first || !last) {
    return res.status(400).json({ error: "Missing first or last name" });
  }
  const newId = Math.max(...students.map((s) => s.id)) + 1;
  const newStudent = { id: newId, first, last };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// Unmatched route handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
