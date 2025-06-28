import type { ExternalResource } from 'data-layer/models/ExternalResource'
import type { Faq } from 'data-layer/models/Faq'
import type { User } from 'data-layer/models/User'
import {
  EXTERNAL_RESOURCES_COLLECTION,
  FAQ_COLLECTION,
  USERS_COLLECTION,
} from './CollectionNames'
import firestore from './Firestore'

const FirestoreCollections = {
  externalResources: firestore.collection<ExternalResource>(
    EXTERNAL_RESOURCES_COLLECTION,
  ),
  faq: firestore.collection<Faq>(FAQ_COLLECTION),
  users: firestore.collection<User>(USERS_COLLECTION),
} as const

export default FirestoreCollections
