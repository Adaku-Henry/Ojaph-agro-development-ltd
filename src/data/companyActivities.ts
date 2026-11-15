export type CompanyActivityCategory =
  | 'Crop Production'
  | 'Farmer Training'
  | 'Nursery & Greenhouse'
  | 'Products & Customer Service'
  | 'Livestock';

export interface CompanyActivityPhoto {
  src: string;
  alt: string;
  caption: string;
  category: CompanyActivityCategory;
  cropThirdPartySignage?: boolean;
}

function activityPhoto(
  filename: string,
  alt: string,
  caption: string,
  category: CompanyActivityCategory,
  cropThirdPartySignage = false,
): CompanyActivityPhoto {
  return {
    src: `/company-activities/${filename}`,
    alt,
    caption,
    category,
    cropThirdPartySignage,
  };
}

export const COMPANY_ACTIVITY_PHOTOS = {
  mulchedRows: activityPhoto('1.jpeg', 'Rows of young crops growing through straw mulch on a cultivated plot.', 'Mulched crop rows', 'Crop Production'),
  fieldWorker: activityPhoto('2.jpeg', 'A farmer tending crops among rows in an outdoor garden.', 'Field crop care', 'Crop Production'),
  vegetablePlotWorker: activityPhoto('3.jpeg', 'A farmer standing among leafy crops on a garden plot.', 'Working among vegetable crops', 'Crop Production'),
  nurseryVisit: activityPhoto('4.jpeg', 'A team member visiting a seedling nursery.', 'A visit to the seedling nursery', 'Nursery & Greenhouse'),
  fieldDemonstration: activityPhoto('5.jpeg', 'A group examining and planting a field plot together.', 'Field demonstration and planting', 'Farmer Training'),
  vegetableBeds: activityPhoto('6.jpeg', 'Raised garden beds planted with leafy vegetables.', 'Vegetable garden beds', 'Crop Production'),
  greenhouseInterior: activityPhoto('7.jpeg', 'A worker fitting greenhouse covering inside a framed structure.', 'Greenhouse setup in progress', 'Nursery & Greenhouse'),
  greenhouseBuild: activityPhoto('8.jpeg', 'Workers fitting greenhouse covering to the outside of a framed structure.', 'Greenhouse covering work', 'Nursery & Greenhouse'),
  seedlingNursery: activityPhoto('9.jpeg', 'Rows of young seedlings growing in a nursery bed.', 'Seedling nursery', 'Nursery & Greenhouse'),
  growBagSeedlings: activityPhoto('10.jpeg', 'Young plants growing in soil-filled grow bags beside a greenhouse.', 'Seedlings growing in grow bags', 'Nursery & Greenhouse'),
  nurseryGrowBags: activityPhoto('11.jpeg', 'Young plants growing in grow bags along a nursery walkway.', 'Nursery grow bags', 'Nursery & Greenhouse'),
  productShopVisit: activityPhoto('12.jpeg', 'A team member at the agricultural products shop.', 'At the agricultural products shop', 'Products & Customer Service'),
  fieldVisit: activityPhoto('13.jpeg', 'A group visiting a field of growing crops.', 'Field visit with community members', 'Farmer Training'),
  fieldLearning: activityPhoto('14.jpeg', 'A group observing crops during a field visit.', 'Learning visit in the field', 'Farmer Training'),
  cassavaFieldTeam: activityPhoto('15.jpeg', 'Three team members standing in a cassava field.', 'Cassava field activity', 'Crop Production'),
  tomatoInspection: activityPhoto('16.jpeg', 'A team member checking a tomato crop supported by stakes.', 'Tomato crop inspection', 'Crop Production'),
  transplantSeedling: activityPhoto('17.jpeg', 'A hand lifting a young seedling from a nursery tray.', 'Seedling ready for transplanting', 'Nursery & Greenhouse'),
  shopService: activityPhoto('18.jpeg', 'A staff member assisting a customer at the agricultural products shop.', 'Customer service at the shop', 'Products & Customer Service'),
  shopDisplay: activityPhoto('19.jpeg', 'Agricultural products and farm tools displayed on shop shelves.', 'Products and tools on display', 'Products & Customer Service'),
  tomatoSeedlings: activityPhoto('20.jpeg', 'Rows of tomato seedlings growing in nursery trays.', 'Tomato seedling nursery', 'Nursery & Greenhouse'),
  seedlingTrays: activityPhoto('21.jpeg', 'Young seedlings growing in nursery trays.', 'Young seedlings in the nursery', 'Nursery & Greenhouse'),
  greenhouseNursery: activityPhoto('22.jpeg', 'A team member among seedlings inside a greenhouse.', 'Greenhouse nursery visit', 'Nursery & Greenhouse'),
  learningSession: activityPhoto('23.jpeg', 'Participants seated at an agricultural learning session.', 'Agricultural learning session', 'Farmer Training', true),
  trainingGroup: activityPhoto('24.jpeg', 'A group of participants attending a training session under a tent.', 'Farmer and staff training session', 'Farmer Training', true),
  poultryHouse: activityPhoto('25.jpeg', 'Chickens and drinkers inside a poultry house.', 'Poultry keeping activity', 'Livestock'),
} as const;

export const COMPANY_ACTIVITY_GALLERY = Object.values(COMPANY_ACTIVITY_PHOTOS);
