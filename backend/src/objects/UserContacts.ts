export class UserContacts {
    public phone: string | null;
    public email: string | null;
    public telegram: string | null;
    
    constructor(phone: string | null, email: string | null, telegram: string | null) {
        // Валидация телефона (простая проверка длины)
        if (phone !== null && phone.length < 10) {
            throw new Error("Некорректный номер телефона");
        }

        // Валидация email (проверка на наличие @)
        if (email !== null && !email.includes('@')) {
            throw new Error("Некорректный email");
        }

        this.phone = phone;
        this.email = email;
        this.telegram = telegram;
    }

    // Метод для получения основного способа связи
    public getPrimaryContact(): string {
        if (this.phone) return `Тел: ${this.phone}`;
        if (this.email) return `Email: ${this.email}`;
        if (this.telegram) return `TG: ${this.telegram}`;
        return "Способ связи не указан";
    }

    // Метод для проверки, есть ли хоть какой-то контакт
    public isEmpty(): boolean {
        return this.phone === null && this.email === null && this.telegram === null;
    }

    // Сравнение контактов
    public equals(other: UserContacts): boolean {
        return this.phone === other.phone && 
               this.email === other.email && 
               this.telegram === other.telegram;
    }
}