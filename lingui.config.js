module.exports = {
    locales: ["en", "it", "srd"],
    sourceLocale: "it",
    catalogs: [
      {
        path: "<rootDir>/src/locales/{locale}/messages",
        include: ["<rootDir>/src"],
      },
    ],
    format: "po",
  };
  