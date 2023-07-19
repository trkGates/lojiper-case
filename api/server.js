const express = require('express');
const app = express();
const PORT =  5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Merhaba, Dünya!' });
});

app.listen(PORT, () => {
  console.log(`Express server çalışıyor. Port: ${PORT}`);
});
