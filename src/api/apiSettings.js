const API_KEY = 'Kn7D1h/CQr1gZUu23q/XTw==1RpLEemZntzgCodf';
const API_BASE_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_CGY = 'inspirational';
const API_QRY = `?category=${API_CGY}`;
const API_URL = `${API_BASE_URL}${API_QRY}`;

const headersList = {
  'X-Api-Key': API_KEY,
  contentType: 'application/json',
};

export { API_URL, headersList };
