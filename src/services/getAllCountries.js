import {ref} from "vue";

export const getAllCountries = () => {

    const countries = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://restcountries.com/v3.1/all')
            countries.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {countries, error, load}
}

export default getAllCountries