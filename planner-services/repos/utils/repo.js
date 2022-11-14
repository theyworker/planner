
exports.sendResponse = (result) => {
    if (result) {
      return { ...result, success: true };
    } else {
      return { success: false };
    }
  };