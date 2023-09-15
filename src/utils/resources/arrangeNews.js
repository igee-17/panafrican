function getTimeAgo(date) {
  const now = new Date();
  const createdDate = new Date(date);
  const timeDifference = now - createdDate;

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 7) {
    return createdDate.toDateString(); // Display date if older than a week
  } else if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else {
    return `${minutes} minutes ago`;
  }
}

export function arrangeAndAddTimeAgo(array) {
  array.sort((a, b) => new Date(b.date) - new Date(a.date));
  // array.sort((a, b) => new Date(a.date) - new Date(b.date));
  const limitedArray = array.slice(0, 9); // Limit to 9 items

  return limitedArray.map((item) => {
    const timeAgo = getTimeAgo(item.date);
    return { ...item, timeAgo };
  });
}

// changed from 70 characters to 60
export function limitStringTo70Characters(inputString) {
  if (inputString.length <= 60) {
    return inputString;
  } else {
    // Find the last space before the 70th character
    const lastSpaceIndex = inputString.lastIndexOf(" ", 60);

    // If no space is found before the 70th character, cut the string at the 70th character
    if (lastSpaceIndex === -1) {
      return inputString.slice(0, 60);
    } else {
      return inputString.slice(0, lastSpaceIndex);
    }

    // return inputString.slice(0, 60);
  }
}

export function limitStringTo50Characters(inputString) {
  if (inputString.length <= 50) {
    return inputString;
  } else {
    // Find the last space before the 70th character
    const lastSpaceIndex = inputString.lastIndexOf(" ", 50);

    // If no space is found before the 70th character, cut the string at the 70th character
    if (lastSpaceIndex === -1) {
      return inputString.slice(0, 50);
    } else {
      return inputString.slice(0, lastSpaceIndex);
    }

    // return inputString.slice(0, 50);
  }
}
