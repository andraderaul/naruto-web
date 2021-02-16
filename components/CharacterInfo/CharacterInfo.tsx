import ICharacter from '../../interfaces/character';

import * as S from './ChacaracterInfo.styles';

interface IPropsInfo {
  label: string;
  value: string | number[];
}

const Info: React.FC<IPropsInfo> = ({ label, value }: IPropsInfo) => {
  const valueFormatted = typeof value === 'string' ? value : value?.join(' - ');

  return (
    <S.Info>
      <div>
        <span>{label}:</span>
      </div>
      <div>
        <span>{valueFormatted || '-'}</span>
      </div>
    </S.Info>
  );
};

const CharacterInfo: React.FC<ICharacter> = (props: ICharacter) => (
  <S.Card data-testid="character-info">
    <S.Image>
      <img src={props.picture} alt={props.name} />
    </S.Image>
    <S.Infos>
      <Info label="Name" value={props.name} />
      <Info label="Kanji Name" value={props.kanji_name} />
      <Info label="Birthdate" value={props.birthday} />
      <Info label="Gender" value={props.gender} />
      <Info label="Age" value={props.age} />
      <Info label="Height" value={props.height} />
      <Info label="Weight" value={props.weight} />
    </S.Infos>
  </S.Card>
);

export default CharacterInfo;
