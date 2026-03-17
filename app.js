import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello CC</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background:rgb(217, 96, 15);
      background: linear-gradient(135deg,rgb(161, 180, 56),rgb(147, 78, 163),rgb(51, 3, 33));
      font-family: 'Segoe UI', sans-serif;
      color: white;
    }

    .card {
      text-align: center;
      padding: 60px 80px;
      background: rgba(255,255,255,0.05);
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.4);
    }

    .badge {
      display: inline-block;
      background: rgba(99,102,241,0.3);
      border: 1px solid rgba(99,102,241,0.6);
      color: #a5b4fc;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 56px;
      font-weight: 700;
      background: linear-gradient(90deg, #a78bfa, #60a5fa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
    }

    p {
      color: rgba(255,255,255,0.5);
      font-size: 16px;
      margin-bottom: 40px;
    }

    .stack {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .tag {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      color: rgba(255,255,255,0.7);
    }

    .dot {
      width: 8px;
      height: 8px;
      background: #4ade80;
      border-radius: 50%;
      display: inline-block;
      margin-right: 6px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Cloud Computing Mini Project</div>
    <h1>Hello World</h1>
    <p><span class="dot"></span>Deployed on AWS EC2 with CI/CD</p>
    <div class="stack">
      <span class="tag">Node.js</span>
      <span class="tag">Nginx</span>
      <span class="tag">AWS EC2</span>
      <span class="tag">ALB</span>
      <span class="tag">GitHub Actions</span>
      <span class="tag">Let's Encrypt</span>
    </div>
  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});