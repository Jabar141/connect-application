import { useMcQuery } from '@commercetools-frontend/application-shell';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import FetchCategoryQuery from './fetch-all-category.ctp.graphql';

export const useCategoryFetcher = ({ page, perPage, tableSorting }) => {
  const { data, error, loading } = useMcQuery(FetchCategoryQuery, {
    variables: {},
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    categoriesResult: data,
    error,
    loading,
  };
};
