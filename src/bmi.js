function bmi(weight, height) {
  const r = weight / height ** 2;
  switch (true) {
    case r <= 18.5:
      return "Underweight";
    case r <= 25.0:
      return "Normal";
    case r <= 30.0:
      return "Overweight";
    case r > 30:
      return "Obese";
  }
}
