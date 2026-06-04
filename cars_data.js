const CAR_DATABASE = {
  // ---- MARUTI SUZUKI ----
  "maruti alto": {
    brand: "Maruti Suzuki",
    model: "Alto",
    years_sold: "2000-present",
    category: "Hatchback",
    brief: "The Alto is India's best-selling car for many years running. Lightweight, fuel-efficient and extremely affordable, it has been the entry-point to car ownership for millions of Indian families. The current generation (Alto K10) launched in 2022 rides on a new platform.",
    variants: ["Std (Alto 800)", "LX", "LXi", "VXi", "VXi+", "Alto K10 - Std/VXi/VXi+/ZXi/ZXi+"],
    engine_options: {
      "0.8L 3-cyl (F8D)": "796 cc, 47 PS, 69 Nm - Alto 800 (2000-2022)",
      "1.0L K10C DualJet": "998 cc, 67 PS, 89 Nm - Alto K10 (2022-)"
    },
    transmission: ["5-speed MT", "5-speed AMT (K10)"],
    mileage: "22.0 - 24.8 km/l (ARAI)",
    safety: "1-star Global NCAP (2014 test on older model)",
    key_features: ["Dual airbags (newer variants)", "ABS with EBD", "Power steering", "Central locking", "USB charging port", "Rear parking sensors"],
    price_range: "Rs 3.54 lakh - Rs 5.30 lakh (ex-showroom, 2024)",
    rivals: ["Renault Kwid", "Maruti S-Presso"],
    fun_facts: "Alto 800 held India's best-seller title for over a decade consecutively."
  },
  "maruti wagon r": {
    brand: "Maruti Suzuki",
    model: "WagonR",
    years_sold: "1999-present",
    category: "Hatchback",
    brief: "WagonR pioneered the tall-boy design in India. The 2019 generation moved to a new platform with two engine options. Loved for its boxy practicality, it remains a top-3 seller consistently.",
    variants: ["Lxi", "Vxi", "Vxi+", "Zxi", "Zxi+", "Vxi CNG", "Zxi CNG"],
    engine_options: {
      "1.0L K10C": "998 cc, 67 PS, 89 Nm",
      "1.2L K12M": "1197 cc, 83 PS, 113 Nm",
      "CNG versions": "Available on 1.0L - ~66 km/kg"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "24.43 km/l (1.0L MT ARAI)",
    safety: "1-star Global NCAP (2023 test)",
    key_features: ["7-inch SmartPlay Studio", "Apple CarPlay / Android Auto", "Steering mounted controls", "Keyless entry", "Rear parking sensors", "Automatic climate control"],
    price_range: "Rs 5.54 lakh - Rs 7.43 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Grand i10 Nios", "Tata Tiago", "Maruti Celerio"],
    fun_facts: "WagonR is one of very few cars to have survived 25+ years with zero sales breaks in India."
  },
  "maruti swift": {
    brand: "Maruti Suzuki",
    model: "Swift",
    years_sold: "2005-present",
    category: "Hatchback",
    brief: "Swift changed the definition of a hatchback in India - sporty styling, sharp handling and an enthusiast following. The 4th generation (2024) brings a new Z-series engine and refreshed design.",
    variants: ["Lxi", "Vxi", "Vxi AMT", "Zxi", "Zxi+", "Zxi+ AMT"],
    engine_options: {
      "1.2L Z12E (2024)": "1197 cc, 82 PS, 112 Nm - new 3-cyl",
      "1.2L K12N DualJet (2021-2023)": "1197 cc, 90 PS, 113 Nm",
      "1.3L DDiS (diesel, discontinued 2020)": "1248 cc, 75 PS, 190 Nm"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "24.80 km/l (ARAI 2024 MT)",
    safety: "3-star Global NCAP (3rd gen)",
    key_features: ["9-inch SmartPlay Pro+ infotainment", "HUD (Head-Up Display) - 4th gen", "6 airbags standard", "360 camera", "ESP & Hill Hold", "LED projector headlights", "Wireless charger"],
    price_range: "Rs 6.49 lakh - Rs 9.64 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai i20", "Tata Altroz", "Toyota Glanza"],
    fun_facts: "Swift is consistently in India's top-5 monthly sales charts since its launch."
  },
  "maruti baleno": {
    brand: "Maruti Suzuki",
    model: "Baleno",
    years_sold: "2015-present",
    category: "Hatchback",
    brief: "Baleno is Maruti's premium hatchback sold via NEXA dealerships. The 2022 2nd generation brought a bold new design, updated tech and stronger safety. It's India's best-selling premium hatchback.",
    variants: ["Sigma", "Delta", "Delta AMT", "Zeta", "Zeta AMT", "Alpha", "Alpha AMT"],
    engine_options: {
      "1.2L DualJet K12N": "1197 cc, 90 PS, 113 Nm"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "22.35 km/l (MT ARAI)",
    safety: "2-star Global NCAP (2022 test)",
    key_features: ["9-inch SmartPlay Pro+ with wireless Apple CarPlay/Android Auto", "360-degree surround-view camera", "Head-Up Display", "6 airbags (Zeta/Alpha)", "Arkamys sound system", "LED headlights & DRL", "Keyless entry & push-button start", "Auto AC"],
    price_range: "Rs 6.61 lakh - Rs 9.88 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai i20", "Tata Altroz", "Toyota Glanza"],
    fun_facts: "Baleno was India's first car to be exported to Japan as Suzuki Baleno from an Indian plant."
  },
  "maruti dzire": {
    brand: "Maruti Suzuki",
    model: "Dzire",
    years_sold: "2008-present",
    category: "Sedan",
    brief: "Dzire is India's most popular compact sedan. The 4th generation (2024) rides on a new platform with a 3-cylinder engine and promises best-in-class efficiency.",
    variants: ["Lxi", "Vxi", "Vxi AMT", "Zxi", "Zxi+ AMT", "CNG variants"],
    engine_options: {
      "1.2L Z12E (2024)": "1197 cc, 82 PS, 112 Nm - 3-cyl",
      "1.2L DualJet K12N (2017-2023)": "1197 cc, 90 PS, 113 Nm"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "24.79 km/l (MT, ARAI 2024)",
    safety: "3-star Global NCAP (Older model tested)",
    key_features: ["7-inch or 9-inch SmartPlay infotainment", "Apple CarPlay / Android Auto", "Rear AC vents", "Keyless entry", "Cruise control", "6 airbags (2024 models)", "Rear armrest"],
    price_range: "Rs 6.79 lakh - Rs 9.69 lakh (ex-showroom, 2024)",
    rivals: ["Honda Amaze", "Hyundai Aura", "Tata Tigor"],
    fun_facts: "Dzire topped India's car sales chart in multiple calendar years, overtaking its hatchback stablemates."
  },
  "maruti vitara brezza": {
    brand: "Maruti Suzuki",
    model: "Brezza",
    years_sold: "2016-present",
    category: "SUV",
    brief: "Brezza single-handedly dominated the sub-4m SUV craze in India. The 2022 facelift dropped the 'Vitara' tag, added a sunroof, 6 airbags and a comprehensive feature upgrade.",
    variants: ["Lxi", "Vxi", "Zxi", "Zxi+", "Zxi+ Dual Tone"],
    engine_options: {
      "1.5L K15C DualJet": "1462 cc, 103 PS, 137 Nm",
      "CNG version": "Available on Lxi/Vxi/Zxi - ~25 km/kg"
    },
    transmission: ["5-speed MT", "6-speed AT"],
    mileage: "17.38 - 19.80 km/l (ARAI)",
    safety: "4-star Global NCAP (2018 test on older model)",
    key_features: ["9-inch SmartPlay Pro+ infotainment", "Electric Sunroof", "360 camera", "6 airbags (Zxi+)", "Wireless charging", "HUD", "Connected car technology (Suzuki Connect)"],
    price_range: "Rs 8.34 lakh - Rs 14.14 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Venue", "Tata Nexon", "Kia Sonet", "Mahindra XUV 3XO"],
    fun_facts: "Brezza was India's best-selling SUV for 3 consecutive years after its initial launch in 2016."
  },
  "maruti grand vitara": {
    brand: "Maruti Suzuki",
    model: "Grand Vitara",
    years_sold: "2022-present",
    category: "SUV",
    brief: "Grand Vitara is Maruti's mid-size SUV, co-developed with Toyota. The strong hybrid variant achieves over 27 km/l, the best mileage ever for a mid-size SUV in India.",
    variants: ["Sigma", "Delta", "Delta+", "Zeta", "Zeta+", "Alpha", "Alpha+"],
    engine_options: {
      "1.5L K15C (Mild Hybrid)": "1462 cc, 103 PS, 137 Nm",
      "1.5L Atkinson Strong Hybrid": "1490 cc, 116 PS combined system output"
    },
    transmission: ["5-speed MT", "6-speed AT", "e-CVT (Strong Hybrid)"],
    mileage: "21.11 km/l (Mild Hybrid) | 27.97 km/l (Strong Hybrid)",
    safety: "Not yet tested by Global NCAP (Built on TECT platform)",
    key_features: ["9-inch SmartPlay Pro+ with wireless Apple CarPlay/Android Auto", "Panoramic sunroof", "360 camera", "6 airbags", "Ventilated seats", "HUD", "AllGrip AWD (select variants)", "Connected car tech"],
    price_range: "Rs 10.70 lakh - Rs 19.99 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Creta", "Kia Seltos", "Honda Elevate", "Skoda Kushaq", "Volkswagen Taigun"],
    fun_facts: "The strong hybrid Grand Vitara can run on battery-only EV mode at startup and low speeds."
  },
  "maruti ertiga": {
    brand: "Maruti Suzuki",
    model: "Ertiga",
    years_sold: "2012-present",
    category: "MPV",
    brief: "Ertiga is India's most popular MPV in the value segment. Spacious 7-seat layout, car-like driving dynamics and a strong CNG option make it a family favourite.",
    variants: ["Lxi", "Vxi", "Zxi", "Zxi+", "CNG (Vxi/Zxi)"],
    engine_options: {
      "1.5L K15C DualJet": "1462 cc, 103 PS, 137 Nm",
      "CNG version": "88 PS, 121.5 Nm in CNG mode"
    },
    transmission: ["5-speed MT", "6-speed AT"],
    mileage: "20.51 km/l (Petrol MT) | 26.11 km/kg (CNG)",
    safety: "3-star Global NCAP (2019 test)",
    key_features: ["7-inch SmartPlay Studio", "Rear AC vents with 3-stage speed control", "3-row seating with slide and recline", "Dual airbags", "ABS with EBD"],
    price_range: "Rs 8.69 lakh - Rs 13.03 lakh (ex-showroom, 2024)",
    rivals: ["Kia Carens", "Toyota Rumion"],
    fun_facts: "Ertiga is a dominant player in both the private family buyer segment and the commercial taxi market."
  },
  "maruti jimny": {
    brand: "Maruti Suzuki",
    model: "Jimny",
    years_sold: "2023-present",
    category: "SUV",
    brief: "Jimny is a legendary off-roader now sold in India in a 5-door avatar. With a part-time 4WD system (AllGrip Pro) and solid ladder-frame, it's the most capable off-roader under Rs 15 lakh.",
    variants: ["Zeta MT", "Zeta AT", "Alpha MT", "Alpha AT"],
    engine_options: {
      "1.5L K15B": "1462 cc, 105 PS, 134 Nm"
    },
    transmission: ["5-speed MT", "4-speed AT"],
    mileage: "16.94 km/l (MT) | 16.39 km/l (AT)",
    safety: "Not yet rated (Euro NCAP 3-star on 3-door model)",
    key_features: ["AllGrip Pro 4WD with low-range transfer case", "9-inch infotainment with wireless CarPlay", "Hill Hold & Hill Descent Control", "Brake Limited Slip Differential (LSD)", "LED projector headlights", "Six airbags standard"],
    price_range: "Rs 12.74 lakh - Rs 14.95 lakh (ex-showroom, 2024)",
    rivals: ["Mahindra Thar", "Force Gurkha"],
    fun_facts: "Global Jimny has been produced since 1970. India was the first market to receive the 5-door version."
  },
  "maruti fronx": {
    brand: "Maruti Suzuki",
    model: "Fronx",
    years_sold: "2023-present",
    category: "SUV",
    brief: "Fronx is a coupe-styled crossover based on the Baleno platform, sold via NEXA. It brought back Maruti's 1.0L Boosterjet turbo-petrol engine with sporty dynamics.",
    variants: ["Sigma", "Delta", "Delta+", "Zeta", "Alpha"],
    engine_options: {
      "1.2L K12N DualJet (NA)": "1197 cc, 90 PS, 113 Nm",
      "1.0L K10C BoosterJet Turbo": "998 cc, 100 PS, 147.6 Nm",
      "CNG version": "Available on Sigma/Delta - ~28.5 km/kg"
    },
    transmission: ["5-speed MT", "5-speed AMT (1.2L)", "6-speed AT (1.0L Turbo)"],
    mileage: "21.79 km/l (1.2L MT) | 20.01 km/l (1.0L Turbo MT)",
    safety: "Not yet tested by Global NCAP",
    key_features: ["9-inch SmartPlay Pro+ with wireless CarPlay/Android Auto", "360 camera", "HUD (Head-up Display)", "6 airbags (Zeta/Alpha)", "Wireless charging", "LED DRLs"],
    price_range: "Rs 7.51 lakh - Rs 13.04 lakh (ex-showroom, 2024)",
    rivals: ["Toyota Taisor", "Tata Nexon", "Kia Sonet", "Hyundai Venue"],
    fun_facts: "Fronx crossed 1 lakh sales within 10 months of launch, setting a record for the fastest NEXA car to do so."
  },
  "maruti s-presso": {
    brand: "Maruti Suzuki",
    model: "S-Presso",
    years_sold: "2019-present",
    category: "Hatchback",
    brief: "S-Presso is Maruti's SUV-inspired micro hatchback - a budget alternative to conventional entry hatchbacks with a tall stance, high seating, and excellent fuel economy.",
    variants: ["Std", "LXi", "VXi", "VXi+", "VXi AMT", "CNG variants"],
    engine_options: {
      "1.0L K10C DualJet": "998 cc, 67 PS, 89 Nm",
      "CNG version": "56.7 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "24.76 - 25.30 km/l (Petrol) | 32.73 km/kg (CNG)",
    safety: "1-star (2022 updated test with dual airbags)",
    key_features: ["7-inch SmartPlay Studio", "Apple CarPlay & Android Auto", "Digital instrument cluster", "Front power windows"],
    price_range: "Rs 4.26 lakh - Rs 6.12 lakh (ex-showroom, 2024)",
    rivals: ["Renault Kwid", "Maruti Alto K10"],
    fun_facts: "S-Presso's high ground clearance of 180mm matches many compact crossovers."
  },
  "maruti celerio": {
    brand: "Maruti Suzuki",
    model: "Celerio",
    years_sold: "2014-present",
    category: "Hatchback",
    brief: "Celerio was the first mass-market car in India to introduce an Automated Manual Transmission (AMT) in 2014. The 2nd generation launched in 2021 claims outstanding petrol fuel economy.",
    variants: ["Lxi", "VXi", "ZXi", "ZXi+", "CNG VXi"],
    engine_options: {
      "1.0L K10C DualJet": "998 cc, 67 PS, 89 Nm",
      "CNG version": "56.7 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "25.24 - 26.68 km/l (Petrol ARAI) - India's most fuel-efficient petrol car",
    safety: "Not yet rated by Global NCAP",
    key_features: ["7-inch SmartPlay Studio", "Push button start/stop", "Keyless entry", "Hill hold assist"],
    price_range: "Rs 5.37 lakh - Rs 7.09 lakh (ex-showroom, 2024)",
    rivals: ["Maruti WagonR", "Tata Tiago", "Hyundai Grand i10 Nios"],
    fun_facts: "At 26.68 km/l for the VXi AMT trim, it holds the title of the most fuel-efficient petrol car in India."
  },
  "maruti ignis": {
    brand: "Maruti Suzuki",
    model: "Ignis",
    years_sold: "2017-present",
    category: "Hatchback",
    brief: "Ignis is a quirky, retro-styled urban hatchback sold via NEXA. Targeted at young buyers with distinctive design, customizable options and a punchy 1.2L engine.",
    variants: ["Sigma", "Delta", "Zeta", "Alpha"],
    engine_options: {
      "1.2L K12M Petrol": "1197 cc, 83 PS, 113 Nm"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "20.89 km/l (ARAI)",
    safety: "3-star Global NCAP (tested in 2019)",
    key_features: ["7-inch SmartPlay Studio", "LED projector headlamps with DRLs", "Quirky retro console", "Automatic climate control"],
    price_range: "Rs 5.84 lakh - Rs 8.16 lakh (ex-showroom, 2024)",
    rivals: ["Tata Tiago", "Maruti Swift"],
    fun_facts: "Ignis features distinctive 'Suzuki slots' on the C-pillar, a tribute to the classic Fronte Coupe of the 1970s."
  },

  // ---- HYUNDAI ----
  "hyundai santro": {
    brand: "Hyundai",
    model: "Santro",
    years_sold: "1998-2022",
    category: "Hatchback",
    brief: "Santro was Hyundai's debut model in India, which popularized the tall-boy hatchback design. The 2018 second-generation update added AMT and modern features before being phased out in 2022.",
    variants: ["Era", "Magna", "Sportz", "Asta", "CNG Magna/Sportz"],
    engine_options: {
      "1.1L 4-cyl Epsilon": "1086 cc, 69 PS, 99 Nm (2018-2022)",
      "CNG version": "59 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "20.3 km/l (Petrol MT) | 30.48 km/kg (CNG)",
    safety: "2-star Global NCAP (2019 test)",
    key_features: ["Rear AC vents", "7-inch touchscreen infotainment", "Reverse parking camera", "Android Auto & Apple CarPlay"],
    price_range: "Rs 4.90 lakh - Rs 6.42 lakh (retail prices before discontinuation)",
    rivals: ["Maruti WagonR", "Tata Tiago", "Maruti Celerio"],
    fun_facts: "The original Santro's promotional campaign starring Shah Rukh Khan is legendary in Indian marketing history."
  },
  "hyundai i10": {
    brand: "Hyundai",
    model: "Grand i10 Nios",
    years_sold: "2007-present",
    category: "Hatchback",
    brief: "The i10 line evolved from the original i10 to the Grand i10, and is currently sold as the Grand i10 Nios. It represents Hyundai's premium hatch experience in a compact size.",
    variants: ["Era", "Magna", "Sportz", "Asta", "CNG Magna/Sportz"],
    engine_options: {
      "1.2L Kappa Dual VTVT": "1197 cc, 83 PS, 114 Nm",
      "CNG version": "69 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "20.7 km/l (Petrol MT) | 27.3 km/kg (CNG)",
    safety: "2-star Global NCAP (2020 test)",
    key_features: ["8-inch touchscreen with Apple CarPlay/Android Auto", "6 Airbags standard (2023+)", "Wireless phone charger", "Rear AC vents", "Automatic headlamps"],
    price_range: "Rs 5.92 lakh - Rs 8.56 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Swift", "Tata Tiago", "Maruti Ignis"],
    fun_facts: "The Grand i10 won the prestigious Indian Car of the Year (ICOTY) award in 2014."
  },
  "hyundai i20": {
    brand: "Hyundai",
    model: "i20",
    years_sold: "2008-present",
    category: "Hatchback",
    brief: "i20 is India's premium hatchback icon. The current 3rd generation brings sharp European design, class-leading electronics, and dynamic handling along with a performance-focused N-Line variant.",
    variants: ["Era", "Magna", "Sportz", "Asta", "Asta (O)", "i20 N Line"],
    engine_options: {
      "1.2L Kappa Petrol": "1197 cc, 83 PS, 114 Nm (MT) | 88 PS (IVT)",
      "1.0L T-GDi Turbo Petrol": "998 cc, 120 PS, 172 Nm"
    },
    transmission: ["5-speed MT", "IVT (CVT)", "7-speed DCT (Turbo)"],
    mileage: "19.65 km/l (1.2L MT) | 20.0 km/l (1.0L Turbo)",
    safety: "3-star Global NCAP (2021 test)",
    key_features: ["10.25-inch touchscreen with Bose 7-speaker system", "Electric sunroof", "6 Airbags standard", "Electronic Stability Control (ESC)", "Wireless charging"],
    price_range: "Rs 7.04 lakh - Rs 11.21 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Baleno", "Tata Altroz", "Toyota Glanza"],
    fun_facts: "The i20 popularized premium hatchbacks in India when small cars were strictly viewed as budget-only options."
  },
  "hyundai creta": {
    brand: "Hyundai",
    model: "Creta",
    years_sold: "2015-present",
    category: "SUV",
    brief: "Creta is the undisputed king of India's mid-size SUV segment. The heavily updated 2024 version brings a major design refresh, a high-tech twin-screen dashboard, and level 2 ADAS features.",
    variants: ["E", "EX", "S", "S(O)", "SX", "SX Tech", "SX(O)"],
    engine_options: {
      "1.5L MPi Petrol": "1497 cc, 115 PS, 144 Nm",
      "1.5L CRDi Diesel": "1493 cc, 116 PS, 250 Nm",
      "1.5L Turbo GDi Petrol": "1482 cc, 160 PS, 253 Nm"
    },
    transmission: ["6-speed MT", "IVT (CVT)", "6-speed AT (Diesel)", "7-speed DCT (Turbo)"],
    mileage: "17.4 km/l (Petrol) | 21.8 km/l (Diesel)",
    safety: "Not yet tested (Facelift model has reinforced chassis)",
    key_features: ["10.25-inch dual screens (Infotainment & Cluster)", "Level 2 ADAS (19 features)", "Panoramic sunroof", "Ventilated front seats", "Bose 8-speaker sound system", "360-degree camera"],
    price_range: "Rs 11.00 lakh - Rs 20.15 lakh (ex-showroom, 2024)",
    rivals: ["Kia Seltos", "Maruti Grand Vitara", "Toyota Hyryder", "Honda Elevate"],
    fun_facts: "The Creta nameplate crossed 10 lakh cumulative sales in India in 2024, holding the segment lead for nearly a decade."
  },
  "hyundai venue": {
    brand: "Hyundai",
    model: "Venue",
    years_sold: "2019-present",
    category: "SUV",
    brief: "Venue was India's first sub-4m SUV to offer integrated e-SIM based connected car features. The 2022 facelift added an aggressive dark-chrome grille and refreshed tech.",
    variants: ["E", "S", "S(O)", "SX", "SX(O)", "Venue N Line"],
    engine_options: {
      "1.2L Kappa Petrol": "1197 cc, 83 PS, 114 Nm",
      "1.0L T-GDi Turbo Petrol": "998 cc, 120 PS, 172 Nm",
      "1.5L CRDi Diesel": "1493 cc, 116 PS, 250 Nm"
    },
    transmission: ["5-speed MT", "6-speed MT (Diesel)", "6-speed iMT", "7-speed DCT"],
    mileage: "17.5 km/l (Petrol) | 23.4 km/l (Diesel)",
    safety: "3-star Global NCAP (2021 test)",
    key_features: ["8-inch touchscreen with Bluelink tech", "Electric sunroof", "Level 1 ADAS (on top variants)", "4-way power driver seat", "Dashcam with dual camera"],
    price_range: "Rs 7.94 lakh - Rs 13.48 lakh (ex-showroom, 2024)",
    rivals: ["Tata Nexon", "Maruti Brezza", "Kia Sonet", "Mahindra XUV 3XO"],
    fun_facts: "Venue introduced the Intelligent Manual Transmission (iMT) to India, which eliminates the clutch pedal while keeping manual gears."
  },
  "hyundai verna": {
    brand: "Hyundai",
    model: "Verna",
    years_sold: "2006-present",
    category: "Sedan",
    brief: "Verna has been a premium mid-size sedan contender for nearly 20 years. The 6th generation (2023) is a futuristic fastback design that is wider, longer and features class-leading rear legroom and performance.",
    variants: ["EX", "S", "SX", "SX(O)", "SX(O) Turbo"],
    engine_options: {
      "1.5L MPi Petrol": "1497 cc, 115 PS, 144 Nm",
      "1.5L Turbo GDi Petrol": "1482 cc, 160 PS, 253 Nm"
    },
    transmission: ["6-speed MT", "IVT (CVT)", "7-speed DCT (Turbo)"],
    mileage: "18.60 - 20.60 km/l (ARAI)",
    safety: "5-star Global NCAP (2023 test, adult & child)",
    key_features: ["10.25-inch integrated display screen", "Level 2 ADAS", "Switchable climate & infotainment controller", "Heated and ventilated seats", "Electric sunroof", "Bose 8-speaker audio system", "6 Airbags standard"],
    price_range: "Rs 11.00 lakh - Rs 17.42 lakh (ex-showroom, 2024)",
    rivals: ["Honda City", "Skoda Slavia", "Volkswagen Virtus"],
    fun_facts: "The 2023 Verna was the first made-in-India Hyundai sedan to score a perfect 5-star safety rating at Global NCAP."
  },
  "hyundai exter": {
    brand: "Hyundai",
    model: "Exter",
    years_sold: "2023-present",
    category: "SUV",
    brief: "Exter is Hyundai's entry-level micro-SUV, positioned under the Venue. Designed with boxy styling, heavy plastic cladding, and good ground clearance, it aims directly at the Tata Punch market.",
    variants: ["EX", "S", "SX", "SX(O)", "SX(O) Connect", "CNG S/SX"],
    engine_options: {
      "1.2L Kappa VTVT Petrol": "1197 cc, 83 PS, 114 Nm",
      "CNG version": "69 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "19.4 km/l (MT) | 19.2 km/l (AMT) | 27.1 km/kg (CNG)",
    safety: "Not yet rated (6 airbags standard)",
    key_features: ["Electric sunroof", "Built-in dual-camera dashcam", "8-inch touchscreen with regional navigation", "Digital cluster with 4.2-inch MID", "Hill start assist control"],
    price_range: "Rs 6.13 lakh - Rs 10.28 lakh (ex-showroom, 2024)",
    rivals: ["Tata Punch", "Maruti Ignis", "Renault Kiger"],
    fun_facts: "Exter is the first car in its micro-SUV segment to offer six airbags as a standard safety feature across all trims."
  },
  "hyundai ioniq 5": {
    brand: "Hyundai",
    model: "Ioniq 5",
    years_sold: "2023-present",
    category: "Electric",
    brief: "Ioniq 5 is Hyundai's flagship EV in India, locally assembled at their Chennai plant. Built on the dedicated E-GMP electric architecture, it features retro-futuristic styling and ultra-fast 800V charging capability.",
    variants: ["Long Range RWD"],
    engine_options: {
      "72.6 kWh Battery & Motor": "217 PS, 350 Nm, Rear-Wheel Drive"
    },
    transmission: ["Single-Speed Reduction Gearbox"],
    mileage: "631 km per charge (ARAI certified)",
    safety: "5-star Euro NCAP (2021 test)",
    key_features: ["800V fast charging (10-80% in 18 mins with 350kW DC)", "Vehicle-to-Load (V2L) capability inside & out", "Sliding center console (Universal Island)", "Eco-processed leather upholstery", "Level 2 ADAS (21 features)", "Bose 8-speaker system"],
    price_range: "Rs 46.05 lakh (ex-showroom, 2024)",
    rivals: ["Kia EV6", "Volvo XC40 Recharge", "BYD Seal"],
    fun_facts: "Ioniq 5 won World Car of the Year, World EV of the Year, and World Car Design of the Year in 2022."
  },
  "hyundai aura": {
    brand: "Hyundai",
    model: "Aura",
    years_sold: "2020-present",
    category: "Sedan",
    brief: "Aura is Hyundai's sub-4m compact sedan, replacing the Xcent. Known for premium interiors and a refined engine lineup, it received a facelift in 2023.",
    variants: ["E", "S", "SX", "SX(O)", "CNG S/SX"],
    engine_options: {
      "1.2L Kappa Petrol": "1197 cc, 83 PS, 114 Nm",
      "CNG version": "69 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "20.5 km/l (Petrol MT) | 27.2 km/kg (CNG)",
    safety: "Not formally rated (built on Nios platform)",
    key_features: ["8-inch touchscreen display", "Wireless phone charger", "6 airbags standard (Asta)", "Reverse camera"],
    price_range: "Rs 6.49 lakh - Rs 9.05 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Dzire", "Honda Amaze", "Tata Tigor"],
    fun_facts: "The Aura was one of the very few compact sub-4m sedans in India to offer a factory-fitted CNG option directly on mid-trims."
  },

  // ---- TATA MOTORS ----
  "tata indica": {
    brand: "Tata Motors",
    model: "Indica",
    years_sold: "1998-2018",
    category: "Hatchback",
    brief: "Indica was India's first fully indigenous passenger car, designed and developed entirely in India. It offered diesel-car fuel economy at hatchback prices, making it an absolute revolution and a taxi fleet favorite.",
    variants: ["LE", "LS", "LXi", "DL", "DLS", "DLX", "Indica Vista"],
    engine_options: {
      "1.4L DL (Diesel)": "1405 cc, 53.5 PS, 85 Nm (Old gen)",
      "1.4L Dicor Diesel": "1396 cc, 70 PS, 140 Nm",
      "1.3L Quadrajet Diesel (Vista)": "1248 cc Fiat-sourced, 75 PS"
    },
    transmission: ["5-speed MT"],
    mileage: "17.2 - 22.3 km/l (Diesel)",
    safety: "Not rated by NCAP",
    key_features: ["Unmatched rear legroom and headroom", "Heavy-duty rugged suspension", "Power windows (top variants)"],
    price_range: "Rs 2.80 lakh - Rs 5.50 lakh (retail before discontinuation)",
    rivals: ["Maruti Zen", "Hyundai Santro"],
    fun_facts: "Ratan Tata famously presented the Indica at the 1998 Geneva Motor Show to critical acclaim."
  },
  "tata nano": {
    brand: "Tata Motors",
    model: "Nano",
    years_sold: "2009-2018",
    category: "Hatchback",
    brief: "Nano was conceptualized by Ratan Tata as 'the world's cheapest car' at Rs 1 Lakh, designed to transition Indian families from two-wheelers to the safety of a car. Despite commercial struggles, it remains a brilliant piece of packaging and engineering.",
    variants: ["Standard", "CX", "LX", "Twist", "Nano GenX (AMT)"],
    engine_options: {
      "624 cc 2-cyl Petrol": "624 cc, 38 PS, 51 Nm (Rear-engine, RWD)"
    },
    transmission: ["4-speed MT", "5-speed AMT (GenX)"],
    mileage: "23.6 - 25.3 km/l",
    safety: "0-star Global NCAP (2014 test)",
    key_features: ["Rear-engine rear-wheel-drive layout", "Incredibly compact footprint with high seating", "Openable tailgate (GenX)", "Power steering"],
    price_range: "Rs 1.00 lakh - Rs 3.20 lakh (retail before discontinuation)",
    rivals: ["Maruti 800", "Maruti Alto"],
    fun_facts: "To save costs, early Nanos had only one windshield wiper, three wheel lug nuts, and no external fuel filler cap."
  },
  "tata nexon": {
    brand: "Tata Motors",
    model: "Nexon",
    years_sold: "2017-present",
    category: "SUV",
    brief: "Nexon is Tata's best-selling compact SUV and a historic milestone for Indian automotive design. The major 2023 facelift added a futuristic design with sequential LED lights, a touch-based console, and standard safety features.",
    variants: ["Smart", "Pure", "Creative", "Fearless", "Fearless+ S", "Fearless+ Dark"],
    engine_options: {
      "1.2L Turbo Revotron Petrol": "1199 cc, 120 PS, 170 Nm",
      "1.5L Turbo Revotorq Diesel": "1497 cc, 115 PS, 260 Nm"
    },
    transmission: ["5-speed MT", "6-speed MT", "6-speed AMT", "7-speed DCA (DCT)"],
    mileage: "17.01 km/l (Petrol) | 23.23 km/l (Diesel)",
    safety: "5-star Global NCAP (Tested in both 2018 and 2024 tests)",
    key_features: ["10.25-inch touchscreen with wireless CarPlay", "10.25-inch virtual instrument cluster", "360-degree surround view camera", "Voice sunroof", "Ventilated front seats", "6 Airbags standard"],
    price_range: "Rs 8.15 lakh - Rs 15.60 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Brezza", "Hyundai Venue", "Kia Sonet", "Mahindra XUV 3XO"],
    fun_facts: "In 2018, the Nexon became the first-ever made-in-India car to secure a 5-star adult occupant rating from Global NCAP."
  },
  "tata nexon ev": {
    brand: "Tata Motors",
    model: "Nexon EV",
    years_sold: "2020-present",
    category: "Electric",
    brief: "Nexon EV is the undisputed leader of India's passenger electric vehicle market. Redesigned in late 2023, it offers longer real-world range, paddle shifters for regeneration, and vehicle-to-load capabilities.",
    variants: ["Creative+", "Fearless", "Fearless+", "Accomplished", "Empowered (LR)"],
    engine_options: {
      "Medium Range (30 kWh)": "129 PS, 215 Nm - 325 km range",
      "Long Range (40.5 kWh)": "145 PS, 215 Nm - 465 km range"
    },
    transmission: ["Single-Speed Automatic"],
    mileage: "325 km (MR) | 465 km (LR) per charge",
    safety: "5-star Bharat NCAP (2024 test)",
    key_features: ["12.3-inch cinematic touchscreen by Harman", "9-speaker JBL cinematic sound system", "Vehicle-to-Vehicle (V2V) and Vehicle-to-Load (V2L) support", "Blind-spot view monitor", "Electronic parking brake with Auto Hold"],
    price_range: "Rs 14.49 lakh - Rs 19.29 lakh (ex-showroom, 2024)",
    rivals: ["Mahindra XUV400 EV", "MG ZS EV", "Tata Punch EV"],
    fun_facts: "Nexon EV holds over 65% of the cumulative electric passenger car sales in India since 2020."
  },
  "tata harrier": {
    brand: "Tata Motors",
    model: "Harrier",
    years_sold: "2019-present",
    category: "SUV",
    brief: "Harrier is a premium mid-size SUV built on the OMEGA-Arc platform (derived from Jaguar Land Rover's D8 architecture). The late 2023 facelift brought extreme road presence, advanced ADAS, and luxury-segment interiors.",
    variants: ["Smart", "Pure", "Adventure", "Creative", "Fearless", "Fearless+ (ADAS)"],
    engine_options: {
      "2.0L Kryotec Diesel": "1956 cc, 170 PS, 350 Nm (Fiat-sourced)"
    },
    transmission: ["6-speed MT", "6-speed AT (Hyundai-sourced)"],
    mileage: "16.80 km/l (MT) | 14.60 km/l (AT)",
    safety: "5-star Global NCAP (2023 updated test - highest score for Indian cars)",
    key_features: ["12.3-inch central touchscreen & 10.25-inch driver display", "Level 2 ADAS (11 features)", "JBL 10-speaker system", "Gesture power tailgate", "Dual-zone auto AC", "Panoramic sunroof", "7 Airbags"],
    price_range: "Rs 15.49 lakh - Rs 26.44 lakh (ex-showroom, 2024)",
    rivals: ["Mahindra XUV700", "MG Hector", "Jeep Compass"],
    fun_facts: "The OMEGA-Arc platform replaces structural steel parts with high-strength steel and structural adhesives, direct JLR design DNA."
  },
  "tata safari": {
    brand: "Tata Motors",
    model: "Safari",
    years_sold: "1998-present",
    category: "SUV",
    brief: "Safari was India's first luxury 4x4 SUV (1998). The nameplate was resurrected in 2021 as a 3-row 6/7-seater version of the Tata Harrier. A massive 2023 facelift updated safety, styling, and comfort.",
    variants: ["Smart", "Pure", "Adventure", "Accomplished", "Accomplished+ (ADAS)"],
    engine_options: {
      "2.0L Kryotec Diesel": "1956 cc, 170 PS, 350 Nm"
    },
    transmission: ["6-speed MT", "6-speed AT"],
    mileage: "16.30 km/l (MT) | 14.50 km/l (AT)",
    safety: "5-star Global NCAP (2023 test - tied with Harrier)",
    key_features: ["6 or 7-seater configurations with 2nd-row ventilated captain seats", "12.3-inch touchscreen & JBL 10-speaker sound", "Level 2 ADAS", "Dual-pane panoramic sunroof", "Ventilated seats in 1st & 2nd rows", "Voice-assisted ambient lighting"],
    price_range: "Rs 16.19 lakh - Rs 27.34 lakh (ex-showroom, 2024)",
    rivals: ["Mahindra XUV700", "MG Hector Plus", "Hyundai Alcazar", "Toyota Innova Hycross"],
    fun_facts: "The original 1998 Safari was famous for its 'Reclaim Your Life' ads and was widely used by VVIP state convocations."
  },
  "tata altroz": {
    brand: "Tata Motors",
    model: "Altroz",
    years_sold: "2020-present",
    category: "Hatchback",
    brief: "Altroz is Tata's premium hatchback designed to compete with the Baleno and i20. It is celebrated for solid build quality, 90-degree opening doors, and an innovative twin-cylinder factory CNG setup.",
    variants: ["XE", "XM", "XM+", "XT", "XZ", "XZ+ (O) S", "Racer"],
    engine_options: {
      "1.2L Revotron Petrol": "1199 cc, 86 PS, 113 Nm",
      "1.2L i-CNG Twin Cylinder": "73.5 PS, 103 Nm in CNG mode",
      "1.2L Turbo Petrol (Racer)": "1199 cc, 120 PS, 170 Nm",
      "1.5L Revotorq Diesel": "1497 cc, 90 PS, 200 Nm"
    },
    transmission: ["5-speed MT", "6-speed DCA (DCT)", "6-speed MT (Racer)"],
    mileage: "19.3 km/l (Petrol MT) | 23.6 km/l (Diesel MT) | 26.2 km/kg (CNG)",
    safety: "5-star Global NCAP (2020 test, first in segment)",
    key_features: ["10.25-inch infotainment screen (Racer)", "Twin-cylinder CNG technology", "90-degree opening side doors", "Harman sound system", "Electric sunroof"],
    price_range: "Rs 6.60 lakh - Rs 10.99 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Baleno", "Hyundai i20", "Toyota Glanza"],
    fun_facts: "Altroz's 'i-CNG' split the single bulky CNG cylinder into two smaller tanks nestled under the boot floor, saving the entire trunk area."
  },
  "tata punch": {
    brand: "Tata Motors",
    model: "Punch",
    years_sold: "2021-present",
    category: "SUV",
    brief: "Punch created and dominated the micro-SUV segment in India. Combining compact dimensions with an aggressive SUV stance, high ground clearance, and top-tier safety ratings, it became India's best-selling car model in early 2024.",
    variants: ["Pure", "Adventure", "Accomplished", "Creative", "CNG variants"],
    engine_options: {
      "1.2L Revotron Petrol": "1199 cc, 86 PS, 113 Nm",
      "CNG version": "73.5 PS in CNG mode"
    },
    transmission: ["5-speed MT", "5-speed AMT"],
    mileage: "20.09 km/l (Petrol MT) | 26.99 km/kg (CNG)",
    safety: "5-star Global NCAP (2021 test)",
    key_features: ["7-inch Harman infotainment screen", "Twin-cylinder CNG boot layout", "187mm ground clearance", "Traction Pro mode (AMT)", "Rear armrest"],
    price_range: "Rs 6.13 lakh - Rs 10.20 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Exter", "Maruti Ignis", "Renault Kiger"],
    fun_facts: "Despite its diminutive sub-4 meter size, it offers a high water wading depth of 370mm."
  },
  "tata tiago": {
    brand: "Tata Motors",
    model: "Tiago",
    years_sold: "2016-present",
    category: "Hatchback",
    brief: "Tiago marked Tata's design renaissance with the Impact design language. Highly successful, it offers a robust build, excellent safety for the budget, and is available in Petrol, CNG, and fully Electric versions.",
    variants: ["XE", "XM", "XT", "XZ", "XZ+"],
    engine_options: {
      "1.2L Revotron Petrol": "1199 cc, 86 PS, 113 Nm",
      "CNG version": "73.5 PS in CNG mode",
      "Tiago EV (19.2 kWh / 24 kWh)": "Electric motor with 61 PS / 75 PS"
    },
    transmission: ["5-speed MT", "5-speed AMT", "Single-speed Auto (EV)"],
    mileage: "19.01 km/l (Petrol) | 26.49 km/kg (CNG) | 250-315 km range (EV)",
    safety: "4-star Global NCAP (2020 test)",
    key_features: ["8-speaker Harman sound system", "Digital instrument display", "Rear parking camera", "Automatic climate control"],
    price_range: "Rs 5.65 lakh - Rs 8.90 lakh | EV from Rs 7.99 - Rs 11.89 lakh (ex-showroom, 2024)",
    rivals: ["Maruti WagonR", "Maruti Celerio", "Hyundai Grand i10 Nios"],
    fun_facts: "The Tiago was originally named the 'Zica' (Zippy Car), but Tata rebranded it just before launch due to the global outbreak of the Zika virus."
  },
  "tata tigor": {
    brand: "Tata Motors",
    model: "Tigor",
    years_sold: "2017-present",
    category: "Sedan",
    brief: "Tigor is the compact sedan sibling of the Tiago. Tata calls it a 'styleback' due to its coupe-like sloping roofline. Features excellent boot hinges and safety.",
    variants: ["XE", "XM", "XT", "XZ", "XZ+"],
    engine_options: {
      "1.2L Revotron Petrol": "1199 cc, 86 PS, 113 Nm",
      "CNG version": "73.5 PS in CNG mode",
      "Tigor EV (26 kWh)": "Electric motor with 75 PS, 170 Nm"
    },
    transmission: ["5-speed MT", "5-speed AMT", "Single-speed Auto (EV)"],
    mileage: "19.2 km/l (Petrol) | 26.4 km/kg (CNG) | 315 km range (EV)",
    safety: "4-star Global NCAP (2020 test)",
    key_features: ["Coupe-styled fastback boot integration", "8-speaker Harman audio system", "Projector headlamps", "Automatic climate control"],
    price_range: "Rs 6.30 lakh - Rs 9.55 lakh | EV from Rs 12.49 - Rs 13.75 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Dzire", "Honda Amaze", "Hyundai Aura"],
    fun_facts: "Tigor EV was the first electric car cleared for purchase under the Indian Government's EESL national fleet acquisition program."
  },
  "tata curvv": {
    brand: "Tata Motors",
    model: "Curvv",
    years_sold: "2024-present",
    category: "SUV",
    brief: "Curvv is Tata's bold entry into the mid-size coupe-SUV space. Built with a striking sloping roofline and high stance, it launched in mid-2024 as an EV first followed closely by new direct-injection turbo-petrol and diesel engines.",
    variants: ["Smart", "Pure", "Creative", "Accomplished", "Empowered (EV)"],
    engine_options: {
      "1.2L GDi Turbo Petrol": "125 PS, 225 Nm",
      "1.5L Kryojet Diesel": "120 PS, 260 Nm",
      "Curvv EV (45 kWh / 55 kWh)": "150 PS / 167 PS liquid-cooled PMSM motor"
    },
    transmission: ["6-speed MT", "7-speed DCA (DCT)", "Single-Speed (EV)"],
    mileage: "~18.0 km/l (Petrol est.) | 502-585 km range (EV ARAI)",
    safety: "5-star Bharat NCAP (2024 EV test)",
    key_features: ["Sloping fastback coupe design", "12.3-inch cinematic touchscreen by Harman", "Level 2 ADAS suite", "Panoramic sunroof", "Flush door handles", "V2L and V2V charging support"],
    price_range: "Rs 10.00 lakh - Rs 18.00 lakh | EV from Rs 17.49 - Rs 21.99 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Creta", "Kia Seltos", "Maruti Grand Vitara", "Citroen Basalt"],
    fun_facts: "The Curvv EV is the first vehicle built on Tata's new 'activa.ev' dedicated electric architecture, which supports multi-drive options."
  },

  // ---- MAHINDRA ----
  "mahindra scorpio": {
    brand: "Mahindra",
    model: "Scorpio",
    years_sold: "2002-present",
    category: "SUV",
    brief: "Scorpio is Mahindra's legendary rugged SUV. In 2022, the lineup was split into the Scorpio Classic (the original ladder-frame workhorse) and the Scorpio N (a sophisticated, massive D-segment luxury SUV called 'the Big Daddy of SUVs').",
    variants: ["Classic: S, S11", "Scorpio N: Z2, Z4, Z6, Z8, Z8 L"],
    engine_options: {
      "2.2L mHawk Diesel (Classic)": "2184 cc, 132 PS, 300 Nm",
      "2.2L mHawk Diesel (Scorpio N)": "132 PS (Z2/Z4) | 175 PS (Z6/Z8/Z8L)",
      "2.0L mStallion Turbo Petrol (Scorpio N)": "1997 cc, 203 PS, 380 Nm"
    },
    transmission: ["6-speed MT", "6-speed AT (Scorpio N)"],
    mileage: "12.0 - 15.4 km/l",
    safety: "5-star Global NCAP (Scorpio N, 2022 test)",
    key_features: ["4XPLOR 4WD system with terrain modes (Scorpio N)", "Frequency Selective Damping (FSD)", "AdrenoX connected car tech with 8-inch screen", "12-speaker Sony Audio (Z8L)", "Electric Sunroof", "Commanding tall driving position"],
    price_range: "Rs 13.62 - Rs 17.42 lakh (Classic) | Rs 13.85 - Rs 24.54 lakh (Scorpio N)",
    rivals: ["Tata Safari", "Toyota Fortuner", "Hyundai Creta"],
    fun_facts: "The Scorpio N set an Indian record by receiving over 100,000 bookings within just 30 minutes of reservation opening in July 2022."
  },
  "mahindra bolero": {
    brand: "Mahindra",
    model: "Bolero",
    years_sold: "2000-present",
    category: "SUV",
    brief: "Bolero is the ultimate rugged workhorse of rural and semi-urban India. Built with metal bumpers, an indestructible ladder frame, and utility-first design, it remains a top-seller for Mahindra. The 'Bolero Neo' (2021) adds a TUV300-based modern spin.",
    variants: ["B4", "B6", "B6 (O)", "Bolero Neo (N4, N8, N10, N10 Option)"],
    engine_options: {
      "1.5L mHawk75 Diesel": "1493 cc, 76 PS, 210 Nm (Classic)",
      "1.5L mHawk100 Diesel": "1493 cc, 100 PS, 260 Nm (Neo)"
    },
    transmission: ["5-speed MT"],
    mileage: "16.0 km/l (Classic) | 17.2 km/l (Neo)",
    safety: "Not rated by NCAP",
    key_features: ["Indestructible sheet-metal body panels", "7-seater side-facing rear jump seats", "Mechanical locking differential (Neo N10 O)", "Digital instrument readout"],
    price_range: "Rs 9.79 - Rs 10.91 lakh | Neo from Rs 9.90 - Rs 12.15 lakh (ex-showroom, 2024)",
    rivals: ["Force Gurkha"],
    fun_facts: "Bolero has survived multiple crash and emission regulatory changes over 2.5 decades by receiving engine downsizings and soft-nose front additions."
  },
  "mahindra xuv500": {
    brand: "Mahindra",
    model: "XUV500",
    years_sold: "2011-2021",
    category: "SUV",
    brief: "XUV500 was Mahindra's first monocoque global SUV. Inspired by the cheetah, it brought jaw-dropping luxury features (leather dashboard, ambient light, AWD) to a mass-market price point. Replaced by the XUV700 in 2021.",
    variants: ["W4", "W6", "W8", "W10", "W11 Option"],
    engine_options: {
      "2.2L mHawk Turbo Diesel": "2179 cc, 155 PS, 360 Nm"
    },
    transmission: ["6-speed MT", "6-speed AT"],
    mileage: "15.1 km/l (MT)",
    safety: "4-star Australia NCAP (2012 test)",
    key_features: ["Cheetah paw door handles", "7-seater with dual-tone lounge interiors", "AWD option", "Electric sunroof", "Static bending projector lamps"],
    price_range: "Rs 12.00 lakh - Rs 20.00 lakh (historical prices)",
    rivals: ["Tata Safari Storme", "Tata Hexa", "Hyundai Creta"],
    fun_facts: "The XUV500 was designed fully in-house by Mahindra and was exported heavily to South Africa, Europe, and Australia."
  },
  "mahindra xuv700": {
    brand: "Mahindra",
    model: "XUV700",
    years_sold: "2021-present",
    category: "SUV",
    brief: "XUV700 replaced the XUV500 as Mahindra's flagship family SUV. It took the market by storm with class-leading performance, dual-screen layout, flush door handles, and advanced Level 2 ADAS.",
    variants: ["MX", "AX3", "AX5", "AX7", "AX7 Luxury (AX7 L)"],
    engine_options: {
      "2.0L mStallion Turbo Petrol": "1997 cc, 200 PS, 380 Nm",
      "2.2L mHawk Turbo Diesel": "2184 cc, 155 PS (MX) | 185 PS, 420 Nm (AX)"
    },
    transmission: ["6-speed MT", "6-speed AT"],
    mileage: "13.0 km/l (Petrol) | 16.5 km/l (Diesel)",
    safety: "5-star Global NCAP (2021 test)",
    key_features: ["Dual 10.25-inch screens (AdrenoX interface)", "Level 2 ADAS with Adaptive Cruise Control", "Smart flush door handles", "Sony 3D 12-speaker sound system", "Panoramic sunroof (Skyroof)", "AWD (select diesel variants)", "7 Airbags"],
    price_range: "Rs 13.99 lakh - Rs 26.99 lakh (ex-showroom, 2024)",
    rivals: ["Tata Safari", "Tata Harrier", "MG Hector Plus"],
    fun_facts: "The XUV700 is the first mass-market Indian vehicle to offer customized voice alerts for speed warnings (recorded in the voice of your loved ones)."
  },
  "mahindra thar": {
    brand: "Mahindra",
    model: "Thar",
    years_sold: "2010-present",
    category: "SUV",
    brief: "Thar is India's ultimate lifestyle off-roader. The 2020 second generation transformed it from a barebones utility vehicle into a highly desirable, daily-drivable machine with automatic options, safety tech, and iconic retro looks. A 5-door version (Thar Roxx) launched in 2024.",
    variants: ["AX Opt", "LX", "RWD variants", "Thar Roxx (5-Door)"],
    engine_options: {
      "2.0L mStallion Turbo Petrol": "1997 cc, 150 PS, 300 Nm (MT) | 320 Nm (AT)",
      "2.2L mHawk Diesel": "2184 cc, 130 PS, 300 Nm",
      "1.5L D117 Diesel (RWD)": "1497 cc, 118 PS, 300 Nm"
    },
    transmission: ["6-speed MT", "6-speed AT"],
    mileage: "11.5 - 15.2 km/l",
    safety: "4-star Global NCAP (2020 test)",
    key_features: ["Mechanical locking differential & 4WD low range", "Removable hardtop / convertible soft-top", "7-inch drizzle-resistant touchscreen", "Washable interior flooring with drain plugs", "Roof-mounted speakers", "18-inch deep-tread alloy wheels"],
    price_range: "Rs 11.35 lakh - Rs 17.60 lakh | Thar Roxx up to Rs 22.49 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Jimny", "Force Gurkha"],
    fun_facts: "The budget Rear-Wheel Drive (RWD) 1.5L diesel variant launched in 2023 qualifies for the lower tax bracket, causing waiting periods to stretch beyond one year."
  },

  // ---- KIA ----
  "kia seltos": {
    brand: "Kia",
    model: "Seltos",
    years_sold: "2019-present",
    category: "SUV",
    brief: "Seltos was Kia's grand entry model in India. It shares its platform with the Creta but appeals to buyers wanting aggressive styling, sportier suspension setup, and cutting-edge gadgets. Facilitated with a major ADAS facelift in 2023.",
    variants: ["HTE", "HTK", "HTK+", "HTX", "HTX+", "GTX+", "X-Line"],
    engine_options: {
      "1.5L Smartstream Petrol": "1497 cc, 115 PS, 144 Nm",
      "1.5L CRDi VGT Diesel": "1493 cc, 116 PS, 250 Nm",
      "1.5L Turbo GDi Petrol": "1482 cc, 160 PS, 253 Nm"
    },
    transmission: ["6-speed MT", "6-speed iMT", "IVT (CVT)", "6-speed AT (Diesel)", "7-speed DCT (Turbo)"],
    mileage: "17.0 - 20.7 km/l (ARAI)",
    safety: "3-star Global NCAP (2020 test)",
    key_features: ["Dual 10.25-inch curved screens", "Level 2 ADAS (17 features)", "Bose 8-speaker audio with dynamic light show", "Dual-pane panoramic sunroof", "Ventilated front seats", "360 camera & blind-view monitor"],
    price_range: "Rs 10.90 lakh - Rs 20.35 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Creta", "Maruti Grand Vitara", "Honda Elevate"],
    fun_facts: "Kia's Anantapur plant in Andhra Pradesh was built from scratch in record time to launch the Seltos globally."
  },
  "kia sonet": {
    brand: "Kia",
    model: "Sonet",
    years_sold: "2020-present",
    category: "SUV",
    brief: "Sonet is a premium sub-4m compact SUV loaded with big-car features. Receiving a substantial facelift in early 2024, it gained Level 1 ADAS, bold new LED lighting, and standard disc brakes.",
    variants: ["HTE", "HTK", "HTK+", "HTX", "HTX+", "GTX+", "X-Line"],
    engine_options: {
      "1.2L Smartstream Petrol (NA)": "1197 cc, 83 PS, 115 Nm",
      "1.0L Turbo GDi Petrol": "998 cc, 120 PS, 172 Nm",
      "1.5L CRDi Diesel": "1493 cc, 116 PS, 250 Nm"
    },
    transmission: ["5-speed MT", "6-speed MT (Diesel)", "6-speed iMT", "7-speed DCT", "6-speed AT (Diesel)"],
    mileage: "18.2 km/l (Petrol) | 22.3 km/l (Diesel)",
    safety: "Not rated formally (6 airbags standard)",
    key_features: ["10.25-inch infotainment & cluster screens", "Level 1 ADAS (10 features)", "Ventilated front seats", "Bose premium 7-speaker system", "Electric sunroof", "LED bar tail lamps"],
    price_range: "Rs 7.99 lakh - Rs 15.69 lakh (ex-showroom, 2024)",
    rivals: ["Tata Nexon", "Maruti Brezza", "Hyundai Venue", "Mahindra XUV 3XO"],
    fun_facts: "The Sonet is exported from India to over 70 countries globally, including Middle Eastern and Latin American markets."
  },

  // ---- TOYOTA ----
  "toyota fortuner": {
    brand: "Toyota",
    model: "Fortuner",
    years_sold: "2009-present",
    category: "SUV",
    brief: "Fortuner is the absolute king of full-size premium body-on-frame SUVs in India. Reputed for bulletproof reliability, immense road presence, and incredible resale value, it commands a near-monopoly in its segment.",
    variants: ["Standard 4x2", "Standard 4x4", "Legender", "GR Sport"],
    engine_options: {
      "2.7L VVT-i Petrol": "2694 cc, 166 PS, 245 Nm",
      "2.8L GD-Series Diesel": "2755 cc, 204 PS, 420 Nm (MT) | 500 Nm (AT)"
    },
    transmission: ["5-speed MT (Petrol)", "6-speed MT (Diesel)", "6-speed AT"],
    mileage: "9.5 km/l (Petrol) | 12.0 - 14.4 km/l (Diesel)",
    safety: "5-star ASEAN NCAP (2020 test)",
    key_features: ["High-low range 4WD transfer case", "11-speaker JBL sound system", "Distinctive split-grille & quad LED headlamps", "Ventilated front seats", "Power-folding third-row seats"],
    price_range: "Rs 33.43 lakh - Rs 51.44 lakh (ex-showroom, 2024)",
    rivals: ["MG Gloster", "Jeep Meridian"],
    fun_facts: "Despite price hikes pushing top trims past Rs 60 lakh on-road, Fortuner's sales consistently outclass competitors combined."
  },
  "toyota innova": {
    brand: "Toyota",
    model: "Innova",
    years_sold: "2005-present",
    category: "MPV",
    brief: "Innova is India's gold standard for highway passenger transport. Transitioning from the original utility frame to the premium Innova Crysta (2016), it was joined in 2023 by the front-wheel-drive monocoque hybrid Innova Hycross.",
    variants: ["Crysta: G, GX, VX, ZX", "Hycross: G, GX, VX, ZX, ZX(O)"],
    engine_options: {
      "2.4L Diesel (Crysta)": "2393 cc, 150 PS, 343 Nm",
      "2.0L Petrol (Hycross)": "1987 cc, 173 PS, 209 Nm",
      "2.0L Hybrid (Hycross)": "Atkinson-cycle engine + motor = 186 PS combined"
    },
    transmission: ["5-speed MT (Crysta)", "G-CVT (Hycross Petrol)", "e-Drive CVT (Hycross Hybrid)"],
    mileage: "12.0 km/l (Crysta Diesel) | 23.24 km/l (Hycross Hybrid)",
    safety: "5-star ASEAN NCAP (2020 test)",
    key_features: ["Ottoman captain seats with powered legrests (Hycross ZX)", "Toyota Safety Sense (ADAS Level 2)", "Panoramic sunroof (Hycross)", "Dual-zone climate control", "Acoustic glass windshield"],
    price_range: "Rs 19.99 - Rs 26.30 lakh (Crysta) | Rs 18.92 - Rs 30.68 lakh (Hycross)",
    rivals: ["Kia Carens", "BYD M6"],
    fun_facts: "The Hycross strong hybrid waiting period stretched to over 24 months for top-spec ZX trims in 2023."
  },

  // ---- HONDA ----
  "honda city": {
    brand: "Honda",
    model: "City",
    years_sold: "1998-present",
    category: "Sedan",
    brief: "Honda City is the longest-running premium sedan brand in India, spanning 5 generations. Renowned for the high-revving 1.5L i-VTEC petrol engine and executive comfort, it added a strong-hybrid e:HEV option in 2022.",
    variants: ["SV", "V", "VX", "ZX", "e:HEV Hybrid"],
    engine_options: {
      "1.5L i-VTEC Petrol": "1498 cc, 121 PS, 145 Nm",
      "1.5L Atkinson Hybrid e:HEV": "Dual motor system output = 126 PS, 253 Nm"
    },
    transmission: ["6-speed MT", "7-step CVT", "e-CVT (Hybrid)"],
    mileage: "17.8 km/l (Petrol MT) | 27.13 km/l (Hybrid)",
    safety: "5-star ASEAN NCAP (2020 test)",
    key_features: ["Honda SENSING (ADAS camera)", "LaneWatch camera on left mirror", "8-inch touchscreen with Apple CarPlay/Android Auto", "Electric sunroof", "Premium leather upholstery", "LED headlamps with 9 array slots"],
    price_range: "Rs 11.82 lakh - Rs 16.35 lakh | Hybrid up to Rs 20.55 lakh (ex-showroom, 2024)",
    rivals: ["Hyundai Verna", "Skoda Slavia", "Volkswagen Virtus"],
    fun_facts: "The 3rd generation City (2008) launched with zero options for a diesel engine, yet it completely dominated sedan charts during a diesel-boom era."
  },
  "honda amaze": {
    brand: "Honda",
    model: "Amaze",
    years_sold: "2013-present",
    category: "Sedan",
    brief: "Amaze is Honda's sub-4m compact sedan, designed specifically for India. It offered a unique diesel CVT combination in its 2nd generation (2018), and is currently a petrol-only sedan loved for its spacious cabin and smooth CVT.",
    variants: ["E", "S", "VX", "Elite Edition"],
    engine_options: {
      "1.2L i-VTEC Petrol": "1199 cc, 90 PS, 110 Nm"
    },
    transmission: ["6-speed MT", "CVT"],
    mileage: "18.6 km/l (MT) | 18.3 km/l (CVT)",
    safety: "4-star Global NCAP (2019 test)",
    key_features: ["7-inch Digipad touchscreen", "Paddle shifters (CVT)", "Projector headlamps", "Automatic climate control"],
    price_range: "Rs 7.20 lakh - Rs 9.96 lakh (ex-showroom, 2024)",
    rivals: ["Maruti Dzire", "Hyundai Aura", "Tata Tigor"],
    fun_facts: "Amaze was the first model in Indian automotive history to introduce a step-shifting CVT transmission on a diesel passenger car."
  }
};

const CAR_ALIASES = {};

// Auto-populate aliases logic
Object.keys(CAR_DATABASE).forEach(key => {
  const record = CAR_DATABASE[key];
  CAR_ALIASES[key] = key;
  CAR_ALIASES[record.brand.toLowerCase() + " " + record.model.toLowerCase()] = key;
  
  const modelAlias = record.model.toLowerCase().split("/")[0].trim();
  CAR_ALIASES[modelAlias] = key;
});

// Custom manual mappings
CAR_ALIASES["brezza"] = "maruti vitara brezza";
CAR_ALIASES["vitara brezza"] = "maruti vitara brezza";
CAR_ALIASES["wagonr"] = "maruti wagon r";
CAR_ALIASES["wagon r"] = "maruti wagon r";
CAR_ALIASES["grand vitara"] = "maruti grand vitara";
CAR_ALIASES["spresso"] = "maruti s-presso";
CAR_ALIASES["s-presso"] = "maruti s-presso";
CAR_ALIASES["grand i10"] = "hyundai i10";
CAR_ALIASES["grand i10 nios"] = "hyundai i10";
CAR_ALIASES["nios"] = "hyundai i10";
CAR_ALIASES["scorpio n"] = "mahindra scorpio";
CAR_ALIASES["scorpio classic"] = "mahindra scorpio";
CAR_ALIASES["bolero neo"] = "mahindra bolero";
CAR_ALIASES["nexon ev"] = "tata nexon ev";
CAR_ALIASES["legender"] = "toyota fortuner";
CAR_ALIASES["crysta"] = "toyota innova";
CAR_ALIASES["hycross"] = "toyota innova";
CAR_ALIASES["innova crysta"] = "toyota innova";
CAR_ALIASES["innova hycross"] = "toyota innova";
CAR_ALIASES["thar roxx"] = "mahindra thar";
CAR_ALIASES["curvv ev"] = "tata curvv";
