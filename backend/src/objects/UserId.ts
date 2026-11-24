export class UserId {
    // readonly делает поле доступным только для чтения внутри класса.
    // Мы не сможем изменить его после создания объекта.
    private readonly value: number;

    constructor(value: number) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error(`Некорректный ID: ${value}. ID должен быть целым положительным числом.`);
        }
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    // Метод для сравнения двух ID
    public equals(other: UserId): boolean {
        return this.value === other.value;
    }

    // Переопределяем toString, чтобы console.log выводил просто число
    public toString(): string {
        return String(this.value);
    }
}