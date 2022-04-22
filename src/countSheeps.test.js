describe("Tests", () => {
  it("test", () => {
    var array1 = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];

    Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total");
  });
});
