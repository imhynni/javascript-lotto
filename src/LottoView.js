const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHASE_AMOUNT_ERROR } = require("./Constants");
const {
  checkPurchaseAmount,
  checkWinningNumbers,
  checkBonusNumber,
} = require("./Validation");

class LottoView {
  inputPurchaseAmount(resolve) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      checkPurchaseAmount(answer);
      resolve(answer);
    });
  }

  inputWinningNumbers(resolve) {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (answer) => {
      checkWinningNumbers(answer);
      resolve(answer);
    });
  }

  inputBonusNumber(resolve) {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (answer) => {
      checkBonusNumber(answer);
      resolve(answer);
      MissionUtils.Console.close();
    });
  }

  getPurchaseAmount() {
    return new Promise((resolve) => {
      this.inputPurchaseAmount(resolve);
    });
  }

  getWinningNumbers() {
    return new Promise((resolve) => {
      this.inputWinningNumbers(resolve);
    });
  }

  getBonusNumber() {
    return new Promise((resolve) => {
      this.inputBonusNumber(resolve);
    });
  }

  printLottos(amount, lottos) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    for (const lotto of lottos) {
      MissionUtils.Console.print(lotto.sort());
    }
  }
}

module.exports = LottoView;
