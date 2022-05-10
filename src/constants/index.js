export const modal_add_dataset = "modal_add_dataset";

export const dateHandler = (date) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  return `${day < 10 ? "0" + day : day}:${
    month < 10 ? "0" + month : month
  }:${year} | ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const datasets = [
  {
    id: 1,
    title: "dataset name - 1",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 2,
    title: "dataset name - 2",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 3,
    title: "dataset name - 3",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 4,
    title: "dataset name - 1",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 5,
    title: "dataset name - 2",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 6,
    title: "dataset name - 3",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 7,
    title: "dataset name - 1",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 8,
    title: "dataset name - 2",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 9,
    title: "dataset name - 3",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 10,
    title: "dataset name - 1",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 11,
    title: "dataset name - 2",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
  {
    id: 12,
    title: "dataset name - 3",
    description: "",
    updated_at: new Date(),
    image: "",
    tags: ["classification", "segmentation"],
    metadata: {
      owner: "mahmoud",
      images: 200,
      a_images: 199,
      classes: 3,
    },
  },
];

export const creationSteps = [
  "upload/choose data",
  "data cleaning",
  "tagging/labelling",
  "split data",
  "data processing",
  "data augmentation",
  "finalize & export data",
];
