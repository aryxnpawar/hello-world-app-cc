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
    <title>Nexora India | Next-Gen Cloud Infrastructure</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&family=Lexend:wght@600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --secondary: #64748b;
            --accent: #eff6ff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --white: #ffffff;
            --shadow-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.1);
            --border-color: #e2e8f0;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text-main);
            background-color: #fcfdfe;
            line-height: 1.6;
        }

        /* --- NAVIGATION --- */
        nav {
            position: fixed;
            top: 0; width: 100%; height: 75px;
            display: flex; justify-content: space-between; align-items: center;
            padding: 0 8%; z-index: 1000;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(15px);
            border-bottom: 1px solid var(--border-color);
        }

        .logo {
            font-family: 'Lexend', sans-serif;
            font-size: 1.4rem; color: var(--primary);
            text-decoration: none; font-weight: 700;
            letter-spacing: -0.5px;
        }

        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { 
            text-decoration: none; color: var(--text-muted); 
            font-weight: 500; font-size: 0.9rem; transition: 0.3s;
        }
        .nav-links a:hover { color: var(--primary); }

        /* --- BUTTONS --- */
        .btn {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 12px 26px; border-radius: 10px; font-weight: 600;
            text-decoration: none; transition: all 0.3s ease;
            cursor: pointer; border: none; font-size: 0.95rem;
        }

        .btn-primary {
            background: var(--primary);
            color: white; box-shadow: var(--shadow-lg);
        }

        .btn-primary:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 15px 25px rgba(37, 99, 235, 0.2);
        }

        .btn-secondary {
            background: var(--white);
            color: var(--text-main);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: #f8fafc;
            transform: translateY(-2px);
        }

        /* --- HERO SECTION --- */
        .hero {
            padding: 160px 8% 80px;
            text-align: center;
            background: radial-gradient(circle at 50% 0%, #ebf4ff 0%, transparent 60%);
        }

        .section-tag {
            color: var(--primary); font-weight: 700;
            text-transform: uppercase; font-size: 0.75rem;
            letter-spacing: 1.5px; display: block; margin-bottom: 1rem;
        }

        .hero h1 {
            font-family: 'Lexend', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            line-height: 1.2; margin-bottom: 1.5rem;
            color: #0f172a;
        }

        .hero p {
            font-size: 1.15rem; color: var(--text-muted);
            max-width: 650px; margin: 0 auto 2.5rem;
        }

        .hero-image-container {
            margin-top: 50px;
            position: relative;
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-img {
            width: 100%;
            border-radius: 16px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.12);
            border: 1px solid var(--border-color);
            display: block;
        }

        /* --- FEATURES SECTION --- */
        .features { padding: 80px 8%; background: white; }
        
        .section-title {
            text-align: center; font-size: 2.2rem; 
            font-family: 'Lexend', sans-serif; margin-bottom: 3.5rem;
            color: #0f172a;
        }

        .feature-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            padding: 2.5rem; border-radius: 20px;
            background: #ffffff; border: 1px solid var(--border-color);
            transition: 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-8px);
            border-color: var(--primary);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .feature-icon {
            font-size: 2rem; margin-bottom: 1.2rem; display: block;
        }

        .feature-card h3 { margin-bottom: 0.8rem; font-size: 1.3rem; }
        .feature-card p { color: var(--text-muted); font-size: 0.95rem; }

        /* --- PLATFORM SECTION --- */
        .platform { 
            padding: 80px 8%; 
            display: flex; align-items: center; gap: 4rem; 
            background: #f8fafc;
        }
        
        .platform-text { flex: 1; }
        .platform-img-wrap { flex: 1; }
        
        .platform-img { 
            width: 100%; border-radius: 20px; 
            box-shadow: var(--shadow-lg); 
            border: 1px solid var(--border-color);
        }

        /* --- CONTACT SECTION --- */
        .contact { padding: 100px 8%; background: white; }
        
        .contact-card {
            max-width: 1000px; margin: 0 auto;
            background: #0f172a; border-radius: 24px;
            display: flex; overflow: hidden; color: white;
            box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .contact-info {
            padding: 4rem; flex: 1;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .contact-form { padding: 4rem; flex: 1.2; background: white; color: var(--text-main); }
        
        .info-item { margin-bottom: 1.5rem; display: flex; align-items: flex-start; gap: 1rem; }
        .info-item span { color: var(--primary); font-weight: bold; }

        .input-group { margin-bottom: 1.2rem; }
        .input-group label { display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; }
        
        input, textarea {
            width: 100%; padding: 12px; border-radius: 8px;
            border: 1px solid var(--border-color); outline: none; transition: 0.3s;
            font-family: inherit; font-size: 0.9rem;
        }

        input:focus, textarea:focus { border-color: var(--primary); }

        /* --- FOOTER --- */
        footer { padding: 40px 8%; text-align: center; border-top: 1px solid var(--border-color); color: var(--text-muted); font-size: 0.85rem; }

        @media (max-width: 968px) {
            .nav-links { display: none; }
            .platform { flex-direction: column; text-align: center; }
            .contact-card { flex-direction: column; }
            .contact-info, .contact-form { padding: 2.5rem; }
        }
    </style>
</head>
<body>

    <nav>
        <a href="#" class="logo">NEXORA</a>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" class="btn btn-primary">Get Started</a>
    </nav>

    <section class="hero" id="home">
        <span class="section-tag">Enterprise Web Infrastructure</span>
        <h1>Build the Future of <br> Digital Experiences</h1>
        <p>Nexora India provides the high-performance cloud tools needed to scale your business across the globe with millisecond latency.</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="#contact" class="btn btn-primary">Launch Console</a>
            <a href="#features" class="btn btn-secondary">View Features</a>
        </div>
        
        <div class="hero-image-container">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="SaaS Dashboard Interface" class="hero-img">
        </div>
    </section>

    <section class="features" id="features">
        <h2 class="section-title">Engineered for Performance</h2>
        <div class="feature-grid">
            <div class="feature-card">
                <span class="feature-icon">⚡</span>
                <h3>Lightning Speed</h3>
                <p>Deploy your sites to our Edge network in Mumbai and Bangalore for instant loading across India.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">🛡️</span>
                <h3>Secure by Default</h3>
                <p>Built-in SSL, DDoS protection, and enterprise-grade firewalls keep your data localized and safe.</p>
            </div>
            <div class="feature-card">
                <span class="feature-icon">📈</span>
                <h3>Predictive Scaling</h3>
                <p>Our infrastructure automatically handles traffic surges without manual intervention or downtime.</p>
            </div>
        </div>
    </section>

    <section class="platform" id="platform">
        <div class="platform-text">
            <span class="section-tag" style="text-align: left;">The Console</span>
            <h2 style="font-size: 2rem; margin-bottom: 1.2rem; font-family: 'Lexend';">Unified Cloud Control</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Manage your servers, databases, and SSL certificates from a single dashboard designed for developers. No more jumping between complicated cloud providers.</p>
            <ul style="list-style: none; color: var(--text-muted); font-size: 0.95rem;">
                <li style="margin-bottom: 0.6rem;">✅ Localized Data Residency in Maharashtra</li>
                <li style="margin-bottom: 0.6rem;">✅ Git-based Automated Deployments</li>
                <li style="margin-bottom: 0.6rem;">✅ 24/7 Premium Indian Support</li>
            </ul>
        </div>
        <div class="platform-img-wrap">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Server Technology Infrastructure" class="platform-img">
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="contact-card">
            <div class="contact-info">
                <h2 style="font-family: 'Lexend'; font-size: 2rem; margin-bottom: 1.5rem;">Ready to upgrade?</h2>
                <p style="color: #94a3b8; margin-bottom: 3rem;">Join over 500+ Indian startups scaling on Nexora. We help you move faster.</p>
                
                <div class="info-item">
                    <span>📍</span>
                    <p>Pune, Maharashtra, India</p>
                </div>
                <div class="info-item">
                    <span>📧</span>
                    <p>support@nexora.in</p>
                </div>
                <div class="info-item">
                    <span>📞</span>
                    <p>+91 98765 43210</p>
                </div>
            </div>
            <div class="contact-form">
                <form>
                    <div class="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name">
                    </div>
                    <div class="input-group">
                        <label>Professional Email</label>
                        <input type="email" placeholder="name@company.in">
                    </div>
                    <div class="input-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="How can we help your business?"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Inquiry</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Nexora India Technologies Pvt Ltd. All rights reserved.</p>
        <div style="margin-top: 0.8rem;">
            <a href="#" style="color: var(--text-muted); margin: 0 10px; text-decoration: none;">Privacy</a>
            <a href="#" style="color: var(--text-muted); margin: 0 10px; text-decoration: none;">Terms</a>
        </div>
    </footer>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});