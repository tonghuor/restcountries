<script>
import getAllCountries from "../services/getAllCountries.js";

export default {
  components: {
  },

  data: () => ({
    show: false,
    countryFlag: '',
  }),

  setup() {
    const {countries, error, load} = getAllCountries()
    load()

    return {countries, error, load}
  }
}

</script>

<template>
  <div v-if="countries">

    <h1 class="text-center text-grey-darken-3" style="padding: 25px;">Countries Catalog {{ console.log(countries) }}</h1>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="country in countries"
               cols="12" lg="3" md="3" sm="4" xs="12"
        >
          <v-card
              max-width="270"
              min-height="500"
          >
            <!-- Display Country Flags -->
            <v-img
                height="150px"
                v-bind:src="country.flags.png"
                cover
            ></v-img>

            <!-- Display Country Name -->
            <v-card-title style="font-size: 1.11rem">
              {{ country.name.official }}
            </v-card-title>

            <v-card-text>

              <!-- Display 2 Character Country Code & 3 Character Country Code -->
              <p><b>CCA2</b>: {{ country.cca2 }}</p>
              <p><b>CCA3</b>: {{ country.cca3 }}</p>
              <br/>

              <!-- Display Native Country Name -->
              <p><b>Native Country Names</b>:</p>
              <p v-for="(native, key, i) in country.name.nativeName">- <b>{{key}}: </b> {{ native.official }}</p>
              <br/>

              <!-- Display Alternative Country Name -->
              <p><b>Alternative Country Names</b>:</p>
              <p v-for="alt in country.altSpellings">- {{ alt }}</p>
              <br/>

              <!-- Display Country Calling Code -->
              <p class="txt-break"><b>Calling Code</b>:&nbsp;{{ country.idd.root }}{{ country.idd.suffixes?.join(', ' + country.idd.root) }}</p>

            </v-card-text>

          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>
  .v-card {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .txt-break{
    overflow-wrap: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }
</style>