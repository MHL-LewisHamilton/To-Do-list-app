const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./todo.db');

app.use(cors());
app.use(express.json());

db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  deadline TEXT NOT NULL,
  complete INTEGER NOT NULL DEFAULT 0,
  taskType TEXT NOT NULL DEFAULT 'personal'
)`);

app.get('/api/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    const tasks = rows.map(row => ({
      ...row,
      complete: !!row.complete,
      taskType: row.taskType || 'personal'
    }));
    res.json(tasks);
  });
});

app.post('/api/tasks', (req, res) => {
  const { name, deadline, complete = false, taskType = 'personal' } = req.body;
  db.run(
    'INSERT INTO tasks (name, deadline, complete, taskType) VALUES (?, ?, ?, ?)',
    [name, deadline, complete ? 1 : 0, taskType],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, name, deadline, complete, taskType });
    }
  );
});

app.put('/api/tasks/:id', (req, res) => {
  const { name, deadline, complete, taskType = 'personal' } = req.body;
  db.run(
    'UPDATE tasks SET name = ?, deadline = ?, complete = ?, taskType = ? WHERE id = ?',
    [name, deadline, complete ? 1 : 0, taskType, req.params.id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

app.delete('/api/tasks/:id', (req, res) => {
  db.run('DELETE FROM tasks WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));