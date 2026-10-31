const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

let nextId = 1;
const resources = [];

app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/api/resources', (req, res) => {
  res.status(200).json(resources);
});

app.get('/api/resources/:id', (req, res) => {
  const resource = resources.find((item) => item.id === Number(req.params.id));

  if (!resource) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  return res.status(200).json(resource);
});

app.post('/api/resources', (req, res) => {
  const resource = {
    id: nextId++,
    ...req.body,
  };

  resources.push(resource);
  return res.status(201).json(resource);
});

app.put('/api/resources/:id', (req, res) => {
  const resourceIndex = resources.findIndex(
    (item) => item.id === Number(req.params.id),
  );

  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  const updatedResource = {
    ...req.body,
    id: resources[resourceIndex].id,
  };

  resources[resourceIndex] = updatedResource;
  return res.status(200).json(updatedResource);
});

app.delete('/api/resources/:id', (req, res) => {
  const resourceIndex = resources.findIndex(
    (item) => item.id === Number(req.params.id),
  );

  if (resourceIndex === -1) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  const [deletedResource] = resources.splice(resourceIndex, 1);
  return res.status(200).json(deletedResource);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Resource API listening on http://localhost:${port}`);
});

module.exports = app;
