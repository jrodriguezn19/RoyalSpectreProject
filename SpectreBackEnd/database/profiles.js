const {getDatabase} = require('./mongo');

const collectionName = 'profiles';

async function insertProfile(profile) {
    const database = await getDatabase();
    const {insertedId} = await database.collection(collectionName).insertOne(profile);
    return insertedId;
}

async function getProfile(){
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
    insertProfile,
    getProfile,
};