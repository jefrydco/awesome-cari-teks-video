import data from './data.json'

type Datum = {
  name: string,
  githubId: string,
  githubUrl: string,
  appUrl: string
}

type Data = Datum[]

export default data as Data
