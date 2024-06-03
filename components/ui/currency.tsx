"use client";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

interface CurrencyProps {
  value: number | bigint;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div className="font-semibold">{formatter.format(value)}</div>;
};

export default Currency;
