/**
 * =========================================================================
 * THE EL DESIGN HOUSE — CORE INTERACTIVE ENGINE
 * "Where Art, Function and Life Meet."
 * =========================================================================
 * 
 * 💡 HOW TO CHANGE TILES & IMAGES:
 * 1. To change project tiles, edit the `PORTFOLIO_ITEMS` list below.
 * 2. To change any image, either replace the file in `/assets/images/`
 *    with your own photo using the same filename, OR update the `image:`
 *    path in `PORTFOLIO_ITEMS` to point to your new image file.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. PORTFOLIO & PROJECT TILES DATABASE (EDIT TILES & IMAGES HERE)
  // =========================================================================
  const PORTFOLIO_ITEMS = [
    {
      id: 'obsidian-penthouse',
      title: 'The Obsidian Sky Penthouse',
      category: 'residential',            // 'residential' or 'commercial'
      categoryLabel: 'Residential',
      subCategory: 'Penthouse',
      location: 'Mayfair, London, UK',
      footprint: '6,400 sq.ft',
      timeline: '22 Weeks',
      scope: 'End-to-End Turnkey Architecture & Interior',
      image: './assets/images/res_obsidian_penthouse.jpg',
      summary: 'Monolithic Nero Marquina black marble, cantilevered ceilings, and panoramic city vistas.',
      description: 'A masterclass in dark architectural minimalism and tactile luxury. Commissioned by a prominent contemporary art collector, this double-height penthouse was stripped down to the concrete skeleton and rebuilt with custom Nero Marquina marble island slabs, floating mezzanine gallery, and fluted smoked oak joinery.',
      materials: ['Nero Marquina Marble', 'Smoked Dark Oak', 'Raw Brushed Bronze', 'Acoustic Suede Panels', 'Architectural Travertine']
    },
    {
      id: 'aura-atelier',
      title: 'Aura Couture & High Jewelry Atelier',
      category: 'commercial',
      categoryLabel: 'Commercial',
      subCategory: 'Haute Retail',
      location: 'Dubai Design District, UAE',
      footprint: '4,200 sq.ft',
      timeline: '16 Weeks',
      scope: 'Retail Architecture, Custom Fixtures & Staging',
      image: './assets/images/comm_atelier_boutique.jpg',
      summary: 'Fluted smoked glass partitions, backlit white onyx plinths, and bespoke bronze display cases.',
      description: 'An ethereal retail sanctum sculpted for haute couture fashion and high jewelry viewing. We incorporated floor-to-ceiling fluted smoked glass pavilions, glowing translucent white onyx display plinths, and bespoke bronze casing that creates an atmosphere of private VIP exclusivity.',
      materials: ['Backlit White Onyx', 'Fluted Smoked Glass', 'Aged Bronze Profiles', 'Microcement Charcoal Floor', 'Curated Velvet Banquettes']
    },
    {
      id: 'aethelgard-villa',
      title: 'Aethelgard Mediterranean Villa',
      category: 'residential',
      categoryLabel: 'Residential',
      subCategory: 'Villa',
      location: 'Monaco / Côte d’Azur',
      footprint: '8,900 sq.ft',
      timeline: '28 Weeks',
      scope: 'Turnkey Ground-Up Architecture & Decor',
      image: './assets/images/res_aethelgard_villa.jpg',
      summary: 'Curved microcement plaster, Italian travertine floors, and bespoke dark walnut millwork.',
      description: 'An architectural dialogue between warm minimalist brutalism and natural organic textures. Features custom curved lime plaster walls, open-pore Roman travertine floors, integrated smart fireplace walls, and bespoke dark walnut millwork throughout.',
      materials: ['Roman Travertine', 'Artisanal Lime Plaster', 'Dark Walnut Millwork', 'Belgian Natural Linen', 'Hand-Forged Iron']
    },
    {
      id: 'kuro-lounge',
      title: 'Kuro Speakeasy & Members Lounge',
      category: 'commercial',
      categoryLabel: 'Commercial',
      subCategory: 'Hospitality',
      location: 'Ginza, Tokyo, Japan',
      footprint: '3,800 sq.ft',
      timeline: '18 Weeks',
      scope: 'Full Hospitality Architecture & Acoustics',
      image: './assets/images/comm_kuro_lounge.jpg',
      summary: 'Curved midnight velvet booths, ribbed dark timber paneling, and glowing amber backbar.',
      description: 'A sensory nocturnal escape defined by acoustic timber slatted paneling, illuminated golden amber back-lit spirit alcoves, curved sapphire velvet booths, and low-glare brushed brass fixtures designed for intimate acoustic perfection.',
      materials: ['Ribbed Dark Timber', 'Golden Amber Backlit Glass', 'Midnight Blue Velvet', 'Custom Brass Pendants', 'Honed Basalt Stone']
    },
    {
      id: 'axiom-hq',
      title: 'Axiom Global Executive Headquarters',
      category: 'commercial',
      categoryLabel: 'Commercial',
      subCategory: 'Corporate HQ',
      location: 'Chelsea, New York, USA',
      footprint: '11,500 sq.ft',
      timeline: '24 Weeks',
      scope: 'Executive Suites, Boardroom & Turnkey Fit-Out',
      image: './assets/images/comm_omnia_hq.jpg',
      summary: 'Monolithic custom slate conference tables, acoustic timber slats, and minimalist executive suites.',
      description: 'A forward-looking executive sanctuary balancing high-stakes technology with refined craftsmanship. Boasting a 24-seat monolithic slate boardroom table, acoustic fluted timber acoustic panels, private glass pavilions, and recessed architectural circadian cove lighting.',
      materials: ['Honed Black Slate', 'Acoustic Walnut Slats', 'Double-Glazed Switchable Glass', 'Full-Grain Italian Leather', 'Linear Recessed LED']
    },
    {
      id: 'sanctuary-duplex',
      title: 'The Sanctuary Duplex Residence',
      category: 'residential',
      categoryLabel: 'Residential',
      subCategory: 'Duplex',
      location: 'Zurich, Switzerland',
      footprint: '5,800 sq.ft',
      timeline: '20 Weeks',
      scope: 'Turnkey Complete Structural Renovation',
      image: './assets/images/after_luxe_space.jpg',
      summary: 'Double-height split-face slate feature fireplace, custom curved seating, and private mezzanine.',
      description: 'A breathtaking conversion of an unfinished duplex shell into a warm architectural sanctuary. Highlights include a two-story split-face stone fireplace, curved organic seating area, and seamless glass window walls framing lakeside reflections.',
      materials: ['Split-Face Slate Wall', 'Smoked European Oak Plank', 'Curved Bouclé Wool', 'Patinated Bronze Accents', 'Custom Travertine Plinths']
    }
  ];

  // Helper map for quick case study lookup
  const projectsData = {};
  PORTFOLIO_ITEMS.forEach(item => {
    projectsData[item.id] = item;
  });

  // =========================================================================
  // 2. DATA: DEFAULT CURATED CLIENT REVIEWS
  // =========================================================================
  const defaultReviews = [
    {
      id: 'rev-1',
      author: 'Lord Arthur & Eleanor Sterling',
      location: 'Kensington, London',
      type: 'Residential — Penthouse',
      project: 'The Obsidian Sky Penthouse',
      rating: 5,
      date: 'August 2026',
      content: 'The El Design House operates at a tier of craft that is exceedingly rare. From the initial questionnaire to the moment they handed us the keys to our ready-to-move-in penthouse, their execution was flawless. Every stone joint, bespoke door handle, and lighting beam was delivered to absolute perfection.'
    },
    {
      id: 'rev-2',
      author: 'Christophe Laurent',
      location: 'Dubai Design District',
      type: 'Commercial — Haute Atelier',
      project: 'Aura High Fashion Flagship',
      rating: 5,
      date: 'July 2026',
      content: 'Our high jewelry clients expect an unparalleled atmosphere of exclusivity. The team captured our brand soul and delivered an architectural marvel with the backlit onyx plinths and smoked glass suites. Their turnkey timeline was respected to the exact day.'
    },
    {
      id: 'rev-3',
      author: 'Dr. Evelyn & Julian Mercer',
      location: 'Monaco',
      type: 'Residential — Villa',
      project: 'Aethelgard Mediterranean Villa',
      rating: 5,
      date: 'June 2026',
      content: 'We had interviewed several top studios in Milan and Paris, but none matched The El Design House’s spatial vision and holistic turnkey promise. They handled every detail from structural engineering to custom linen selection. Living in this home is a daily artistic joy.'
    },
    {
      id: 'rev-4',
      author: 'Kenji Takahashi',
      location: 'Ginza, Tokyo',
      type: 'Commercial — Hospitality',
      project: 'Kuro Speakeasy & Lounge',
      rating: 5,
      date: 'May 2026',
      content: 'The acoustic warmth, ambient lighting, and timber craftsmanship executed by The El Design House created an instant icon in Tokyo’s nightlife scene. Truly where art and function meet.'
    }
  ];

  // =========================================================================
  // 3. HEADER SCROLL & MOBILE DRAWER NAVIGATION
  // =========================================================================
  const mainHeader = document.getElementById('main-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  function openMobileMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.add('translate-x-full');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Scroll Spy for Nav Links
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // =========================================================================
  // 4. PORTFOLIO DYNAMIC RENDERING & FILTERING
  // =========================================================================
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');

  function renderPortfolioCards() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    // Count categories
    let totalCount = PORTFOLIO_ITEMS.length;
    let resCount = PORTFOLIO_ITEMS.filter(item => item.category === 'residential').length;
    let commCount = PORTFOLIO_ITEMS.filter(item => item.category === 'commercial').length;

    // Update filter badges if present
    const allCountBadge = document.querySelector('[data-filter="all"] .filter-count');
    const resCountBadge = document.querySelector('[data-filter="residential"] .filter-count');
    const commCountBadge = document.querySelector('[data-filter="commercial"] .filter-count');

    if (allCountBadge) allCountBadge.textContent = totalCount < 10 ? `0${totalCount}` : totalCount;
    if (resCountBadge) resCountBadge.textContent = resCount < 10 ? `0${resCount}` : resCount;
    if (commCountBadge) commCountBadge.textContent = commCount < 10 ? `0${commCount}` : commCount;

    // Build Cards
    PORTFOLIO_ITEMS.forEach(item => {
      const card = document.createElement('article');
      card.className = 'project-card group';
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-id', item.id);

      card.innerHTML = `
        <div class="project-thumb-container relative aspect-[4/3] rounded-xl overflow-hidden border border-border-subtle bg-noir">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" class="project-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='./assets/images/hero_interior.jpg'">
          <div class="project-overlay"></div>
          
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="badge-tag">${escapeHtml(item.categoryLabel)}</span>
            <span class="badge-tag bg-noir/80 text-gold border-gold/30">${escapeHtml(item.subCategory)}</span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="text-[11px] font-mono text-white/80 bg-noir/70 px-2.5 py-1 rounded backdrop-blur-sm">${escapeHtml(item.location)}</span>
          </div>

          <div class="project-hover-action">
            <button class="btn-quick-view" data-project="${item.id}">
              <span>View Case Study</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-2"></i>
            </button>
          </div>
        </div>

        <div class="project-info mt-5">
          <div class="flex items-baseline justify-between mb-1">
            <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-gold transition-colors">
              ${escapeHtml(item.title)}
            </h3>
            <span class="text-xs text-muted font-mono">${escapeHtml(item.footprint)}</span>
          </div>
          <p class="text-xs text-muted font-light leading-relaxed">
            ${escapeHtml(item.summary)}
          </p>
        </div>
      `;

      // Bind click on card & button
      card.addEventListener('click', () => openProjectModal(item.id));
      const qvBtn = card.querySelector('.btn-quick-view');
      if (qvBtn) {
        qvBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openProjectModal(item.id);
        });
      }

      portfolioGrid.appendChild(card);
    });
  }

  // Filter click handlers
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');
      const projectCards = document.querySelectorAll('.project-card');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Render cards initially
  renderPortfolioCards();

  // =========================================================================
  // 5. PROJECT CASE STUDY MODAL
  // =========================================================================
  const projectModal = document.getElementById('projectModal');
  const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectCategory = document.getElementById('modalProjectCategory');
  const modalProjectLocation = document.getElementById('modalProjectLocation');
  const modalProjectFootprint = document.getElementById('modalProjectFootprint');
  const modalProjectTimeline = document.getElementById('modalProjectTimeline');
  const modalProjectScope = document.getElementById('modalProjectScope');
  const modalProjectDescription = document.getElementById('modalProjectDescription');
  const modalProjectImage = document.getElementById('modalProjectImage');
  const modalProjectMaterials = document.getElementById('modalProjectMaterials');
  const modalBookBtn = document.getElementById('modalBookBtn');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalProjectTitle.textContent = data.title;
    modalProjectCategory.textContent = data.categoryLabel || data.category;
    modalProjectLocation.textContent = data.location;
    modalProjectFootprint.textContent = data.footprint;
    modalProjectTimeline.textContent = data.timeline;
    modalProjectScope.textContent = data.scope;
    modalProjectDescription.textContent = data.description;
    modalProjectImage.src = data.image;
    modalProjectImage.alt = data.title;

    // Populate materials pills
    modalProjectMaterials.innerHTML = '';
    (data.materials || []).forEach(mat => {
      const pill = document.createElement('span');
      pill.className = 'pill-badge';
      pill.textContent = mat;
      modalProjectMaterials.appendChild(pill);
    });

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeProjectModalBtn) closeProjectModalBtn.addEventListener('click', closeProjectModal);
  if (modalBookBtn) modalBookBtn.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // =========================================================================
  // 6. INTERACTIVE BEFORE & AFTER SLIDER
  // =========================================================================
  const beforeAfterSlider = document.getElementById('beforeAfterSlider');
  const beforeImageWrap = document.getElementById('beforeImageWrap');
  const sliderHandle = document.getElementById('sliderHandle');
  let isDraggingSlider = false;

  function updateSliderPosition(clientX) {
    if (!beforeAfterSlider) return;
    const rect = beforeAfterSlider.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    
    let percentage = (offsetX / rect.width) * 100;
    percentage = Math.max(5, Math.min(95, percentage));

    beforeImageWrap.style.width = `${percentage}%`;
    sliderHandle.style.left = `${percentage}%`;
  }

  if (beforeAfterSlider) {
    beforeAfterSlider.addEventListener('mousedown', (e) => {
      isDraggingSlider = true;
      updateSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingSlider) return;
      updateSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDraggingSlider = false;
    });

    // Touch support for mobile devices
    beforeAfterSlider.addEventListener('touchstart', (e) => {
      isDraggingSlider = true;
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDraggingSlider) return;
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDraggingSlider = false;
    });
  }

  // =========================================================================
  // 7. INTERACTIVE SCOPE & TIMELINE ESTIMATOR
  // =========================================================================
  const calcTypeButtons = document.querySelectorAll('#calcTypeGroup .calc-btn');
  const calcTierButtons = document.querySelectorAll('#calcTierGroup .calc-btn');
  const sqftRange = document.getElementById('sqftRange');
  const sqftDisplay = document.getElementById('sqftDisplay');
  const calcTimeline = document.getElementById('calcTimeline');
  const calcDesignPhase = document.getElementById('calcDesignPhase');
  const calcCrew = document.getElementById('calcCrew');

  let selectedType = 'residential';
  let selectedTier = 'haute';

  function updateEstimates() {
    if (!sqftRange) return;
    const sqft = parseInt(sqftRange.value, 10);
    sqftDisplay.textContent = `${sqft.toLocaleString()} sq.ft`;

    let baseWeeks = Math.round(10 + (sqft / 1000) * 1.8);
    let designWeeks = Math.round(3 + (sqft / 2500) * 0.8);
    let artisans = Math.round(8 + (sqft / 800) * 1.2);

    if (selectedType === 'commercial') {
      baseWeeks = Math.round(baseWeeks * 0.9);
      artisans = Math.round(artisans * 1.3);
    }

    if (selectedTier === 'bespoke') {
      baseWeeks = Math.round(baseWeeks * 1.25);
      designWeeks = Math.round(designWeeks * 1.3);
      artisans = Math.round(artisans * 1.2);
    }

    calcTimeline.textContent = `${baseWeeks} - ${baseWeeks + 4} Weeks`;
    calcDesignPhase.textContent = `${designWeeks} - ${designWeeks + 2} Weeks`;
    calcCrew.textContent = `${artisans}+ Artisans`;
  }

  calcTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      calcTypeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.getAttribute('data-type');
      updateEstimates();
    });
  });

  calcTierButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      calcTierButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTier = btn.getAttribute('data-tier');
      updateEstimates();
    });
  });

  if (sqftRange) {
    sqftRange.addEventListener('input', updateEstimates);
    updateEstimates();
  }

  // =========================================================================
  // 8. APPOINTMENT BOOKING ENGINE
  // =========================================================================
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentDateInput = document.getElementById('appointmentDate');
  const bookingConfirmModal = document.getElementById('bookingConfirmModal');
  const closeBookingConfirmBtn = document.getElementById('closeBookingConfirmBtn');
  const confirmRefCode = document.getElementById('confirmRefCode');
  const confirmClientName = document.getElementById('confirmClientName');
  const confirmDate = document.getElementById('confirmDate');
  const confirmTime = document.getElementById('confirmTime');
  const confirmFormat = document.getElementById('confirmFormat');

  if (appointmentDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDateStr = tomorrow.toISOString().split('T')[0];
    appointmentDateInput.min = minDateStr;
  }

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const location = document.getElementById('projectLocation').value.trim();
      const projectType = document.getElementById('projectType').value;
      const mode = document.getElementById('consultationMode').value;
      const date = document.getElementById('appointmentDate').value;
      const time = document.getElementById('appointmentTime').value;
      const notes = document.getElementById('projectNotes').value.trim();

      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const refCode = `ELDH-${randomNum}`;

      const bookingRecord = {
        refCode,
        name,
        email,
        phone,
        location,
        projectType,
        mode,
        date,
        time,
        notes,
        createdAt: new Date().toISOString()
      };

      try {
        const stored = JSON.parse(localStorage.getItem('eldh_appointments') || '[]');
        stored.push(bookingRecord);
        localStorage.setItem('eldh_appointments', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      confirmRefCode.textContent = refCode;
      confirmClientName.textContent = name;
      
      const dateObj = new Date(date);
      const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      confirmDate.textContent = formattedDate;
      confirmTime.textContent = time;
      confirmFormat.textContent = mode;

      bookingConfirmModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      appointmentForm.reset();
      showToast(`Appointment reserved under ${refCode}`, 'fa-calendar-check');
    });
  }

  if (closeBookingConfirmBtn) {
    closeBookingConfirmBtn.addEventListener('click', () => {
      bookingConfirmModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  bookingConfirmModal.addEventListener('click', (e) => {
    if (e.target === bookingConfirmModal) {
      bookingConfirmModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // =========================================================================
  // 9. CLIENT REVIEWS & TESTIMONIALS ENGINE
  // =========================================================================
  const reviewsGrid = document.getElementById('reviewsGrid');
  const openReviewModalBtn = document.getElementById('openReviewModalBtn');
  const reviewModal = document.getElementById('reviewModal');
  const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
  const writeReviewForm = document.getElementById('writeReviewForm');
  const starRatingContainer = document.getElementById('starRatingContainer');
  const starItems = document.querySelectorAll('.star-item');
  const selectedRatingInput = document.getElementById('selectedRating');
  const ratingTextDisplay = document.getElementById('ratingTextDisplay');
  const reviewsCountBadge = document.getElementById('reviewsCountBadge');

  const ratingDescriptions = {
    1: '1.0 / Unsatisfactory',
    2: '2.0 / Subpar',
    3: '3.0 / Acceptable',
    4: '4.0 / Highly Impressive',
    5: '5.0 / Exceptional Masterpiece'
  };

  starItems.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const rating = parseInt(star.getAttribute('data-rating'), 10);
      highlightStars(rating);
      ratingTextDisplay.textContent = ratingDescriptions[rating] || `${rating}.0`;
    });

    star.addEventListener('click', () => {
      const rating = parseInt(star.getAttribute('data-rating'), 10);
      selectedRatingInput.value = rating;
      highlightStars(rating);
      ratingTextDisplay.textContent = ratingDescriptions[rating] || `${rating}.0`;
    });
  });

  if (starRatingContainer) {
    starRatingContainer.addEventListener('mouseleave', () => {
      const currentRating = parseInt(selectedRatingInput.value, 10) || 5;
      highlightStars(currentRating);
      ratingTextDisplay.textContent = ratingDescriptions[currentRating] || `${currentRating}.0`;
    });
  }

  function highlightStars(rating) {
    starItems.forEach(star => {
      const val = parseInt(star.getAttribute('data-rating'), 10);
      if (val <= rating) {
        star.classList.remove('fa-regular');
        star.classList.add('fa-solid', 'text-gold');
      } else {
        star.classList.remove('fa-solid', 'text-gold');
        star.classList.add('fa-regular', 'text-muted');
      }
    });
  }

  function loadAndRenderReviews() {
    let userReviews = [];
    try {
      userReviews = JSON.parse(localStorage.getItem('eldh_reviews') || '[]');
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    const allReviews = [...userReviews, ...defaultReviews];
    reviewsGrid.innerHTML = '';

    allReviews.forEach((rev, index) => {
      const card = createReviewCardElement(rev, index < userReviews.length);
      reviewsGrid.appendChild(card);
    });

    if (reviewsCountBadge) {
      reviewsCountBadge.textContent = `${98 + userReviews.length} Verified Reviews`;
    }
  }

  function createReviewCardElement(rev, isNewUserReview = false) {
    const card = document.createElement('article');
    card.className = 'review-card relative group';

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rev.rating) {
        starsHtml += '<i class="fa-solid fa-star text-gold text-xs"></i> ';
      } else {
        starsHtml += '<i class="fa-regular fa-star text-muted text-xs"></i> ';
      }
    }

    const initials = rev.author.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1.5">${starsHtml}</div>
          <span class="text-[10px] text-muted font-mono">${rev.date || 'Recent'}</span>
        </div>
        ${isNewUserReview ? '<span class="inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-widest bg-gold/15 text-gold border border-gold/30 mb-3">Just Published</span>' : ''}
        <p class="text-xs md:text-sm text-platinum/90 font-light leading-relaxed mb-6 italic">
          “${escapeHtml(rev.content)}”
        </p>
      </div>

      <div class="pt-4 border-t border-white/5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="avatar-circle">${initials || 'ED'}</div>
          <div>
            <h4 class="font-cinzel text-xs font-bold text-white leading-tight">${escapeHtml(rev.author)}</h4>
            <span class="text-[11px] text-muted block">${escapeHtml(rev.location)}</span>
          </div>
        </div>
        <span class="text-[10px] font-mono text-gold/80 bg-noir/80 px-2 py-1 rounded border border-border-subtle">
          ${escapeHtml(rev.type || 'Residential')}
        </span>
      </div>
    `;

    return card;
  }

  if (openReviewModalBtn) {
    openReviewModalBtn.addEventListener('click', () => {
      reviewModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      highlightStars(5);
      selectedRatingInput.value = '5';
    });
  }

  if (closeReviewModalBtn) {
    closeReviewModalBtn.addEventListener('click', () => {
      reviewModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  reviewModal.addEventListener('click', (e) => {
    if (e.target === reviewModal) {
      reviewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  if (writeReviewForm) {
    writeReviewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const author = document.getElementById('reviewAuthor').value.trim();
      const location = document.getElementById('reviewLocation').value.trim();
      const type = document.getElementById('reviewType').value;
      const project = document.getElementById('reviewProjectName').value.trim();
      const content = document.getElementById('reviewContent').value.trim();
      const rating = parseInt(selectedRatingInput.value, 10) || 5;

      const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

      const newReview = {
        id: `rev-${Date.now()}`,
        author,
        location,
        type,
        project,
        content,
        rating,
        date: dateStr
      };

      try {
        const stored = JSON.parse(localStorage.getItem('eldh_reviews') || '[]');
        stored.unshift(newReview);
        localStorage.setItem('eldh_reviews', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage review error:', err);
      }

      loadAndRenderReviews();

      writeReviewForm.reset();
      reviewModal.classList.remove('active');
      document.body.style.overflow = '';

      showToast('Thank you! Your review has been published.', 'fa-star');
    });
  }

  loadAndRenderReviews();

  // =========================================================================
  // 10. NEWSLETTER & TOAST NOTIFICATION UTILITY
  // =========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.reset();
      showToast('Welcome to The El Private Journal.', 'fa-envelope-open-text');
    });
  }

  function showToast(message, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <i class="fa-solid ${icon} text-gold text-sm"></i>
      <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 4500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('active')) closeProjectModal();
      if (reviewModal.classList.contains('active')) {
        reviewModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (bookingConfirmModal.classList.contains('active')) {
        bookingConfirmModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (!mobileDrawer.classList.contains('translate-x-full')) closeMobileMenu();
    }
  });

});
