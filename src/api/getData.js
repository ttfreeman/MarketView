import moment from "moment";
import axios from "axios";
import _ from "lodash";

export const getDailyData = ticker => {
  return axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=52MOSGPL8EU13TQI`
    )
    .then(response => {
      // return response.data;

      let timeArray = _.chain(response.data["Time Series (Daily)"])
        .keys()
        .value();
      timeArray = timeArray.map(row => moment(row).format("MMM YY"));
      const priceArray = _.chain(response.data["Time Series (Daily)"])
        .values()
        .map(row => row["4. close"])
        .map(row => _.parseInt(row))
        .value();
      const zipped = _.zip(timeArray, priceArray);
      return zipped;
    })
    .catch(e => {
      console.log(e);
    });
};

export const getTickers = keyword => {
  return axios
    .get(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=52MOSGPL8EU13TQI`
    )
    .then(response => {
      let options = response.data.bestMatches;
      options = options.map(row => {
        return { symbol: row["1. symbol"], name: row["2. name"] };
      });
      return options;
    })
    .catch(e => {
      console.log(`Error retrieving data for keyword=${keyword}`);
    });
};
