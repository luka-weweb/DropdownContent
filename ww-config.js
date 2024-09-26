export default {
  editor: {
    label: {
      en: "Content",
    },
    icon: "view-grid",
  },
  inherit: {
    type: "ww-layout",
  },
  options: {
    autoByContent: true,
    displayAllowedValues: ["flex", "grid"],
  },
  properties: {
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
