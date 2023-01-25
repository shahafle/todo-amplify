export function formatTimeSince(dateStr) {
   const date = new Date(dateStr)
   var seconds = Math.floor((new Date() - date) / 1000);

   var interval = seconds / 31536000;

   if (interval > 1) {
      return Math.floor(interval) + " years";
   }
   interval = seconds / 2592000;
   if (interval > 1) {
      return Math.floor(interval) + " months";
   }
   interval = seconds / 86400;
   if (interval > 1) {
      return Math.floor(interval) + " days";
   }
   interval = seconds / 3600;
   if (interval > 1) {
      return Math.floor(interval) + " hours";
   }
   interval = seconds / 60;
   if (interval > 1) {
      return Math.floor(interval) + " minutes";
   }
   if (seconds < 1) return "just now"
   return Math.floor(seconds) + " seconds";
}

export function debounce(func, timeout = 300) {
   let timer
   return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
   }
}
