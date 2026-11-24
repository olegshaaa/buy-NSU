import type { Ad, CreateAdDto, UpdateAdDto } from './objects/Ad.js';
import { User, PublicProfile } from './objects/User.js';
import { UserContacts } from './objects/UserContacts.js';
import { UserId } from './objects/UserId.js';

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

var id = new UserId(10);
// var id = new UserId(-10);
const user = new UserContacts(null, 'mail@gmail.com', null);
user.email = null;

// Для запуска - в терминале cmd пиши : npx tsx backend/src/basics.ts
// Установи tsx! : npm install -D tsx