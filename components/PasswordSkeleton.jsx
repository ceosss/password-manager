import React from "react";
import SkeletonContent from "react-native-skeleton-content";

const PasswordSkeleton = () => {
  const singlePasswordSkeleton = {
    width: "100%",
    height: 50,
    marginBottom: 10,
  };
  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: "100%" }}
      animationDirection="horizontalRight"
      layout={[
        singlePasswordSkeleton,
        singlePasswordSkeleton,
        singlePasswordSkeleton,
        singlePasswordSkeleton,
        singlePasswordSkeleton,
      ]}
    />
  );
};

export default PasswordSkeleton;
