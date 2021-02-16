import Grid from '../Grid';
import Card from '../Card';
import EmptyState from '../EmptyState';

export interface IDataContent {
  id: string;
  picture: string;
  name: string;
}

interface IPropsContentList {
  data: IDataContent[];
  noContent: string;
  onClick: Function;
}

const ContentList: React.FC<IPropsContentList> = ({
  data,
  noContent,
  onClick,
}: IPropsContentList) => (
  <Grid>
    {data?.length === 0 ? (
      <EmptyState description={noContent} />
    ) : (
      data?.map((item) => (
        <Card
          key={item.id}
          src={item.picture}
          name={item.name}
          id={item.id}
          onClick={onClick}
        />
      ))
    )}
  </Grid>
);

export default ContentList;
