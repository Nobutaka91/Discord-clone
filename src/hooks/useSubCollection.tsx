import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
  orderBy,
} from 'firebase/firestore';
import { useAppSelector } from '../app/hook';
import { Timestamp } from 'firebase/firestore';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const [subdocuments, setSubDocuments] = useState<Messages[]>([]);

  const channelId = useAppSelector((state) => state.channel.channelId);
  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy('timestamp', 'asc')
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      // Firebaseのリアルタイム機能
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
      console.log(results);
    });
  }, [channelId]);

  return { subdocuments };
};

export default useSubCollection;
