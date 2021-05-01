export default interface ICharacter {
  id: string
  name: string
  kanji_name: string
  birthday: string
  age: number[] | string[]
  gender: string
  height: number[] | string[]
  weight: number[] | string[]
  picture: string
}
