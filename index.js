


const getIP = async () => {
    try {

        const ip = await fetch('https://api.ipify.org/?format=json').then(response => response.json());
        console.log(ip)
        return ip;
    }
    catch (err) {
        console.error(err);
    }
}


const showLocation = async () => {

    try {
        const userIP = await getIP();

        const url = `http://ip-api.com/json/${userIP.ip}`
        console.log(url)

        const location = await fetch(url).then(response => response.json());
        console.log(location)

        const { as, country, city, countryCode, isp, query, region, regionName, timezone, zip, lat, lon } = location
        const ul = document.querySelector('ul')
        if (ul) { ul.remove() }

        document.body.insertAdjacentHTML('beforeend', `<ul><li>as:${as}</li><li>City:${city}</li><li>Country:${country}</li><li>CountryCode:${countryCode}</li><li>isp:${isp}</li><li>lat:${lat}</li><li>lon:${lon}</li><li>Region:${region}</li><li>Query:${query}</li><li>RegionName:${regionName}</li><li>Timezone:${timezone}</li><li>Zip:${zip}</li></ul>`)


        return location
    }
    catch (err) {
        console.error(err)
    }

}

const findMeButton = document.querySelector('.findMe_btn')

findMeButton.addEventListener('click', showLocation)



