import { fireEvent, render, screen } from "@testing-library/react";
import { TaxCalculator } from "./TaxCalculator";

describe("TaxCalculator", () => {
  test("Should be able to sum 10GBP and 20GBP", async () => {
    render(<TaxCalculator />);

    screen.debug();

    const amountInput = screen.getByRole("spinbutton", { name: /amount/i });
    const currencyInput = screen.getByRole("combobox", { name: /currency/i });

    const addButton = screen.getByText("Add");

    fireEvent.change(amountInput, { target: { value: "10" } });
    fireEvent.change(currencyInput, { target: { value: "GBP" } });

    fireEvent.click(addButton);

    fireEvent.change(amountInput, { target: { value: "20" } });

    fireEvent.click(addButton);

    const total = screen.getByText("Net Amount: 24 GBP");

    expect(total).toBeInTheDocument();
  });

  test("should be able to change the percent", async () => {
    render(<TaxCalculator />);

    const amountInput = screen.getByRole("spinbutton", { name: /amount/i });
    const currencyInput = screen.getByRole("combobox", { name: /currency/i });

    const addButton = screen.getByText("Add");

    fireEvent.change(amountInput, { target: { value: "10" } });
    fireEvent.change(currencyInput, { target: { value: "GBP" } });

    fireEvent.click(addButton);

    const total = screen.getByText("Net Amount: 8 GBP");

    expect(total).toBeInTheDocument();

    const percentInput = screen.getByRole("textbox", { name: /percent/i });

    fireEvent.change(percentInput, { target: { value: "50" } });

    const totalAfterChange = screen.getByText("Net Amount: 5 GBP");

    expect(totalAfterChange).toBeInTheDocument();
  });
});
