export interface FinancialItem {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export const financialItems: FinancialItem[] = [
  {
    title: "Vifaa",
    titleEn: "Materials",
    description: "Gharama halisi ya materials zinazohitajika.",
    descriptionEn: "The real cost of materials needed.",
    icon: "package",
  },
  {
    title: "Usafiri",
    titleEn: "Transport",
    description:
      "Gharama za kupeleka vifaa na wafanyakazi inapohitajika.",
    descriptionEn:
      "Costs of moving materials and workers where needed.",
    icon: "truck",
  },
  {
    title: "Labor Charge",
    titleEn: "Labor Charge",
    description:
      "Malipo ya mafundi na wasaidizi kulingana na scope ya kazi.",
    descriptionEn:
      "Payment for craftsmen and helpers based on the scope of work.",
    icon: "users",
  },
  {
    title: "Overhead",
    titleEn: "Overhead",
    description:
      "Usimamizi, mawasiliano, vifaa vidogo na gharama za uendeshaji.",
    descriptionEn:
      "Management, communication, small tools and running costs.",
    icon: "settings",
  },
  {
    title: "Faida",
    titleEn: "Profit",
    description:
      "Kiasi kinachobaki kwa biashara baada ya gharama kuhesabiwa kwa usahihi.",
    descriptionEn:
      "What remains for the business after costs are calculated correctly.",
    icon: "trending-up",
  },
];

export const financialNote =
  "BOQ nzuri, mkataba wa wazi, kumbukumbu za matumizi, usimamizi wa ubora na mawasiliano mazuri na mteja husaidia kulinda faida na jina la fundi/contractor.";

export const financialNoteEn =
  "A good BOQ, a clear contract, records of expenses, quality management and good communication with the client help protect the profit and the name of the fundi/contractor.";
