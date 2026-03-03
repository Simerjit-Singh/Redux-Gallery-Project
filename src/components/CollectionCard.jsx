import React from "react";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";
import { useDispatch } from "react-redux";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const RemoveFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between items-center w-full px-4 gap-3 py-5 absolute text-white bottom-0"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            RemoveFromCollection(item);
          }}
          className="bg-indigo-600 text-white active:scale-95 rounded px-3 py-2 cursor-pointer font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
