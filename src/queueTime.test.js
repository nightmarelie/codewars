describe("example tests", function () {
  Test.assertEquals(queueTime([], 1), 0);
  Test.assertEquals(queueTime([1, 2, 3, 4], 1), 10);
  Test.assertEquals(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
  Test.assertEquals(queueTime([1, 2, 3, 4, 5], 100), 5);

  //add some more example tests here, if you like
});
