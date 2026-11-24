import { UserContacts } from "./UserContacts";
import { UserId } from "./UserId";

export class PublicProfile {
    public m_id: UserId;
    public m_username: string;

    constructor(id: UserId, username: string) {
        this.m_id = id;
        this.m_username = username;
    }

    public getDisplayName(): string {
        return `${this.m_username}`;
    }
}

// Ключевое слово extends означает наследование
export class User extends PublicProfile {
    public m_contacts: UserContacts;
    private m_passwordHash: string; 

    constructor(id: UserId, username: string, contacts: UserContacts, passwordHash: string) {
        // super() вызывает конструктор родительского класса (PublicProfile).
        // Это ОБЯЗАТЕЛЬНО нужно сделать в самом начале!
        super(id, username); 
        
        this.m_contacts = contacts;
        this.m_passwordHash = passwordHash;
    }

    // Метод для проверки пароля (в реальном проекте здесь будет bcrypt)
    public verifyPassword(password: string): boolean {
        // Для примера просто сравниваем строки
        return this.m_passwordHash === password; 
    }
}

// Тип для данных, которые приходят из сети (DTO)
// type отлично подходит для описания "сырого" JSON
export type RegisterDto = {
    username: string;
    email: string;
    password: string;
};