describe("diamond()", function () {
  Test.assertEquals(diamond(1), "*\n");
  Test.assertEquals(diamond(3), " *\n***\n *\n");
  Test.assertEquals(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
  Test.assertEquals(diamond(2), null);
  Test.assertEquals(diamond(-3), null);
  Test.assertEquals(diamond(0), null);
});
