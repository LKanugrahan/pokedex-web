import { capitalize, formatPokemonId, getTypeColor } from '@/utils/helpers';

describe('Helper Functions', () => {
  describe('capitalize', () => {
    it('capitalizes first letter of a string', () => {
      expect(capitalize('pikachu')).toBe('Pikachu');
    });

    it('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('handles already capitalized string', () => {
      expect(capitalize('Charizard')).toBe('Charizard');
    });
  });

  describe('formatPokemonId', () => {
    it('formats single digit ID', () => {
      expect(formatPokemonId(1)).toBe('#001');
    });

    it('formats double digit ID', () => {
      expect(formatPokemonId(25)).toBe('#025');
    });

    it('formats triple digit ID', () => {
      expect(formatPokemonId(150)).toBe('#150');
    });

    it('formats ID over 999', () => {
      expect(formatPokemonId(1000)).toBe('#1000');
    });
  });

});
