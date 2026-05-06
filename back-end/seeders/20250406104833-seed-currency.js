"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currencies = [
      { id: 1, name: "دلارآمریکا", symbol: "USD" },
      { id: 2, name: "یورو", symbol: "EUR" },
      { id: 3, name: "دلار کانادا", symbol: "CAD" },
      { id: 4, name: "دلار استرالیا", symbol: "AUD" },
      { id: 5, name: "پوند انگلیس", symbol: "GBP" },
      { id: 6, name: "درهم امارات", symbol: "AED" },
      { id: 7, name: "کرون سوئد", symbol: "SEK" },
      { id: 8, name: "کرون نروژ", symbol: "NOK" },
      { id: 9, name: "کرون دانمارک", symbol: "DKK" },
      { id: 10, name: "لیر ترکیه", symbol: "TRY" },
      { id: 11, name: "فرانک سوییس", symbol: "CHF" },
      { id: 12, name: "ین ژاپن", symbol: "JPY" },
      { id: 13, name: "رینگیت مالزی", symbol: "MYR" },
      { id: 14, name: "یوان چین", symbol: "CNY" },
      { id: 15, name: "دینار عراق", symbol: "IQD" },
      { id: 16, name: "منات آذربایجان", symbol: "AZN" },
    ];

    const currencyPrices = currencies.map((currency) => ({
      id: currency.id,
      buyPrice: 0,
      sellPrice: 0,
      pBuyPrice: 0,
      pSellPrice: 0,
      CurrencyId: currency.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const currencyArchives = [
      {
        id: 1,
        buyPrice: 0,
        sellPrice: 0,
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(
      "Currencies",
      currencies.map((currency) => ({
        ...currency,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {
        ignoreDuplicates: true,
      },
    );

    await queryInterface.bulkInsert("currencyPrices", currencyPrices, {
      ignoreDuplicates: true,
    });

    await queryInterface.bulkInsert("CurrencyArchives", currencyArchives, {
      ignoreDuplicates: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Currencies", null, {});
    await queryInterface.bulkDelete("currencyPrices", null, {});
    await queryInterface.bulkDelete("CurrencyArchives", null, {});
  },
};
