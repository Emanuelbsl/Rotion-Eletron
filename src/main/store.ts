import { Document } from '@shared/types/ipc'
import Store from 'electron-store'

interface StoreType {
  documents: Record<string, Document>
}

export const store = new Store<StoreType>({
  defaults: {
    documents: {}
  }
})
console.log(store.path)
