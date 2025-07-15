import type { ExternalResource } from 'data-layer/models/ExternalResource'
import type { Faq } from 'data-layer/models/Faq'
import type { UserAdditionalInfo } from 'data-layer/models/User'
import {
  EXTERNAL_RESOURCES_COLLECTION,
  FAQ_CATEGORIES_COLLECTION,
  FAQ_COLLECTION,
  USERS_COLLECTION,
} from './CollectionNames'
import firestore from './Firestore'
import type { FaqCategory } from 'data-layer/models/FaqCategories'

const FirestoreCollections = {
  externalResources: firestore.collection<ExternalResource>(
    EXTERNAL_RESOURCES_COLLECTION,
  ),
  faq: firestore.collection<Faq>(FAQ_COLLECTION),
  faqCategories: firestore.collection<FaqCategory>(FAQ_CATEGORIES_COLLECTION),
  users: firestore.collection<UserAdditionalInfo>(USERS_COLLECTION),
} as const

export default FirestoreCollections
