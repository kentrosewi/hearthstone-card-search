const express = require('express');

const app = express();

// define routes
app.use('/api/card', require('./routes/api/card'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}.`));
