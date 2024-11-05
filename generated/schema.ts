// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    String: string,
}

export interface Continent {
    code: Scalars['ID']
    countries: Country[]
    name: Scalars['String']
    __typename: 'Continent'
}

export interface Country {
    awsRegion: Scalars['String']
    capital: (Scalars['String'] | null)
    code: Scalars['ID']
    continent: Continent
    currencies: Scalars['String'][]
    currency: (Scalars['String'] | null)
    emoji: Scalars['String']
    emojiU: Scalars['String']
    languages: Language[]
    name: Scalars['String']
    native: Scalars['String']
    phone: Scalars['String']
    phones: Scalars['String'][]
    states: State[]
    subdivisions: Subdivision[]
    __typename: 'Country'
}

export interface Language {
    code: Scalars['ID']
    name: Scalars['String']
    native: Scalars['String']
    rtl: Scalars['Boolean']
    __typename: 'Language'
}

export interface Query {
    continent: (Continent | null)
    continents: Continent[]
    countries: Country[]
    country: (Country | null)
    language: (Language | null)
    languages: Language[]
    __typename: 'Query'
}

export interface State {
    code: (Scalars['String'] | null)
    country: Country
    name: Scalars['String']
    __typename: 'State'
}

export interface Subdivision {
    code: Scalars['ID']
    emoji: (Scalars['String'] | null)
    name: Scalars['String']
    __typename: 'Subdivision'
}

export interface ContinentGenqlSelection{
    code?: boolean | number
    countries?: CountryGenqlSelection
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinentFilterInput {code?: (StringQueryOperatorInput | null)}

export interface CountryGenqlSelection{
    awsRegion?: boolean | number
    capital?: boolean | number
    code?: boolean | number
    continent?: ContinentGenqlSelection
    currencies?: boolean | number
    currency?: boolean | number
    emoji?: boolean | number
    emojiU?: boolean | number
    languages?: LanguageGenqlSelection
    name?: { __args: {lang?: (Scalars['String'] | null)} } | boolean | number
    native?: boolean | number
    phone?: boolean | number
    phones?: boolean | number
    states?: StateGenqlSelection
    subdivisions?: SubdivisionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountryFilterInput {code?: (StringQueryOperatorInput | null),continent?: (StringQueryOperatorInput | null),currency?: (StringQueryOperatorInput | null),name?: (StringQueryOperatorInput | null)}

export interface LanguageGenqlSelection{
    code?: boolean | number
    name?: boolean | number
    native?: boolean | number
    rtl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LanguageFilterInput {code?: (StringQueryOperatorInput | null)}

export interface QueryGenqlSelection{
    continent?: (ContinentGenqlSelection & { __args: {code: Scalars['ID']} })
    continents?: (ContinentGenqlSelection & { __args?: {filter?: (ContinentFilterInput | null)} })
    countries?: (CountryGenqlSelection & { __args?: {filter?: (CountryFilterInput | null)} })
    country?: (CountryGenqlSelection & { __args: {code: Scalars['ID']} })
    language?: (LanguageGenqlSelection & { __args: {code: Scalars['ID']} })
    languages?: (LanguageGenqlSelection & { __args?: {filter?: (LanguageFilterInput | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StateGenqlSelection{
    code?: boolean | number
    country?: CountryGenqlSelection
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringQueryOperatorInput {eq?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),ne?: (Scalars['String'] | null),nin?: (Scalars['String'][] | null),regex?: (Scalars['String'] | null)}

export interface SubdivisionGenqlSelection{
    code?: boolean | number
    emoji?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Continent_possibleTypes: string[] = ['Continent']
    export const isContinent = (obj?: { __typename?: any } | null): obj is Continent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContinent"')
      return Continent_possibleTypes.includes(obj.__typename)
    }
    


    const Country_possibleTypes: string[] = ['Country']
    export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
      return Country_possibleTypes.includes(obj.__typename)
    }
    


    const Language_possibleTypes: string[] = ['Language']
    export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
      return Language_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const State_possibleTypes: string[] = ['State']
    export const isState = (obj?: { __typename?: any } | null): obj is State => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isState"')
      return State_possibleTypes.includes(obj.__typename)
    }
    


    const Subdivision_possibleTypes: string[] = ['Subdivision']
    export const isSubdivision = (obj?: { __typename?: any } | null): obj is Subdivision => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubdivision"')
      return Subdivision_possibleTypes.includes(obj.__typename)
    }
    