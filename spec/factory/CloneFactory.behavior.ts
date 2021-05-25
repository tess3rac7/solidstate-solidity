import { describeFilter } from '@solidstate/library/mocha_describe_filter';
import { describeBehaviorOfFactory } from './Factory.behavior';

export function describeBehaviorOfCloneFactory({}, skips: string[]) {
  const describe = describeFilter(skips);

  describe('::CloneFactory', function () {
    describeBehaviorOfFactory({}, skips);
  });
}
