import {
  usePaginationState,
  useDataTableSortingState,
} from '@commercetools-uikit/hooks';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Text from '@commercetools-uikit/text';

import { useProductFetcher } from '../../hooks/use-product-connector';
import { getErrorMessage } from '../../helpers';
const Welcome = () => {
return "hello World"
}
Welcome.displayName = 'Home';

export default Welcome;
