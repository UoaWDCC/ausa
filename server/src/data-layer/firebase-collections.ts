import { db, converter } from 'firebase-config'
import { Faq, ExternalResource, User } from 'types/types'

export const collections = {
  faq: db.collection('faq').withConverter(converter<Faq>()),
  externalResource: db
    .collection('externalResource')
    .withConverter(converter<ExternalResource>()),
  user: db.collection('user').withConverter(converter<User>()),
}
