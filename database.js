const { MongoClient } = require("mongodb");

const main = async () => {
  const uri =
    "mongodb+srv://adiretto:talgatuli03@cluster0.h8v3erl.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const data = await findOne(client, "Adilet");
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
main().catch(console.error);

async function findOne(client, nameListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingAndReviews")
    .findOne({ name: nameListing });

  return result;
}
