const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from dist/
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes — send index.html for React Router
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, function() {
  console.log('Rehab Factory running on port ' + PORT);
});
