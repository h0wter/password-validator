const colors = {
  gray: 'bg-gray-300',
  red: 'bg-red-600',
  yellow: 'bg-yellow-500',
  green: 'bg-green-700',
};

export const passwordStrengthConfig = {
  left: {
    empty: colors.gray,
    easy: colors.red,
    short: colors.red,
    medium: colors.yellow,
    strong: colors.green,
  },
  middle: {
    empty: colors.gray,
    easy: colors.gray,
    short: colors.red,
    medium: colors.yellow,
    strong: colors.green,
  },
  right: {
    empty: colors.gray,
    easy: colors.gray,
    short: colors.red,
    medium: colors.gray,
    strong: colors.green,
  },
};
