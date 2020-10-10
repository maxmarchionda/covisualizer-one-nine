
import pandas as pd
import numpy as np
import pycountry_convert as pc

# Defininng Function for getting continent code for country.


def country_to_continent_code(country):
    try:
        return pc.country_alpha2_to_continent_code(pc.country_name_to_country_alpha2(country))
    except:
        return 'na'

# Main function to be imported


def create_global_datasets():

    # Retriving Dataset
    df_confirmed = pd.read_csv(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
    df_deaths = pd.read_csv(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv')

    # Depricated
    df_covid19 = pd.read_csv(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv")
    df_table = pd.read_csv(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_time.csv", parse_dates=['Last_Update'])

    # new dataset
    df_covid19 = df_covid19.drop(
        ["People_Tested", "People_Hospitalized", "UID", "ISO3", "Mortality_Rate"], axis=1)

    # rename state/country
    df_confirmed = df_confirmed.rename(
        columns={"Province/State": "state", "Country/Region": "country"})
    df_deaths = df_deaths.rename(
        columns={"Province/State": "state", "Country/Region": "country"})
    df_covid19 = df_covid19.rename(columns={"Country_Region": "country"})
    df_covid19["Active"] = df_covid19["Confirmed"] - \
        df_covid19["Recovered"]-df_covid19["Deaths"]

    # Changing the conuntry names as required by pycountry_convert Lib
    df_confirmed.loc[df_confirmed['country'] == "US", "country"] = "USA"
    df_deaths.loc[df_deaths['country'] == "US", "country"] = "USA"
    df_covid19.loc[df_covid19['country'] == "US", "country"] = "USA"
    df_table.loc[df_table['Country_Region'] == "US", "Country_Region"] = "USA"
    # df_recovered.loc[df_recovered['country'] == "US", "country"] = "USA"

    df_confirmed.loc[df_confirmed['country'] ==
                     'Korea, South', "country"] = 'South Korea'
    df_deaths.loc[df_deaths['country'] ==
                  'Korea, South', "country"] = 'South Korea'
    df_covid19.loc[df_covid19['country'] ==
                   "Korea, South", "country"] = "South Korea"
    df_table.loc[df_table['Country_Region'] ==
                 "Korea, South", "Country_Region"] = "South Korea"
    # df_recovered.loc[df_recovered['country'] == 'Korea, South', "country"] = 'South Korea'

    df_confirmed.loc[df_confirmed['country']
                     == 'Taiwan*', "country"] = 'Taiwan'
    df_deaths.loc[df_deaths['country'] == 'Taiwan*', "country"] = 'Taiwan'
    df_covid19.loc[df_covid19['country'] == "Taiwan*", "country"] = "Taiwan"
    df_table.loc[df_table['Country_Region'] ==
                 "Taiwan*", "Country_Region"] = "Taiwan"
    # df_recovered.loc[df_recovered['country'] == 'Taiwan*', "country"] = 'Taiwan'

    df_confirmed.loc[df_confirmed['country'] ==
                     'Congo (Kinshasa)', "country"] = 'Democratic Republic of the Congo'
    df_deaths.loc[df_deaths['country'] ==
                  'Congo (Kinshasa)', "country"] = 'Democratic Republic of the Congo'
    df_covid19.loc[df_covid19['country'] ==
                   "Congo (Kinshasa)", "country"] = "Democratic Republic of the Congo"
    df_table.loc[df_table['Country_Region'] ==
                 "Congo (Kinshasa)", "Country_Region"] = "Democratic Republic of the Congo"
    # df_recovered.loc[df_recovered['country'] == 'Congo (Kinshasa)', "country"] = 'Democratic Republic of the Congo'

    df_confirmed.loc[df_confirmed['country'] ==
                     "Cote d'Ivoire", "country"] = "Côte d'Ivoire"
    df_deaths.loc[df_deaths['country'] ==
                  "Cote d'Ivoire", "country"] = "Côte d'Ivoire"
    df_covid19.loc[df_covid19['country'] ==
                   "Cote d'Ivoire", "country"] = "Côte d'Ivoire"
    df_table.loc[df_table['Country_Region'] ==
                 "Cote d'Ivoire", "Country_Region"] = "Côte d'Ivoire"
    # df_recovered.loc[df_recovered['country'] == "Cote d'Ivoire", "country"] = "Côte d'Ivoire"

    df_confirmed.loc[df_confirmed['country']
                     == "Reunion", "country"] = "Réunion"
    df_deaths.loc[df_deaths['country'] == "Reunion", "country"] = "Réunion"
    df_covid19.loc[df_covid19['country'] == "Reunion", "country"] = "Réunion"
    df_table.loc[df_table['Country_Region'] ==
                 "Reunion", "Country_Region"] = "Réunion"
    # df_recovered.loc[df_recovered['country'] == "Reunion", "country"] = "Réunion"

    df_confirmed.loc[df_confirmed['country'] ==
                     'Congo (Brazzaville)', "country"] = 'Republic of the Congo'
    df_deaths.loc[df_deaths['country'] ==
                  'Congo (Brazzaville)', "country"] = 'Republic of the Congo'
    df_covid19.loc[df_covid19['country'] ==
                   "Congo (Brazzaville)", "country"] = "Republic of the Congo"
    df_table.loc[df_table['Country_Region'] ==
                 "Congo (Brazzaville)", "Country_Region"] = "Republic of the Congo"
    # df_recovered.loc[df_recovered['country'] == 'Congo (Brazzaville)', "country"] = 'Republic of the Congo'

    df_confirmed.loc[df_confirmed['country'] ==
                     'Bahamas, The', "country"] = 'Bahamas'
    df_deaths.loc[df_deaths['country'] ==
                  'Bahamas, The', "country"] = 'Bahamas'
    df_covid19.loc[df_covid19['country'] ==
                   "Bahamas, The", "country"] = "Bahamas"
    df_table.loc[df_table['Country_Region'] ==
                 "Bahamas, The", "Country_Region"] = "Bahamas"
    # df_recovered.loc[df_recovered['country'] == 'Bahamas, The', "country"] = 'Bahamas'

    df_confirmed.loc[df_confirmed['country']
                     == 'Gambia, The', "country"] = 'Gambia'
    df_deaths.loc[df_deaths['country'] == 'Gambia, The', "country"] = 'Gambia'
    df_covid19.loc[df_covid19['country'] ==
                   "Gambia, The", "country"] = "Gambia"
    df_table.loc[df_table['Country_Region'] ==
                 "Gambia", "Country_Region"] = "Gambia"
    # df_recovered.loc[df_recovered['country'] == 'Gambia, The', "country"] = 'Gambia'

    # getting all countries
    countries = np.asarray(df_confirmed["country"])
    countries1 = np.asarray(df_covid19["country"])
    # Continent_code to Continent_names
    continents = {
        'NA': 'North America',
        'SA': 'South America',
        'AS': 'Asia',
        'OC': 'Australia',
        'AF': 'Africa',
        'EU': 'Europe',
        'na': 'Others'
    }

    # Collecting Continent Information
    df_confirmed.insert(2, "continent", [
                        continents[country_to_continent_code(country)] for country in countries[:]])
    df_deaths.insert(2, "continent",  [
        continents[country_to_continent_code(country)] for country in countries[:]])
    df_covid19.insert(1, "continent",  [
        continents[country_to_continent_code(country)] for country in countries1[:]])
    df_table.insert(1, "continent",  [continents[country_to_continent_code(
        country)] for country in df_table["Country_Region"].values])
    # df_recovered.insert(2,"continent",  [continents[country_to_continent_code(country)] for country in countries[:]] )

    # Cleanup values
    df_table = df_table[df_table["continent"] != "Others"]
    df_deaths[df_deaths["continent"] == 'Others']

    df_confirmed = df_confirmed.replace(np.nan, '', regex=True)
    df_deaths = df_deaths.replace(np.nan, '', regex=True)

    df_countries_cases = df_covid19.copy().drop(
        ['Lat', 'Long_', 'continent', 'Last_Update'], axis=1)
    df_countries_cases.index = df_countries_cases["country"]
    df_countries_cases = df_countries_cases.drop(['country'], axis=1)

    df_continents_cases = df_covid19.copy().drop(
        ['Lat', 'Long_', 'country', 'Last_Update'], axis=1)
    df_continents_cases = df_continents_cases.groupby(["continent"]).sum()

    df_countries_cases.fillna(0, inplace=True)
    df_continents_cases.fillna(0, inplace=True)
    print(df_countries_cases.head(3))
    return df_countries_cases, df_continents_cases
