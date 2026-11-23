import type { Ad, CreateAdDto, UpdateAdDto } from './objects/Ad.js';

const ad: Ad = {
    id: 10,
    title: "title",
    price: 100,
    description: "test",
    imageUrl: null,
    createdAt: "0000T000Z"
};

console.log(ad.createdAt);
ad.createdAt = "lalala";
console.log(ad.createdAt);

// Для запуска - в терминале cmd пиши : npx tsx src/basics.ts
// Установи tsx! : npm install -D tsx