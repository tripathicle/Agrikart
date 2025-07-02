const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

// ✅ GET: Fetch all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ✅ POST: Add a new product
app.post('/api/products', (req, res) => {
  const { name, description, price, category, quantity, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const sql = `
    INSERT INTO products (name, description, price, category, quantity, image_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, description, price, category, quantity, image_url],
    (err, results) => {
      if (err) {
        console.error('Insert Error:', err);
        return res.status(500).json({ error: 'Failed to insert product' });
      }

      res.status(201).json({
        message: 'Product added successfully',
        productId: results.insertId
      });
    }
  );
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🔌 Backend running at http://localhost:${port}`);
});
