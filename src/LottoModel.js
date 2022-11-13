const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { WINNINGS } = require("./Constants");

class LottoModel {
  #lottos;
  #winningRankCount;

  constructor() {
    this.#lottos = [];
    this.#winningRankCount = [];
    for (let i = 0; i < WINNINGS.RANK_MAX; i++) {
      this.#winningRankCount.push(0);
    }
  }

  createLottos(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
    return this.#lottos;
  }

  compareWinningNumbers(winningNumbers, lottoNumbers) {
    return winningNumbers.filter((number) => lottoNumbers.includes(number))
      .length;
  }

  compareBonusNumber(bonusNumber, lottoNumbers) {
    return lottoNumbers.includes(bonusNumber);
  }

  checkWinning(winningNumbers, bonusNumber) {
    for (const lotto of this.#lottos) {
      const lottoNumbers = lotto.getLottoNumbers();
      const countWinningNumbers = this.compareWinningNumbers(
        winningNumbers,
        lottoNumbers
      );
      const checkBonusNumber = this.compareBonusNumber(
        bonusNumber,
        lottoNumbers
      );
      this.countRank(countWinningNumbers, checkBonusNumber);
    }
    return this.#winningRankCount;
  }

  countRank(countWinningNumbers, checkBonusNumber) {
    if (checkBonusNumber && countWinningNumbers === 5) {
      this.#winningRankCount[WINNINGS.SECOND_WIN.RANK - 1]++;
      return;
    }

    switch (countWinningNumbers) {
      case 3:
        this.#winningRankCount[WINNINGS.FIFTH_WIN.RANK - 1]++;
        break;
      case 4:
        this.#winningRankCount[WINNINGS.FOURTH_WIN.RANK - 1]++;
        break;
      case 5:
        this.#winningRankCount[WINNINGS.THIRD_WIN.RANK - 1]++;
        break;
      case 6:
        this.#winningRankCount[WINNINGS.FIRST_WIN.RANK - 1]++;
        break;
    }
  }

  calcWinningAmount() {
    this.#winningRankCount;
  }
}

module.exports = LottoModel;
