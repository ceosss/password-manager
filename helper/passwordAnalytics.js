import { passwordStrength } from "./passwordStrength";

export const passwordAnalytics = (data) => {
  let strong = 0,
    medium = 0,
    weak = 0;
  data.forEach((item) => {
    const strength = passwordStrength(item.password);
    switch (strength) {
      case "strong":
        return strong++;
      case "medium":
        return medium++;
      case "weak":
        return weak++;
    }
  });
  return {
    strong,
    medium,
    weak,
  };
};
