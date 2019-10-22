
const provinces = [
  {
    shortcode: ab,
    province: "Alberta"
  },
  {
    shortcode: bc,
    province: "British Columbia"
  },
  {
    shortcode: sk,
    province: "Saskatchewan"
  },
  {
    shortcode: nl,
    province: "Newfoundland and Labrador"
  },
  {
    shortcode: mb,
    province: "Manitoba"
  },
  {
    shortcode: qc,
    province: "Quebec"
  },
  {
    shortcode: ont,
    province: "Ontario"
  },
  {
    shortcode: nb,
    province: "New Brunswick"
  },
  {
    shortcode: ns,
    province: "Nova Scotia"
  },
  {
    shortcode: nu,
    province: "Nunavut"
  },
  {
    shortcode: nt,
    province: "Northwest Territories"
  },
  {
    shortcode: yt,
    province: "Yukon"
  },
  {
    shortcode: bc,
    province: "Prince Edward Island"
  },
];


function objFunc() {
  for (const element of provinces) {
    if (           shortcode.toLowerCase()===provinces.shortcode[element]) {
      return provinces.shortcode[element]
    }
  }
};

export default objFunc;