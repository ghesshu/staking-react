import { ethers } from 'ethers';
import { getStakingContract, stake, unstake, claimReward, getTotalRewards } from '../contract/contract';

// A sample test case
test('stake should call the staking contract', async () => {
  const amount = ethers.utils.parseEther("1.0");
  const stakingContract = await getStakingContract();
  const mockStake = jest.fn();
  stakingContract.stake = mockStake;

  await stake(amount);

  expect(mockStake).toHaveBeenCalledTimes(1);
  expect(mockStake).toHaveBeenCalledWith(amount);
});
