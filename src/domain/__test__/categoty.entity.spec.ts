import { Uuid } from "../../shared/domain/value-objects/uuid.co";
import { Category } from "../category.entity"

describe('Category Unit Test', () => {
    test('constructor', () => {
        let category = new Category({
            name: 'Movie'
        });
        expect(category.category_id).toBeInstanceOf(Uuid);
        expect(category.name).toBe('Movie');
        expect(category.description).toBeNull();
        expect(category.created_at).toBeInstanceOf(Date);

        const created_at = new Date();
        category = new Category({
            name: 'Movie',
            description: 'Movie descripton',
            is_active: false,
            created_at
        })

        expect(category.category_id).toBeUndefined;
        expect(category.name).toBe('Movie');
        expect(category.description).toBe('Movie descripton');
        expect(category.is_active).toBeFalsy();
        expect(category.created_at).toBe(created_at);
    })
})