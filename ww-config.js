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
    position: {
      label: {
        en: "Position",
      },
      type: "TextSelect",
      defaultValue: "bottom",
      options: {
        options: [
          { value: "top", label: { en: "Top" } },
          { value: "right", label: { en: "Right" } },
          { value: "bottom", label: { en: "Bottom" } },
          { value: "left", label: { en: "Left" } },
        ],
      },
    },
    alignment: {
      label: { en: "Align" },
      type: "TextRadioGroup",
      options: (content) => {
        if (content.position === "top" || content.position === "bottom") {
          return {
            choices: [
              {
                value: "start",
                title: { en: "Start" },
                icon: "align-left",
              },
              {
                value: "center",
                title: { en: "Center" },
                icon: "align-center",
              },
              { value: "end", title: { en: "End" }, icon: "align-right" },
            ],
          };
        } else {
          return {
            choices: [
              {
                value: "start",
                title: { en: "Start" },
                icon: "align-y-start",
              },
              {
                value: "center",
                title: { en: "Center" },
                icon: "align-y-center",
              },
              { value: "end", title: { en: "End" }, icon: "align-y-end" },
            ],
          };
        }
      },
      defaultValue: "start",
      classes: true,
      states: true,
    },
    offsetX: {
      type: "Length",
      label: {
        en: "Offset (x)",
        fr: "Taille",
      },
      bindable: true,
      options: {
        unitChoices: [
          { value: "px", label: "px", min: 1, max: 1000 },
          { value: "%", label: "%", min: 1, max: 100 },
        ],
        noRange: true,
        useVar: true,
      },
      bindingValidation: {
        type: "string",
        tooltip: "A string that defines size of offset in px or %",
      },
    },
    offsetY: {
      type: "Length",
      label: {
        en: "Offset (y)",
        fr: "Taille",
      },
      bindable: true,
      options: {
        unitChoices: [
          { value: "px", label: "px", min: 1, max: 1000 },
          { value: "%", label: "%", min: 1, max: 100 },
        ],
        noRange: true,
        useVar: true,
      },
      bindingValidation: {
        type: "string",
        tooltip: "A string that defines size of offset in px or %",
      },
    },
    avoidCollision: {
      label: {
        en: "Avoid collision",
      },
      type: "OnOff",
      bindable: true,
      defaultValue: false,
    },
    collisionOffset: {
      type: "Length",
      label: {
        en: "Collision offset",
      },
      bindable: true,
      options: {
        unitChoices: [
          { value: "px", label: "px", min: 1, max: 1000 },
          { value: "%", label: "%", min: 1, max: 100 },
        ],
        noRange: true,
        useVar: true,
      },
      bindingValidation: {
        type: "string",
        tooltip: "A string that defines size of offset in px or %",
      },
    },
    slot: {
      hidden: true,
      defaultValue: [],
    },
  },
};
