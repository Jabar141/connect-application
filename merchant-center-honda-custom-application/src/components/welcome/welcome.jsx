import {
  usePaginationState,
  useDataTableSortingState,
} from '@commercetools-uikit/hooks';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Text from '@commercetools-uikit/text';
import { getErrorMessage } from '../../helpers';
import { useCategoryFetcher } from '../../hooks/use-category-connector';

const Welcome = () => {
  const { page, perPage } = usePaginationState();
  const tableSorting = useDataTableSortingState({ key: 'key', order: 'asc' });
  const { productsResult, error, loading } = useCategoryFetcher({
    page,
    perPage,
    tableSorting,
  });

  if (error) {
    return (
      <ContentNotification type="error">
        <Text.Body>{getErrorMessage(error)}</Text.Body>
      </ContentNotification>
    );
  }

  if (loading) {
    return <>Loading...</>;
  }

  return productsResult.categories.results.map((category) => {
    return (
      <div key={category.id}>
        <h1>{category.key}</h1>
        <p>{category.name}</p>
      </div>
    );
  });
};
Welcome.displayName = 'Home';

export default Welcome;
