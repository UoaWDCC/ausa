import { converter, db } from 'firebase-config'
import type { ExternalResource, Faq, User } from 'types/types'

export const collections = {
  faq: db.collection('faq').withConverter(converter<Faq>()),
  externalResource: db
    .collection('externalResource')
    .withConverter(converter<ExternalResource>()),
  user: db.collection('user').withConverter(converter<User>()),
}
