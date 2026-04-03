// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/posts', require('./routes/postRoutes'));
// app.use("/uploads", express.static("uploads"));
// app.listen(process.env.PORT, () =>
//   console.log(`Server running on ${process.env.PORT}`)
// );



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ IMAGE SERVE (IMPORTANT)
// app.use('/uploads', express.static('uploads'));

// // Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/posts', require('./routes/postRoutes'));

// // Server start
// app.listen(process.env.PORT || 5000, () =>
//   console.log(`Server running on ${process.env.PORT || 5000}`)
// );



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/posts', require('./routes/postRoutes'));

// // Server start
// app.listen(process.env.PORT || 5000, () =>
//   console.log(`Server running on ${process.env.PORT || 5000}`)
// );


// app.use((err, req, res, next) => {
//   console.log("🔥 GLOBAL ERROR 👉", err);

//   res.status(500).json({
//     msg: err.message || "Server error",
//   });
// });


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// ❌ Route ke baad hi error handler hona chahiye (correct hai tumhara 👍)
app.use((err, req, res, next) => {
  console.log("🔥 GLOBAL ERROR 👉", err);

  res.status(500).json({
    msg: err.message || "Server error",
  });
});

// ✅ Server start (last me hona better)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});