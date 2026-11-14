export type ProductPhotoCategory =
  | 'Seeds & varieties'
  | 'Crop nutrition'
  | 'Crop protection'
  | 'Tools & equipment'
  | 'Packaged foods'
  | 'Product assortments'
  | 'Field notes';

export interface ProductPhoto {
  file: string;
  title: string;
  category: ProductPhotoCategory;
  story: string;
}

export const productPhotos: ProductPhoto[] = [
  { file: 'ABD silicates.jpeg', title: 'ABD Silicates', category: 'Crop nutrition', story: 'A silicate-labelled agricultural input from the supplied photo collection. Check the original container for its exact formulation and directions.' },
  { file: 'Agri-Products.jpg', title: 'Agricultural Product Assortment', category: 'Product assortments', story: 'A grouped product image that introduces the range of agricultural inputs represented in the photo collection.' },
  { file: 'Amino acid.jpeg', title: 'Amino Acid Product', category: 'Crop nutrition', story: 'An amino-acid-labelled product shown for catalogue identification. Confirm its composition and intended use from the product label.' },
  { file: 'BAJRA SEEDS.jpg', title: 'Bajra Seed', category: 'Seeds & varieties', story: 'A packet identified as bajra seed. The seed name and variety information should always be confirmed on the actual pack.' },
  { file: 'Barrots.jpg', title: 'Carrot Seed Selection', category: 'Seeds & varieties', story: 'A vegetable-seed image filed under a misspelled “Barrots” name. Confirm the crop and variety on the original seed packet before purchase.' },
  { file: 'Black Diamond.jpeg', title: 'Black Diamond Product', category: 'Crop nutrition', story: 'A product image identified as Black Diamond in the supplied archive. The photograph alone does not establish ingredients or application guidance.' },
  { file: 'Booster seeds.png', title: 'Booster Seeds', category: 'Seeds & varieties', story: 'A seed-related product image from the supplied archive. Check the package for the crop, variety, lot and planting information.' },
  { file: 'Brac seed.png', title: 'Brac Seed', category: 'Seeds & varieties', story: 'A seed product image filed as Brac seed. Please verify the crop identity and package details on the original label.' },
  { file: 'Evicent insectcid.png', title: 'Evicent Insecticide', category: 'Crop protection', story: 'An insecticide-labelled product included for recognition. Its crop, pest, formulation and directions must be read from its current label.' },
  { file: 'FSA BENZOMAX.jpg', title: 'FSA Benzomax', category: 'Crop protection', story: 'A crop-protection package labelled FSA Benzomax. Use only in accordance with the product label and applicable local requirements.' },
  { file: 'Farmers receiving products.jpg', title: 'Farmers and Product Handling', category: 'Field notes', story: 'A people-and-products photograph that offers context for agricultural input distribution. It is not presented as proof of a specific OJAPH activity.' },
  { file: 'Hybrid-Corn-Seed-1.jpg', title: 'Hybrid Corn Seed', category: 'Seeds & varieties', story: 'A hybrid-corn seed image. Confirm the named variety, pack size, season suitability and planting advice with the supplier and on-pack information.' },
  { file: 'IMG-20261019-WA0009.jpg', title: 'Vegetable Seed Packet Assortment', category: 'Product assortments', story: 'A photograph of multiple vegetable seed packets, including several named varieties. Availability and pack sizes vary; confirm each packet individually.' },
  { file: 'IMG-20261019-WA0010.jpg', title: 'Agricultural Inputs on Display', category: 'Product assortments', story: 'A mixed shelf image with crop-care products. It is an assortment photograph, not a complete specification or confirmation that every item is stocked.' },
  { file: 'KEVA Agro 80 plus spray.jpeg', title: 'KEVA Agro 80 Plus Spray', category: 'Crop protection', story: 'A spray product image filed under the KEVA Agro 80 Plus name. Read the label to verify the formulation, approved use and precautions.' },
  { file: 'Lypus.jpg', title: 'Lypus Product', category: 'Crop nutrition', story: 'A product image identified as Lypus. Please check the pack label for its exact product type, composition and directions.' },
  { file: 'MASONNR DAL.PNG', title: 'Masoor Dal', category: 'Packaged foods', story: 'A packaged masoor dal food product, distinct from seed for planting or an agricultural input. Refer to its food packaging for details.' },
  { file: 'NEOVELLE F1.jpg', title: 'Neovelle F1 Seed', category: 'Seeds & varieties', story: 'A seed packet identified as Neovelle F1. Confirm the crop, variety and production guidance from the original packet.' },
  { file: 'Onion red creole.jpg', title: 'Red Creole Onion Seed', category: 'Seeds & varieties', story: 'A red onion seed packet identified as Red Creole. The pack remains the source of truth for variety, lot and sowing guidance.' },
  { file: 'Organic pestcides.png', title: 'Organic Pest-Control Reference', category: 'Crop protection', story: 'A photo filed as an organic pesticide reference. The image does not verify certification, ingredients or suitability; check the actual product label.' },
  { file: 'Pestcides.jpeg', title: 'Crop-Protection Product Range', category: 'Crop protection', story: 'A grouped crop-protection image. Different products address different uses; never infer active ingredients, dose or crop suitability from a collage.' },
  { file: 'Rain season.png', title: 'Rain-Season Field Note', category: 'Field notes', story: 'A seasonal farming image included as editorial context. Local rainfall patterns and planting windows vary and should be confirmed for each location.' },
  { file: 'SHRIAM SEEDS.PNG', title: 'Shriram Seeds Vijeta Gold Moong', category: 'Seeds & varieties', story: 'The pictured Shriram Seeds pack is labelled Vijeta Gold Research Moong. Confirm the crop, pack weight and seed-lot details on the original package.' },
  { file: 'SOYA bean.jpeg', title: 'Soybean Seed', category: 'Seeds & varieties', story: 'A soybean-related seed image. Check the actual package for variety, seed treatment, lot details and recommended planting information.' },
  { file: 'Spray pump.png', title: 'Spray Pump', category: 'Tools & equipment', story: 'A sprayer image representing farm application equipment. Confirm capacity, fittings, condition and intended use before selecting a model.' },
  { file: 'TARI Liquid.jpg', title: 'TARI Liquid Product', category: 'Crop nutrition', story: 'A liquid agricultural product filed as TARI Liquid. Read the manufacturer label to establish its composition and directions.' },
  { file: 'Tomatos.png', title: 'Tomato Seed Product', category: 'Seeds & varieties', story: 'A tomato-related product image. Check the packet name and label for the exact variety, pack size and planting guidance.' },
  { file: 'Weed master.jpg', title: 'Weed Master', category: 'Crop protection', story: 'A weed-management product image. Confirm the formulation, registered use, target weeds and protective measures on the current label.' },
  { file: 'ammonium polyphosphate liquid.jpeg', title: 'Ammonium Polyphosphate Liquid', category: 'Crop nutrition', story: 'A liquid product labelled ammonium polyphosphate. Verify the grade, analysis and directions on the product label before use.' },
  { file: 'balaji seeds.png', title: 'Balaji BS-123 F1 Hybrid Bean', category: 'Seeds & varieties', story: 'A Balaji seed packet identified as BS-123 F1 hybrid bean. Confirm the printed variety, pack details and local growing guidance before planting.' },
  { file: 'bean seeds.jpg', title: 'Bean Seeds', category: 'Seeds & varieties', story: 'A bean-seed product image. Bean types and growing characteristics differ, so use the package label to confirm the variety and planting advice.' },
  { file: 'cabbage.jpg', title: 'Cabbage Seed', category: 'Seeds & varieties', story: 'A cabbage-seed image. Confirm the variety and the conditions it is suited to from the original pack and reliable local guidance.' },
  { file: 'corn seeds hybride.png', title: 'Hybrid Corn Seeds', category: 'Seeds & varieties', story: 'A hybrid-corn seed packet image. Hybrid names, maturity and field recommendations are pack-specific; verify them before making a selection.' },
  { file: 'cup plantation.jpeg', title: 'Seedling Nursery', category: 'Field notes', story: 'A nursery and seedling image illustrating an early plant-establishment stage. It is educational context, not a claim about a particular OJAPH site.' },
  { file: 'egg plant.jpeg', title: 'Eggplant Seed Product', category: 'Seeds & varieties', story: 'An eggplant-related seed image. Check the actual packet for its variety name, planting information and any handling instructions.' },
  { file: 'germination 2.png', title: 'Seed Germination Stages', category: 'Field notes', story: 'A germination image that illustrates early seed development. Actual emergence varies with seed quality, moisture, temperature and growing conditions.' },
  { file: 'germination.png', title: 'Germinating Seed', category: 'Field notes', story: 'A close-up of a germinating seed, included as an educational visual. It is not a germination test or a guarantee of any product’s performance.' },
  { file: 'hybrid mustard seed.png', title: 'Hybrid Mustard Seed', category: 'Seeds & varieties', story: 'A mustard-seed product image. Confirm the crop type, variety, season and suitability from the original pack and local agronomic advice.' },
  { file: 'immuno rich..png', title: 'Immuno Rich Product Range', category: 'Product assortments', story: 'A graphic displaying a range of agricultural products. Product labels and package directions—not the promotional composite—should guide selection and use.' },
  { file: 'lung plantation.png', title: 'Planting and Soil Reference', category: 'Field notes', story: 'An image in the supplied archive with an unclear crop identity. It is included as a visual reference only; confirm the subject before treating it as crop guidance.' },
  { file: 'organic seed in farming.png', title: 'Seed Sowing in Soil', category: 'Field notes', story: 'A photograph of seed being placed in prepared soil. It illustrates a general planting moment and is not evidence of a specific company demonstration.' },
  { file: 'oybean.jpg', title: 'Soybean Product Image', category: 'Seeds & varieties', story: 'A soybean-related image from the supplied folder. Verify whether the pictured item is seed or produce, along with variety and lot, from its packaging.' },
  { file: 'papaya tree.png', title: 'Papaya Plant Reference', category: 'Field notes', story: 'A papaya-related plant image included for crop context. It does not specify a variety or prove that the image was taken at an OJAPH farm.' },
  { file: 'planting 2.png', title: 'Planting Seeds by Hand', category: 'Field notes', story: 'A seed-sowing photograph illustrating careful handling at planting. Crop spacing and planting depth depend on the crop and should come from trusted guidance.' },
  { file: 'rafah-granular-insecticide-1000x1000.png', title: 'Rafah and Crop-Protection Range', category: 'Crop protection', story: 'A crop-protection product image that includes a package labelled Rafah. Check each product separately for its approved use and safety directions.' },
  { file: 'safal Gold.jpeg', title: 'Safal Gold Product', category: 'Seeds & varieties', story: 'A product image filed under the Safal Gold name. Confirm the crop or product type and all package details on the original label.' },
  { file: 'sagar seeds.png', title: 'Sagar Seeds', category: 'Seeds & varieties', story: 'A seed product image identified by the Sagar Seeds name. Check the actual packet for its crop, variety, lot and planting information.' },
  { file: 'sampoorna.jpg', title: 'Sampoorna Packaged Dal', category: 'Packaged foods', story: 'A packaged dal product shown in the supplied collection. It is a food item, not seed for planting; refer to the packaging for product details.' },
  { file: 'seed quality.jpeg', title: 'Seed Quality: A Visual Guide', category: 'Field notes', story: 'A seed-quality reference image. Appearance alone cannot confirm germination, purity, treatment or certification; rely on labels and appropriate testing.' },
  { file: 'seed quality.webp', title: 'Seed Quality Reference', category: 'Field notes', story: 'A second seed-quality visual from the archive. Use it as general context only; formal quality verification requires appropriate documentation or testing.' },
  { file: 'seed quality2.jpeg', title: 'Seed Quality: Pack Reference', category: 'Field notes', story: 'A seed-quality-related product image. Check the package for variety, batch and date information, and do not infer quality from the photograph alone.' },
  { file: 'seed quality2.webp', title: 'Seed Quality: Field Reference', category: 'Field notes', story: 'An additional seed-quality image included to keep the full archive visible. It is not a test result or a representation of certified performance.' },
  { file: 'seed quality3.png', title: 'Seed Quality Image', category: 'Field notes', story: 'A further image from the seed-quality collection. The picture is illustrative; quality claims should be supported by pack information and suitable testing.' },
  { file: 'seed quality4.png', title: 'Seed Quality and Selection', category: 'Field notes', story: 'A seed-selection reference from the supplied photos. For a purchase decision, inspect the original package and seek guidance relevant to the intended crop.' },
  { file: 'simlaw seed.jpg', title: 'Simlaw Gloria Star Cabbage F1', category: 'Seeds & varieties', story: 'The photographed Simlaw Seeds packet is labelled Gloria Star F1 Hybrid cabbage. Confirm its printed pack size, lot and planting guidance on the package.' },
  { file: 'soyabean seed germination.png', title: 'Soybean Seed Germination', category: 'Field notes', story: 'A soybean germination image illustrating early growth. Germination depends on seed condition and growing conditions; this photograph is not a test result.' },
  { file: 'sundergram.png', title: 'Sundargram Mung Bean Seed', category: 'Seeds & varieties', story: 'The pictured SAGA Seeds packet is labelled Sundargram mung bean. Confirm its printed pack weight, variety information and local planting guidance.' },
  { file: 'tomato1.jpg', title: 'Tomato Rio Grande VF', category: 'Seeds & varieties', story: 'The EASEED packet is labelled Tomato Rio Grande VF. Verify the pack weight, lot information and suitability for local conditions before planting.' },
  { file: 'tomatos4.jpg', title: 'Tomato Seed Packet', category: 'Seeds & varieties', story: 'A tomato seed packet image from the archive. Confirm its exact variety and packet details from the original label before ordering.' },
  { file: 'tommatos3.jpg', title: 'Tomato Padma 108 F1', category: 'Seeds & varieties', story: 'The East-West Seed packet is labelled Padma 108 F1. Refer to the original packet for crop guidance, authenticity checks and lot details.' },
  { file: 'vegimax.jpg', title: 'Vegimax Foliar Fertilizer', category: 'Crop nutrition', story: 'A product image identified as Vegimax foliar fertilizer. Confirm its composition, crops, mixing instructions and precautions from the current product label.' },
];

export const productPhotoGuidance: Record<ProductPhotoCategory, string> = {
  'Seeds & varieties': 'Seed performance depends on correct identification, viable and properly stored seed, and growing conditions. Before planting, check the original packet for the crop and variety, lot and date details, treatment information and supplier guidance. This catalogue is a visual guide; it is not a substitute for the product label or local agronomic advice.',
  'Crop nutrition': 'Nutrition products differ in composition, concentration and intended use. The name shown here is for image identification only; confirm the guaranteed analysis, crop suitability, directions and precautions on the actual package. Seek locally appropriate advice before incorporating an input into a crop or soil programme.',
  'Crop protection': 'Crop-protection products are not interchangeable. Identify the pest or weed correctly, then verify the product’s formulation, registered crop and target, label directions, protective equipment and disposal guidance. The photos are not application instructions or a recommendation to use a product.',
  'Tools & equipment': 'Equipment should be selected for the task, capacity and operator, then inspected before use. Confirm the model specifications, condition, compatibility and maintenance requirements with the supplier. Where equipment is used with crop-protection products, follow all applicable product and equipment safety directions.',
  'Packaged foods': 'These photographs show packaged food products, not agricultural inputs or planting seed. Product names and details should be confirmed on the original food packaging. They are included because they appear in the supplied product-photo collection.',
  'Product assortments': 'A group image can show different brands, formulations and package sizes side by side, but it cannot replace an individual product label. Treat each item separately, confirm current availability and read its package before purchase or use.',
  'Field notes': 'These images provide general visual context for planting, crops or seed handling. They are not product specifications, test results or proof of a particular OJAPH project, farm or training activity. Crop identification and advice should be verified before applying it to a farm.',
};
