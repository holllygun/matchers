import { sortedCharacters } from '../src/js/app.js'

test('indicate powerfulChar', () => {
    const characters =
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ]
    const sortCharachters = 
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    const result = sortedCharacters(characters);
    expect(result).toEqual(sortCharachters);
})
