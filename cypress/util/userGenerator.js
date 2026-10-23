export function generateUser(overrides = {}){
    const userId = '${Cypress._.random(1000,9999)}';

    return {
        gender: 'Mrs',
        firstName: 'Andriana',
        lastName: 'Test',
        email: 'andriana.test+${userId}@example.com',
        password: 'andrianatest123!',
        ...overrides,
    }
}