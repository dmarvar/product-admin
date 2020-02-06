import { useState, useEffect } from "react";
import firebase from "../utils/firebase";

const storage = firebase.storage();

export const useImageUpload = path => {
  const getImageUrl = async file => {
    const uploadTask = storage.ref(`${path}${file.name}`).put(file);
    return uploadTask
      .then(res => {
        return res.ref.getDownloadURL();
      })
      .then(url => {
        return url;
      });
  };

  return [getImageUrl];
};
