import Grid from "../Grid";
import Card from "../Card";

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
}) => {
  return (
    <Grid>
      {data?.length === 0 ? (
        <div>{noContent}</div>
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
};

export default ContentList;
