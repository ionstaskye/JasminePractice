
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 15,
    rate: 10
  }
  expect(calculateMonthlyPayment(values)).toEqual("78.82")
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 15000,
    years: 20,
    rate: 3.5
  }
  expect(calculateMonthlyPayment(values)).toEqual("41.73")
});

/// etc
