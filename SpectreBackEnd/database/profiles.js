const {getDatabase} = require('./mongo');
const {ObjectID} = require('mongodb');

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

async function deleteProfile(id){
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
        _id: new ObjectID(id),
    });
}

async function updateProfile(id, profile){
    const database = await getDatabase();
    delete profile._id;
    await database.collection(collectionName).update(
        { _id: new ObjectID(id),  },
        {
            $set: {
                ...profile,
            },
        },

    );
}

module.exports = {
    insertProfile,
    getProfile,
    deleteProfile,
    updateProfile,
};