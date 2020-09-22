import {saveAsJson} from "./coverting-object";
runApp();
interface Ilocation {
    BRGY: string,
    CITY: string,
    PROVINCE: string,

}

function main() {
    let finalJsonLocation: any = {}
    const data: Ilocation[] = require("./address-ph.json");

    function addCityAndBRgs(location) {
        if (!finalJsonLocation[location.PROVINCE][location.CITY]) {
            finalJsonLocation[location.PROVINCE][location.CITY] = []
            finalJsonLocation[location.PROVINCE][location.CITY] = [location.BRGY]
        } else {
            finalJsonLocation[location.PROVINCE][location.CITY].push(location.BRGY)
        }
    }

    for (const location of data) {
        if (!finalJsonLocation[location.PROVINCE]) {
            finalJsonLocation[location.PROVINCE] = {}
            addCityAndBRgs(location);
        } else {
            addCityAndBRgs(location);
        }
    }
    return finalJsonLocation;
}

function runApp() {
    const data = main();
    saveAsJson(data).then();
}

