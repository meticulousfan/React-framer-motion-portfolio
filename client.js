// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "41s7iutf", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  //useCdn: true, // `false` if you want to ensure fresh data,
  useCdn: false, // `false` if you want to ensure fresh data,
  apiVersion: "2021-12-30",
});
