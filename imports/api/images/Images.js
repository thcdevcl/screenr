import { FilesCollection } from "meteor/ostrio:files";

const Images = new FilesCollection({ collectionName: "images" });

export default Images;
