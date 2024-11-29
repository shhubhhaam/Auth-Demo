import React, { useEffect } from 'react';

const ChartComponent = () => {
  useEffect(() => {
    new window.TradingView.widget({
      symbol: "BTCUSD", // Change to your desired crypto
      interval: "60", // Chart interval (e.g., 1 hour)
      container_id: "tradingview_chart",
      datafeed: undefined,
      library_path: "/",
      locale: "en",
      theme: "dark", // Chart theme (dark/light)
      style: "1", // Candlestick style
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      withdateranges: true,
      allow_symbol_change: true,
      studies: ["Volume@tv-basicstudies"], // Add volume indicator
      details: true,
    });
  }, []);

  return( 
      <div id="tradingview_chart"></div>

)
};

export default ChartComponent;
