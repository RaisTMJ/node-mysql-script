import fs from "fs";
import ObjectsToCsv from 'objects-to-csv';


// if changing file not success
// const ObjectsToCsv = require('objects-to-csv')


export const writeToCsvUtil = async function (data: any, path = './default-file.csv') {
    const csv = new ObjectsToCsv(data);
    await csv.toDisk(path);
    console.log('file created as csv at  ', path)
}
export const saveAsJson = async function (data: any, path = '../default.json') {
    try {
        // w to create file even directory not exits
        fs.writeFileSync(path, JSON.stringify(data), {flag: 'w'})
        console.log('file created as json at  -', path)
    } catch (err) {
        console.error(err)
    }
}
