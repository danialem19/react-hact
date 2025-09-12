import React, { useEffect } from 'react';
const RECAPTCHA_SITE_KEY = '6LfmSMQrAAAAAGU1lfTbI0j43S7pCdBRWSwzvXYf';

// Put your original <body> content here.
// String.raw keeps the content literal (no escapes needed) and avoids accidental ${...} interpolation.
const html = String.raw`<!-- Header -->
<header>
  <div class="horn-of-africa-clinical-trials-logo">
      <img src="horn-of-africa-clinical-trials-logo.png" alt="hact-logo">
      <span><h1>Horn of Africa Clinical Trials</h1></span>
  </div>
  <nav>
      <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#core-value">Core Values</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">Our Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button class="menu-toggle" onclick="toggleMenu()">☰</button>
  </nav>
</header>

<!-- Main Content Section -->
<section class="main-content" id="home">
  <div class="modal-content-home">
    <fieldset><legend>Why HACT ?</legend>
      <blockquote><p id="modal-description-home">At Horn of Africa Clinical Trials (HACT), we are committed to advancing clinical research in the Horn of Africa through high-quality, ethically driven trials. We also strive to strengthen research capacity, foster global partnerships, and accelerate biopharmaceutical innovation. By bridging science with impact, we drive transformative healthcare solutions that benefit communities both locally and globally. </p></blockquote>
    </fieldset>
  </div>
</section>

<section class="about-us" id="about-us">
  <h2>About Us</h2>
  <p>HACT is dedicated to conducting high-quality clinical trials to improve healthcare across the Horn of Africa.</p>
  <section class="about-us-container">
    <div class="about-us-box">
      <img src="mission.png" alt="Horn of Africa Clinical Trials Mission">
      <h3>Mission Statement</h3>
      <blockquote><p>To promote health outcomes by conducting high-quality clinical trials and advancing sustainable healthcare research solutions.</p></blockquote>
    </div>
    <div class="about-us-box">
      <img src="stat.png" alt="Horn of Africa Clinical Trials Vision">
      <h3>Vision Statement</h3>
      <blockquote><p>To establish a best-in-class CRO in Ethiopia recognized for its excellence in clinical research, ethical practices, and partnerships with global sponsors.</p></blockquote>
    </div>
  </section>
</section>

<section class="core-value" id="core-value">
  <h2>Our Core Values</h2>
  <p>HACT is dedicated to conducting high-quality clinical trials to improve healthcare across the Horn of Africa.</p>
  <section class="core-value-container">
    <div class="core-value-box">
      <img src="core-value.png" alt="Horn of Africa Clinical Trials Integrity">
      <h3>Integrity</h3>
      <blockquote><p>Ensuring transparency and confidentiality.</p></blockquote>
    </div>
    <div class="core-value-box">
      <img src="quality.png" alt="Horn of Africa Clinical Trials Quality">
      <h3>Quality</h3>
      <blockquote><p>Adhering to global clinical research standards.</p></blockquote>
    </div>
  </section>
  <section class="core-value-container">
    <div class="core-value-box">
      <img src="united.png" alt="Horn of Africa Clinical Trials Collaboration">
      <h3>Collaboration</h3>
      <blockquote><p>Fostering partnerships with key stakeholders.</p></blockquote>
    </div>
    <div class="core-value-box">
      <img src="patient-centricity.png" alt="Horn of Africa Clinical Trials Patient Centricity">
      <h3>Patient-Centricity</h3>
      <blockquote><p>Prioritizing patient safety and welfare.</p></blockquote>
    </div>
    <div class="core-value-box">
      <img src="professionalism.png" alt="Horn of Africa Clinical Trials Professionalism">
      <h3>Professionalism</h3>
      <blockquote><p>Maintaining highly skilled research professionals.</p></blockquote>
    </div>
  </section>
</section>

<!-- Services Section -->
<section class="services" id="services">
  <h2>Our Services</h2>
  <p>At HACT, we provide comprehensive Contract Research Organization (CRO) services to support clinical trials and biopharmaceutical research.</p>
  <section class="services-container">
    <div class="box">
      <img src="planning.png" alt="Horn of Africa Clinical Trials Planning and Monitoring">
      <h3>Clinical Trial Planning and Monitoring</h3>
      <blockquote><p>Site selection, patient recruitment, protocol compliance, and monitoring.</p></blockquote>
    </div>
    <div class="box">
      <img src="stat.png" alt="Horn of Africa Clinical Trials Data Management and Statstics">
      <h3>Data Management and Biostatistics</h3>
      <blockquote><p>Database management, quality assurance, and statistical analysis.</p></blockquote>
    </div>
    <div class="box">
      <img src="regulatory.png" alt="Horn of Africa Clinical Trials Regulatory Affairs">
      <h3>Regulatory Affairs</h3>
      <blockquote><p>Preparation and submission of regulatory documents, obtaining trial approvals, and compliance monitoring.</p></blockquote>
    </div>
  </section>
  <section class="services-container">
    <div class="box">
      <img src="drug.png" alt="Horn of Africa Clinical Trials Drug Safety">
      <h3>Drug Safety / Pharmacovigilance</h3>
      <blockquote><p>Adverse event reporting and safety trend assessments.</p></blockquote>
    </div>
    <div class="box">
      <img src="labratory.png" alt="Horn of Africa Clinical Trials Laboratory">
      <h3>Laboratory / Biomarker Services</h3>
      <blockquote><p>Pharmacokinetic testing, genetic testing, and efficacy biomarker assessments.</p></blockquote>
    </div>
  </section>
</section>

<section class="board-members" id="about">
  <fieldset><legend align="center"><h2>Meet Our Team</h2></legend>
    <p>
      We are a diverse group of scientists, researchers, and healthcare professionals committed to advancing clinical research and biopharmaceutical innovation across the Horn of Africa.
    </p>

    <section class="board-container">
      <div class="board-member">
        <div class="member-image">
          <img src="Gabriel-Daniel.png" alt="Horn of Africa Clinical Trials Gabriel Daniel">
        </div>
        <h4 class="ribbon-test">Gabriel Daniel <span class="small-text">(Board Advisor)</span> </h4>
        <button class="view-details" onclick="openModal(4)"><i class="fa fa-info-circle"></i></button>
      </div>

      <div class="board-member">
        <div class="member-image">
          <img src="Fissiha-Antalew.jpg" alt="Horn of Africa Clinical Trials Dr Fissiha Antalew">
        </div>
        <h4 class="ribbon-test">Dr. Fissiha Antalew</h4>
        <button class="view-details" onclick="openModal(1)"><i class="fa fa-info-circle"></i></button>
      </div>

      <div class="board-member">
        <div class="member-image">
          <img src="Eyerusalem-Befkadu.jpg" alt="Horn of Africa Clinical Trials Eyerusalem Befkadu">
        </div>
        <h4 class="ribbon-test">Dr. Eyerusalem Befkadu</h4>
        <button class="view-details" onclick="openModal(2)"><i class="fa fa-info-circle"></i></button>
      </div>

      <div class="board-member">
        <div class="member-image">
          <img src="Ermias-Tilahun.png" alt="Horn of Africa Clinical Trials Ermias Tilahun">
        </div>
        <h4 class="ribbon-test">Dr. Ermias Tilahun</h4>
        <button class="view-details" onclick="openModal(3)"><i class="fa fa-info-circle"></i></button>
      </div>

      <div class="board-member">
        <div class="member-image">
          <img src="Fikreab-Admasu.png" alt="Horn of Africa Clinical Trials Fikreab-Admasu">
        </div>
        <h4 class="ribbon-test">Dr. Fikreab S. Admasu</h4>
        <button class="view-details" onclick="openModal(5)"><i class="fa fa-info-circle"></i></button>
      </div>

      <div class="board-member">
        <div class="member-image">
          <img src="Biruhalem-Bayayibign.png" alt="Horn of Africa Clinical Trials Ermias Biruhalem Bayayibign">
        </div>
        <h4 class="ribbon-test">Dr. Biruhalem Bayayibign</h4>
        <button class="view-details" onclick="openModal(6)"><i class="fa fa-info-circle"></i></button>
      </div>
    </section>
  </fieldset>
</section>

<!-- Contact Section (Light Blue) -->
<section class="contact-section" id="contact">
  <h2>Contact Us</h2>
  <div class="contact-container">
    <p>We’d love to hear from you! Reach out to us through the following channels:</p>
    <div class="contact-info">
      <i class="fas fa-map-marker-alt"></i>
      <p>23027 Sycamore Farm Dr <br> Clarksburg, MD 20871</p>
    </div>
    <div class="contact-info">
      <i class="fas fa-envelope"></i>
      <p><a href="mailto:info@hacts.org">info@hact.org</a></p>
    </div>
    <div class="contact-info">
      <i class="fas fa-phone-alt"></i>
      <p>‭+1 (301) 675-3384‬</p>
    </div>
  </div>

  <div class="social-links">
    <a href="https://www.instagram.com/hact_research?igsh=NXI5a280bmNyOHdi&utm_source=qr" target="_blank">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com/share/159jJfaxSJ/?mibextid=wwXIfr" target="_blank">
      <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="https://x.com/horn_research?s=11&t=c11E_ec3K68q00TuV4Ibrg" target="_blank">
      <i class="fa-brands fa-x-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/company/horn-of-africa-clinical-trials-hact/" target="_blank">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
</section>

<div id="memberModal" class="modal">
  <div class="modal-content">
    <span class="close-btn">&times;</span>
    <img id="modal-image" src="" alt="Board Member Image" style="float: left;  margin: 5px;">
    <p id="modal-description">Full description of the board member goes here. More details about their experience, role, and contributions.</p>
  </div>
</div>

<div class="sticky-bar">
  <button id="openStickyForm"><i class="fas fa-envelope"></i></button>
</div>

<div id="stickyFormModal" class="sticky-form-modal">
  <div class="sticky-form-content">
    <span class="close-sticky-form">&times;</span>
    <h3>Contact Us</h3>
    <form id="stickyContactForm">
      <input type="text" id="contactInfo" name="contactInfo" placeholder="Your Email or Phone" required>
      <select id="ctaType" name="ctaType" required>
        <option value="">I am a...</option>
        <option value="Sponsor">Sponsor</option>
        <option value="Partner">Partner</option>
        <option value="Health Professional">Health Professional</option>
        <option value="Patient">Patient</option>
      </select>
      <textarea id="shortDescription" name="shortDescription" placeholder="Short description"rows="3"></textarea>
      <div id="recaptcha-container" class="recaptcha"></div>
      <button type="submit">Send</button>
      <div id="formStatus" class="form-status"></div>
    </form>
  </div>
</div>

<!-- Footer -->
<footer>
  <p>© 2025 Horn of Africa Clinical Trials. All rights reserved.</p>
</footer>
`;

export default function App() {
  useEffect(() => {
    // load the legacy script once so inline onclick="..." handlers work
    const s = document.createElement('script');
    s.src = '/legacy/script.js';
    s.defer = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);

useEffect(() => {
  const modal = document.getElementById('stickyFormModal');
  const openBtn = document.getElementById('openStickyForm');
  const closeBtn = modal?.querySelector('.close-sticky-form');
  const form = document.getElementById('stickyContactForm');
  const statusEl = document.getElementById('formStatus');

  // --- open / close controlled by user only ---
  const open = () => modal?.classList.add('show');
  const close = () => modal?.classList.remove('show');

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  // backdrop click closes (but clicks inside the card do not)
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // --- submit handler: reset only; keep modal open ---
  async function onSubmit(ev) {
    ev.preventDefault();
    if (!form || !statusEl) return;

    // reset status line
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    // button loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultBtnText = submitBtn ? submitBtn.textContent : 'Send';
    if (submitBtn) {
      submitBtn.textContent = 'Submitting…';
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;
    }

    const body = new URLSearchParams(new FormData(form));

    try {
      await fetch(import.meta.env.VITE_SHEETS_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });

      // ✅ keep modal open; just reset fields
      form.reset();
      statusEl.textContent = 'Request Submitted';
      statusEl.classList.add('success');

      // optional: auto-clear message after 5s
      setTimeout(() => {
        if (statusEl.classList.contains('success')) {
          statusEl.textContent = '';
          statusEl.className = 'form-status';
        }
      }, 5000);
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Request Submission Error';
      statusEl.classList.add('error');
    } finally {
      if (submitBtn) {
        submitBtn.textContent = defaultBtnText;
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
      }
    }
  }

  form?.addEventListener('submit', onSubmit);

  // cleanup
  return () => {
    openBtn?.removeEventListener('click', open);
    closeBtn?.removeEventListener('click', close);
    modal?.removeEventListener('click', (e) => { if (e.target === modal) close(); });
    form?.removeEventListener('submit', onSubmit);
  };
}, []);


  useEffect(() => {
    const form   = document.getElementById('stickyContactForm');
    const box    = document.getElementById('recaptcha-container');
    const status = document.getElementById('formStatus');

    if (!form || !box) return;

    let widgetId = null;
    let rendered = false;

    // Render the v2 checkbox once the API is ready
    const tryRender = () => {
      if (!rendered && window.grecaptcha && box) {
        widgetId = window.grecaptcha.render('recaptcha-container', {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: 'light',
          size: 'normal',
        });
        rendered = true;
      }
    };

    // If grecaptcha not ready yet, poll briefly
    const poll = setInterval(() => {
      if (window.grecaptcha) {
        tryRender();
        if (rendered) clearInterval(poll);
      }
    }, 250);
    // Try immediately too (hot reload / fast script)
    tryRender();

    // Capture submit BEFORE your existing handlers:
    // - if no token => block submit and show a small inline message
    // - if token => inject hidden input so your existing code receives it
    const onSubmitCapture = (e) => {
      if (!rendered || !window.grecaptcha) return; // let submit proceed; script not ready yet

      const token = window.grecaptcha.getResponse(widgetId);
      if (!token) {
        // Tiny inline message; does not close your modal or alter your logic
        if (status) {
          status.textContent = 'Please complete the reCAPTCHA.';
          status.className = 'form-status error';
        }
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      // Ensure hidden input exists for downstream handlers / server
      let hidden = form.querySelector('input[name="g-recaptcha-response"]');
      if (!hidden) {
        hidden = document.createElement('input');
        hidden.type  = 'hidden';
        hidden.name  = 'g-recaptcha-response';
        form.appendChild(hidden);
      }
      hidden.value = token;

      // (optional) clear the inline error state if any
      if (status && status.classList.contains('error')) {
        status.textContent = '';
        status.className = 'form-status';
      }
    };

    // Use capture so we run before any legacy/bubbled handlers
    form.addEventListener('submit', onSubmitCapture, true);

    return () => {
      clearInterval(poll);
      form.removeEventListener('submit', onSubmitCapture, true);
    };
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}