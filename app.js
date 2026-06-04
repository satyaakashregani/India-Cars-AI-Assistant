// ==========================================================================
//  INDIA CARS LLM - APPLICATION CONTROLLER & LOGIC ENGINE
// ==========================================================================

// Global state for recommendation matcher wizard
let matcherState = {
  step: 1,
  budget: 15, // in Lakhs
  style: 'any', // any, Hatchback, Sedan, SUV, MPV
  fuel: [], // array of selected values e.g. ["Petrol", "Electric"]
  safety: 'no' // yes, no
};

// ==========================================================================
//  TAB NAVIGATION CONTROLLER
// ==========================================================================
function switchTab(tabId) {
  // Update nav buttons active status
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`tab-${tabId}`).classList.add('active');

  // Update visible section content
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active-content');
  });
  document.getElementById(`content-${tabId}`).classList.add('active-content');

  // Update header text based on active tab
  const title = document.getElementById('current-tab-title');
  const desc = document.getElementById('current-tab-desc');

  if (tabId === 'chat') {
    title.innerText = 'AI Chat Engine';
    desc.innerText = 'Converse with the pre-trained engine using natural prompts';
  } else if (tabId === 'explorer') {
    title.innerText = 'Car Explorer';
    desc.innerText = 'Browse all pre-trained records and detailed technical spec cards';
    renderExplorer();
  } else if (tabId === 'compare') {
    title.innerText = 'Comparison Deck';
    desc.innerText = 'Compare specifications of two Indian car models side-by-side';
    setupComparisonSelects();
    renderComparison();
  } else if (tabId === 'matcher') {
    title.innerText = 'Smart Matcher';
    desc.innerText = 'Find the ideal car by walking through our offline preference wizard';
    resetMatcher();
  }

  // Refresh Lucide Icons
  lucide.createIcons();
}

// ==========================================================================
//  CAR EXPLORER CONTROLLER
// ==========================================================================
function renderExplorer(filterList = null) {
  const grid = document.getElementById('explorer-cards-grid');
  grid.innerHTML = '';

  const cars = filterList || Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]);

  if (cars.length === 0) {
    grid.innerHTML = `<div class="modal-col-full text-muted" style="text-align: center; padding: 40px 0;">No matching models found. Try adjusting your filters.</div>`;
    return;
  }

  cars.forEach(car => {
    const canonicalKey = (car.brand + " " + car.model).toLowerCase();
    
    // Safety score text parser for star icons
    let starRatingText = "Not Rated";
    let isLowSafety = true;
    if (car.safety.includes("5-star")) {
      starRatingText = "⭐⭐⭐⭐⭐";
      isLowSafety = false;
    } else if (car.safety.includes("4-star")) {
      starRatingText = "⭐⭐⭐⭐";
      isLowSafety = false;
    } else if (car.safety.includes("3-star")) {
      starRatingText = "⭐⭐⭐";
    } else if (car.safety.includes("2-star")) {
      starRatingText = "⭐⭐";
    } else if (car.safety.includes("1-star")) {
      starRatingText = "⭐";
    }

    const card = document.createElement('div');
    card.className = 'car-card glassmorphism';
    card.onclick = () => openCarModal(canonicalKey);

    card.innerHTML = `
      <div class="car-card-header">
        <span class="car-category-tag">${car.category}</span>
        <span class="car-brand">${car.brand}</span>
        <h3 class="car-model">${car.model}</h3>
      </div>
      <div class="car-card-body">
        <p class="car-card-desc">${car.brief}</p>
      </div>
      <div class="car-card-footer">
        <span class="car-price">${car.price_range.split('(')[0].replace('ex-showroom', '').trim()}</span>
        <span class="car-safety-badge ${isLowSafety ? 'low' : ''}">
          <i data-lucide="shield"></i> ${starRatingText}
        </span>
      </div>
    `;
    grid.appendChild(card);
  });

  lucide.createIcons();
}

function applyFilters() {
  const brandVal = document.getElementById('filter-brand').value;
  const catVal = document.getElementById('filter-category').value;
  const searchVal = document.getElementById('filter-search').value.toLowerCase().trim();

  const filtered = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(car => {
    const matchBrand = brandVal === 'all' || car.brand === brandVal;
    const matchCat = catVal === 'all' || car.category === catVal || (catVal === 'Electric' && car.category === 'Electric');
    
    const fullName = (car.brand + " " + car.model).toLowerCase();
    const matchSearch = searchVal === '' || fullName.includes(searchVal) || car.brief.toLowerCase().includes(searchVal);

    return matchBrand && matchCat && matchSearch;
  });

  renderExplorer(filtered);
}

// ==========================================================================
//  MODAL VIEWER CONTROLLER
// ==========================================================================
function openCarModal(key) {
  const dbKey = resolveAliasKey(key);
  if (!dbKey) return;
  const car = CAR_DATABASE[dbKey];

  const modal = document.getElementById('car-detail-modal');
  const body = document.getElementById('modal-body-content');

  let engineLines = '';
  Object.keys(car.engine_options).forEach(engName => {
    engineLines += `<li><strong>${engName}</strong>: ${car.engine_options[engName]}</li>`;
  });

  let featureLines = '';
  car.key_features.forEach(feat => {
    featureLines += `<li>${feat}</li>`;
  });

  body.innerHTML = `
    <div class="car-brand" style="font-size: 0.9rem;">${car.brand}</div>
    <h2 class="modal-car-title">${car.model}</h2>
    <span class="meta-tag" style="margin-bottom: 20px; display: inline-flex;"><i data-lucide="calendar"></i> Years: ${car.years_sold}</span>

    <div class="modal-grid">
      <div class="detail-block">
        <h4>Brief Profile</h4>
        <p>${car.brief}</p>
      </div>

      <div class="detail-block">
        <h4>Key Specs</h4>
        <div class="modal-meta-grid">
          <div class="meta-item">
            <div class="meta-item-label">Price range</div>
            <div class="meta-item-value">${car.price_range.split('(')[0]}</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">ARAI Mileage</div>
            <div class="meta-item-value">${car.mileage}</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">Safety Score</div>
            <div class="meta-item-value">${car.safety}</div>
          </div>
          <div class="meta-item">
            <div class="meta-item-label">Body style</div>
            <div class="meta-item-value">${car.category}</div>
          </div>
        </div>
      </div>

      <div class="detail-block modal-col-full">
        <h4>Engine & Powertrains</h4>
        <ul class="spec-list">${engineLines}</ul>
      </div>

      <div class="detail-block">
        <h4>Gearbox / Transmission</h4>
        <ul class="spec-list">
          <li>${car.transmission.join(', ')}</li>
        </ul>
      </div>

      <div class="detail-block">
        <h4>Key Features</h4>
        <ul class="spec-list">${featureLines}</ul>
      </div>

      <div class="detail-block">
        <h4>Segment Rivals</h4>
        <p>${car.rivals.join(', ')}</p>
      </div>

      <div class="detail-block">
        <h4>Fun Fact / Trivia</h4>
        <p>💡 ${car.fun_facts}</p>
      </div>
    </div>
  `;

  modal.classList.add('active-modal');
  lucide.createIcons();
}

function closeModal() {
  document.getElementById('car-detail-modal').classList.remove('active-modal');
}

// Close modal on Escape key press
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ==========================================================================
//  COMPARISON DECK CONTROLLER
// ==========================================================================
function setupComparisonSelects() {
  const sel1 = document.getElementById('compare-car-1');
  const sel2 = document.getElementById('compare-car-2');
  
  if (sel1.options.length > 0) return; // Already loaded

  Object.keys(CAR_DATABASE).forEach((key, idx) => {
    const car = CAR_DATABASE[key];
    const name = `${car.brand} ${car.model}`;
    
    const opt1 = new Option(name, key);
    const opt2 = new Option(name, key);
    
    // Default select indices
    if (idx === 2) opt1.selected = true; // Swift
    if (idx === 15) opt2.selected = true; // i20

    sel1.add(opt1);
    sel2.add(opt2);
  });
}

function renderComparison() {
  const k1 = document.getElementById('compare-car-1').value;
  const k2 = document.getElementById('compare-car-2').value;
  const matrix = document.getElementById('compare-results-matrix');

  if (k1 === k2) {
    matrix.innerHTML = `<div class="glassmorphism text-muted" style="text-align: center; padding: 40px 0;">Please select two different models to compare specifications.</div>`;
    return;
  }

  const c1 = CAR_DATABASE[k1];
  const c2 = CAR_DATABASE[k2];

  // Helper comparison logic for highlight colors
  const m1 = parseFloat(c1.mileage) || 0;
  const m2 = parseFloat(c2.mileage) || 0;
  const betterMileage = m1 > m2 ? 1 : (m2 > m1 ? 2 : 0);

  const getSafetyValue = text => {
    if (text.includes("5-star")) return 5;
    if (text.includes("4-star")) return 4;
    if (text.includes("3-star")) return 3;
    if (text.includes("2-star")) return 2;
    if (text.includes("1-star")) return 1;
    return 0;
  };
  const s1 = getSafetyValue(c1.safety);
  const s2 = getSafetyValue(c2.safety);
  const betterSafety = s1 > s2 ? 1 : (s2 > s1 ? 2 : 0);

  matrix.innerHTML = `
    <div class="compare-matrix-grid">
      <!-- Headers -->
      <div class="matrix-cell label-cell header-row">Specs Comparison</div>
      <div class="matrix-cell header-row">${c1.brand} ${c1.model}</div>
      <div class="matrix-cell header-row">${c2.brand} ${c2.model}</div>

      <!-- Category -->
      <div class="matrix-cell label-cell">Body Style</div>
      <div class="matrix-cell">${c1.category}</div>
      <div class="matrix-cell">${c2.category}</div>

      <!-- Years sold -->
      <div class="matrix-cell label-cell">Years Sold</div>
      <div class="matrix-cell">${c1.years_sold}</div>
      <div class="matrix-cell">${c2.years_sold}</div>

      <!-- Price -->
      <div class="matrix-cell label-cell">Price Range</div>
      <div class="matrix-cell">${c1.price_range.split('(')[0]}</div>
      <div class="matrix-cell">${c2.price_range.split('(')[0]}</div>

      <!-- Mileage -->
      <div class="matrix-cell label-cell">ARAI Mileage</div>
      <div class="matrix-cell ${betterMileage === 1 ? 'winner-highlight' : ''}">${c1.mileage}</div>
      <div class="matrix-cell ${betterMileage === 2 ? 'winner-highlight' : ''}">${c2.mileage}</div>

      <!-- Safety -->
      <div class="matrix-cell label-cell">Safety Score</div>
      <div class="matrix-cell ${betterSafety === 1 ? 'winner-highlight' : ''}">${c1.safety}</div>
      <div class="matrix-cell ${betterSafety === 2 ? 'winner-highlight' : ''}">${c2.safety}</div>

      <!-- Engine -->
      <div class="matrix-cell label-cell">Engine Type</div>
      <div class="matrix-cell">${Object.keys(c1.engine_options)[0]}</div>
      <div class="matrix-cell">${Object.keys(c2.engine_options)[0]}</div>

      <!-- Transmission -->
      <div class="matrix-cell label-cell">Transmission</div>
      <div class="matrix-cell">${c1.transmission.join(', ')}</div>
      <div class="matrix-cell">${c2.transmission.join(', ')}</div>

      <!-- Features -->
      <div class="matrix-cell label-cell">Key Feature</div>
      <div class="matrix-cell">${c1.key_features[0]}</div>
      <div class="matrix-cell">${c2.key_features[0]}</div>

      <!-- Rivals -->
      <div class="matrix-cell label-cell">Segment Rivals</div>
      <div class="matrix-cell">${c1.rivals.slice(0, 2).join(', ')}</div>
      <div class="matrix-cell">${c2.rivals.slice(0, 2).join(', ')}</div>
    </div>
  `;
}

// ==========================================================================
//  SMART RECOMMENDATION WIZARD CONTROLLER
// ==========================================================================
function updateBudgetDisplay(val) {
  document.getElementById('budget-val-display').innerText = `Rs ${val} Lakhs`;
  matcherState.budget = parseInt(val);
}

function selectOption(category, val, el) {
  // Deselect siblings
  const parent = el.parentNode;
  parent.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  
  // Select active element
  el.classList.add('selected');
  matcherState[category] = val;
}

function toggleMultiSelect(el) {
  const val = el.getAttribute('data-val');
  el.classList.toggle('selected');
  
  if (el.classList.contains('selected')) {
    if (!matcherState.fuel.includes(val)) matcherState.fuel.push(val);
  } else {
    matcherState.fuel = matcherState.fuel.filter(f => f !== val);
  }
}

function resetMatcher() {
  matcherState = { step: 1, budget: 15, style: 'any', fuel: [], safety: 'no' };
  
  // Reset Slider & Options
  document.getElementById('matcher-budget-slider').value = 15;
  updateBudgetDisplay(15);
  
  document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('wizard-recommendations').style.display = 'none';
  
  showStepPanel(1);
}

function showStepPanel(stepNum) {
  matcherState.step = stepNum;

  // Show/Hide Panels
  document.querySelectorAll('.wizard-step').forEach(panel => panel.classList.remove('active-step'));
  document.getElementById(`step-panel-${stepNum}`).classList.add('active-step');

  // Update Dots
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById(`dot-${i}`);
    const line = document.getElementById(`line-${i}`);
    
    dot.className = 'step-dot';
    if (i < stepNum) dot.classList.add('completed');
    if (i === stepNum) dot.classList.add('active');
    
    if (line) {
      line.className = 'step-line';
      if (i < stepNum) line.classList.add('completed');
    }
  }

  // Update Action Buttons
  const btnPrev = document.getElementById('btn-wiz-prev');
  const btnNext = document.getElementById('btn-wiz-next');

  btnPrev.disabled = stepNum === 1;
  
  if (stepNum === 4) {
    btnNext.innerHTML = `Calculate Matches <i data-lucide="check"></i>`;
  } else {
    btnNext.innerHTML = `Next <i data-lucide="arrow-right"></i>`;
  }

  lucide.createIcons();
}

function prevStep() {
  if (matcherState.step > 1) showStepPanel(matcherState.step - 1);
}

function nextStep() {
  if (matcherState.step < 4) {
    showStepPanel(matcherState.step + 1);
  } else {
    calculateMatcherRecommendations();
  }
}

function calculateMatcherRecommendations() {
  const budgetLimit = matcherState.budget;
  const stylePref = matcherState.style;
  const fuelPref = matcherState.fuel;
  const safetyPref = matcherState.safety;

  const matches = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(car => {
    // 1. Budget filter (Extract first number range from string e.g. "Rs 3.54 lakh")
    const prices = car.price_range.match(/(\d+\.?\d*)/g);
    if (prices) {
      const minPrice = parseFloat(prices[0]);
      if (minPrice > budgetLimit) return false;
    }

    // 2. Style filter
    if (stylePref !== 'any' && car.category !== stylePref) return false;

    // 3. Fuel filter
    if (fuelPref.length > 0) {
      let isMatch = false;
      fuelPref.forEach(fuel => {
        // Match Engine Options Names or CNG variations
        if (fuel === 'CNG' && (car.mileage.includes('CNG') || car.price_range.includes('CNG') || Object.keys(car.engine_options).some(e => e.includes('CNG')))) {
          isMatch = true;
        } else if (fuel === 'Electric' && car.category === 'Electric') {
          isMatch = true;
        } else if (fuel === 'Diesel' && (Object.keys(car.engine_options).some(e => e.toLowerCase().includes('diesel')) || car.brief.toLowerCase().includes('diesel'))) {
          isMatch = true;
        } else if (fuel === 'Petrol' && !car.category.includes('Electric')) {
          // Typically petrol is fallback unless electric only
          isMatch = true;
        }
      });
      if (!isMatch) return false;
    }

    // 4. Safety filter
    if (safetyPref === 'yes') {
      const isSafe = car.safety.includes("5-star") || car.safety.includes("4-star");
      if (!isSafe) return false;
    }

    return true;
  });

  // Render output cards
  const resultsGrid = document.getElementById('matcher-results-grid');
  resultsGrid.innerHTML = '';
  
  document.getElementById('wizard-recommendations').style.display = 'block';

  if (matches.length === 0) {
    resultsGrid.innerHTML = `<div class="modal-col-full text-muted" style="text-align: center; padding: 40px 0; width: 100%;">No matching cars fit all your chosen criteria. Try adjusting the parameters or clearing filters.</div>`;
    return;
  }

  matches.forEach(car => {
    const canonicalKey = (car.brand + " " + car.model).toLowerCase();
    let starRatingText = "Not Rated";
    let isLowSafety = true;
    if (car.safety.includes("5-star")) { starRatingText = "⭐⭐⭐⭐⭐"; isLowSafety = false; }
    else if (car.safety.includes("4-star")) { starRatingText = "⭐⭐⭐⭐"; isLowSafety = false; }
    else if (car.safety.includes("3-star")) { starRatingText = "⭐⭐⭐"; }
    else if (car.safety.includes("2-star")) { starRatingText = "⭐⭐"; }
    else if (car.safety.includes("1-star")) { starRatingText = "⭐"; }

    const card = document.createElement('div');
    card.className = 'car-card glassmorphism';
    card.onclick = () => openCarModal(canonicalKey);

    card.innerHTML = `
      <div class="car-card-header">
        <span class="car-category-tag">${car.category}</span>
        <span class="car-brand">${car.brand}</span>
        <h3 class="car-model">${car.model}</h3>
      </div>
      <div class="car-card-body">
        <p class="car-card-desc">${car.brief}</p>
      </div>
      <div class="car-card-footer">
        <span class="car-price">${car.price_range.split('(')[0]}</span>
        <span class="car-safety-badge ${isLowSafety ? 'low' : ''}">
          <i data-lucide="shield"></i> ${starRatingText}
        </span>
      </div>
    `;
    resultsGrid.appendChild(card);
  });

  // Auto-scroll to results
  setTimeout(() => {
    document.getElementById('wizard-recommendations').scrollIntoView({ behavior: 'smooth' });
  }, 100);

  lucide.createIcons();
}


// ==========================================================================
//  RULE-BASED CHATBOT SIMULATOR
// ==========================================================================
function resolveAliasKey(query) {
  query = query.toLowerCase().trim();
  
  if (CAR_ALIASES[query]) {
    return CAR_ALIASES[query];
  }

  // Substring matches
  for (let alias of Object.keys(CAR_ALIASES)) {
    if (alias.length > 3 && alias.includes(query)) {
      return CAR_ALIASES[alias];
    }
    if (alias.length > 3 && query.includes(alias)) {
      return CAR_ALIASES[alias];
    }
  }

  return null;
}

function processChatNLP(query) {
  const q = query.toLowerCase().trim();

  // 1. Greet command
  if (['hi', 'hello', 'hey', 'start', 'help', 'welcome'].includes(q)) {
    return `==========================================================================
    WELCOME TO INDIA CARS LLM  --  PRE-TRAINED OFFLINE CHAT ENGINE
==========================================================================
    I am an offline rule-based knowledge engine containing deep profiles 
    of iconic Indian cars sold between 2000 and 2026.
    
    You can query me by typing things like:
    * "tell me about Mahindra Thar"
    * "price of Tata Nexon EV"
    * "compare Swift and Hyundai i20"
    * "safest hatchbacks in India"
    * "mileage of Maruti Celerio"
    * "show me SUVs under 15 lakhs"
    * "list all electric cars"
==========================================================================`;
  }

  // 2. Comparison intents: e.g. "compare swift and i20", "swift vs i20"
  const compareMatch = q.match(/(?:compare|versus|vs)\s+([\w\s\-]+)\s+(?:and|vs)\s+([\w\s\-]+)/) || q.match(/([\w\s\-]+)\s+vs\s+([\w\s\-]+)/);
  if (compareMatch) {
    const k1 = resolveAliasKey(compareMatch[1]);
    const k2 = resolveAliasKey(compareMatch[2]);
    if (k1 && k2) {
      const c1 = CAR_DATABASE[k1];
      const c2 = CAR_DATABASE[k2];
      return `==========================================================================
  COMPARISON: ${c1.brand} ${c1.model} vs ${c2.brand} ${c2.model}
==========================================================================
  Feature         | ${(c1.brand + " " + c1.model).padEnd(26)} | ${(c2.brand + " " + c2.model).padEnd(26)}
------------------+----------------------------+----------------------------
  Category        | ${c1.category.padEnd(26)} | ${c2.category.padEnd(26)}
  Years Sold      | ${c1.years_sold.padEnd(26)} | ${c2.years_sold.padEnd(26)}
  Price Range     | ${c1.price_range.split('(')[0].trim().padEnd(26)} | ${c2.price_range.split('(')[0].trim().padEnd(26)}
  Mileage         | ${c1.mileage.padEnd(26)} | ${c2.mileage.padEnd(26)}
  Safety Rating   | ${c1.safety.padEnd(26)} | ${c2.safety.padEnd(26)}
  Transmission    | ${c1.transmission.join(', ').substring(0, 26).padEnd(26)} | ${c2.transmission.join(', ').substring(0, 26).padEnd(26)}
  Engine Option   | ${Object.keys(c1.engine_options)[0].substring(0, 26).padEnd(26)} | ${Object.keys(c2.engine_options)[0].substring(0, 26).padEnd(26)}
  Key Rivals      | ${c1.rivals[0].substring(0, 26).padEnd(26)} | ${c2.rivals[0].substring(0, 26).padEnd(26)}
==========================================================================`;
    }
  }

  // 3. Category intents
  if (q.includes('hatchback') || q.includes('small car')) {
    return formatCategoryOutput('Hatchback');
  }
  if (q.includes('suv') || q.includes('offroad') || q.includes('crossover')) {
    return formatCategoryOutput('SUV');
  }
  if (q.includes('sedan') || q.includes('saloon')) {
    return formatCategoryOutput('Sedan');
  }
  if (q.includes('mpv') || q.includes('7 seater') || q.includes('7-seater')) {
    return formatCategoryOutput('MPV');
  }
  if (q.includes('electric') || q.includes('ev') || q.includes('battery')) {
    return formatCategoryOutput('Electric');
  }

  // 4. Safest cars
  if (q.includes('safest') || q.includes('ncap') || q.includes('safety rating')) {
    const safeCars = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(c => c.safety.includes('5-star') || c.safety.includes('4-star'));
    let out = `🛡️ **Top Safest Cars in the database (4 & 5 Stars):**\n\n`;
    safeCars.forEach((c, idx) => {
      out += `${idx + 1}. **${c.brand} ${c.model}** - Rated: ${c.safety} (${c.price_range.split('(')[0]})\n`;
    });
    return out;
  }

  // 5. Best mileage
  if (q.includes('mileage') || q.includes('fuel efficient') || q.includes('km/l') || q.includes('economy')) {
    // Check if query targets a specific car's mileage
    const specificKey = resolveAliasKey(q);
    if (specificKey) {
      const rec = CAR_DATABASE[specificKey];
      return `The ARAI certified mileage for the **${rec.brand} ${rec.model}** is **${rec.mileage}**.`;
    }

    const milCars = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(c => c.mileage.includes('2') || c.mileage.includes('3') || c.mileage.toLowerCase().includes('hybrid') || c.mileage.includes('km/kg'));
    let out = `⛽ **Outstanding High-Mileage Cars & Hybrids:**\n\n`;
    milCars.forEach((c, idx) => {
      out += `${idx + 1}. **${c.brand} ${c.model}**: ${c.mileage}\n`;
    });
    return out;
  }

  // 6. Budget filters e.g. "under 10 lakhs"
  const underMatch = q.match(/(?:under|below|less than)\s+(\d+)\s*(?:lakh|l)/);
  if (underMatch) {
    const limit = parseFloat(underMatch[1]);
    return listByBudgetLimit(0, limit);
  }
  const rangeMatch = q.match(/(?:between)\s+(\d+)\s*(?:and|to)\s+(\d+)\s*(?:lakh|l)/);
  if (rangeMatch) {
    return listByBudgetLimit(parseFloat(rangeMatch[1]), parseFloat(rangeMatch[2]));
  }

  // 7. Specific model match
  const modelKey = resolveAliasKey(q);
  if (modelKey) {
    const car = CAR_DATABASE[modelKey];
    
    // Check for specific sub-attribute requests
    if (q.includes('price') || q.includes('cost') || q.includes('how much')) {
      return `The price range of **${car.brand} ${car.model}** is **${car.price_range}**.`;
    }
    if (q.includes('engine') || q.includes('displacement') || q.includes('cc') || q.includes('power')) {
      let engLines = '';
      Object.keys(car.engine_options).forEach(e => {
        engLines += `- **${e}**: ${car.engine_options[e]}\n`;
      });
      return `The engine options available in the **${car.brand} ${car.model}** are:\n${engLines}`;
    }
    if (q.includes('variant') || q.includes('trims') || q.includes('models')) {
      return `Variants of **${car.brand} ${car.model}**:\n${car.variants.join(', ')}`;
    }
    if (q.includes('transmission') || q.includes('gearbox') || q.includes('manual') || q.includes('automatic')) {
      return `Transmission options for **${car.brand} ${car.model}**: ${car.transmission.join(', ')}.`;
    }
    if (q.includes('rival') || q.includes('competitor') || q.includes('against')) {
      return `Rivals competing with **${car.brand} ${car.model}** are: ${car.rivals.join(', ')}.`;
    }
    if (q.includes('fact') || q.includes('trivia') || q.includes('interesting')) {
      return `Fun fact about the **${car.brand} ${car.model}**:\n💡 ${car.fun_facts}`;
    }
    if (q.includes('safety') || q.includes('airbag')) {
      return `Safety details for the **${car.brand} ${car.model}**:\n- **Crash rating**: ${car.safety}\n- **Features**: ${car.key_features.slice(0, 3).join(', ')}`;
    }

    // Default: Return full formatted text profile
    let engStr = '';
    Object.keys(car.engine_options).forEach(e => {
      engStr += `    - ${e}: ${car.engine_options[e]}\n`;
    });
    let featStr = '';
    car.key_features.forEach(f => {
      featStr += `    - ${f}\n`;
    });

    return `==========================================================================
  CAR PROFILE: ${car.brand.toUpperCase()} ${car.model.toUpperCase()}
==========================================================================
  * Brand:        ${car.brand}
  * Model:        ${car.model}
  * Years Sold:   ${car.years_sold}
  * Category:     ${car.category}
  * Price Range:  ${car.price_range}
  
  * Brief:
    ${car.brief}

  * Engine Options:
${engStr.trimEnd()}

  * Transmission: ${car.transmission.join(', ')}
  * Mileage:      ${car.mileage}
  * Safety:       ${car.safety}

  * Key Features:
${featStr.trimEnd()}

  * Rivals:       ${car.rivals.join(', ')}
  * Fun Fact:     ${car.fun_facts}
==========================================================================`;
  }

  // 8. Fallback fuzzy suggestion
  const keys = Object.keys(CAR_DATABASE);
  const matchedSuggestions = [];
  keys.forEach(k => {
    if (k.includes(q) || q.includes(k.split(' ')[1])) {
      matchedSuggestions.push(CAR_DATABASE[k]);
    }
  });

  if (matchedSuggestions.length > 0) {
    let out = `I couldn't match your exact phrase, but did you mean to ask about one of these models?\n\n`;
    matchedSuggestions.slice(0, 3).forEach(c => {
      out += `- **${c.brand} ${c.model}** (Ask: "tell me about ${c.model.toLowerCase()}")\n`;
    });
    return out;
  }

  return `I am not sure I understand your query: "${query}".\nTry asking for a specific car model (e.g. 'Swift', 'Thar', 'Nexon') or categories like 'SUVs', 'safest cars', or 'mileage list'.`;
}

function formatCategoryOutput(cat) {
  const matches = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(c => c.category === cat || (cat === 'Electric' && c.category === 'Electric'));
  let out = `Found ${matches.length} models matching category: **${cat}**\n\n`;
  matches.forEach((c, idx) => {
    out += `${idx + 1}. **${c.brand} ${c.model}** (${c.price_range.split('(')[0]})\n`;
  });
  return out;
}

function listByBudgetLimit(low, high) {
  const matches = Object.keys(CAR_DATABASE).map(k => CAR_DATABASE[k]).filter(c => {
    const prices = c.price_range.match(/(\d+\.?\d*)/g);
    if (prices) {
      const minP = parseFloat(prices[0]);
      return (low <= minP && minP <= high) || (minP <= high && prices[1] && parseFloat(prices[1]) >= low);
    }
    return false;
  });

  if (matches.length === 0) {
    return `No cars found in the database matching budget Rs ${low}L - Rs ${high}L.`;
  }

  let out = `💰 **Cars fitting budget range Rs ${low}L - Rs ${high}L:**\n\n`;
  matches.forEach((c, idx) => {
    out += `${idx + 1}. **${c.brand} ${c.model}** (${c.price_range.split('(')[0]})\n`;
  });
  return out;
}

// Handler for executing input prompts
function handleChatSubmit(event) {
  event.preventDefault();
  const inputEl = document.getElementById('chat-query-input');
  const query = inputEl.value.trim();
  if (!query) return;

  // Append user message
  appendMessage('USER AGENT', query, 'user');
  inputEl.value = '';

  // Processing response
  setTimeout(() => {
    const reply = processChatNLP(query);
    appendMessage('SYSTEM AGENT', reply, 'system');
  }, 100);
}

function fillPrompt(val) {
  document.getElementById('chat-query-input').value = val;
  document.getElementById('chat-query-input').focus();
}

function appendMessage(sender, text, type) {
  const box = document.getElementById('chat-history-box');
  const msg = document.createElement('div');
  msg.className = `chat-message ${type}`;

  const isSystem = type === 'system';
  const iconName = isSystem ? 'bot' : 'user';

  msg.innerHTML = `
    <div class="message-sender">
      <i data-lucide="${iconName}"></i>
      <span>${sender.toUpperCase()}</span>
    </div>
    <div class="message-body ${isSystem ? 'console-font' : ''}">
      ${isSystem ? `<pre class="console-font">${text}</pre>` : text}
    </div>
  `;

  box.appendChild(msg);
  box.scrollTop = box.scrollHeight; // Auto-scroll
  lucide.createIcons();
}

// Initialise Lucide icons on layout loaded
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderExplorer(); // Default render
});
