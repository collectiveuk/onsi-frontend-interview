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
    pairs: Pair<number, string>[],
  ): Pair<number, string> => {
    if (!pairs.length) {
      return { first: 0, second: "GBP" };
    }

    let [first, ...rest] = pairs;

    let total: Pair<number, string> = first;

    for (let next of rest) {
      if (next.second != total.second) {
        throw new Error();
      }
    }

    for (let next of rest) {
      total = {
        first: total.first + next.first,
        second: next.second,
      };
    }

    let tax = {
      first: (total.first * percent) / 100,
      second: total.second,
    };

    return {
      first: total.first - tax.first,
      second: total.second,
    };
  };

  return (
    <div className="prose m-8">
      <h1>Tax Calculator</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();

          setPairs([...pairs, { first: amount, second: currency }]);

          setAmount(0);
        }}
      >
        <p>
          Enter multiple amounts, and a percentage, tool will calculate the net
          amount and the tax.
        </p>
        <h4>Tax Percentage (0-100)</h4>
        <input
          type="text"
          min="0"
          max="100"
          name="percent"
          value={percent}
          onChange={(e) => setPercent(Number(e.target?.value))}
        />

        <h4>Add Amount</h4>
        <div className="flex flex-row gap-4">
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

          <button
            type="submit"
            className="px-4 py-2 bg-lime-600 text-white font-bold"
          >
            Add
          </button>
        </div>
      </form>

      <h4>Current amounts</h4>
      <ul>
        {pairs.length
          ? pairs.map((pair, index) => (
              <li className="list-disc" key={`${pair.first}${index}`}>
                {pair.first} ({pair.second})
              </li>
            ))
          : "No amounts"}
      </ul>
      <h4>Totals</h4>
      <p>
        Net Amount:{" "}
        {`${netAmount(percent, pairs).first} ${
          netAmount(percent, pairs).second
        }`}
      </p>
    </div>
  );
};
