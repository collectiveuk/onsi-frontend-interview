import { useState } from "react";

type Pair<A, B> = {
  first: A;
  second: B;
};

export const TaxCalculator = () => {
  const [percent, setPercent] = useState(20);

  const [currency, setCurrency] = useState("GBP");
  const [amount, setAmount] = useState(0);

  const [pairs, setPairs] = useState<Pair<number, string>[]>([]);

  const netAmount = (
    percent: number,
    rest: Pair<number, string>[],
  ): Pair<number, string> => {
    if (!rest.length) {
      return { first: 0, second: "GBP" };
    }

    let [first, ...pairs] = rest;

    let total: Pair<number, string> = first;

    for (let next of pairs) {
      if (next.second != total.second) {
        throw new Error();
      }
    }

    for (let next of pairs) {
      total = {
        first: total.first + next.first,
        second: next.second,
      };
    }

    let tax = total.first * (percent / 100);

    return {
      first: total.first - tax,
      second: total.second,
    };
  };

  return (
    <div>
      <h1>Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setPairs([...pairs, { first: amount, second: currency }]);
        }}
      >
        <input
          type="text"
          name="percent"
          value={percent}
          onChange={(e) => setPercent(Number(e.target?.value))}
        />

        <select
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {pairs.map((pair, index) => (
          <p key={`${pair.first}${index}`}>
            {pair.second} {pair.first}
          </p>
        ))}
      </ul>

      <p>
        Total:{" "}
        {`${netAmount(percent, pairs).first} ${
          netAmount(percent, pairs).second
        }`}
      </p>
    </div>
  );
};
