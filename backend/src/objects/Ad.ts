// src/models/Ad.ts

// 1. Полная модель (аналог struct Ad в БД)
export type Ad = {
    id: number;
    title: string;
    price: number;
    description: string;
    imageUrl: string | null;
    createdAt: string;
}

// 2. DTO для создания (пользователь НЕ передает id и дату, они создаются на сервере)
export type CreateAdDto = {
    title: string;
    price: number;
    description?: string;    // ? означает, что поле необязательное
    imageUrl?: string;
}

// 3. DTO для обновления (все поля необязательные, обновляем только то, что прислали)
export type UpdateAdDto = Partial<CreateAdDto>; 
// Partial<T> — это встроенная утилита TS, которая делает все поля типа T необязательными (?).