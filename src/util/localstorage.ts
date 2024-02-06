type ObjectValue = {
  value: string;
  exp: number;
};

const ms = 1000 * 60 * 60 * 24; // 1 day



export const setItemWithExpire = (key: string, value: string, tts = ms) => {
  let items = JSON.parse(localStorage.getItem(key) || '[]');
  const expiry = Date.now() + tts;
  const Object = {
    value,
    exp: expiry,
  };
  items.push(Object);
  localStorage.setItem(key, JSON.stringify(items));
};

export const getItemWithExpire = (key: string, value: string) => {
  localStorage.removeItem('view');
  localStorage.removeItem('like');
  let items = JSON.parse(localStorage.getItem(key) || '[]');
  if (items.length === 0) return true;
  const currentTime = Date.now();
  const existingItem = items.find((item: ObjectValue) => item.value === value);
  if (!existingItem) return true;
  if (existingItem.exp <= currentTime) {
    items.splice(items.indexOf(existingItem), 1);
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  } else {
    return false;
  }
};

export function toggleLike(postId: number) {
  // 로컬 스토리지에서 사용자의 좋아요 상태를 가져옴
  const likedPosts = JSON.parse(String(localStorage.getItem('likedPost'))) || [];

  // 게시물이 이미 좋아요를 누른 상태인지 확인
  const isLiked = likedPosts.includes(postId);
  if (isLiked) {
    // 이미 좋아요를 누른 경우, 좋아요 상태를 해제하고 로컬 스토리지에서 제거
    likedPosts.splice(likedPosts.indexOf(postId), 1);
    console.log('좋아요 취소');
  } else {
    // 아직 좋아요를 누르지 않은 경우, 좋아요 상태를 추가하고 로컬 스토리지에 저장
    likedPosts.push(postId);
    console.log('좋아요');
  }
  // 로컬 스토리지에 업데이트된 좋아요 상태 저장
  localStorage.setItem('likedPost', JSON.stringify(likedPosts));
  return !isLiked;
}
