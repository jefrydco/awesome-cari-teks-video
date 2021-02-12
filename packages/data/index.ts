import data from './data.json'

export type Datum = {
  name: string
  githubId: string
  githubUrl: string
  appUrl: string
}

type Data = Datum[]

export default data as Data
