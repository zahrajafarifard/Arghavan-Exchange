const Coin = require("../models/COIN/coin");
const CurrencyArchive = require("../models/ARCHIVE/currencyArch");
const CoinArchive = require("../models/ARCHIVE/coinArch");
const Currency = require("../models/CURRENCY/currency");
const CoinPrice = require("../models/COIN/coinPrice");
const CurrencyPrice = require("../models/CURRENCY/currencyPrice");
const Config = require("../models/config");
const io = require("../socket");

exports.getallcurrencies = async (req, res) => {
  const AllCurrensies = await CurrencyPrice.findAll({
    include: { model: Currency, attributes: ["name", "symbol"] },
  });

  res.status(200).send(AllCurrensies);
};
exports.getallcoins = async (req, res) => {
  const AllCoins = await CoinPrice.findAll({
    include: { model: Coin, attributes: ["name"] },
  });

  res.status(201).send(AllCoins);
};

exports.registerConfig = async (req, res) => {
  // console.log(req.body);
  const {
    address,
    telegram,
    phone,
    email,
    whatsApp,
    instagram,
    workHours,
    aboutUs,
  } = req.body;

  let finded;
  try {
    finded = await Config.findOne();
    if (!finded) {
      await Config.create({
        address,
        telegram,
        phone,
        email,
        whatsApp,
        instagram,
        workHours,
        aboutUs,
      });
    } else {
      await Config.update(
        {
          address,
          telegram,
          phone,
          email,
          whatsApp,
          instagram,
          workHours,
          aboutUs,
        },
        {
          where: {
            id: 1,
          },
        },
      );
    }
    return res.status(200).json({ msg: "registered successfully ..." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "registered failed ..." });
  }
};

exports.updateCurrency = async (req, res) => {
  if (req.headers.secretkey !== process.env.SECRET_KEY) {
    return res.status(500).json({ err: " req is not valid" });
  }

  let findedCurr;

  let _pBuyPrice;
  let _pSellPrice;
  const body = req.body.currency;

  try {
    for (const currentElement of body) {
      findedCurr = await CurrencyPrice.findOne({
        where: {
          id: currentElement.id,
        },
      });

      if (
        +String(currentElement.buyPrice).replace(/,/g, "") ===
          findedCurr.buyPrice &&
        +String(currentElement.sellPrice).replace(/,/g, "") ===
          findedCurr.sellPrice
      ) {
        console.log("===");
      } else {
        _pBuyPrice = findedCurr.buyPrice;
        _pSellPrice = findedCurr.sellPrice;
        findedCurr.buyPrice = +String(currentElement.buyPrice).replace(
          /,/g,
          "",
        );
        findedCurr.sellPrice = +String(currentElement.sellPrice).replace(
          /,/g,
          "",
        );
        findedCurr.pBuyPrice = _pBuyPrice;
        findedCurr.pSellPrice = _pSellPrice;
        await findedCurr.save();

        await archiveCurrencies(findedCurr);
      }
    }
    const allCurrencies = await CurrencyPrice.findAll({
      include: { model: Currency, attributes: ["name", "symbol"] },
    });
    io.getio().emit("getCurrencies", allCurrencies);

    io.getio().emit("getFeaturedCurrencies", allCurrencies?.slice(0, 4));

    res.send({ msg: "successfuly" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "server problem" });
  }
};

exports.updateCoin = async (req, res) => {
  if (req.headers.secretkey !== process.env.SECRET_KEY) {
    return res.status(500).json({ err: " req is not valid" });
  }
  let findedCoin;
  let _pBuyPrice;
  let _pSellPrice;
  const body = req.body.coin;
  try {
    for (const currentElement of body) {
      if (currentElement.id) {
        findedCoin = await CoinPrice.findOne({
          where: {
            id: currentElement.id,
          },
        });
        if (
          +String(currentElement.buyPrice).replace(/,/g, "") ===
            findedCoin.buyPrice &&
          +String(currentElement.sellPrice).replace(/,/g, "") ===
            findedCoin.sellPrice
        ) {
          console.log("===");
        } else {
          _pBuyPrice = findedCoin.buyPrice;
          _pSellPrice = findedCoin.sellPrice;
          findedCoin.buyPrice = +String(currentElement.buyPrice).replace(
            /,/g,
            "",
          );
          findedCoin.sellPrice = +String(currentElement.sellPrice).replace(
            /,/g,
            "",
          );
          findedCoin.pBuyPrice = _pBuyPrice;
          findedCoin.pSellPrice = _pSellPrice;
          await findedCoin.save();
          await archiveCoins(findedCoin);
        }
      }
    }

    const allCoins = await CoinPrice.findAll({
      include: { model: Coin, attributes: ["name"] },
    });
    io.getio().emit("getCoins", allCoins);
    io.getio().emit("getFeaturedCoins", allCoins?.slice(0, 4));
    res.send({ msg: "successfuly" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: "server problem" });
  }
};

const archiveCoins = async (coin) => {
  try {
    await CoinArchive.create({
      buyPrice: coin.buyPrice,
      sellPrice: coin.sellPrice,
      CoinId: coin.id,
    });
  } catch (err) {
    console.log(err);
  }
};

const archiveCurrencies = async (currency) => {
  try {
    await CurrencyArchive.create({
      buyPrice: currency.buyPrice,
      sellPrice: currency.sellPrice,
      CurrencyId: currency.id,
    });
  } catch (err) {
    console.log(err);
  }
};
