import { isInteractiveElement } from './is-interactive-element';

describe('isInteractiveElement', () => {
    test('An <a> without href attribute is not interactive', () => {
        const a = document.createElement('a');
        expect(isInteractiveElement(a)).toBe(false);
    });

    test('An <a> with a href attribute is interactive', () => {
        const a = document.createElement('a');
        a.setAttribute('href', 'https://www.example.org');
        expect(isInteractiveElement(a)).toBe(true);
    });

    test('A <button> is interactive', () => {
        const button = document.createElement('button');
        expect(isInteractiveElement(button)).toBe(true);
    });

    test('An <input> is interactive', () => {
        const input = document.createElement('input');
        expect(isInteractiveElement(input)).toBe(true);
    });

    test('An <input> with a type hidden is not interactive', () => {
        const input = document.createElement('input');
        input.type = 'hidden';
        expect(isInteractiveElement(input)).toBe(false);
    });

    test('An <audio> is not interactive', () => {
        const audio = document.createElement('audio');
        expect(isInteractiveElement(audio)).toBe(false);
    });

    test('An <audio> with a controls attribute is interactive', () => {
        const audio = document.createElement('audio');
        audio.controls = true;
        expect(isInteractiveElement(audio)).toBe(true);
    });

    test('An <img> is not interactive', () => {
        const img = document.createElement('img');
        expect(isInteractiveElement(img)).toBe(false);
    });

    test('An <img> with a usemap attribute is interactive', () => {
        const img = document.createElement('img');
        img.useMap = '#foo';
        expect(isInteractiveElement(img)).toBe(true);
    });

    test('A <div> is not interactive', () => {
        const div = document.createElement('div');
        expect(isInteractiveElement(div)).toBe(false);
    });

    test('A <div> with a tabindex attribute greater than -1 is interactive', () => {
        const div = document.createElement('div');
        div.setAttribute('tabindex', '0');
        expect(isInteractiveElement(div)).toBe(true);
    });
});
