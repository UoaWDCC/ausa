import { db, converter } from "firebase-config";
import { Faq } from "./models/Faq";
import { ExternalResource } from "./models/externalResource";

export const collections = {
    faq: db.collection("faq").withConverter(converter<Faq>()),
    externalResource: db
        .collection("externalResource")
        .withConverter(converter<ExternalResource>()),
}