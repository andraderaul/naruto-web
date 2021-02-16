import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme as render } from '../../util/mock/theme.mock';
import ContentList from '.';
import charactersMock from '../../util/mock/data/charactres';
import ICharacter from '../../interfaces/character';

describe('<ContentList />', () => {
  it('should render ContentList', async () => {
    const data = charactersMock as ICharacter[];
    const noContent = 'no Content';
    const onClick = jest.fn();

    render(<ContentList data={data} noContent={noContent} onClick={onClick} />);

    const nodeContentList = await waitFor(() => screen.getByTestId('grid'));
    expect(nodeContentList).toBeTruthy();
  });

  it('should render ContentList', async () => {
    const data: ICharacter[] = [];
    const noContent = 'no Content';
    const onClick = jest.fn();

    render(<ContentList data={data} noContent={noContent} onClick={onClick} />);

    const nodeContentList = await waitFor(() => screen.getByTestId('grid'));
    expect(nodeContentList).toBeTruthy();

    const nodeContent = await waitFor(() => screen.getByText(noContent));
    expect(nodeContent).toBeTruthy();
  });
});
