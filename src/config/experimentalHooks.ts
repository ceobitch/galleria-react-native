import { useContext } from 'react';
import { defaultConfig } from './experimental';
import { RainbowContext } from '@/helpers/RainbowContext';
import { IS_DEV } from '@/env';
import isTestFlight from '@/helpers/isTestFlight';

const useExperimentalFlag = (name: any) => {
  if (IS_DEV || isTestFlight) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'config' does not exist on type '{}'.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(RainbowContext).config[name];
  } else {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    return defaultConfig[name].value;
  }
};
export default useExperimentalFlag;

export * from './experimental';
