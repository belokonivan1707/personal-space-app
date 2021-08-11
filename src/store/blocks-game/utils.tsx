// eslint-disable-next-line consistent-return
export const checkUserSequence = (userSecuence: number[], difficult: number) => {
  let win = true;

  if (difficult === 3) {
    const winningNumbers = [1, 2, 3];

    for (let i = 0; i < winningNumbers.length && win; i += 1) {
      if (winningNumbers[i] !== userSecuence[i]) {
        win = false;
      }
    }
  }

  if (difficult === 5) {
    const winningNumbers = [1, 2, 3, 4, 5];

    for (let i = 0; i < winningNumbers.length && win; i += 1) {
      if (winningNumbers[i] !== userSecuence[i]) {
        win = false;
      }
    }
  }

  if (difficult === 7) {
    const winningNumbers = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < winningNumbers.length && win; i += 1) {
      if (winningNumbers[i] !== userSecuence[i]) {
        win = false;
      }
    }
  }

  if (win) {
    return true;
  }

  if (!win) {
    return false;
  }
};
