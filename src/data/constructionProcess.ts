export interface ProcessStep {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  details?: string[];
  detailsEn?: string[];
  highlight?: string;
  highlightEn?: string;
  imageIndex: number;
}

export const constructionProcess: ProcessStep[] = [
  {
    id: 1,
    title: "Kupokea Mteja na Kuelewa Kazi",
    titleEn: "Receiving the Client and Understanding the Work",
    description:
      "Sikiliza mahitaji ya mteja kwa makini. Tambua aina ya jengo, ukubwa, eneo, kiwango cha finishing anachotaka na bajeti yake. Tembelea site kabla ya kutoa makadirio ya mwisho na chukua vipimo sahihi.",
    descriptionEn:
      "Listen carefully to the client's needs. Identify the type of building, size, location, finishing level they want and their budget. Visit the site before giving the final estimate and take accurate measurements.",
    imageIndex: 1,
  },
  {
    id: 2,
    title: "Ramani na Vipimo",
    titleEn: "Plan and Measurements",
    description:
      "Hakikisha kuna ramani inayofaa kwa kazi inayofanyika. Kagua vipimo vya msingi, vyumba, milango, madirisha, paa na maeneo ya huduma.",
    descriptionEn:
      "Ensure there is a suitable plan for the work being done. Check measurements of the foundation, rooms, doors, windows, roof and service areas.",
    details: [
      "Kazi za structural kama msingi, nguzo, beam na slab zifuate michoro na maelekezo ya mhandisi mwenye sifa.",
    ],
    detailsEn: [
      "Structural works such as foundation, columns, beam and slab must follow the drawings and instructions of a qualified engineer.",
    ],
    imageIndex: 2,
  },
  {
    id: 3,
    title: "Kuandaa BOQ na Bei",
    titleEn: "Preparing BOQ and Price",
    description:
      "Andaa BOQ inayoonyesha vifaa, kiasi, bei ya kila kipengele, usafiri, labor charge na gharama nyingine.",
    descriptionEn:
      "Prepare a BOQ showing materials, quantity, price of each item, transport, labor charge and other costs.",
    details: [
      "Weka akiba ya gharama zisizotarajiwa pale inapofaa.",
      "Usichanganye gharama ya vifaa na faida yako bila maelezo.",
    ],
    detailsEn: [
      "Set aside a contingency for unexpected costs where appropriate.",
      "Do not mix material costs with your profit without explanation.",
    ],
    imageIndex: 3,
  },
  {
    id: 4,
    title: "Makubaliano na Mkataba",
    titleEn: "Agreement and Contract",
    description:
      "Kabla ya kuanza, kubaliana kwa maandishi kuhusu scope ya kazi, bei, muda wa kazi, awamu za malipo, nani atanunua vifaa, namna ya kushughulikia mabadiliko na utaratibu wa kukabidhi kazi.",
    descriptionEn:
      "Before starting, agree in writing on the scope of work, price, work duration, payment stages, who will buy materials, how to handle changes and the handover procedure.",
    imageIndex: 4,
  },
  {
    id: 5,
    title: "Maandalizi ya Site",
    titleEn: "Site Preparation",
    description:
      "Safisha eneo, fanya setting-out, hakikisha njia za kuingia na kutoka zipo salama na panga sehemu ya kuhifadhi cement, nondo, mbao na vifaa vingine.",
    descriptionEn:
      "Clear the area, do setting-out, ensure safe entry and exit routes exist and arrange a storage area for cement, nails, timber and other materials.",
    details: ["Vifaa vinavyoharibika kwa maji vihifadhiwe sehemu kavu."],
    detailsEn: ["Materials damaged by water should be stored in a dry place."],
    imageIndex: 5,
  },
  {
    id: 6,
    title: "Mpangilio Mkuu wa Ujenzi",
    titleEn: "Main Construction Layout",
    description:
      "Mpangilio unaweza kubadilika kulingana na ramani na aina ya jengo.",
    descriptionEn: "The layout may change depending on the plan and building type.",
    details: [
      "Setting-out na msingi",
      "Foundation wall na backfilling",
      "Ground slab",
      "Kuta",
      "Nguzo / Ring beam kulingana na design",
      "Roofing",
      "Plumbing na electrical rough-in",
      "Plaster",
      "Ceiling",
      "Tiles",
      "Milango na madirisha",
      "Painting",
      "Fittings na finishing",
    ],
    detailsEn: [
      "Setting-out and foundation",
      "Foundation wall and backfilling",
      "Ground slab",
      "Walls",
      "Columns / Ring beam as per design",
      "Roofing",
      "Plumbing and electrical rough-in",
      "Plaster",
      "Ceiling",
      "Tiles",
      "Doors and windows",
      "Painting",
      "Fittings and finishing",
    ],
    imageIndex: 6,
  },
  {
    id: 7,
    title: "Udhibiti wa Ubora",
    titleEn: "Quality Control",
    description:
      "Kagua level, plumb, vipimo na alignment mara kwa mara. Hakikisha materials ni za kiwango kinachotakiwa, curing inafanyika ipasavyo na kazi haifunikwi kabla ya kukaguliwa.",
    descriptionEn:
      "Check level, plumb, measurements and alignment regularly. Ensure materials are of the required standard, curing is done properly and work is not covered before being inspected.",
    highlight: "Mabadiliko ya structural yasifanywe kwa kubahatisha.",
    highlightEn: "Structural changes must not be done by guesswork.",
    imageIndex: 7,
  },
  {
    id: 8,
    title: "Usalama Kazini",
    titleEn: "Safety at Work",
    description:
      "Tumia vifaa vya kujikinga vinavyofaa kazi kama helmet, viatu vya usalama, gloves na kinga nyingine.",
    descriptionEn:
      "Use appropriate personal protective equipment such as helmet, safety boots, gloves and other protection.",
    details: [
      "Scaffolding na kazi za juu zipangwe kwa usalama.",
      "Kazi za umeme, structural na nyingine zinazohitaji utaalamu maalum zifanywe na watu wenye uwezo unaofaa.",
    ],
    detailsEn: [
      "Scaffolding and work at height must be arranged safely.",
      "Electrical, structural and other specialised works must be done by suitably capable people.",
    ],
    imageIndex: 8,
  },
  {
    id: 9,
    title: "Usimamizi wa Vifaa",
    titleEn: "Materials Management",
    description:
      "Weka kumbukumbu ya vifaa vilivyoingia site, vilivyotumika na vilivyobaki.",
    descriptionEn:
      "Keep records of materials that entered site, used and remaining.",
    details: [
      "Punguza upotevu, wizi na matumizi yasiyo ya lazima.",
      "Panga ununuzi kwa awamu ili fedha zisifungwe kwenye vifaa visivyohitajika mapema.",
    ],
    detailsEn: [
      "Reduce waste, theft and unnecessary use.",
      "Plan purchases in stages so money is not tied up in materials not needed early.",
    ],
    imageIndex: 9,
  },
  {
    id: 10,
    title: "Usimamizi wa Mafundi",
    titleEn: "Workers Management",
    description:
      "Gawa majukumu kwa uwazi, eleza kiwango cha kazi kinachotakiwa na kagua kazi kabla ya kuendelea na hatua inayofuata.",
    descriptionEn:
      "Assign tasks clearly, explain the required work standard and inspect work before moving to the next step.",
    details: ["Rekodi malipo ya mafundi na kazi waliyokamilisha."],
    detailsEn: ["Record payments to workers and the work they completed."],
    imageIndex: 10,
  },
  {
    id: 11,
    title: "Mawasiliano na Mteja",
    titleEn: "Communication with the Client",
    description:
      "Mpe mteja taarifa za maendeleo, gharama na changamoto muhimu.",
    descriptionEn:
      "Give the client updates on progress, costs and important challenges.",
    details: [
      "Usifanye variation kubwa bila makubaliano.",
      "Ikiwezekana, hifadhi picha za maendeleo ya kazi kwa kumbukumbu.",
    ],
    detailsEn: [
      "Do not make a large variation without agreement.",
      "Where possible, keep photos of work progress for records.",
    ],
    imageIndex: 11,
  },
  {
    id: 12,
    title: "Finishing na Ukaguzi",
    titleEn: "Finishing and Inspection",
    description:
      "Kagua plaster, tiles, ceiling, rangi, milango, madirisha, plumbing, umeme na fittings.",
    descriptionEn:
      "Check plaster, tiles, ceiling, paint, doors, windows, plumbing, electricity and fittings.",
    details: [
      "Tengeneza orodha ya kasoro ndogo (snag list), zirekebishe na safisha site kabla ya makabidhiano.",
    ],
    detailsEn: [
      "Create a snag list of minor defects, fix them and clean the site before handover.",
    ],
    imageIndex: 12,
  },
  {
    id: 13,
    title: "Kukabidhi Kazi",
    titleEn: "Handing Over the Work",
    description:
      "Fanya ukaguzi wa mwisho pamoja na mteja.",
    descriptionEn: "Do the final inspection together with the client.",
    details: [
      "Hakikisha kazi iliyokubaliwa imekamilika, malipo yamehakikiwa na nyaraka muhimu zimekabidhiwa.",
      "Weka kumbukumbu ya makabidhiano.",
    ],
    detailsEn: [
      "Ensure the accepted work is complete, payments are verified and important documents are handed over.",
      "Keep a record of the handover.",
    ],
    imageIndex: 13,
  },
];

export const constructionStages: Record<"sw" | "en", string[]> = {
  sw: [
    "Kupima na Kuweka Alama",
    "Msingi",
    "Ukuta wa Msingi",
    "Kujaza Ua",
    "Slab ya Sakafu",
    "Kuta",
    "Nguzo / Ring Beam",
    "Paazi",
    "Maji na Umeme",
    "Plasta",
    "Dari",
    "Tiles",
    "Milango na Madirisha",
    "Urangi",
    "Vifaa vya Mwisho",
  ],
  en: [
    "Setting-out",
    "Foundation",
    "Foundation Wall",
    "Backfilling",
    "Ground Slab",
    "Walls",
    "Columns / Ring Beam",
    "Roofing",
    "Plumbing & Electrical",
    "Plaster",
    "Ceiling",
    "Tiles",
    "Doors & Windows",
    "Painting",
    "Fittings & Finishing",
  ],
};
