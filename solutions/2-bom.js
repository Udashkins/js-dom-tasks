// BEGIN
export default (url) => {
    window.location.href = url;
    const userAgent_ = navigator.userAgent; // Получаем полную строку userAgent
    const browserInfo = userAgent_.split(' ')[0]; 
    
    return `${browserInfo} ${url}`;
  }; 
// END