
exports.sendResponse = (result) => {
    if (result) {
      return { data: result, success: true };
    } else {
      return { success: false };
    }
  };